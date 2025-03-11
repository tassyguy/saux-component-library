# Card Component

The `Card` component is used to display a collection of items in a card layout. Each card can include a title, description, image, and an optional click handler.

## Installation

To use the `Card` component, install the package:

```sh
npm install @saux/card
```

Then, import it into your project:

```jsx
import Card from '@saux/card';
```

## Usage

Here is an example of how to use the `Card` component:

```jsx
import React from 'react';
import Card from '@saux/card';

const App = () => {
  const items = [
    {
      title: 'Card 1',
      description: 'This is the description for card 1.',
      imageUrl: 'https://via.placeholder.com/150',
      onClick: () => alert('Card 1 clicked'),
    },
    {
      title: 'Card 2',
      description: 'This is the description for card 2.',
      imageUrl: 'https://via.placeholder.com/150',
      onClick: () => alert('Card 2 clicked'),
    },
    {
      title: 'Card 3',
      description: 'This is the description for card 3.',
      imageUrl: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <div>
      <Card items={items} />
    </div>
  );
};

export default App;
```

## Props

The `Card` component accepts the following props:

| Prop    | Type         | Default | Description                        |
| ------- | ------------ | ------- | ---------------------------------- |
| `items` | `CardItem[]` | `[]`    | An array of card items to display. |

## CardItem

The `CardItem` type is defined as follows:

```ts
export interface CardItem {
  title: string;
  description: string;
  imageUrl?: string;
  onClick?: () => void;
}
```

## Customization

The `Card` component can be customized using the `items` prop. Each item can include a title, description, image, and an optional click handler.

## Example

```jsx
import React from 'react';
import Card from '@saux/card';

const App = () => {
  const items = [
    {
      title: 'Card 1',
      description: 'This is the description for card 1.',
      imageUrl: 'https://via.placeholder.com/150',
      onClick: () => alert('Card 1 clicked'),
    },
    {
      title: 'Card 2',
      description: 'This is the description for card 2.',
      imageUrl: 'https://via.placeholder.com/150',
      onClick: () => alert('Card 2 clicked'),
    },
    {
      title: 'Card 3',
      description: 'This is the description for card 3.',
      imageUrl: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <div>
      <Card items={items} />
    </div>
  );
};

export default App;
```

## License

This component is licensed under the [Proprietary License](../../LICENSE).
