# 🚨 URGENT: Maintenance Transition 🚨
This project is officially entering a period of passive maintenance and will no longer receive active development or major bug fixes from **kommit**.

We are fully committed to keeping this project alive within the open-source community! We believe in the value this project provides, and we are actively seeking new, passionate contributors to take over ownership.

## 🚀 Take Over This Project!
We need a reliable steward for the future development of this repository.

### Why Take Ownership?

**Full Control:** Gain administrative rights and full control over the project's direction.

**Visibility:** Showcase your expertise by leading an established open-source project.

**Impact:** Directly support the users who rely on this plugin.

### How to Request Ownership

To apply for project ownership, you must create an issue using our dedicated template:

1. Go to the [Issues](https://github.com/kommitters/editorjs-break-line/issues/new/choose) page
2. Select the **"Project Ownership / Maintainer Request"** template
3. Fill out all required sections completely
4. Submit the issue for review

**Important:** Ownership requests submitted through other channels (comments, pull requests, emails) will not be considered. Please use the official issue template to ensure your application is properly reviewed.

# EditorJS BreakLine Tool

![stability-stable](https://img.shields.io/badge/stability-stable-green.svg)
![](https://badgen.net/badge/Editor.js/v2.0/blue)
[![Coverage Status](https://coveralls.io/repos/github/kommitters/editorjs-break-line/badge.svg)](https://coveralls.io/github/kommitters/editorjs-break-line)
[![OpenSSF Best Practices](https://bestpractices.coreinfrastructure.org/projects/6467/badge)](https://bestpractices.coreinfrastructure.org/projects/6467)
[![OpenSSF Scorecard](https://api.securityscorecards.dev/projects/github.com/kommitters/editorjs-break-line/badge)](https://api.securityscorecards.dev/projects/github.com/kommitters/editorjs-break-line)

Break Line and divider Tool for [Editor.js](https://editorjs.io).

![](assets/demo.gif)

## Notes

- Adds an empty block
- Adds a divider block
- Keyboard shortcut `CMD+SHIFT+ENTER`

## Installation

### Install via NPM
Get the package
```shell
$ npm i --save-dev editorjs-break-line
```

Include module at your application

```javascript
import BreakLine from 'editorjs-break-line';
```

### Load from CDN

You can load a specific version of the package from [jsDelivr CDN](https://www.jsdelivr.com/package/npm/editorjs-break-line).

Require this script on a page with Editor.js.

```html
<script src="https://cdn.jsdelivr.net/npm/editorjs-break-line"></script>
```

## Usage

Add a new Tool to the `tools` property of the Editor.js initial config.

```javascript
const editor = EditorJS({
  tools: {
    breakLine: {
      class: BreakLine,
      inlineToolbar: true,
      shortcut: 'CMD+SHIFT+ENTER',
    },
  }
});
```

## Config Params

No config params required.

## Tool's tunes

1. Add a divider line

## Output data

| Field          | Type      | Description                     |
| -------------- | --------- | ------------------------------- |
| divider        | `boolean` | Add a divider line

**Data**

```json
{
  "type": "breakLine",
  "data": {
      "divider": true
  }
},
```

## Development

**Development mode**
```shell
$ yarn build:dev
```

**Production release**
1. Create a production bundle
```shell
$ yarn build
```

2. Commit `dist/bundle.js`

**Run tests**
```shell
$ yarn test
```

## Code of conduct
We welcome everyone to contribute. Make sure you have read the [CODE_OF_CONDUCT][coc] before.

## Contributing
For information on how to contribute, please refer to our [CONTRIBUTING][contributing] guide.

## Changelog
Features and bug fixes are listed in the [CHANGELOG][changelog] file.

## License
This library is licensed under an MIT license. See [LICENSE][license] for details.

## Acknowledgements
Made with 💙 by [kommitters Open Source](https://kommit.co)

[license]: https://github.com/kommitters/editorjs-break-line/blob/master/LICENSE
[coc]: https://github.com/kommitters/editorjs-break-line/blob/master/CODE_OF_CONDUCT.md
[changelog]: https://github.com/kommitters/editorjs-break-line/blob/master/CHANGELOG.md
[contributing]: https://github.com/kommitters/editorjs-break-line/blob/master/CONTRIBUTING.md
