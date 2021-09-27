/**
 * @jest-environment jsdom
 */
import {createBreakLine, breakLineReadOnly} from './fixtures/breakLine';

describe('BreakLine', () => {
  let breakLine;

  describe('view', () => {
    it('creates empty block and validates contentEditable attribute', () => {
      breakLine = createBreakLine({ divider: false });
      const wrapper = breakLine.render();
      const childNode = wrapper.querySelector('div');

      expect(wrapper).not.toBeEmptyDOMElement();
      expect(childNode).not.toHaveClass('break-line__divider');
      expect(wrapper.contentEditable).toBe("true");
    });

    it('creates divider block', () => {
      breakLine = createBreakLine({ divider: true });
      const wrapper = breakLine.render();
      const divider = wrapper.querySelector('div');

      expect(divider).toHaveClass('break-line__divider');
    });
  });

  describe('data', () => {
    it('returns saved data', () => {
      breakLine = createBreakLine({ divider: true });
      breakLine.render();
      const savedData = breakLine.save();

      expect(savedData).toMatchObject({ divider: true });
    });
  });

  describe('tunes', () => {
    beforeEach(() => {
      breakLine = createBreakLine({ divider: false });
      breakLine.render();
      breakLine.renderSettings();
      breakLine.tuneButton.click();
    });

    it('updates data when tune clicked', () => {
      expect(breakLine.data).toMatchObject({ divider: true });
    });

    it('updates view when tune clicked', () => {
      expect(breakLine.nodes.divider).toHaveClass('break-line__divider');
    });

    it('changes button state when tune clicked', () => {
      expect(breakLine.tuneButton).toHaveClass('active');
    });
  });

  describe('Read-only mode active', () => {
    it('validates contentEditable attribute', () => {
      breakLine = breakLineReadOnly({ divider: false });
      const wrapper = breakLine.render();
      const divider = wrapper.querySelector('div');

      expect(wrapper.contentEditable).toBe("false");
    });
  });
});
