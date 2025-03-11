# ToggleSwitch Component

The `ToggleSwitch` component is used to display a switch that can be toggled on or off. It supports custom sizes, colors, and labels.

## Installation

To use the `ToggleSwitch` component, install the package:

```sh
npm install @saux/toggleswitch
```

Then, import it into your project:

```jsx
import ToggleSwitch from '@saux/toggleswitch';
```

## Usage

Here is an example of how to use the `ToggleSwitch` component:

```jsx
import React, { useState } from 'react';
import ToggleSwitch from '@saux/toggleswitch';

const App = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = (newState) => {
    setIsOn(newState);
  };

  return (
    <div>
      <ToggleSwitch
        isOn={isOn}
        onToggle={handleToggle}
        label="Toggle Switch"
        size="medium"
        variant="primary"
      />
    </div>
  );
};

export default App;
```

## Props

The `ToggleSwitch` component accepts the following props:

| Prop       | Type                                                            | Default     | Description                                    |
| ---------- | --------------------------------------------------------------- | ----------- | ---------------------------------------------- |
| `isOn`     | `boolean`                                                       | `false`     | Indicates whether the switch is on or off.     |
| `onToggle` | `(newState: boolean) => void`                                   | `undefined` | Callback triggered when the switch is toggled. |
| `disabled` | `boolean`                                                       | `false`     | Disable the switch.                            |
| `label`    | `string`                                                        | `undefined` | Label text for accessibility.                  |
| `size`     | `'small' \| 'medium' \| 'large'`                                | `'medium'`  | Custom size of the switch.                     |
| `variant`  | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'error'` | `'primary'` | Color variant of the switch.                   |

## Customization

The `ToggleSwitch` component can be customized using the `isOn`, `onToggle`, `disabled`, `label`, `size`, and `variant` props.

## Example

```jsx
import React, { useState } from 'react';
import ToggleSwitch from '@saux/toggleswitch';

const App = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = (newState) => {
    setIsOn(newState);
  };

  return (
    <div>
      <ToggleSwitch
        isOn={isOn}
        onToggle={handleToggle}
        label="Toggle Switch"
        size="medium"
        variant="primary"
      />
    </div>
  );
};

export default App;
```

## License

This component is licensed under the [Proprietary License](../../LICENSE).
