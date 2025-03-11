import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{F as D}from"./Footer-CDO3S1q7.js";import{T as x}from"./ThemeProvider-CU-Py9wx.js";import{u as F}from"./index-D8d2bdkj.js";import"./index-BZISi7jw.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BtkQkHPN.js";const A={title:"Components/Footer",component:D},t=M=>{const f=F();return r.jsx(x,{children:r.jsx("div",{className:f?"dark-theme":"",children:r.jsx(D,{...M})})})},e=t.bind({});e.args={children:r.jsxs("div",{children:[r.jsxs("p",{children:["© ",new Date().getFullYear()," My Company. All rights reserved."]}),r.jsx("p",{children:"Designed by My Name."})]})};const o=t.bind({});o.args={backgroundColor:"var(--primary-color)",textColor:"#fff",children:r.jsx("p",{children:"Custom Background Footer"})};const s=t.bind({});s.args={align:"left",children:r.jsx("p",{children:"Left-Aligned Footer"})};const a=t.bind({});a.args={showDivider:!0,children:r.jsx("p",{children:"Footer with Divider"})};var d,n,i;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
  const isDarkMode = useDarkMode();
  return <ThemeProvider>\r
      <div className={isDarkMode ? 'dark-theme' : ''}>\r
        <Footer {...args} />\r
      </div>\r
    </ThemeProvider>;
}`,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var c,m,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  const isDarkMode = useDarkMode();
  return <ThemeProvider>\r
      <div className={isDarkMode ? 'dark-theme' : ''}>\r
        <Footer {...args} />\r
      </div>\r
    </ThemeProvider>;
}`,...(l=(m=o.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var p,u,h;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  const isDarkMode = useDarkMode();
  return <ThemeProvider>\r
      <div className={isDarkMode ? 'dark-theme' : ''}>\r
        <Footer {...args} />\r
      </div>\r
    </ThemeProvider>;
}`,...(h=(u=s.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var g,v,k;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  const isDarkMode = useDarkMode();
  return <ThemeProvider>\r
      <div className={isDarkMode ? 'dark-theme' : ''}>\r
        <Footer {...args} />\r
      </div>\r
    </ThemeProvider>;
}`,...(k=(v=a.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};const S=["Default","CustomBackground","LeftAligned","WithDivider"];export{o as CustomBackground,e as Default,s as LeftAligned,a as WithDivider,S as __namedExportsOrder,A as default};
