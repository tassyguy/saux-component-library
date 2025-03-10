import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{A as v}from"./Avatar-D6MWNgeY.js";import{T as D}from"./ThemeProvider-D8qwjXKu.js";import{u as g}from"./index-D8d2bdkj.js";import"./index-BZISi7jw.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BtkQkHPN.js";const S={title:"Components/Avatar",component:v},o=h=>{const k=g();return s.jsx(D,{children:s.jsx("div",{className:k?"dark-theme":"",children:s.jsx(v,{...h})})})},r=o.bind({});r.args={alt:"John Doe",size:60,src:"https://via.placeholder.com/60"};const e=o.bind({});e.args={alt:"Jane Doe",size:60,src:""};const a=o.bind({});a.args={alt:"Custom Size",size:100,src:"https://via.placeholder.com/100"};var t,i,n;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`args => {
  const isDarkMode = useDarkMode();
  return <ThemeProvider>\r
      <div className={isDarkMode ? 'dark-theme' : ''}>\r
        <Avatar {...args} />\r
      </div>\r
    </ThemeProvider>;
}`,...(n=(i=r.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};var d,m,c;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
  const isDarkMode = useDarkMode();
  return <ThemeProvider>\r
      <div className={isDarkMode ? 'dark-theme' : ''}>\r
        <Avatar {...args} />\r
      </div>\r
    </ThemeProvider>;
}`,...(c=(m=e.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var p,l,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  const isDarkMode = useDarkMode();
  return <ThemeProvider>\r
      <div className={isDarkMode ? 'dark-theme' : ''}>\r
        <Avatar {...args} />\r
      </div>\r
    </ThemeProvider>;
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const b=["Default","WithFallback","CustomSize"];export{a as CustomSize,r as Default,e as WithFallback,b as __namedExportsOrder,S as default};
