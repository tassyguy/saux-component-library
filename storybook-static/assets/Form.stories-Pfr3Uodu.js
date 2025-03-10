import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{F as l,a as t}from"./FormGroup-DX_xUZTS.js";import{T as p}from"./ThemeProvider-D8qwjXKu.js";import{u as n}from"./index-D8d2bdkj.js";import"./index-BZISi7jw.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BtkQkHPN.js";const y={title:"Components/Form",component:l},u=o=>{const i=n();return r.jsx(p,{children:r.jsx("div",{className:i?"dark-theme":"",children:r.jsxs(l,{...o,children:[r.jsx(t,{label:"Name",children:r.jsx("input",{type:"text",placeholder:"Enter your name"})}),r.jsx(t,{label:"Email",children:r.jsx("input",{type:"email",placeholder:"Enter your email"})}),r.jsx(t,{label:"Message",children:r.jsx("textarea",{placeholder:"Enter your message",rows:5})}),r.jsx("button",{type:"submit",children:"Submit"})]})})})},e=u.bind({});e.args={onSubmit:o=>{o.preventDefault(),alert("Form submitted!")}};var a,s,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
  const isDarkMode = useDarkMode();
  return <ThemeProvider>\r
      <div className={isDarkMode ? 'dark-theme' : ''}>\r
        <Form {...args}>\r
          <FormGroup label="Name">\r
            <input type="text" placeholder="Enter your name" />\r
          </FormGroup>\r
          <FormGroup label="Email">\r
            <input type="email" placeholder="Enter your email" />\r
          </FormGroup>\r
          <FormGroup label="Message">\r
            <textarea placeholder="Enter your message" rows={5} />\r
          </FormGroup>\r
          <button type="submit">Submit</button>\r
        </Form>\r
      </div>\r
    </ThemeProvider>;
}`,...(m=(s=e.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const E=["Default"];export{e as Default,E as __namedExportsOrder,y as default};
