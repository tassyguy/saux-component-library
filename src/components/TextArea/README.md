# TextArea Component

The `TextArea` component is a customizable multi-line text input field with various options for styling and behavior.

## Installation

To use the `TextArea` component, install the package:

```sh
npm install @saux/textarea
```

Then, import it into your project:

```jsx
import TextArea from '@saux/textarea';
```

## Usage

Here is an example of how to use the `TextArea` component:

```jsx
import React, { useState } from 'react';
import TextArea from '@saux/textarea';

const App = () => {
  const [value, setValue] = useState('');

  return (
    <div>
      <TextArea
        label="Description"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter your description here..."
        rows={5}
        maxLength={200}
        characterCount={true}
        fullWidth={true}
        error={value.length > 200 ? 'Character limit exceeded' : ''}
      />
    </div>
  );
};

export default App;
```

## Props

The `TextArea` component accepts the following props:

| Prop             | Type                                                      | Default      | Description                                                          |
| ---------------- | --------------------------------------------------------- | ------------ | -------------------------------------------------------------------- |
| `label`          | `string`                                                  | `undefined`  | Optional label to display above the textarea.                        |
| `value`          | `string`                                                  | `''`         | The value of the textarea.                                           |
| `onChange`       | `(event: React.ChangeEvent<HTMLTextAreaElement>) => void` | `undefined`  | Callback triggered when the value changes.                           |
| `placeholder`    | `string`                                                  | `''`         | Placeholder text for the textarea.                                   |
| `rows`           | `number`                                                  | `5`          | Number of rows for the textarea.                                     |
| `disabled`       | `boolean`                                                 | `false`      | Disable the textarea.                                                |
| `maxLength`      | `number`                                                  | `undefined`  | Maximum length of the textarea value.                                |
| `resize`         | `'none' \| 'vertical' \| 'horizontal' \| 'both'`          | `'vertical'` | Resize behavior of the textarea.                                     |
| `autoFocus`      | `boolean`                                                 | `false`      | Automatically focus the textarea on mount.                           |
| `fullWidth`      | `boolean`                                                 | `false`      | Whether the textarea should take up the full width of its container. |
| `error`          | `string`                                                  | `undefined`  | Error message to display below the textarea.                         |
| `characterCount` | `boolean`                                                 | `false`      | Display character count below the textarea.                          |

## Customization

The `TextArea` component can be customized using the `label`, `placeholder`, `rows`, `maxLength`, `resize`, `autoFocus`, `fullWidth`, `error`, and `characterCount` props.

## Example

```jsx
import React, { useState } from 'react';
import TextArea from '@saux/textarea';

const App = () => {
  const [value, setValue] = useState('');

  return (
    <div>
      <TextArea
        label="Description"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter your description here..."
        rows={5}
        maxLength={200}
        characterCount={true}
        fullWidth={true}
        error={value.length > 200 ? 'Character limit exceeded' : ''}
      />
    </div>
  );
};

export default App;
```

## License

This component is licensed under the [Proprietary License](../../LICENSE).
