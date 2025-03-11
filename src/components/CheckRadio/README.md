# CheckRadio Component

The `CheckRadio` component is a customizable control that can be used as either a checkbox or a radio button. It supports various sizes, color variants, and additional features to enhance its functionality.

## Installation

To use the `CheckRadio` component, install the package:

```sh
npm install @saux/checkradio
```

Then, import it into your project:

```jsx
import CheckRadio from '@saux/checkradio';
```

## Usage

Here is an example of how to use the `CheckRadio` component:

```jsx
import React, { useState } from 'react';
import CheckRadio from '@saux/checkradio';

const App = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <CheckRadio
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
        label="Check me"
        size="medium"
        variant="primary"
      />
    </div>
  );
};

export default App;
```

## Props

The `CheckRadio` component accepts the following props:

| Prop       | Type                                                            | Default     | Description                                    |
| ---------- | --------------------------------------------------------------- | ----------- | ---------------------------------------------- |
| `type`     | `'checkbox' \| 'radio'`                                         | `undefined` | Type of control: "checkbox" or "radio".        |
| `checked`  | `boolean`                                                       | `false`     | Whether the control is checked.                |
| `onChange` | `() => void`                                                    | `undefined` | Callback triggered when the control changes.   |
| `disabled` | `boolean`                                                       | `false`     | Optional flag to disable the control.          |
| `label`    | `string`                                                        | `undefined` | Optional label to display next to the control. |
| `name`     | `string`                                                        | `undefined` | Name for radio group.                          |
| `size`     | `'small' \| 'medium' \| 'large'`                                | `'medium'`  | Size of the control.                           |
| `variant`  | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'error'` | `'primary'` | Color variant of the control.                  |

## Customization

The `CheckRadio` component can be customized using the `type`, `checked`, `onChange`, `disabled`, `label`, `name`, `size`, and `variant` props.

## Example

```jsx
import React, { useState } from 'react';
import CheckRadio from '@saux/checkradio';

const App = () => {
  const [checked, setChecked] = useState(false);
  const [selected, setSelected] = useState('option1');

  return (
    <div>
      <CheckRadio
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
        label="Check me"
        size="medium"
        variant="primary"
      />
      <CheckRadio
        type="radio"
        checked={selected === 'option1'}
        onChange={() => setSelected('option1')}
        label="Option 1"
        name="options"
        size="medium"
        variant="secondary"
      />
      <CheckRadio
        type="radio"
        checked={selected === 'option2'}
        onChange={() => setSelected('option2')}
        label="Option 2"
        name="options"
        size="medium"
        variant="secondary"
      />
    </div>
  );
};

export default App;
```

## License

This component is licensed under the [Proprietary License](../../LICENSE).
