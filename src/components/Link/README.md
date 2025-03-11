# Link Component

The `Link` component is used to create hyperlinks with customizable styles and behaviors. It supports various attributes such as target, rel, and aria-label for accessibility.

## Installation

To use the `Link` component, install the package:

```sh
npm install @saux/link
```

Then, import it into your project:

```jsx
import Link from '@saux/link';
```

## Usage

Here is an example of how to use the `Link` component:

```jsx
import React from 'react';
import Link from '@saux/link';

const App = () => (
  <div>
    <Link
      href="https://www.example.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      Visit Example
    </Link>
  </div>
);

export default App;
```

## Props

The `Link` component accepts the following props:

| Prop        | Type                                         | Default     | Description                                                                      |
| ----------- | -------------------------------------------- | ----------- | -------------------------------------------------------------------------------- |
| `label`     | `string`                                     | `undefined` | The text to display inside the link.                                             |
| `href`      | `string`                                     | `''`        | The URL that the hyperlink points to.                                            |
| `onClick`   | `() => void`                                 | `undefined` | Callback triggered when the link is clicked.                                     |
| `target`    | `'_blank' \| '_self' \| '_parent' \| '_top'` | `'_self'`   | Specifies where to open the linked document.                                     |
| `rel`       | `string`                                     | `undefined` | Specifies the relationship between the current document and the linked document. |
| `className` | `string`                                     | `''`        | Additional class name for custom styling.                                        |
| `style`     | `React.CSSProperties`                        | `undefined` | Inline styles for the link.                                                      |
| `children`  | `React.ReactNode`                            | `undefined` | The content to be displayed inside the link.                                     |
| `ariaLabel` | `string`                                     | `undefined` | Accessible label for the link.                                                   |

## Customization

The `Link` component can be customized using the `label`, `href`, `onClick`, `target`, `rel`, `className`, `style`, `children`, and `ariaLabel` props. You can also provide custom styling through class names and inline styles.

## Example

```jsx
import React from 'react';
import Link from '@saux/link';

const App = () => (
  <div>
    <Link
      href="https://www.example.com"
      target="_blank"
      rel="noopener noreferrer"
      className="custom-link"
    >
      Visit Example
    </Link>
    <Link href="https://www.example.com" ariaLabel="Example Link">
      <span role="img" aria-label="link">
        🔗
      </span>{' '}
      Example with Icon
    </Link>
  </div>
);

export default App;
```

## License

This component is licensed under the [Proprietary License](../../LICENSE).
