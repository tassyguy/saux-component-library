import{j as e}from"./jsx-runtime-D_zvdyIk.js";const s=({children:r,className:a,...p})=>e.jsx("form",{...p,className:`form ${a||""}`,children:r});s.__docgenInfo={description:"",methods:[],displayName:"Form",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const t=({label:r,children:a})=>e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-group__label",children:r}),e.jsx("div",{className:"form-group__control",children:a})]});t.__docgenInfo={description:"",methods:[],displayName:"FormGroup",props:{label:{required:!0,tsType:{name:"string"},description:"The label text for the form group"},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The form controls (input, select, etc.)"}}};const u={title:"Components/Form",component:s},c=r=>e.jsxs(s,{...r,children:[e.jsx(t,{label:"Name",children:e.jsx("input",{type:"text",placeholder:"Enter your name"})}),e.jsx(t,{label:"Email",children:e.jsx("input",{type:"email",placeholder:"Enter your email"})}),e.jsx(t,{label:"Message",children:e.jsx("textarea",{placeholder:"Enter your message",rows:5})}),e.jsx("button",{type:"submit",children:"Submit"})]}),o=c.bind({});o.args={onSubmit:r=>{r.preventDefault(),alert("Form submitted!")}};var n,l,m;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`args => <Form {...args}>\r
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
  </Form>`,...(m=(l=o.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const d=["Default"];export{o as Default,d as __namedExportsOrder,u as default};
