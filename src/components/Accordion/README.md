# Accordion Component

The `Accordion` component is used to display a list of items that can be expanded or collapsed to show or hide content. It supports multiple open items and custom icons.

## Installation

To use the `Accordion` component, install the package:

```sh
npm install @saux/accordion
```

Then, import it into your project:

```jsx
import Accordion from '@saux/accordion';
```

## Usage

Here is an example of how to use the `Accordion` component:

```jsx
import React from 'react';
import Accordion from '@saux/accordion';

const App = () => {
  const items = [
    {
      title: 'Item 1',
      content: <p>This is the content for item 1.</p>,
    },
    {
      title: 'Item 2',
      content: <p>This is the content for item 2.</p>,
    },
    {
      title: 'Item 3',
      content: <p>This is the content for item 3.</p>,
    },
  ];

  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};

export default App;
```

## Props

The `Accordion` component accepts the following props:

| Prop               | Type              | Default | Description                                           |
| ------------------ | ----------------- | ------- | ----------------------------------------------------- |
| `items`            | `AccordionItem[]` | `[]`    | An array of accordion items to display.               |
| `defaultOpenIndex` | `number \| null`  | `null`  | The index of the item that should be open by default. |
| `allowMultiple`    | `boolean`         | `false` | Whether multiple items can be open at the same time.  |

## AccordionItem

The `AccordionItem` type is defined as follows:

```ts
export interface AccordionItem {
  title: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
}
```

## Customization

The `Accordion` component can be customized using the `items`, `defaultOpenIndex`, and `allowMultiple` props. Each item can include a title, content, and an optional icon.

## Example

```jsx
import React from 'react';
import Accordion from '@saux/accordion';
import { ChevronDown, ChevronRight } from 'react-feather';

const App = () => {
  const items = [
    {
      title: 'Item 1',
      content: <p>This is the content for item 1.</p>,
      icon: <ChevronRight />,
    },
    {
      title: 'Item 2',
      content: <p>This is the content for item 2.</p>,
      icon: <ChevronDown />,
    },
    {
      title: 'Item 3',
      content: <p>This is the content for item 3.</p>,
    },
  ];

  return (
    <div>
      <Accordion items={items} defaultOpenIndex={0} allowMultiple={true} />
    </div>
  );
};

export default App;
```

## License

This component is licensed under the [Proprietary License](../../LICENSE).
