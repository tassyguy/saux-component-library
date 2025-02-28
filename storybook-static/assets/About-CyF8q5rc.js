import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as t}from"./index-CePRvBtH.js";import{M as i}from"./index-BQ6Sh2Vp.js";import"./index-DmM0KDA7.js";import"./iframe-cJ7TWG0R.js";import"./index-nLeaPAJ8.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function r(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"About"}),`
`,n.jsx(e.h1,{id:"about-this-component-library",children:"About This Component Library"}),`
`,n.jsxs(e.p,{children:["Welcome to the ",n.jsx(e.strong,{children:"saux-component-library"}),"! This library provides a collection of reusable React components designed to help you build modern web applications with ease."]}),`
`,n.jsx(e.h2,{id:"components",children:"Components"}),`
`,n.jsx(e.p,{children:"Here are some of the components included in this library:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Button"}),": A customizable button component."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Link"}),": A link component with optional click handling."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Card"}),": A card component for displaying content in a card layout."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Accordion"}),": An accordion component for collapsible content sections."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Table"}),": A table component for displaying tabular data."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Headers"}),": Header components (H1 to H5) for different heading levels."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Lists"}),": Unordered and ordered list components."]}),`
`]}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.p,{children:"To use these components in your project, simply import them from the library and include them in your JSX:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { Button, Link, CardList, Accordion, Table, H1, H2, H3, H4, H5, UnorderedList, OrderedList } from 'saux-component-library';\r
\r
const App = () => (\r
  <div>\r
    <H1 text="Welcome to the Component Library" />\r
    <Button label="Click Me" onClick={() => alert('Button clicked!')} />\r
    <Link label="Go to Google" href="https://www.google.com" />\r
    {/* Add more components as needed */}\r
  </div>\r
);
`})})]})}function x(o={}){const{wrapper:e}={...t(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(r,{...o})}):r(o)}export{x as default};
