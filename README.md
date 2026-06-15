# saux-component-library

A React 19 + TypeScript component library, organized as a pnpm-workspace monorepo where every component is its own package under `src/components/*`.

Live Storybook: <https://tassyguy.github.io/saux-component-library>

## Usage

Components are consumed through the top-level barrel:

```tsx
import {
  Button,
  Modal,
  InputField,
  ThemeProvider,
} from 'saux-component-library';

const App = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <ThemeProvider>
      <Button label="Open Modal" onClick={() => setIsModalOpen(true)} />
      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Example Modal"
      >
        <InputField placeholder="Enter text" />
      </Modal>
    </ThemeProvider>
  );
};
```

Wrap the app in `ThemeProvider` once at the root. It manages light/dark/high-contrast state and publishes design tokens as CSS custom properties on `:root`, which every component's stylesheet reads via `var(--token-name)`.

## Components

Layout: `Container`, `Grid`, `GridItem`, `Section`, `Sidebar`

Navigation: `Header`, `NavBar`, `Breadcrumb`, `Footer`, `Pagination`, `Stepper`, `DropdownMenu`

Forms: `Form`, `FormGroup`, `InputField`, `TextArea`, `SelectInput`, `CheckRadio`, `ToggleSwitch`, `SliderInput`, `DatePicker`, `FileUpload`

UI / feedback: `Button`, `Link`, `Card`, `Modal`, `Tooltip`, `Alert`, `ToastNotification`, `Badge`, `Chip`, `Avatar`, `ProgressBar`, `Accordion`

Data display: `Table`, `List`, `OrderedList`, `UnorderedList`

Typography: `H1`, `H2`, `H3`, `H4`, `H5`

Theming: `ThemeProvider`, `useTheme`

The full export surface lives in [src/components/index.ts](src/components/index.ts). Each component also exports its `<Name>Props` type.

## Development

Requires Node 20 and pnpm.

```sh
pnpm install
pnpm storybook        # dev server on http://localhost:6006
pnpm build            # recursive build across every component package
pnpm build-storybook  # static Storybook site -> storybook-static/
pnpm deploy-storybook # build + publish to GitHub Pages
```

Tests run per-component package via Jest. From a component directory:

```sh
cd src/components/Button
pnpm test
```

### Repo layout

Each component is a self-contained package:

```
src/components/<Name>/
  index.ts           # re-exports default + Props
  package.json       # @saux/<name>
  src/
    <Name>.tsx
    <Name>.css
    <Name>.stories.tsx
    <Name>.test.tsx
```

Cross-component imports use the workspace alias (e.g. `@saux/theme`), not relative paths. `src/components/_GenericComponent/` is the scaffold to copy when adding a new component.

### Docker

```sh
docker-compose up --build
```

Full Docker workflow is documented in [DOCKER_SETUP.md](DOCKER_SETUP.md).

## License

Proprietary. See [LICENSE](LICENSE).
