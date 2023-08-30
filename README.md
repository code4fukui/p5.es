# p5.es

- p5.es is an ES module forked [p5.js](https://github.com/processing/p5.js)
- p5.es is under development

## Usage

### Color

```js
import Color from "https://code4fukui.github.io/p5.es/src/color/p5.Color.js";

const c = new Color("hsl(100,30%,20%)");
console.log(c.toString("rgb%")); // rgb(18.0%, 26.0%, 14.0%)
```

## test

```sh
deno test
```

## reference

- [p5.js](https://github.com/processing/p5.js)
