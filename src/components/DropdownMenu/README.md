# DropdownMenu Component

The `DropdownMenu` component is used to display a list of actions or options in a dropdown menu. It supports various alignment options, custom icons, and can be disabled.

## Installation

To use the `DropdownMenu` component, install the package:

```sh
npm install @saux/dropdownmenu
```

Then, import it into your project:

```jsx
import DropdownMenu from '@saux/dropdownmenu';
```

## Usage

Here is an example of how to use the `DropdownMenu` component:

```jsx
import React from 'react';
import DropdownMenu from '@saux/dropdownmenu';

const App = () => {
  const items = [
    { value: '1', label: 'Option 1', onClick: () => alert('Option 1 clicked') },
    { value: '2', label: 'Option 2', onClick: () => alert('Option 2 clicked') },
    {
      value: '3',
      label: 'Option 3',
      onClick: () => alert('Option 3 clicked'),
      disabled: true,
    },
  ];

  return (
    <div>
      <DropdownMenu label="Menu" items={items} />
    </div>
  );
};

export default App;
```

## Props

The `DropdownMenu` component accepts the following props:

| Prop        | Type                            | Default  | Description                                                               |
| ----------- | ------------------------------- | -------- | ------------------------------------------------------------------------- |
| `label`     | `string`                        | `''`     | The label for the dropdown trigger button.                                |
| `items`     | `DropdownMenuItem[]`            | `[]`     | An array of dropdown menu items to display.                               |
| `disabled`  | `boolean`                       | `false`  | Whether the dropdown menu is disabled.                                    |
| `align`     | `'left' \| 'right' \| 'center'` | `'left'` | The alignment of the dropdown menu.                                       |
| `fullWidth` | `boolean`                       | `false`  | Whether the dropdown menu should take up the full width of its container. |

## DropdownMenuItem

The `DropdownMenuItem` type is defined as follows:

```ts
export interface DropdownMenuItem {
  value: string;
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  icon?: React.ReactNode;
}
```

## Customization

The `DropdownMenu` component can be customized using the `label`, `items`, `disabled`, `align`, and `fullWidth` props. Each item can include a value, label, optional click handler, disabled state, and an optional icon.

## Example

```jsx
import React from 'react';
import DropdownMenu from '@saux/dropdownmenu';
import { CheckCircle, AlertTriangle } from 'react-feather';

const App = () => {
  const items = [
    {
      value: '1',
      label: 'Option 1',
      onClick: () => alert('Option 1 clicked'),
      icon: <CheckCircle />,
    },
    {
      value: '2',
      label: 'Option 2',
      onClick: () => alert('Option 2 clicked'),
      icon: <AlertTriangle />,
    },
    {
      value: '3',
      label: 'Option 3',
      onClick: () => alert('Option 3 clicked'),
      disabled: true,
    },
  ];

  return (
    <div>
      <DropdownMenu label="Menu" items={items} align="right" />
    </div>
  );
};

export default App;
```

## License

This component is licensed under the [Proprietary License](../../LICENSE).
