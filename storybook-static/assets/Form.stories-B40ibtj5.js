import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{F as a}from"./FormGroup-CTWfyQxp.js";import{T as p}from"./ThemeProvider-BHFyjWwA.js";import{u as d}from"./index-D8d2bdkj.js";import"./index-BZISi7jw.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BtkQkHPN.js";const s=({children:r,className:t,...n})=>e.jsx("form",{...n,className:`form ${t||""}`,children:r});s.__docgenInfo={description:"",methods:[],displayName:"Form",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const f={title:"Components/Form",component:s},u=r=>{const t=d();return e.jsx(p,{children:e.jsx("div",{className:t?"dark-theme":"",children:e.jsxs(s,{...r,children:[e.jsx(a,{label:"Name",children:e.jsx("input",{type:"text",placeholder:"Enter your name"})}),e.jsx(a,{label:"Email",children:e.jsx("input",{type:"email",placeholder:"Enter your email"})}),e.jsx(a,{label:"Message",children:e.jsx("textarea",{placeholder:"Enter your message",rows:5})}),e.jsx("button",{type:"submit",children:"Submit"})]})})})},o=u.bind({});o.args={onSubmit:r=>{r.preventDefault(),alert("Form submitted!")}};var m,i,l;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
}`,...(l=(i=o.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const E=["Default"];export{o as Default,E as __namedExportsOrder,f as default};
