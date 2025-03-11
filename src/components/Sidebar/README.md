# Sidebar Component

The `Sidebar` component is used to display a vertical navigation menu with optional title and custom items.

## Installation

To use the `Sidebar` component, install the package:

```sh
npm install @saux/sidebar
```

Then, import it into your project:

```jsx
import Sidebar from '@saux/sidebar';
```

## Usage

Here is an example of how to use the `Sidebar` component:

```jsx
import React from 'react';
import Sidebar from '@saux/sidebar';

const items = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const App = () => (
  <div>
    <Sidebar title="Navigation" items={items} />
  </div>
);

export default App;
```

## Props

The `Sidebar` component accepts the following props:

| Prop        | Type            | Default     | Description                               |
| ----------- | --------------- | ----------- | ----------------------------------------- |
| `title`     | `string`        | `undefined` | Optional title to display at the top.     |
| `items`     | `SidebarItem[]` | `[]`        | An array of navigation items.             |
| `className` | `string`        | `''`        | Additional class name for custom styling. |

## SidebarItem

The `SidebarItem` type is defined as follows:

```ts
export interface SidebarItem {
  label: string;
  href?: string;
  onClick?: () => void;
}
```

## License

This component is licensed under the [Proprietary License](../../LICENSE).
