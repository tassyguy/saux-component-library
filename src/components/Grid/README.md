# Grid and GridItem Components

The `Grid` and `GridItem` components are used to create flexible and responsive grid layouts. The `Grid` component defines the grid container, while the `GridItem` component defines individual grid items.

## Installation

To use the `Grid` and `GridItem` components, install the package:

```sh
npm install @saux/grid
```

Then, import them into your project:

```jsx
import Grid from '@saux/grid';
import GridItem from '@saux/grid/GridItem';
```

## Usage

Here is an example of how to use the `Grid` and `GridItem` components:

```jsx
import React from 'react';
import Grid from '@saux/grid';
import GridItem from '@saux/grid/GridItem';

const App = () => (
  <Grid columns={3} gap="1rem">
    <GridItem>Item 1</GridItem>
    <GridItem>Item 2</GridItem>
    <GridItem>Item 3</GridItem>
    <GridItem>Item 4</GridItem>
    <GridItem>Item 5</GridItem>
    <GridItem>Item 6</GridItem>
  </Grid>
);

export default App;
```

## Grid Props

The `Grid` component accepts the following props:

| Prop        | Type              | Default     | Description                                                                   |
| ----------- | ----------------- | ----------- | ----------------------------------------------------------------------------- |
| `columns`   | `number`          | `undefined` | Optionally specify the number of columns (if not provided, auto-fit is used). |
| `gap`       | `string`          | `'1em'`     | Optional gap between grid items.                                              |
| `children`  | `React.ReactNode` | `undefined` | The grid items to be displayed inside the grid.                               |
| `className` | `string`          | `''`        | Additional class name for custom styling.                                     |

## GridItem Props

The `GridItem` component accepts the following props:

| Prop        | Type              | Default     | Description                               |
| ----------- | ----------------- | ----------- | ----------------------------------------- |
| `children`  | `React.ReactNode` | `undefined` | Content for the grid item.                |
| `className` | `string`          | `''`        | Additional class name for custom styling. |

## Customization

The `Grid` and `GridItem` components can be customized using their respective props. You can control the number of columns, gap between items, and provide custom styling through class names.

## Example

```jsx
import React from 'react';
import Grid from '@saux/grid';
import GridItem from '@saux/grid/GridItem';

const App = () => (
  <Grid columns={4} gap="2rem" className="custom-grid">
    <GridItem className="custom-grid-item">Item 1</GridItem>
    <GridItem className="custom-grid-item">Item 2</GridItem>
    <GridItem className="custom-grid-item">Item 3</GridItem>
    <GridItem className="custom-grid-item">Item 4</GridItem>
    <GridItem className="custom-grid-item">Item 5</GridItem>
    <GridItem className="custom-grid-item">Item 6</GridItem>
    <GridItem className="custom-grid-item">Item 7</GridItem>
    <GridItem className="custom-grid-item">Item 8</GridItem>
  </Grid>
);

export default App;
```

## License

These components are licensed under the [Proprietary License](../../LICENSE).
