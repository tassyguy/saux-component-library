# Section Component

The `Section` component is used to create a section of content with an optional title and custom styling.

## Installation

To use the `Section` component, install the package:

```sh
npm install @saux/section
```

Then, import it into your project:

```jsx
import Section from '@saux/section';
```

## Usage

Here is an example of how to use the `Section` component:

```jsx
import React from 'react';
import Section from '@saux/section';

const App = () => (
  <div>
    <Section title="Section Title">
      <p>This is the content of the section.</p>
    </Section>
  </div>
);

export default App;
```

## Props

The `Section` component accepts the following props:

| Prop        | Type              | Default     | Description                                       |
| ----------- | ----------------- | ----------- | ------------------------------------------------- |
| `title`     | `string`          | `undefined` | Optional title to display as a header.            |
| `children`  | `React.ReactNode` | `undefined` | The content to be wrapped by the section.         |
| `className` | `string`          | `''`        | Optional additional CSS class for custom styling. |

## Customization

The `Section` component can be customized using the `title`, `children`, and `className` props. You can also provide custom styling through class names.

## Example

```jsx
import React from 'react';
import Section from '@saux/section';

const App = () => (
  <div>
    <Section title="Section Title" className="custom-section">
      <p>This is the content of the section.</p>
    </Section>
  </div>
);

export default App;
```

## License

This component is licensed under the [Proprietary License](../../LICENSE).
