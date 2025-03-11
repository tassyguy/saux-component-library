# Modal Component

The `Modal` component is used to display a dialog or popup window that overlays the main content. It supports custom sizes, titles, and can be closed by clicking the overlay or a close button.

## Installation

To use the `Modal` component, install the package:

```sh
npm install @saux/modal
```

Then, import it into your project:

```jsx
import Modal from '@saux/modal';
```

## Usage

Here is an example of how to use the `Modal` component:

```jsx
import React, { useState } from 'react';
import Modal from '@saux/modal';
import Button from '@saux/button';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div>
      <Button label="Open Modal" onClick={handleOpen} />
      <Modal
        open={isOpen}
        onClose={handleClose}
        title="Modal Title"
        size="medium"
      >
        <p>This is the modal content.</p>
      </Modal>
    </div>
  );
};

export default App;
```

## Props

The `Modal` component accepts the following props:

| Prop                  | Type                             | Default     | Description                                          |
| --------------------- | -------------------------------- | ----------- | ---------------------------------------------------- |
| `open`                | `boolean`                        | `false`     | Whether the modal is open.                           |
| `onClose`             | `() => void`                     | `undefined` | Callback triggered when the modal should be closed.  |
| `title`               | `string`                         | `undefined` | Optional title to display in the header.             |
| `children`            | `React.ReactNode`                | `undefined` | The modal body content.                              |
| `closeOnOverlayClick` | `boolean`                        | `true`      | Whether clicking the overlay should close the modal. |
| `size`                | `'small' \| 'medium' \| 'large'` | `'medium'`  | Optional size of the modal.                          |

## Customization

The `Modal` component can be customized using the `title`, `children`, `closeOnOverlayClick`, and `size` props. You can also provide custom styling through class names and inline styles.

## Example

```jsx
import React, { useState } from 'react';
import Modal from '@saux/modal';
import Button from '@saux/button';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div>
      <Button label="Open Modal" onClick={handleOpen} />
      <Modal
        open={isOpen}
        onClose={handleClose}
        title="Modal Title"
        size="large"
      >
        <p>This is the modal content.</p>
        <Button label="Close" onClick={handleClose} />
      </Modal>
    </div>
  );
};

export default App;
```

## License

This component is licensed under the [Proprietary License](../../LICENSE).
