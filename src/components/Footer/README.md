# Footer Component

The `Footer` component is used to display a footer section at the bottom of a page. It supports custom background color, text color, alignment, and an optional divider.

## Installation

To use the `Footer` component, install the package:

```sh
npm install @saux/footer
```

Then, import it into your project:

```jsx
import Footer from '@saux/footer';
```

## Usage

Here is an example of how to use the `Footer` component:

```jsx
import React from 'react';
import Footer from '@saux/footer';

const App = () => (
  <div>
    <Footer
      backgroundColor="#333"
      textColor="#fff"
      align="center"
      showDivider={true}
    >
      <p>
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </p>
    </Footer>
  </div>
);

export default App;
```

## Props

The `Footer` component accepts the following props:

| Prop              | Type                            | Default                     | Description                                    |
| ----------------- | ------------------------------- | --------------------------- | ---------------------------------------------- |
| `children`        | `React.ReactNode`               | `undefined`                 | The content to be displayed inside the footer. |
| `className`       | `string`                        | `''`                        | Custom class name for additional styling.      |
| `backgroundColor` | `string`                        | `'var(--background-color)'` | The background color of the footer.            |
| `textColor`       | `string`                        | `'var(--text-color)'`       | The text color of the footer.                  |
| `align`           | `'left' \| 'center' \| 'right'` | `'center'`                  | The alignment of the footer content.           |
| `showDivider`     | `boolean`                       | `false`                     | Whether to show a divider above the footer.    |

## Customization

The `Footer` component can be customized using the `backgroundColor`, `textColor`, `align`, `showDivider`, and `className` props. You can also provide custom content as children.

## Example

```jsx
import React from 'react';
import Footer from '@saux/footer';

const App = () => (
  <div>
    <Footer
      backgroundColor="#333"
      textColor="#fff"
      align="center"
      showDivider={true}
    >
      <p>
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </p>
      <p>Contact us: info@yourcompany.com</p>
    </Footer>
  </div>
);

export default App;
```

## License

This component is licensed under the [Proprietary License](../../LICENSE).
