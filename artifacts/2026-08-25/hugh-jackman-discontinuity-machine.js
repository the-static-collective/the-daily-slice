(function(root, factory) {
  const modes = typeof module === 'object' && module.exports
    ? require('../maxhinal/maxhinal-modes.js')
    : root.MaxhinalModes;
  const api = factory(modes);
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.HJDMCore = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function(modes) {
  if (!modes) throw new Error('MaxhinalModes is required');
  return {
    searchCorpus:modes.searchCorpus,
    suggestRelatives:modes.suggestRelatives,
    pressureQuestion:modes.pressureQuestion,
    spinOutput:modes.spinOutput
  };
});
