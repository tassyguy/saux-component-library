import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{T as c}from"./ThemeProvider-DGwBzojn.js";import{u as m}from"./index-Bdtnp1LJ.js";import"./index-DmM0KDA7.js";import"./index-DKWlSypl.js";const a=({children:n,className:t="",maxWidth:d="1200px"})=>e.jsx("div",{className:`container ${t}`,style:{maxWidth:d},children:n});a.__docgenInfo={description:"",methods:[],displayName:"Container",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content inside the container"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names for custom styling",defaultValue:{value:'""',computed:!1}},maxWidth:{required:!1,tsType:{name:"string"},description:"Optional maximum width (default: 1200px)",defaultValue:{value:'"1200px"',computed:!1}}}};const g={title:"Components/Container",component:a},l=n=>{const t=m();return e.jsx(c,{children:e.jsx("div",{className:t?"dark-theme":"",children:e.jsx(a,{...n,children:e.jsx("div",{style:{background:"#f0f0f0",padding:"2rem",textAlign:"center"},children:"This is content inside a container."})})})})},r=l.bind({});r.args={maxWidth:"1200px"};var s,i,o;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
  const isDarkMode = useDarkMode();
  return <ThemeProvider>\r
      <div className={isDarkMode ? 'dark-theme' : ''}>\r
        <Container {...args}>\r
          <div style={{
          background: '#f0f0f0',
          padding: '2rem',
          textAlign: 'center'
        }}>\r
            This is content inside a container.\r
          </div>\r
        </Container>\r
      </div>\r
    </ThemeProvider>;
}`,...(o=(i=r.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};const v=["Default"];export{r as Default,v as __namedExportsOrder,g as default};
