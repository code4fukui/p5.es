# p5.es

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

p5.es is an ES module fork of the creative coding library [p5.js](https://github.com/processing/p5.js). This project refactors the original library into a modern, modular structure, allowing developers to import only the components they need. It is currently under active development.

## Demo

- **[Game Demo](https://code4fukui.github.io/p5.es/)**

## Core Concepts

- **ES Module Architecture**: Import specific functionalities like `Color`, `Vector`, or drawing primitives directly, minimizing bundle size and improving code organization.
- **Familiar p5.js API**: Retains the accessible and expressive API of p5.js, including the core `setup()` and `draw()` loop structure.
- **Modular by Design**: The library is broken down into logical components (core, math, color, typography, etc.), making the codebase easier to navigate and maintain.
- **Beginner-Friendly**: Includes the Friendly Error System (FES) to provide clear, helpful messages for common mistakes.

## Usage

p5.es modules can be imported directly from a URL in modern web projects.

### Example: Using a Single Module

You can import individual classes for specific tasks, such as color manipulation.

```javascript
import Color from "https://code4fukui.github.io/p5.es/src/color/p5.Color.js";

// Create a color from an HSL string
const c = new Color("hsl(100,30%,20%)");

// Output as an RGB percentage string
console.log(c.toString("rgb%")); // rgb(18.0%, 26.0%, 14.0%)
```

### Example: A Simple Sketch

The core drawing API follows the classic p5.js pattern.

```javascript
import { main, background, fill, rect, frameCount } from "https://code4fukui.github.io/p5.es/p5.js";

main(() => {
  // This function runs every frame, like draw()
  const hue = frameCount % 360;
  background(240);
  fill(`hsl(${hue}, 90%, 70%)`);
  rect(20, 20, 60, 60);
});
```

## API Highlights

The library is organized into several key modules:

- **Core**: [`src/core/`](src/core/README.md) - Manages the sketch lifecycle (`preload`, `setup`, `draw`), rendering pipeline, environment variables, and the Friendly Error System.
- **Math**: [`src/math/`](src/math/README.md) - Provides a rich set of mathematical tools, including:
    - **`p5.Vector`**: For 2D/3D vector operations, with both mutable and static methods.
      ```javascript
      // Mutable: modifies the original vector
      let v = new p5.Vector(10, 0, 0);
      v.normalize(); // v is now [1, 0, 0]

      // Static: returns a new vector, leaving the original unchanged
      const v0 = new p5.Vector(10, 0, 0);
      const v1 = p5.Vector.normalize(v0); // v1 is [1, 0, 0], v0 is still [10, 0, 0]
      ```
    - **Noise**: Perlin and simplex noise generation.
    - **Random**: Functions for generating random numbers and shuffling arrays.
- **Typography**: (`src/typography/`) - Handles font loading (`.otf`, `.ttf`) and text rendering.
- **Color**: (`src/color/`) - Tools for color creation, conversion (RGB, HSL, HSB), and setting drawing styles.
- **Utilities**: (`src/utilities/`) - Helper functions for array manipulation, data type conversion, and string formatting.

## Development

To run the test suite, you need the [Deno](https://deno.land/) runtime.

```sh
deno test
```

## Reference

This project is a fork of and is heavily based on the original **[p5.js](https://github.com/processing/p5.js)**. We are grateful to the entire p5.js community for their foundational work.
