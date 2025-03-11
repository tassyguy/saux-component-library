# Container Component

The `Container` component is a flexible wrapper that can be used to contain and style other components. It supports various customization options such as padding, margin, background color, border radius, and shadow.

## Installation

To use the `Container` component, install the package:

```sh
npm install @saux/container
```

Then, import it into your project:

```jsx
import Container from '@saux/container';
```

## Usage

Here is an example of how to use the `Container` component:

```jsx
import React from 'react';
import Container from '@saux/container';

const App = () => (
  <Container
    maxWidth="800px"
    padding="2rem"
    margin="2rem auto"
    backgroundColor="#f0f0f0"
    borderRadius="8px"
    shadow="medium"
  >
    <h1>Hello, World!</h1>
    <p>This is a container component.</p>
  </Container>
);

export default App;
```

## Props

The `Container` component accepts the following props:

| Prop              | Type                                       | Default                     | Description                                                           |
| ----------------- | ------------------------------------------ | --------------------------- | --------------------------------------------------------------------- |
| `children`        | `React.ReactNode`                          | `undefined`                 | The content to be wrapped by the container.                           |
| `maxWidth`        | `string`                                   | `'1200px'`                  | The maximum width of the container.                                   |
| `padding`         | `string`                                   | `'1rem'`                    | The padding inside the container.                                     |
| `margin`          | `string`                                   | `'0 auto'`                  | The margin outside the container.                                     |
| `backgroundColor` | `string`                                   | `'var(--background-color)'` | The background color of the container.                                |
| `borderRadius`    | `string`                                   | `'0'`                       | The border radius of the container.                                   |
| `shadow`          | `'small' \| 'medium' \| 'large' \| 'none'` | `'none'`                    | The shadow effect of the container.                                   |
| `fullHeight`      | `boolean`                                  | `false`                     | Whether the container should take up the full height of the viewport. |
| `className`       | `string`                                   | `''`                        | Custom class name for additional styling.                             |

## Customization

The `Container` component can be customized using the `maxWidth`, `padding`, `margin`, `backgroundColor`, `borderRadius`, `shadow`, `fullHeight`, and `className` props.

## Example

```jsx
import React from 'react';
import Container from '@saux/container';

const App = () => (
  <Container
    maxWidth="800px"
    padding="2rem"
    margin="2rem auto"
    backgroundColor="#f0f0f0"
    borderRadius="8px"
    shadow="medium"
    fullHeight={true}
  >
    <h1>Hello, World!</h1>
    <p>This is a container component with full height.</p>
  </Container>
);

export default App;
```

## License

This component is licensed under the [Proprietary License](../../LICENSE).
