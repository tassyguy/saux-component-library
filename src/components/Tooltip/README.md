# Tooltip Component

The `Tooltip` component is used to display additional information when hovering over an element. It supports custom content and positioning.

## Installation

To use the `Tooltip` component, install the package:

```sh
npm install @saux/tooltip
```

Then, import it into your project:

```jsx
import Tooltip from '@saux/tooltip';
```

## Usage

Here is an example of how to use the `Tooltip` component:

```jsx
import React from 'react';
import Tooltip from '@saux/tooltip';

const App = () => (
  <div>
    <Tooltip content="This is a tooltip">
      <button>Hover over me</button>
    </Tooltip>
  </div>
);

export default App;
```

## Props

The `Tooltip` component accepts the following props:

| Prop       | Type                        | Default     | Description                                     |
| ---------- | --------------------------- | ----------- | ----------------------------------------------- |
| `content`  | `string \| React.ReactNode` | `''`        | The text or JSX to display in the tooltip.      |
| `children` | `React.ReactNode`           | `undefined` | The content that triggers the tooltip on hover. |

## Customization

The `Tooltip` component can be customized using the `content` and `children` props.

## Example

```jsx
import React from 'react';
import Tooltip from '@saux/tooltip';

const App = () => (
  <div>
    <Tooltip content="This is a tooltip">
      <button>Hover over me</button>
    </Tooltip>
    <Tooltip
      content={
        <span role="img" aria-label="info">
          ℹ️
        </span>
      }
    >
      <button>Hover over me for icon</button>
    </Tooltip>
  </div>
);

export default App;
```

## License

This component is licensed under the [Proprietary License](../../LICENSE).
