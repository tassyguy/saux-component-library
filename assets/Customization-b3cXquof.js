import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as e}from"./index-BJaai1kI.js";import"./index-D8cwLQ8y.js";import{M as c}from"./index-DKXFAlD9.js";import"./index-DuZrfDUH.js";import"./_commonjsHelpers-CqkleIqs.js";import"./preview-DZSb5tyT.js";import"./iframe-BoyAFrAV.js";import"./DocsRenderer-CFRXHY34-BEWaL7yk.js";import"./react-18-D2JjEoAS.js";import"./index-BsNqBstw.js";import"./index-GeD_eG6w.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function t(o){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...e(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"Customization"}),`
`,n.jsx(s.h1,{id:"customizing-the-styling",children:"Customizing the Styling"}),`
`,n.jsx(s.p,{children:"This guide explains how to customize the styling for components in the SAUX component library. You can customize the styles using CSS variables, custom CSS classes, and inline styles."}),`
`,n.jsx(s.h2,{id:"using-css-variables",children:"Using CSS Variables"}),`
`,n.jsx(s.p,{children:"The SAUX component library uses CSS variables to allow easy customization of styles. You can override these variables in your global CSS file or within specific components."}),`
`,n.jsx(s.h3,{id:"example",children:"Example"}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-css",children:`/* global.css */
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  --success-color: #28a745;
  --warning-color: #ffc107;
  --error-color: #dc3545;
  --text-color: #333;
  --background-color: #fff;
  --font-family: 'Arial, sans-serif';
}
`})}),`
`,n.jsx(s.h2,{id:"custom-css-classes",children:"Custom CSS Classes"}),`
`,n.jsxs(s.p,{children:["You can also apply custom CSS classes to components to override their default styles. Each component accepts a ",n.jsx(s.code,{children:"className"})," prop that you can use to pass custom classes."]}),`
`,n.jsx(s.h3,{id:"example-1",children:"Example"}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-tsx",children:`import React from 'react';
import Button from '@saux/button';
import './custom-styles.css';

const CustomButton = () => (
  <Button label="Custom Button" className="custom-button" />
);

export default CustomButton;
`})}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-css",children:`/* custom-styles.css */
.custom-button {
  background-color: #ff5733;
  color: #fff;
  border-radius: 8px;
  padding: 10px 20px;
}
`})}),`
`,n.jsx(s.h2,{id:"inline-styles",children:"Inline Styles"}),`
`,n.jsxs(s.p,{children:["For quick customizations, you can use the ",n.jsx(s.code,{children:"style"})," prop to apply inline styles to components."]}),`
`,n.jsx(s.h3,{id:"example-2",children:"Example"}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-tsx",children:`import React from 'react';
import Button from '@saux/button';

const InlineStyledButton = () => (
  <Button
    label="Inline Styled Button"
    style={{ backgroundColor: '#28a745', color: '#fff', padding: '10px 20px' }}
  />
);

export default InlineStyledButton;
`})}),`
`,n.jsx(s.h2,{id:"customizing-specific-components",children:"Customizing Specific Components"}),`
`,n.jsx(s.h3,{id:"button",children:"Button"}),`
`,n.jsxs(s.p,{children:["The ",n.jsx(s.code,{children:"Button"})," component supports various customization options through CSS variables, custom classes, and inline styles."]}),`
`,n.jsx(s.h4,{id:"css-variables",children:"CSS Variables"}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-css",children:`/* global.css */
:root {
  --button-primary-bg: #007bff;
  --button-primary-color: #fff;
  --button-secondary-bg: #6c757d;
  --button-secondary-color: #fff;
}
`})}),`
`,n.jsx(s.h4,{id:"custom-classes",children:"Custom Classes"}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-tsx",children:`import React from 'react';
import Button from '@saux/button';
import './button-styles.css';

const CustomButton = () => (
  <Button label="Custom Button" className="custom-button" />
);

export default CustomButton;
`})}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-css",children:`/* button-styles.css */
.custom-button {
  background-color: #ff5733;
  color: #fff;
  border-radius: 8px;
  padding: 10px 20px;
}
`})}),`
`,n.jsx(s.h4,{id:"inline-styles-1",children:"Inline Styles"}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-tsx",children:`import React from 'react';
import Button from '@saux/button';

const InlineStyledButton = () => (
  <Button
    label="Inline Styled Button"
    style={{ backgroundColor: '#28a745', color: '#fff', padding: '10px 20px' }}
  />
);

export default InlineStyledButton;
`})}),`
`,n.jsx(s.h2,{id:"conclusion",children:"Conclusion"}),`
`,n.jsx(s.p,{children:"By using CSS variables, custom CSS classes, and inline styles, you can easily customize the styling of components in the SAUX component library to match your application's design requirements."})]})}function j(o={}){const{wrapper:s}={...e(),...o.components};return s?n.jsx(s,{...o,children:n.jsx(t,{...o})}):t(o)}export{j as default};
