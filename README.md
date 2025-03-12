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

```
saux-component-library
├─ .hintrc
├─ .nojekyll
├─ .nvmrc
├─ .prettierignore
├─ .prettierrc
├─ .storybook
│  ├─ main.ts
│  ├─ manager.ts
│  └─ preview.tsx
├─ LICENSE
├─ README.md
├─ lerna.json
├─ package-lock.json
├─ package.json
├─ rollup.config.js
├─ src
│  ├─ components
│  │  ├─ .DS_Store
│  │  ├─ Accordion
│  │  │  ├─ README.md
│  │  │  ├─ index.ts
│  │  │  ├─ package.json
│  │  │  └─ src
│  │  │     ├─ Accordion.css
│  │  │     ├─ Accordion.stories.tsx
│  │  │     └─ Accordion.tsx
│  │  ├─ Alert
│  │  │  ├─ README.md
│  │  │  ├─ index.ts
│  │  │  ├─ package.json
│  │  │  └─ src
│  │  │     ├─ Alert.css
│  │  │     ├─ Alert.stories.tsx
│  │  │     └─ Alert.tsx
│  │  ├─ Avatar
│  │  │  ├─ README.md
│  │  │  ├─ index.ts
│  │  │  ├─ package.json
│  │  │  └─ src
│  │  │     ├─ Avatar.css
│  │  │     ├─ Avatar.stories.tsx
│  │  │     └─ Avatar.tsx
│  │  ├─ Badge
│  │  │  ├─ README.md
│  │  │  ├─ index.ts
│  │  │  ├─ package.json
│  │  │  └─ src
│  │  │     ├─ Badge.css
│  │  │     ├─ Badge.stories.tsx
│  │  │     └─ Badge.tsx
│  │  ├─ Breadcrumb
│  │  │  ├─ README.md
│  │  │  ├─ index.ts
│  │  │  ├─ package.json
│  │  │  └─ src
│  │  │     ├─ Breadcrumb.css
│  │  │     ├─ Breadcrumb.stories.tsx
│  │  │     └─ Breadcrumb.tsx
│  │  ├─ Button
│  │  │  ├─ README.md
│  │  │  ├─ index.ts
│  │  │  ├─ package.json
│  │  │  └─ src
│  │  │     ├─ Button.css
│  │  │     ├─ Button.stories.tsx
│  │  │     ├─ Button.test.tsx
│  │  │     └─ Button.tsx
│  │  ├─ Card
│  │  │  ├─ README.md
│  │  │  ├─ index.ts
│  │  │  ├─ package.json
│  │  │  └─ src
│  │  │     ├─ Card.css
│  │  │     ├─ Card.stories.tsx
│  │  │     └─ Card.tsx
│  │  ├─ CheckRadio
│  │  │  ├─ README.md
│  │  │  ├─ index.ts
│  │  │  ├─ package.json
│  │  │  └─ src
│  │  │     ├─ CheckRadio.css
│  │  │     ├─ CheckRadio.stories.tsx
│  │  │     └─ CheckRadio.tsx
│  │  ├─ Container
│  │  │  ├─ README.md
│  │  │  ├─ index.ts
│  │  │  ├─ package.json
│  │  │  └─ src
│  │  │     ├─ Container.css
│  │  │     ├─ Container.stories.tsx
│  │  │     └─ Container.tsx
│  │  ├─ DropdownMenu
│  │  │  ├─ README.md
│  │  │  ├─ index.ts
│  │  │  ├─ package.json
│  │  │  └─ src
│  │  │     ├─ DropdownMenu.css
│  │  │     ├─ DropdownMenu.stories.tsx
│  │  │     └─ DropdownMenu.tsx
│  │  ├─ Footer
│  │  │  ├─ README.md
│  │  │  ├─ index.ts
│  │  │  ├─ package.json
│  │  │  └─ src
│  │  │     ├─ Footer.css
│  │  │     ├─ Footer.stories.tsx
│  │  │     └─ Footer.tsx
│  │  ├─ Form
│  │  │  ├─ README.md
│  │  │  ├─ index.ts
│  │  │  ├─ package.json
│  │  │  └─ src
│  │  │     ├─ Form.css
│  │  │     ├─ Form.stories.tsx
│  │  │     ├─ Form.tsx
│  │  │     ├─ FormGroup.css
│  │  │     └─ FormGroup.tsx
│  │  ├─ Grid
│  │  │  ├─ README.md
│  │  │  ├─ index.ts
│  │  │  ├─ package.json
│  │  │  └─ src
│  │  │     ├─ Grid.css
│  │  │     ├─ Grid.stories.tsx
│  │  │     ├─ Grid.tsx
│  │  │     ├─ GridItem.css
│  │  │     └─ GridItem.tsx
│  │  ├─ Header
│  │  │  ├─ README.md
│  │  │  ├─ index.ts
│  │  │  ├─ package.json
│  │  │  └─ src
│  │  │     ├─ H1.tsx
│  │  │     ├─ H2.tsx
│  │  │     ├─ H3.tsx
│  │  │     ├─ H4.tsx
│  │  │     ├─ H5.tsx
│  │  │     ├─ Header.css
│  │  │     ├─ Header.stories.tsx
│  │  │     └─ Header.tsx
│  │  ├─ InputField
│  │  │  ├─ README.md
│  │  │  ├─ index.ts
│  │  │  ├─ package.json
│  │  │  └─ src
│  │  │     ├─ InputField.css
│  │  │     ├─ InputField.stories.tsx
│  │  │     └─ InputField.tsx
│  │  ├─ Link
│  │  │  ├─ README.md
│  │  │  ├─ index.ts
│  │  │  ├─ package.json
│  │  │  └─ src
│  │  │     ├─ Link.css
│  │  │     ├─ Link.stories.tsx
│  │  │     └─ Link.tsx
│  │  ├─ List
│  │  │  ├─ README.md
│  │  │  ├─ index.ts
│  │  │  ├─ package.json
│  │  │  └─ src
│  │  │     ├─ List.css
│  │  │     ├─ List.stories.tsx
│  │  │     ├─ List.tsx
│  │  │     ├─ OL.tsx
│  │  │     └─ UL.tsx
│  │  ├─ Modal
│  │  │  ├─ README.md
│  │  │  ├─ index.ts
│  │  │  ├─ package.json
│  │  │  └─ src
│  │  │     ├─ Modal.css
│  │  │     ├─ Modal.stories.tsx
│  │  │     └─ Modal.tsx
│  │  ├─ Pagination
│  │  │  ├─ README.md
│  │  │  ├─ index.ts
│  │  │  ├─ package.json
│  │  │  └─ src
│  │  │     ├─ Pagination.css
│  │  │     ├─ Pagination.stories.tsx
│  │  │     └─ Pagination.tsx
│  │  ├─ Section
│  │  │  ├─ README.md
│  │  │  ├─ index.ts
│  │  │  ├─ package.json
│  │  │  └─ src
│  │  │     ├─ Section.css
│  │  │     ├─ Section.stories.tsx
│  │  │     └─ Section.tsx
│  │  ├─ SelectInput
│  │  │  ├─ README.md
│  │  │  ├─ index.ts
│  │  │  ├─ package.json
│  │  │  └─ src
│  │  │     ├─ SelectInput.css
│  │  │     ├─ SelectInput.stories.tsx
│  │  │     └─ SelectInput.tsx
│  │  ├─ Sidebar
│  │  │  ├─ README.md
│  │  │  ├─ index.ts
│  │  │  ├─ package.json
│  │  │  └─ src
│  │  │     ├─ Sidebar.css
│  │  │     ├─ Sidebar.stories.tsx
│  │  │     └─ Sidebar.tsx
│  │  ├─ Table
│  │  │  ├─ README.md
│  │  │  ├─ index.ts
│  │  │  ├─ package.json
│  │  │  └─ src
│  │  │     ├─ Table.css
│  │  │     ├─ Table.stories.tsx
│  │  │     └─ Table.tsx
│  │  ├─ TextArea
│  │  │  ├─ README.md
│  │  │  ├─ index.ts
│  │  │  ├─ package.json
│  │  │  └─ src
│  │  │     ├─ TextArea.css
│  │  │     ├─ TextArea.stories.tsx
│  │  │     └─ TextArea.tsx
│  │  ├─ Theme
│  │  │  ├─ README.md
│  │  │  ├─ index.ts
│  │  │  ├─ package.json
│  │  │  └─ src
│  │  │     └─ ThemeProvider.tsx
│  │  ├─ ToggleSwitch
│  │  │  ├─ README.md
│  │  │  ├─ index.ts
│  │  │  ├─ package.json
│  │  │  └─ src
│  │  │     ├─ ToggleSwitch.css
│  │  │     ├─ ToggleSwitch.stories.tsx
│  │  │     └─ ToggleSwitch.tsx
│  │  ├─ Tooltip
│  │  │  ├─ README.md
│  │  │  ├─ index.ts
│  │  │  ├─ package.json
│  │  │  └─ src
│  │  │     ├─ Tooltip.css
│  │  │     ├─ Tooltip.stories.tsx
│  │  │     └─ Tooltip.tsx
│  │  ├─ _GenericComponent
│  │  │  ├─ index.ts
│  │  │  ├─ package.json
│  │  │  └─ src
│  │  │     ├─ GenericComponent.css
│  │  │     ├─ GenericComponent.stories.tsx
│  │  │     ├─ GenericComponent.test.tsx
│  │  │     └─ GenericComponent.tsx
│  │  └─ index.ts
│  ├─ global.css
│  ├─ index.tsx
│  └─ stories
│     ├─ About.mdx
│     └─ samplePages
│        ├─ Dashboard.stories.tsx
│        ├─ Resturant.stories.tsx
│        └─ StyleGuide.stories.tsx
├─ storybook-static
│  ├─ .nojekyll
│  ├─ assets
│  │  ├─ About-DZPPg3zJ.js
│  │  ├─ Accordion-1cSTl3tI.js
│  │  ├─ Accordion-CYl_xDuL.css
│  │  ├─ Accordion.stories-BAgNTVCW.js
│  │  ├─ Alert-DFfxWn0-.css
│  │  ├─ Alert-DfPrbN5E.js
│  │  ├─ Alert.stories-DUI2AqPD.js
│  │  ├─ Avatar-B-zyyiLR.css
│  │  ├─ Avatar-D6MWNgeY.js
│  │  ├─ Avatar.stories-BtFuZy9S.js
│  │  ├─ Badge-I_zC6lPQ.js
│  │  ├─ Badge-uDwsVKQN.css
│  │  ├─ Badge.stories-lx_OyAMk.js
│  │  ├─ Breadcrumb-C4eao5jh.js
│  │  ├─ Breadcrumb-DNru7QJQ.css
│  │  ├─ Breadcrumb.stories-C0DSTE8s.js
│  │  ├─ Button-DzVHr0oo.js
│  │  ├─ Button-tluU6T6T.css
│  │  ├─ Button.stories-B_czNKSe.js
│  │  ├─ Card-CFrvHzLW.css
│  │  ├─ Card-DFJ6yYOE.js
│  │  ├─ Card.stories-DmvT754z.js
│  │  ├─ CheckRadio-BOKvOcXb.css
│  │  ├─ CheckRadio-D__1AGvv.js
│  │  ├─ CheckRadio.stories-CGSTXSCt.js
│  │  ├─ Color-YHDXOIA2-CudDKKEm.js
│  │  ├─ Container-BaKh-NF9.js
│  │  ├─ Container-DvtIXcSz.css
│  │  ├─ Container.stories--Rw720z8.js
│  │  ├─ Dashboard.stories-B_90zhoJ.js
│  │  ├─ DocsRenderer-CFRXHY34-DqjQXlQQ.js
│  │  ├─ DropdownMenu-BVSX-5X-.js
│  │  ├─ DropdownMenu-Bhv5sfnC.css
│  │  ├─ DropdownMenu.stories-A7TNkGLp.js
│  │  ├─ Footer-BJOiXdRg.css
│  │  ├─ Footer-CDO3S1q7.js
│  │  ├─ Footer.stories-B3CaHF1T.js
│  │  ├─ Form.stories-nlivSHT4.js
│  │  ├─ FormGroup-DIPCzEVb.js
│  │  ├─ FormGroup-DV8Mlqa-.css
│  │  ├─ GenericComponent-DiBqb0OT.css
│  │  ├─ GenericComponent.stories-Be2rGgwB.js
│  │  ├─ Grid-BeR3Xgaf.css
│  │  ├─ Grid-BjpqUy2z.css
│  │  ├─ Grid-ClPR_fop.js
│  │  ├─ Grid.stories-BCVhTM7k.js
│  │  ├─ H5-CNb8bXId.js
│  │  ├─ H5-dAWiXWJk.css
│  │  ├─ Header.stories-C4m9MzcH.js
│  │  ├─ InputField-BeL4oBDu.js
│  │  ├─ InputField-CFA5Be-q.css
│  │  ├─ InputField.stories-CfVOp3vH.js
│  │  ├─ Link-BddUE4Mn.js
│  │  ├─ Link-DZmYD_7C.css
│  │  ├─ Link.stories-CuPVr1kG.js
│  │  ├─ List.stories-cfJ-I8Bd.js
│  │  ├─ Modal-BdvBtfr4.css
│  │  ├─ Modal-Bi7l_IbE.js
│  │  ├─ Modal.stories-zqts8zjK.js
│  │  ├─ Pagination-Ah8tRkod.css
│  │  ├─ Pagination-C0PIm8hu.js
│  │  ├─ Pagination.stories-CiP7lDF3.js
│  │  ├─ Resturant.stories-MeJi6lul.js
│  │  ├─ Section-CjxhfzDi.js
│  │  ├─ Section-TfQNZUnl.css
│  │  ├─ Section.stories-BAjjzxuH.js
│  │  ├─ SelectInput-DN22wjdY.js
│  │  ├─ SelectInput-afOlMnmT.css
│  │  ├─ SelectInput.stories-CHZnoL15.js
│  │  ├─ Sidebar-DPT9CS4f.css
│  │  ├─ Sidebar-ECg5V6zZ.js
│  │  ├─ Sidebar.stories-DrqGA5Za.js
│  │  ├─ StyleGuide.stories-DOo6J0fr.js
│  │  ├─ Table-BvFCH55e.css
│  │  ├─ Table-CHundMlw.js
│  │  ├─ Table.stories-DaJ1IV3O.js
│  │  ├─ TextArea-C3wGQDKz.js
│  │  ├─ TextArea-CguOYHmQ.css
│  │  ├─ TextArea.stories-C64kYaZt.js
│  │  ├─ ThemeProvider-BHYIqhqM.css
│  │  ├─ ThemeProvider-CU-Py9wx.js
│  │  ├─ ToggleSwitch-AXqZ_mB4.js
│  │  ├─ ToggleSwitch-BBFdz0r9.css
│  │  ├─ ToggleSwitch.stories-Dciqr2Nm.js
│  │  ├─ Tooltip-BYiIlgIG.js
│  │  ├─ Tooltip-DNHBOPAn.css
│  │  ├─ Tooltip.stories-Nve8Hk2l.js
│  │  ├─ UL-Dw8jzxtu.js
│  │  ├─ UL-a94CnP1D.css
│  │  ├─ _commonjsHelpers-CqkleIqs.js
│  │  ├─ axe-CGjeO0Ii.js
│  │  ├─ check-circle-Dn7Wk6ES.js
│  │  ├─ chunk-XP5HYGXS-D5tuasO7.js
│  │  ├─ entry-preview-CG5SiYNy.js
│  │  ├─ entry-preview-docs-CyA1gb30.js
│  │  ├─ iframe-DON0IW9x.js
│  │  ├─ index-7b2LOGU-.js
│  │  ├─ index-BZISi7jw.js
│  │  ├─ index-BtkQkHPN.js
│  │  ├─ index-C0qn59OO.js
│  │  ├─ index-CXQShRbs.js
│  │  ├─ index-Co38GRlK.js
│  │  ├─ index-CpAg5RxO.js
│  │  ├─ index-D0pgMumq.js
│  │  ├─ index-D8d2bdkj.js
│  │  ├─ index-DrFu-skq.js
│  │  ├─ info-BoNS8PXy.js
│  │  ├─ jsx-runtime-D_zvdyIk.js
│  │  ├─ mail-DYXyPiVS.js
│  │  ├─ matchers-57EZJSQE-oeXCqs4p.js
│  │  ├─ preview-B8lJiyuQ.js
│  │  ├─ preview-BBEKhNQ7.js
│  │  ├─ preview-BBWR9nbA.js
│  │  ├─ preview-BRf8hcne.js
│  │  ├─ preview-BWzBA1C2.js
│  │  ├─ preview-CKLQq7Kg.js
│  │  ├─ preview-CvbIS5ZJ.js
│  │  ├─ preview-D4Dh08zg.js
│  │  ├─ preview-DGUiP6tS.js
│  │  ├─ react-18-CqRie3Oa.js
│  │  └─ user-BiLvmNRj.js
│  ├─ favicon.svg
│  ├─ iframe.html
│  ├─ index.html
│  ├─ index.json
│  ├─ nunito-sans-bold-italic.woff2
│  ├─ nunito-sans-bold.woff2
│  ├─ nunito-sans-italic.woff2
│  ├─ nunito-sans-regular.woff2
│  ├─ project.json
│  ├─ sb-addons
│  │  ├─ a11y-8
│  │  │  └─ manager-bundle.js
│  │  ├─ docs-9
│  │  │  └─ manager-bundle.js
│  │  ├─ essentials-backgrounds-2
│  │  │  └─ manager-bundle.js
│  │  ├─ essentials-controls-1
│  │  │  └─ manager-bundle.js
│  │  ├─ essentials-measure-5
│  │  │  └─ manager-bundle.js
│  │  ├─ essentials-outline-6
│  │  │  └─ manager-bundle.js
│  │  ├─ essentials-toolbars-4
│  │  │  └─ manager-bundle.js
│  │  ├─ essentials-viewport-3
│  │  │  └─ manager-bundle.js
│  │  ├─ interactions-10
│  │  │  └─ manager-bundle.js
│  │  ├─ onboarding-11
│  │  │  └─ manager-bundle.js
│  │  ├─ storybook-13
│  │  │  └─ manager-bundle.js
│  │  ├─ storybook-core-core-server-presets-0
│  │  │  └─ common-manager-bundle.js
│  │  ├─ storybook-dark-mode-esm-preset-7
│  │  │  └─ manager-bundle.js
│  │  └─ storysource-12
│  │     └─ manager-bundle.js
│  ├─ sb-common-assets
│  │  ├─ favicon.svg
│  │  ├─ nunito-sans-bold-italic.woff2
│  │  ├─ nunito-sans-bold.woff2
│  │  ├─ nunito-sans-italic.woff2
│  │  └─ nunito-sans-regular.woff2
│  └─ sb-manager
│     ├─ globals-module-info.js
│     ├─ globals-runtime.js
│     ├─ globals.js
│     └─ runtime.js
├─ tsconfig.json
└─ vite.config.ts

```