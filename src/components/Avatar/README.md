# Avatar Component

The `Avatar` component is used to display a user's profile picture or initials. It supports custom sizes and fallback initials when no image is provided.

## Installation

To use the `Avatar` component, install the package:

```sh
npm install @saux/avatar
```

Then, import it into your project:

```jsx
import Avatar from '@saux/avatar';
```

## Usage

Here is an example of how to use the `Avatar` component:

```jsx
import React from 'react';
import Avatar from '@saux/avatar';

const App = () => (
  <div>
    <Avatar src="https://via.placeholder.com/150" alt="John Doe" size={50} />
    <Avatar alt="Jane Doe" size={50} />
  </div>
);

export default App;
```

## Props

The `Avatar` component accepts the following props:

| Prop        | Type     | Default     | Description                                                                    |
| ----------- | -------- | ----------- | ------------------------------------------------------------------------------ |
| `src`       | `string` | `undefined` | URL of the avatar image (optional).                                            |
| `alt`       | `string` | `'Avatar'`  | Alternate text for the avatar (used for fallback initials if no src provided). |
| `size`      | `number` | `40`        | The size (width and height in pixels) of the avatar.                           |
| `className` | `string` | `''`        | Optional extra className for custom styling.                                   |

## Customization

The `Avatar` component can be customized using the `src`, `alt`, `size`, and `className` props. If no `src` is provided, the component will display the initials extracted from the `alt` text.

## Example

```jsx
import React from 'react';
import Avatar from '@saux/avatar';

const App = () => (
  <div>
    <Avatar src="https://via.placeholder.com/150" alt="John Doe" size={50} />
    <Avatar alt="Jane Doe" size={50} />
    <Avatar alt="SingleName" size={50} />
    <Avatar size={50} />
  </div>
);

export default App;
```

## License

This component is licensed under the [Proprietary License](../../LICENSE).
