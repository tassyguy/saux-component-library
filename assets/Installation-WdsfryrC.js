import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-BJaai1kI.js";import"./index-D8cwLQ8y.js";import{M as r}from"./index-DKXFAlD9.js";import"./index-DuZrfDUH.js";import"./_commonjsHelpers-CqkleIqs.js";import"./preview-DZSb5tyT.js";import"./iframe-BoyAFrAV.js";import"./DocsRenderer-CFRXHY34-BEWaL7yk.js";import"./react-18-D2JjEoAS.js";import"./index-BsNqBstw.js";import"./index-GeD_eG6w.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function o(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"Installation"}),`
`,n.jsx(e.h1,{id:"installation",children:"Installation"}),`
`,n.jsx(e.p,{children:"This guide explains how to install the SAUX component library in your project. The SAUX component library is available as a set of npm packages that you can install using your preferred package manager."}),`
`,n.jsx(e.h2,{id:"prerequisites",children:"Prerequisites"}),`
`,n.jsx(e.p,{children:"Before installing the SAUX component library, ensure that you have the following prerequisites:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Node.js (version 14 or higher)"}),`
`,n.jsx(e.li,{children:"npm or pnpm (version 6 or higher)"}),`
`]}),`
`,n.jsx(e.h2,{id:"using-npm",children:"Using npm"}),`
`,n.jsx(e.p,{children:"To install the SAUX component library using npm, run the following command:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-sh",children:`npm install @saux/button @saux/accordion @saux/dropdownmenu
`})}),`
`,n.jsx(e.h2,{id:"using-pnpm",children:"Using pnpm"}),`
`,n.jsx(e.p,{children:"To install the SAUX component library using pnpm, run the following command:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-sh",children:`pnpm add @saux/button @saux/accordion @saux/dropdownmenu
`})}),`
`,n.jsx(e.h2,{id:"importing-components",children:"Importing Components"}),`
`,n.jsx(e.p,{children:"After installing the SAUX component library, you can import and use the components in your project."}),`
`,n.jsx(e.h3,{id:"example",children:"Example"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import React from 'react';
import Button from '@saux/button';
import Accordion from '@saux/accordion';
import DropdownMenu from '@saux/dropdownmenu';

const App = () => (
  <div>
    <Button label="Click Me" onClick={() => alert('Button clicked!')} />
    <Accordion
      items={[
        { title: 'Item 1', content: <p>Content 1</p> },
        { title: 'Item 2', content: <p>Content 2</p> },
        { title: 'Item 3', content: <p>Content 3</p> },
      ]}
    />
    <DropdownMenu
      label="Menu"
      items={[
        { value: 'item1', label: 'Item 1' },
        { value: 'item2', label: 'Item 2' },
        { value: 'item3', label: 'Item 3' },
      ]}
    />
  </div>
);

export default App;
`})}),`
`,n.jsx(e.h2,{id:"using-with-a-theme-provider",children:"Using with a Theme Provider"}),`
`,n.jsxs(e.p,{children:["If your components rely on a theme provider, make sure to wrap your application with the ",n.jsx(e.code,{children:"ThemeProvider"})," component."]}),`
`,n.jsx(e.h3,{id:"example-1",children:"Example"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import React from 'react';
import { ThemeProvider } from '@saux/theme';
import Button from '@saux/button';
import Accordion from '@saux/accordion';
import DropdownMenu from '@saux/dropdownmenu';

const App = () => (
  <ThemeProvider>
    <div>
      <Button label="Click Me" onClick={() => alert('Button clicked!')} />
      <Accordion
        items={[
          { title: 'Item 1', content: <p>Content 1</p> },
          { title: 'Item 2', content: <p>Content 2</p> },
          { title: 'Item 3', content: <p>Content 3</p> },
        ]}
      />
      <DropdownMenu
        label="Menu"
        items={[
          { value: 'item1', label: 'Item 1' },
          { value: 'item2', label: 'Item 2' },
          { value: 'item3', label: 'Item 3' },
        ]}
      />
    </div>
  </ThemeProvider>
);

export default App;
`})}),`
`,n.jsx(e.h2,{id:"conclusion",children:"Conclusion"}),`
`,n.jsx(e.p,{children:"By following these steps, you can easily install and start using the SAUX component library in your project. For more information on how to use and customize the components, refer to the individual component documentation."})]})}function v(t={}){const{wrapper:e}={...i(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(o,{...t})}):o(t)}export{v as default};
