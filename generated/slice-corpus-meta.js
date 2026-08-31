(function(root, factory) {
  const meta = factory();
  if (typeof module === 'object' && module.exports) module.exports = meta;
  if (!root.DAILY_SLICE_META) root.DAILY_SLICE_META = meta;
})(typeof globalThis !== 'undefined' ? globalThis : this, function() {
  return {
    format:'daily-slice-corpus/v0-legacy-bridge',
    digest:'git-sha1:48941e068d09307ca78453c0c73d567d9d8a0b16',
    record_count:27
  };
});
