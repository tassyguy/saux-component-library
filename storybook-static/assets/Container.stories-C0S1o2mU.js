import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{C as s}from"./Container-BYXV-CiK.js";import{T as d}from"./ThemeProvider-D8qwjXKu.js";import{u as m}from"./index-D8d2bdkj.js";import"./index-BZISi7jw.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BtkQkHPN.js";const k={title:"Components/Container",component:s},c=i=>{const a=m();return e.jsx(d,{children:e.jsx("div",{className:a?"dark-theme":"",children:e.jsx(s,{...i,children:e.jsx("div",{style:{background:"#f0f0f0",padding:"2rem",textAlign:"center"},children:"This is content inside a container."})})})})},r=c.bind({});r.args={maxWidth:"1200px"};var n,t,o;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`args => {
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
}`,...(o=(t=r.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const v=["Default"];export{r as Default,v as __namedExportsOrder,k as default};
