# Breadcrumb Component

The `Breadcrumb` component is a navigation aid that helps users understand their location within a website or application. It displays a list of links separated by a specified separator.

## Installation

To use the `Breadcrumb` component, install the package:

```sh
npm install @saux/breadcrumb
```

Then, import it into your project:

```jsx
import Breadcrumb from '@saux/breadcrumb';
```

## Usage

Here is an example of how to use the `Breadcrumb` component:

```jsx
import React from 'react';
import Breadcrumb from '@saux/breadcrumb';

const App = () => {
  const items = [
    { label: 'Home', href: '/' },
    { label: 'Category', href: '/category' },
    { label: 'Subcategory', href: '/category/subcategory' },
    { label: 'Current Page' },
  ];

  return (
    <div>
      <Breadcrumb items={items} />
    </div>
  );
};

export default App;
```

## Props

The `Breadcrumb` component accepts the following props:

| Prop          | Type                             | Default     | Description                                             |
| ------------- | -------------------------------- | ----------- | ------------------------------------------------------- |
| `items`       | `BreadcrumbItem[]`               | `[]`        | An array of breadcrumb items to display.                |
| `separator`   | `string`                         | `'/'`       | The separator to display between breadcrumb items.      |
| `onClick`     | `(item: BreadcrumbItem) => void` | `undefined` | The function to call when a breadcrumb item is clicked. |
| `truncate`    | `boolean`                        | `false`     | Whether to truncate the breadcrumb items.               |
| `boldCurrent` | `boolean`                        | `false`     | Whether to display the current breadcrumb item in bold. |

## BreadcrumbItem

The `BreadcrumbItem` type is defined as follows:

```ts
export interface BreadcrumbItem {
  label: string;
  href?: string;
}
```

## Customization

The `Breadcrumb` component can be customized using the `separator`, `truncate`, and `boldCurrent` props. Additionally, you can provide an `onClick` handler to handle breadcrumb item clicks.

## Example

```jsx
import React from 'react';
import Breadcrumb from '@saux/breadcrumb';

const App = () => {
  const items = [
    { label: 'Home', href: '/' },
    { label: 'Category', href: '/category' },
    { label: 'Subcategory', href: '/category/subcategory' },
    { label: 'Current Page' },
  ];

  const handleClick = (item) => {
    console.log('Breadcrumb item clicked:', item);
  };

  return (
    <div>
      <Breadcrumb
        items={items}
        separator=">"
        onClick={handleClick}
        truncate={true}
        boldCurrent={true}
      />
    </div>
  );
};

export default App;
```

## License

This component is licensed under the [Proprietary License](../../LICENSE).
