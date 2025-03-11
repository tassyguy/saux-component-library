# Alert Component

The `Alert` component is used to display important messages to the user. It supports various types, can be dismissible, and can include an icon and a title.

## Installation

To use the `Alert` component, install the package:

```sh
npm install @saux/alert
```

Then, import it into your project:

```jsx
import Alert from '@saux/alert';
```

## Usage

Here is an example of how to use the `Alert` component:

```jsx
import React from 'react';
import Alert from '@saux/alert';

const App = () => (
  <div>
    <Alert
      message="This is an info alert"
      type="info"
      dismissible={true}
      onClose={() => alert('Alert closed')}
    />
  </div>
);

export default App;
```

## Props

The `Alert` component accepts the following props:

| Prop          | Type                                          | Default         | Description                                                  |
| ------------- | --------------------------------------------- | --------------- | ------------------------------------------------------------ |
| `message`     | `string`                                      | `''`            | The alert message to display.                                |
| `type`        | `'success' \| 'error' \| 'warning' \| 'info'` | `'info'`        | The type of alert determines its styling.                    |
| `dismissible` | `boolean`                                     | `false`         | Whether the alert is dismissible (shows a close button).     |
| `onClose`     | `() => void`                                  | `undefined`     | Callback invoked when the alert is dismissed.                |
| `icon`        | `React.ReactNode`                             | `undefined`     | Optional icon to display in the alert.                       |
| `className`   | `string`                                      | `''`            | Custom class name for additional styling.                    |
| `style`       | `React.CSSProperties`                         | `undefined`     | Inline styles for the alert.                                 |
| `title`       | `string`                                      | `undefined`     | Optional title to display in the alert.                      |
| `duration`    | `number`                                      | `undefined`     | Duration in milliseconds to automatically dismiss the alert. |
| `ariaLabel`   | `string`                                      | `'Close alert'` | Accessible label for the close button.                       |

## Customization

The `Alert` component can be customized using the `type`, `dismissible`, `icon`, `className`, `style`, `title`, `duration`, and `ariaLabel` props. Additionally, you can provide an `onClose` handler to handle alert dismissal.

## Example

```jsx
import React from 'react';
import Alert from '@saux/alert';
import { CheckCircle, AlertTriangle, Info } from 'react-feather';

const App = () => (
  <div>
    <Alert
      message="Success! Your action was successful."
      type="success"
      icon={<CheckCircle />}
      dismissible={true}
      onClose={() => alert('Alert closed')}
    />
    <Alert
      message="Warning! There might be an issue."
      type="warning"
      icon={<AlertTriangle />}
      dismissible={true}
      onClose={() => alert('Alert closed')}
    />
    <Alert
      message="Info! Here is some information."
      type="info"
      icon={<Info />}
      dismissible={true}
      onClose={() => alert('Alert closed')}
    />
  </div>
);

export default App;
```

## License

This component is licensed under the [Proprietary License](../../LICENSE).
