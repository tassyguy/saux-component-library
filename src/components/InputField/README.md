# InputField Component

The `InputField` component is a customizable input field that supports various types, icons, error messages, character count, and more.

## Installation

To use the `InputField` component, install the package:

```sh
npm install @saux/inputfield
```

Then, import it into your project:

```jsx
import InputField from '@saux/inputfield';
```

## Usage

Here is an example of how to use the `InputField` component:

```jsx
import React, { useState } from 'react';
import InputField from '@saux/inputfield';

const App = () => {
  const [value, setValue] = useState('');

  return (
    <div>
      <InputField
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter text"
        type="text"
        maxLength={50}
        icon={
          <span role="img" aria-label="icon">
            🔍
          </span>
        }
        characterCount={true}
        fullWidth={true}
        error={value.length > 50 ? 'Character limit exceeded' : ''}
      />
    </div>
  );
};

export default App;
```

## Props

The `InputField` component accepts the following props:

| Prop             | Type                                                            | Default     | Description                                                             |
| ---------------- | --------------------------------------------------------------- | ----------- | ----------------------------------------------------------------------- |
| `value`          | `string`                                                        | `''`        | The value of the input field.                                           |
| `onChange`       | `(e: React.ChangeEvent<HTMLInputElement>) => void`              | `undefined` | Callback triggered when the input value changes.                        |
| `placeholder`    | `string`                                                        | `''`        | The placeholder text for the input field.                               |
| `type`           | `'text' \| 'password' \| 'email' \| 'number' \| 'tel' \| 'url'` | `'text'`    | The type of the input field.                                            |
| `maxLength`      | `number`                                                        | `undefined` | The maximum length of the input value.                                  |
| `minLength`      | `number`                                                        | `undefined` | The minimum length of the input value.                                  |
| `autoFocus`      | `boolean`                                                       | `false`     | Whether the input field should automatically focus on mount.            |
| `fullWidth`      | `boolean`                                                       | `false`     | Whether the input field should take up the full width of its container. |
| `error`          | `string`                                                        | `undefined` | The error message to display below the input field.                     |
| `icon`           | `React.ReactNode`                                               | `undefined` | Optional icon to display inside the input field.                        |
| `characterCount` | `boolean`                                                       | `false`     | Whether to display the character count below the input field.           |

## Customization

The `InputField` component can be customized using the `type`, `maxLength`, `minLength`, `autoFocus`, `fullWidth`, `error`, `icon`, and `characterCount` props. You can also provide custom styling through class names.

## Example

```jsx
import React, { useState } from 'react';
import InputField from '@saux/inputfield';

const App = () => {
  const [value, setValue] = useState('');

  return (
    <div>
      <InputField
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter text"
        type="text"
        maxLength={50}
        icon={
          <span role="img" aria-label="icon">
            🔍
          </span>
        }
        characterCount={true}
        fullWidth={true}
        error={value.length > 50 ? 'Character limit exceeded' : ''}
      />
    </div>
  );
};

export default App;
```

## License

This component is licensed under the [Proprietary License](../../LICENSE).
