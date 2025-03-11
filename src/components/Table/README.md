# Table Component

The `Table` component is used to display tabular data with customizable columns and rows.

## Installation

To use the `Table` component, install the package:

```sh
npm install @saux/table
```

Then, import it into your project:

```jsx
import Table from '@saux/table';
```

## Usage

Here is an example of how to use the `Table` component:

```jsx
import React from 'react';
import Table from '@saux/table';

const columns = [
  { header: 'Name', accessor: 'name' },
  { header: 'Age', accessor: 'age' },
  { header: 'Email', accessor: 'email' },
];

const data = [
  { name: 'John Doe', age: 28, email: 'john@example.com' },
  { name: 'Jane Smith', age: 34, email: 'jane@example.com' },
];

const App = () => (
  <div>
    <Table columns={columns} data={data} />
  </div>
);

export default App;
```

## Props

The `Table` component accepts the following props:

| Prop      | Type       | Default | Description                          |
| --------- | ---------- | ------- | ------------------------------------ |
| `columns` | `Column[]` | `[]`    | An array of column definitions.      |
| `data`    | `any[]`    | `[]`    | An array of data objects to display. |

## Column

The `Column` type is defined as follows:

```ts
export interface Column {
  header: string;
  accessor: string;
}
```

## License

This component is licensed under the [Proprietary License](../../LICENSE).
