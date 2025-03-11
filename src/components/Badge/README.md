# Badge Component

The `Badge` component is used to display a small piece of information or status indicator. It supports various styles, sizes, icons, and additional features to enhance its functionality.

## Installation

To use the `Badge` component, install the package:

```sh
npm install @saux/badge
```

Then, import it into your project:

```jsx
import Badge from '@saux/badge';
```

## Usage

Here is an example of how to use the `Badge` component:

```jsx
import React from 'react';
import Badge from '@saux/badge';

const App = () => (
  <div>
    <Badge text="New" variant="primary" />
    <Badge text="Sale" variant="success" size="large" />
    <Badge text="Warning" variant="warning" icon={<WarningIcon />} />
  </div>
);

export default App;
```

## Props

The `Badge` component accepts the following props:

| Prop           | Type                                                            | Default     | Description                                    |
| -------------- | --------------------------------------------------------------- | ----------- | ---------------------------------------------- |
| `text`         | `string`                                                        | `''`        | The text to display inside the badge.          |
| `variant`      | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'error'` | `'primary'` | The style variant of the badge.                |
| `className`    | `string`                                                        | `''`        | Custom class name for additional styling.      |
| `size`         | `'small' \| 'medium' \| 'large'`                                | `'medium'`  | The size of the badge.                         |
| `icon`         | `React.ReactNode`                                               | `undefined` | Optional icon to display inside the badge.     |
| `iconPosition` | `'left' \| 'right'`                                             | `'left'`    | The position of the icon relative to the text. |
| `rounded`      | `'none' \| 'small' \| 'full'`                                   | `'small'`   | The border radius of the badge.                |
| `onClick`      | `() => void`                                                    | `undefined` | Callback triggered when the badge is clicked.  |
| `isPill`       | `boolean`                                                       | `false`     | Whether the badge should have a pill shape.    |
| `tooltip`      | `string`                                                        | `undefined` | The tooltip text to display on hover.          |

## Customization

The `Badge` component can be customized using the `variant`, `size`, `icon`, `iconPosition`, `rounded`, `onClick`, `isPill`, and `tooltip` props. Additionally, you can provide a custom `className` for further styling.

## Example

```jsx
import React from 'react';
import Badge from '@saux/badge';
import { CheckCircle, AlertTriangle } from 'react-feather';

const App = () => (
  <div>
    <Badge text="New" variant="primary" />
    <Badge text="Sale" variant="success" size="large" />
    <Badge text="Warning" variant="warning" icon={<AlertTriangle />} />
    <Badge
      text="Info"
      variant="secondary"
      icon={<CheckCircle />}
      iconPosition="right"
    />
    <Badge text="Pill Badge" variant="error" isPill={true} />
    <Badge text="Tooltip Badge" variant="primary" tooltip="This is a tooltip" />
  </div>
);

export default App;
```

## License

This component is licensed under the [Proprietary License](../../LICENSE).
