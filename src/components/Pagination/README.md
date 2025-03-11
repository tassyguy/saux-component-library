# Pagination Component

The `Pagination` component is used to navigate through pages of content. It supports custom styling and accessible labels.

## Installation

To use the `Pagination` component, install the package:

```sh
npm install @saux/pagination
```

Then, import it into your project:

```jsx
import Pagination from '@saux/pagination';
```

## Usage

Here is an example of how to use the `Pagination` component:

```jsx
import React, { useState } from 'react';
import Pagination from '@saux/pagination';

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default App;
```

## Props

The `Pagination` component accepts the following props:

| Prop            | Type                     | Default           | Description                                 |
| --------------- | ------------------------ | ----------------- | ------------------------------------------- |
| `currentPage`   | `number`                 | `1`               | The current active page.                    |
| `totalPages`    | `number`                 | `1`               | Total number of pages available.            |
| `onPageChange`  | `(page: number) => void` | `undefined`       | Callback function to change the page.       |
| `className`     | `string`                 | `''`              | Custom class name for additional styling.   |
| `style`         | `React.CSSProperties`    | `undefined`       | Inline styles for the pagination component. |
| `prevAriaLabel` | `string`                 | `'Previous page'` | Accessible label for the previous button.   |
| `nextAriaLabel` | `string`                 | `'Next page'`     | Accessible label for the next button.       |

## Customization

The `Pagination` component can be customized using the `className`, `style`, `prevAriaLabel`, and `nextAriaLabel` props. You can also provide custom styling through class names and inline styles.

## Example

```jsx
import React, { useState } from 'react';
import Pagination from '@saux/pagination';

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        className="custom-pagination"
        prevAriaLabel="Go to previous page"
        nextAriaLabel="Go to next page"
      />
    </div>
  );
};

export default App;
```

## License

This component is licensed under the [Proprietary License](../../LICENSE).
