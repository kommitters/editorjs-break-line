import BreakLine from '../../src/index';

/**
 * Mock Editor.js API
 */
const api = {
  styles: {
    block: 'block',
    loader: 'loader',
    input: 'input',
    settingsButton: 'settings',
    settingsButtonActive: 'active',
  },
};

/**
 * Creates an instance of BreakLine
 */
const createBreakLine = (data) => new BreakLine({
  data,
  api,
});

export default createBreakLine;
