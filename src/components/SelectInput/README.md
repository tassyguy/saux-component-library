# SelectInput Component

The `SelectInput` component is a customizable dropdown select input with various options and styles.

## Installation

To use the `SelectInput` component, install the package:

```sh
npm install @saux/selectinput
```

Then, import it into your project:

```jsx
import SelectInput from '@saux/selectinput';
```

## Usage

Here is an example of how to use the `SelectInput` component:

```jsx
import React, { useState } from 'react';
import SelectInput from '@saux/selectinput';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

const App = () => {
  const [value, setValue] = useState('');

  return (
    <div>
      <SelectInput
        label="Select an option"
        options={options}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Choose..."
        size="medium"
        variant="primary"
      />
    </div>
  );
};

export default App;
```

## Props

The `SelectInput` component accepts the following props:

| Prop          | Type                                                            | Default                 | Description                                 |
| ------------- | --------------------------------------------------------------- | ----------------------- | ------------------------------------------- |
| `label`       | `string`                                                        | `undefined`             | Optional label to display above the select. |
| `options`     | `SelectInputOption[]`                                           | `[]`                    | Options for the dropdown.                   |
| `value`       | `string`                                                        | `''`                    | Currently selected value.                   |
| `onChange`    | `(event: React.ChangeEvent<HTMLSelectElement>) => void`         | `undefined`             | Callback triggered on change.               |
| `disabled`    | `boolean`                                                       | `false`                 | Disable the select.                         |
| `placeholder` | `string`                                                        | `'Select an option...'` | Placeholder text for the select.            |
| `size`        | `'small' \| 'medium' \| 'large'`                                | `'medium'`              | Size of the select input.                   |
| `variant`     | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'error'` | `'primary'`             | Color variant of the select input.          |

## SelectInputOption

The `SelectInputOption` type is defined as follows:

```ts
export interface SelectInputOption {
  value: string;
  label: string;
}
```

## License

This component is licensed under the [Proprietary License](../../LICENSE).
