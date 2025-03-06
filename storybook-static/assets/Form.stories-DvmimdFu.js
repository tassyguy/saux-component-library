import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{F as o}from"./FormGroup-CTWfyQxp.js";const a=({children:r,className:l,...p})=>e.jsx("form",{...p,className:`form ${l||""}`,children:r});a.__docgenInfo={description:"",methods:[],displayName:"Form",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const d={title:"Components/Form",component:a},u=r=>e.jsxs(a,{...r,children:[e.jsx(o,{label:"Name",children:e.jsx("input",{type:"text",placeholder:"Enter your name"})}),e.jsx(o,{label:"Email",children:e.jsx("input",{type:"email",placeholder:"Enter your email"})}),e.jsx(o,{label:"Message",children:e.jsx("textarea",{placeholder:"Enter your message",rows:5})}),e.jsx("button",{type:"submit",children:"Submit"})]}),t=u.bind({});t.args={onSubmit:r=>{r.preventDefault(),alert("Form submitted!")}};var s,n,m;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`args => <Form {...args}>\r
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
  </Form>`,...(m=(n=t.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};const x=["Default"];export{t as Default,x as __namedExportsOrder,d as default};
