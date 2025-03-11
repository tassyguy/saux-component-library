# List Component

The `List` component and its subcomponents (`UnorderedList`, `OrderedList`) are used to display lists of items. They support custom rendering, icons, click handlers, and more.

## Installation

To use the `List` component and its subcomponents, install the package:

```sh
npm install @saux/list
```

Then, import them into your project:

```jsx
import List from '@saux/list';
import UnorderedList from '@saux/list/UL';
import OrderedList from '@saux/list/OL';
```

## Usage

Here is an example of how to use the `List` component and its subcomponents:

```jsx
import React from 'react';
import UnorderedList from '@saux/list/UL';
import OrderedList from '@saux/list/OL';

const App = () => {
  const items = [
    { key: 1, label: 'Item 1', onClick: () => alert('Item 1 clicked') },
    {
      key: 2,
      label: 'Item 2',
      icon: (
        <span role="img" aria-label="icon">
          🔔
        </span>
      ),
    },
    { key: 3, label: 'Item 3', disabled: true },
  ];

  return (
    <div>
      <UnorderedList items={items} />
      <OrderedList items={items} />
    </div>
  );
};

export default App;
```

## List Props

The `List` component accepts the following props:

| Prop           | Type                                                 | Default                | Description                                         |
| -------------- | ---------------------------------------------------- | ---------------------- | --------------------------------------------------- |
| `items`        | `ListItem[]`                                         | `[]`                   | An array of list items to display.                  |
| `ordered`      | `boolean`                                            | `false`                | Whether the list is ordered (ol) or unordered (ul). |
| `className`    | `string`                                             | `''`                   | Additional class name for custom styling.           |
| `style`        | `React.CSSProperties`                                | `undefined`            | Inline styles for the list.                         |
| `renderItem`   | `(item: ListItem, index: number) => React.ReactNode` | `undefined`            | Custom render function for list items.              |
| `emptyMessage` | `string`                                             | `'No items available'` | Message to display when the list is empty.          |

## ListItem

The `ListItem` type is defined as follows:

```ts
export interface ListItem {
  key?: string | number;
  label: React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}
```

## Subcomponents

The `List` component has the following subcomponents for convenience:

- `UnorderedList`: Renders an unordered list (ul).
- `OrderedList`: Renders an ordered list (ol).

Each subcomponent accepts the same props as the `List` component, except for the `ordered` prop, which is predefined.

## Customization

The `List` component and its subcomponents can be customized using the `items`, `className`, `style`, `renderItem`, and `emptyMessage` props. Each item can include a key, label, optional icon, disabled state, and an optional click handler.

## Example

```jsx
import React from 'react';
import UnorderedList from '@saux/list/UL';
import OrderedList from '@saux/list/OL';

const App = () => {
  const items = [
    { key: 1, label: 'Item 1', onClick: () => alert('Item 1 clicked') },
    {
      key: 2,
      label: 'Item 2',
      icon: (
        <span role="img" aria-label="icon">
          🔔
        </span>
      ),
    },
    { key: 3, label: 'Item 3', disabled: true },
  ];

  return (
    <div>
      <UnorderedList items={items} className="custom-ul" />
      <OrderedList items={items} className="custom-ol" />
    </div>
  );
};

export default App;
```

## License

These components are licensed under the [Proprietary License](../../LICENSE).
