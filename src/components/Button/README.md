# Button Component

The `Button` component is a customizable button element for the SAUX component library. It supports various styles, sizes, and additional features to enhance its functionality.

## Installation

To use the `Button` component, install the package:

```sh
npm install @saux/button
```

Then, import it into your project:

```jsx
import Button from '@saux/button';
```

## Usage

Here is an example of how to use the `Button` component:

```jsx
import React from 'react';
import Button from '@saux/button';

const App = () => (
  <div>
    <Button
      label="Click Me"
      onClick={() => alert('Button clicked!')}
      variant="primary"
      size="medium"
    />
  </div>
);

export default App;
```

## Props

The `Button` component accepts the following props:

| Prop           | Type                              | Default     | Description                                                        |
| -------------- | --------------------------------- | ----------- | ------------------------------------------------------------------ |
| `label`        | `string`                          | `''`        | The text to display inside the button.                             |
| `onClick`      | `() => void`                      | `undefined` | The function to call when the button is clicked.                   |
| `variant`      | `'primary' \| 'secondary'`        | `'primary'` | The style variant of the button.                                   |
| `disabled`     | `boolean`                         | `false`     | Whether the button is disabled.                                    |
| `size`         | `'small' \| 'medium' \| 'large'`  | `'medium'`  | The size of the button.                                            |
| `type`         | `'button' \| 'submit' \| 'reset'` | `'button'`  | The type attribute of the button.                                  |
| `icon`         | `React.ReactNode`                 | `undefined` | An optional icon to display inside the button.                     |
| `iconPosition` | `'left' \| 'right'`               | `'left'`    | The position of the icon relative to the label.                    |
| `fullWidth`    | `boolean`                         | `false`     | Whether the button should take up the full width of its container. |
| `className`    | `string`                          | `''`        | Additional CSS classes to apply to the button.                     |
| `style`        | `React.CSSProperties`             | `undefined` | Inline styles to apply to the button.                              |
| `loading`      | `boolean`                         | `false`     | Whether to show a loading spinner inside the button.               |
| `tooltip`      | `string`                          | `undefined` | The tooltip text to display on hover.                              |
| `ariaLabel`    | `string`                          | `undefined` | The aria-label attribute for accessibility.                        |

## Customization

The `Button` component can be customized using the `variant`, `size`, `fullWidth`, `className`, and `style` props. Additionally, you can provide an `icon` to display alongside the button label.

## Theming

The `Button` component uses the `useTheme` hook from the `ThemeProvider` to apply theme-specific styles. Ensure that your application is wrapped with the `ThemeProvider` to enable theming.

## Example

```jsx
import React from 'react';
import Button from '@saux/button';
import { ThemeProvider } from '@saux/theme';

const App = () => (
  <ThemeProvider>
    <Button
      label="Primary Button"
      variant="primary"
      size="large"
      onClick={() => alert('Primary Button clicked!')}
    />
    <Button
      label="Secondary Button"
      variant="secondary"
      size="small"
      onClick={() => alert('Secondary Button clicked!')}
    />
  </ThemeProvider>
);

export default App;
```

## License

This component is licensed under the [Proprietary License](../../LICENSE).
