import{j as t}from"./jsx-runtime-D_zvdyIk.js";const a=({children:n,className:o="",maxWidth:d="1200px"})=>t.jsx("div",{className:`container ${o}`,style:{maxWidth:d},children:n});a.__docgenInfo={description:"",methods:[],displayName:"Container",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content inside the container"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names for custom styling",defaultValue:{value:'""',computed:!1}},maxWidth:{required:!1,tsType:{name:"string"},description:"Optional maximum width (default: 1200px)",defaultValue:{value:'"1200px"',computed:!1}}}};const p={title:"Components/Container",component:a},c=n=>t.jsx(a,{...n,children:t.jsx("div",{style:{background:"#f0f0f0",padding:"2rem",textAlign:"center"},children:"This is content inside a container."})}),e=c.bind({});e.args={maxWidth:"1200px"};var r,s,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`args => <Container {...args}>\r
    <div style={{
    background: "#f0f0f0",
    padding: "2rem",
    textAlign: "center"
  }}>\r
      This is content inside a container.\r
    </div>\r
  </Container>`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const m=["Default"];export{e as Default,m as __namedExportsOrder,p as default};
