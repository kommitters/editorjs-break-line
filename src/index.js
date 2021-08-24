import './index.css';
import breaklineIcon from '../assets/breaklineIcon.svg';
import dividerIcon from '../assets/dividerIcon.svg';

/**
 * Break Line and divider Block for the Editor.js.
 *
 * @typedef {object} BreakLineData
 * @description Tool's input and output data format
 * @property {boolean} divider — Add a divider line.
 */
export default class BreakLine {
  /**
   * @param {{data: object, api: object}}
   *   data — Previously saved data
   *   api - Editor.js API
   *   readOnly - read only mode flag
   */
  constructor({ data, config, api, readOnly }) {
    this.api = api;
    this.readOnly = readOnly

    this.CSS = {
      block: this.api.styles.block,
      settingsButton: this.api.styles.settingsButton,
      settingsButtonActive: this.api.styles.settingsButtonActive,
      wrapper: 'break-line',
      divider: 'break-line__divider',
    };

    this.tune = {
      name: 'divider',
      icon: dividerIcon,
    };

    this.nodes = {
      wrapper: null,
      divider: null,
    };

    this.tuneButton = null;

    this._data = {
      divider: !!data.divider,
    };
  }

  /**
   * Renders Tool's view
   * @returns {HTMLDivElement}
   */
  render() {
    const wrapper = document.createElement('div');
    const divider = document.createElement('div');
    if (this.data.divider) divider.classList.add(this.CSS.divider);

    wrapper.classList.add(this.CSS.wrapper, this.CSS.block);
    wrapper.appendChild(divider);

    this.nodes.wrapper = wrapper;
    this.nodes.divider = divider;

    wrapper.contentEditable = this.readOnly ? 'false' : 'true';

    return wrapper;
  }

  /**
   * Makes buttons with tunes.
   *
   * @returns {HTMLDivElement}
   */
  renderSettings() {
    const tuneName = this.tune.name;
    const wrapper = document.createElement('div');
    const button = document.createElement('div');

    button.innerHTML = this.tune.icon;
    button.dataset.tune = tuneName;
    button.classList.add(this.CSS.settingsButton);
    button.classList.toggle(this.CSS.settingsButtonActive, this.data[tuneName]);
    button.addEventListener('click', () => this.tuneClicked(tuneName));

    this.tuneButton = button;
    wrapper.appendChild(button);

    return wrapper;
  }

  /**
   * Clicks tune
   *
   * @param {string} tuneName Clicked tune name
   * @returns {void}
   */
  tuneClicked(tuneName) {
    this.tuneButton.classList.toggle(this.CSS.settingsButtonActive,
      !this.tuneButton.classList.contains(this.CSS.settingsButtonActive));

    this.tuneToggled(tuneName);
  }

  /**
   * Updates data and view when Block Tune is clicked
   *
   * @returns {void}
   */
  tuneToggled() {
    const tuneName = this.tune.name;
    const status = !this.data[tuneName];
    this.data = { [tuneName]: status };

    this.nodes.divider.classList.toggle(this.CSS.divider, status);
  }

  /**
   * Saves Block data
   * @returns {BreakLineData} - saved data
   */
  save() {
    return this.data;
  }

  /**
   * Gets current Tools`s data
   * @returns {BreakLineData} Current data
   */
  get data() {
    return this._data;
  }

  /**
   * Sets Tools`s data
   *
   * @param {BreakLineData} data — data to set
   */
  set data(data) {
    this._data = data || {};
  }

  /**
   * Icon and title for displaying at the Toolbox
   *
   * @returns {{icon: string, title: string}}
   */
  static get toolbox() {
    return {
      icon: breaklineIcon,
      title: 'Break Line',
    };
  }

  /**
   * Returns true to notify the core that read-only mode is supported
   *
   * @return {boolean}
   */
  static get isReadOnlySupported() {
    return true;
  }
}
