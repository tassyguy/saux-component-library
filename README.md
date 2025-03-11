# saux-component-library

Monorepo for SAUX component library

## Overview

The SAUX component library is a collection of reusable React components designed to help you build modern and responsive web applications. This monorepo contains all the components, utilities, and themes used in the library.

## Installation

To install the entire SAUX component library, you can use the following command:

```sh
npm install @saux/component-library
```

## Usage

After installing the library, you can import and use the components in your project. Here is an example of how to use some of the components:

```jsx
import React from 'react';
import {
  Button,
  Modal,
  InputField,
  ThemeProvider,
} from '@saux/component-library';

const App = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <ThemeProvider>
      <div>
        <Button label="Open Modal" onClick={handleOpenModal} />
        <Modal
          open={isModalOpen}
          onClose={handleCloseModal}
          title="Example Modal"
        >
          <p>This is an example modal.</p>
          <InputField placeholder="Enter text" />
        </Modal>
      </div>
    </ThemeProvider>
  );
};

export default App;
```

## Components

The SAUX component library includes the following components:

- `Accordion`
- `Alert`
- `Avatar`
- `Badge`
- `Breadcrumb`
- `Button`
- `Card`
- `CheckRadio`
- `Container`
- `DropdownMenu`
- `Footer`
- `Form`
- `FormGroup`
- `Grid`
- `GridItem`
- `Header`
- `H1`, `H2`, `H3`, `H4`, `H5`
- `InputField`
- `Link`
- `List`
- `UnorderedList`
- `OrderedList`
- `Modal`
- `Pagination`
- `Section`
- `SelectInput`
- `Sidebar`
- `Table`
- `TextArea`
- `ThemeProvider`
- `ToggleSwitch`
- `Tooltip`

## Development

To contribute to the SAUX component library, follow these steps:

1. Clone the repository:

   ```sh
   git clone https://github.com/tassyguy/saux-component-library.git
   ```

2. Navigate to the project directory:

   ```sh
   cd saux-component-library
   ```

3. Install dependencies:

   ```sh
   npm install
   ```

4. Run the Storybook instance:
   ```sh
   npm run storybook
   ```

## License

This component library is licensed under the [Proprietary License](./LICENSE).

## Contributing

We welcome contributions to the SAUX component library! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request.

## Contact

For any questions or inquiries, please contact us.
