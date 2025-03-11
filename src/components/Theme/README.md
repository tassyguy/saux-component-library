# ThemeProvider Component

The `ThemeProvider` component is used to provide theme context to your application, allowing for easy theme switching and high contrast mode.

## Installation

To use the `ThemeProvider` component, install the package:

```sh
npm install @saux/theme
```

Then, import it into your project:

```jsx
import { ThemeProvider, useTheme } from '@saux/theme';
```

## Usage

Here is an example of how to use the `ThemeProvider` component:

```jsx
import React from 'react';
import { ThemeProvider, useTheme } from '@saux/theme';
import Button from '@saux/button';

const App = () => {
  const { toggleTheme, toggleHighContrast } = useTheme();

  return (
    <ThemeProvider>
      <div>
        <Button label="Toggle Theme" onClick={toggleTheme} />
        <Button label="Toggle High Contrast" onClick={toggleHighContrast} />
      </div>
    </ThemeProvider>
  );
};

export default App;
```

## Props

The `ThemeProvider` component accepts the following props:

| Prop       | Type              | Default     | Description                                      |
| ---------- | ----------------- | ----------- | ------------------------------------------------ |
| `children` | `React.ReactNode` | `undefined` | The content to be wrapped by the theme provider. |

## Customization

The `ThemeProvider` component can be customized using the `toggleTheme` and `toggleHighContrast` functions provided by the `useTheme` hook.

## Example

```jsx
import React from 'react';
import { ThemeProvider, useTheme } from '@saux/theme';
import Button from '@saux/button';

const App = () => {
  const { toggleTheme, toggleHighContrast } = useTheme();

  return (
    <ThemeProvider>
      <div>
        <Button label="Toggle Theme" onClick={toggleTheme} />
        <Button label="Toggle High Contrast" onClick={toggleHighContrast} />
      </div>
    </ThemeProvider>
  );
};

export default App;
```

## License

This component is licensed under the [Proprietary License](../../LICENSE).
