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

const readOnly = true;

/**
 * Creates an instance of BreakLine
 */
const createBreakLine = (data) => new BreakLine({
  data,
  api,
});

/**
 * Creates an instance of BreakLine ReadOnly mode active
 */

const breakLineReadOnly = (data) => new BreakLine({
  data,
  api,
  readOnly
});

export { createBreakLine, breakLineReadOnly };
