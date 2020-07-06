![](https://badgen.net/badge/Editor.js/v2.0/blue)

# EditorJS BreakLine Tool

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

## Contributing and Development
Bug reports and pull requests are welcome on GitHub https://github.com/kommitters/editorjs-break-line. Everyone is welcome to participate in the project.

## Changelog
See the [CHANGELOG](https://github.com/kommitters/editorjs-break-line/blob/master/CHANGELOG.md) for versions details.

## License
See [LICENSE](https://github.com/kommitters/editorjs-break-line/blob/master/LICENSE) for details.

## Credits
Made with 💙 by [kommit](https://kommit.co)
