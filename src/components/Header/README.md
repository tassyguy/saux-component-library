# Header Component

The `Header` component and its subcomponents (`H1`, `H2`, `H3`, `H4`, `H5`) are used to display headings with various levels and styles. They support custom colors and additional class names for styling.

## Installation

To use the `Header` component and its subcomponents, install the package:

```sh
npm install @saux/header
```

Then, import them into your project:

```jsx
import Header from '@saux/header';
import H1 from '@saux/header/H1';
import H2 from '@saux/header/H2';
import H3 from '@saux/header/H3';
import H4 from '@saux/header/H4';
import H5 from '@saux/header/H5';
```

## Usage

Here is an example of how to use the `Header` component and its subcomponents:

```jsx
import React from 'react';
import H1 from '@saux/header/H1';
import H2 from '@saux/header/H2';
import H3 from '@saux/header/H3';
import H4 from '@saux/header/H4';
import H5 from '@saux/header/H5';

const App = () => (
  <div>
    <H1 text="Heading 1" />
    <H2 text="Heading 2" />
    <H3 text="Heading 3" />
    <H4 text="Heading 4" />
    <H5 text="Heading 5" />
  </div>
);

export default App;
```

## Header Props

The `Header` component accepts the following props:

| Prop        | Type                    | Default               | Description                                   |
| ----------- | ----------------------- | --------------------- | --------------------------------------------- |
| `text`      | `string`                | `''`                  | The text to display inside the header.        |
| `level`     | `1 \| 2 \| 3 \| 4 \| 5` | `1`                   | The level of the header (h1, h2, h3, h4, h5). |
| `color`     | `string`                | `'var(--text-color)'` | The color of the header text.                 |
| `className` | `string`                | `''`                  | Additional class name for custom styling.     |

## Subcomponents

The `Header` component has the following subcomponents for convenience:

- `H1`: Renders a level 1 header.
- `H2`: Renders a level 2 header.
- `H3`: Renders a level 3 header.
- `H4`: Renders a level 4 header.
- `H5`: Renders a level 5 header.

Each subcomponent accepts the same props as the `Header` component, except for the `level` prop, which is predefined.

## Customization

The `Header` component and its subcomponents can be customized using the `text`, `color`, and `className` props.

## Example

```jsx
import React from 'react';
import H1 from '@saux/header/H1';
import H2 from '@saux/header/H2';
import H3 from '@saux/header/H3';
import H4 from '@saux/header/H4';
import H5 from '@saux/header/H5';

const App = () => (
  <div>
    <H1 text="Heading 1" color="red" className="custom-header" />
    <H2 text="Heading 2" color="blue" />
    <H3 text="Heading 3" color="green" />
    <H4 text="Heading 4" color="purple" />
    <H5 text="Heading 5" color="orange" />
  </div>
);

export default App;
```

## License

These components are licensed under the [Proprietary License](../../LICENSE).
