'use strict';

const FORMAT = 'transfer-packet-zero/v0';
const BOUNDARY = Object.freeze({
  authority: 'none',
  promotion: 'NONE',
  receiver_obligation: 'none'
});
const DELTA_BUCKETS = ['inherited', 'changed', 'added', 'refused', 'unknown'];

function issue(code, path, message) {
  return { code, path, message };
}

function isObject(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

function validatePacket(packet) {
  const errors = [];
  const residuals = [];

  if (!isObject(packet)) {
    return {
      ok: false,
      format: FORMAT,
      errors: [issue('PACKET_REQUIRED', '$', 'packet must be an object')],
      residuals,
      ...BOUNDARY
    };
  }

  if (packet.format !== FORMAT) {
    errors.push(issue('FORMAT_MISMATCH', 'format', `expected ${FORMAT}`));
  }
  if (typeof packet.packet_id !== 'string' || packet.packet_id.length === 0) {
    errors.push(issue('FIELD_REQUIRED', 'packet_id', 'packet_id must be a non-empty string'));
  }
  if (typeof packet.source_slice !== 'string' || packet.source_slice.length === 0) {
    errors.push(issue('FIELD_REQUIRED', 'source_slice', 'source_slice must be a non-empty string'));
  }

  const rootRef = isObject(packet.root) ? packet.root.ref : undefined;
  const descendantRef = isObject(packet.descendant) ? packet.descendant.ref : undefined;
  const parentRef = isObject(packet.descendant) ? packet.descendant.parent_ref : undefined;

  if (typeof rootRef !== 'string' || rootRef.length === 0) {
    errors.push(issue('FIELD_REQUIRED', 'root.ref', 'root.ref must be a non-empty string'));
  }
  if (typeof descendantRef !== 'string' || descendantRef.length === 0) {
    errors.push(issue('FIELD_REQUIRED', 'descendant.ref', 'descendant.ref must be a non-empty string'));
  }
  if (typeof parentRef !== 'string' || parentRef.length === 0) {
    errors.push(issue('FIELD_REQUIRED', 'descendant.parent_ref', 'descendant.parent_ref must be a non-empty string'));
  }

  if (Array.isArray(packet.parents) && packet.parents.length > 0) {
    errors.push(issue(
      'MULTI_PARENT_OUT_OF_SCOPE',
      'parents',
      'Transfer Packet Zero records exactly one declared parent; multi-parent lineage requires a later format'
    ));
  }

  if (typeof rootRef === 'string' && typeof parentRef === 'string' && rootRef !== parentRef) {
    errors.push(issue(
      'PARENT_ROOT_MISMATCH',
      'descendant.parent_ref',
      'descendant.parent_ref must match root.ref in Transfer Packet Zero'
    ));
  }

  if (!isObject(packet.crossing) || typeof packet.crossing.kind !== 'string' || packet.crossing.kind.length === 0) {
    errors.push(issue('FIELD_REQUIRED', 'crossing.kind', 'crossing.kind must be a non-empty string'));
  }
  if (!isObject(packet.crossing) || !Array.isArray(packet.crossing.participants)) {
    errors.push(issue('FIELD_REQUIRED', 'crossing.participants', 'crossing.participants must be an array'));
  }
  if (!isObject(packet.crossing) || !Array.isArray(packet.crossing.receipt_refs)) {
    errors.push(issue('FIELD_REQUIRED', 'crossing.receipt_refs', 'crossing.receipt_refs must be an array'));
  }

  if (!isObject(packet.delta)) {
    errors.push(issue('FIELD_REQUIRED', 'delta', 'delta must be an object'));
  } else {
    for (const bucket of DELTA_BUCKETS) {
      if (!Array.isArray(packet.delta[bucket])) {
        errors.push(issue('FIELD_REQUIRED', `delta.${bucket}`, `delta.${bucket} must be an array`));
      }
    }
  }

  if (!Array.isArray(packet.receipts)) {
    errors.push(issue('FIELD_REQUIRED', 'receipts', 'receipts must be an array'));
  }
  if (!Array.isArray(packet.carriers)) {
    errors.push(issue('FIELD_REQUIRED', 'carriers', 'carriers must be an array'));
  }

  const boundary = isObject(packet.boundary) ? packet.boundary : {};
  if (
    boundary.authority !== BOUNDARY.authority ||
    boundary.promotion !== BOUNDARY.promotion ||
    boundary.receiver_obligation !== BOUNDARY.receiver_obligation
  ) {
    errors.push(issue(
      'BOUNDARY_ESCALATION',
      'boundary',
      'Packet Zero cannot grant authority, promotion, or receiver obligation'
    ));
  }

  if (
    isObject(packet.root) &&
    isObject(packet.descendant) &&
    typeof packet.root.digest === 'string' &&
    packet.root.digest.length > 0 &&
    packet.root.digest === packet.descendant.digest
  ) {
    residuals.push(issue(
      'SAME_CONTENT_DIGEST',
      'descendant.digest',
      'root and descendant content digests are identical; Packet Zero does not decide whether a lineage relation exists'
    ));
  }

  if (Array.isArray(packet.carriers) && packet.carriers.length === 0) {
    residuals.push(issue(
      'NO_LIVE_CARRIER',
      'carriers',
      'no live content carrier is declared; surviving receipts may still preserve attributable lineage information'
    ));
  }

  residuals.push(issue(
    'SEMANTIC_LINEAGE_UNDECIDED',
    'delta',
    'structural validation does not decide musical authenticity, quality, canon, or lawful authorization'
  ));

  return {
    ok: errors.length === 0,
    format: FORMAT,
    errors,
    residuals,
    ...BOUNDARY
  };
}

module.exports = { FORMAT, BOUNDARY, validatePacket };
