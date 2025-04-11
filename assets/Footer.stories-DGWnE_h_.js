import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{F as D}from"./Footer-CDO3S1q7.js";import{T as x}from"./ThemeProvider-CKzi-S0a.js";import{u as F}from"./index-CZHJ-ciL.js";import"./index-DuZrfDUH.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-GeD_eG6w.js";const A={title:"Components/Footer",component:D},t=M=>{const f=F();return e.jsx(x,{children:e.jsx("div",{className:f?"dark-theme":"",children:e.jsx(D,{...M})})})},r=t.bind({});r.args={children:e.jsxs("div",{children:[e.jsxs("p",{children:["© ",new Date().getFullYear()," My Company. All rights reserved."]}),e.jsx("p",{children:"Designed by My Name."})]})};const o=t.bind({});o.args={backgroundColor:"var(--primary-color)",textColor:"#fff",children:e.jsx("p",{children:"Custom Background Footer"})};const s=t.bind({});s.args={align:"left",children:e.jsx("p",{children:"Left-Aligned Footer"})};const a=t.bind({});a.args={showDivider:!0,children:e.jsx("p",{children:"Footer with Divider"})};var d,n,i;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
  const isDarkMode = useDarkMode();
  return <ThemeProvider>
      <div className={isDarkMode ? 'dark-theme' : ''}>
        <Footer {...args} />
      </div>
    </ThemeProvider>;
}`,...(i=(n=r.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var c,m,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  const isDarkMode = useDarkMode();
  return <ThemeProvider>
      <div className={isDarkMode ? 'dark-theme' : ''}>
        <Footer {...args} />
      </div>
    </ThemeProvider>;
}`,...(l=(m=o.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var p,u,h;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  const isDarkMode = useDarkMode();
  return <ThemeProvider>
      <div className={isDarkMode ? 'dark-theme' : ''}>
        <Footer {...args} />
      </div>
    </ThemeProvider>;
}`,...(h=(u=s.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var g,v,k;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  const isDarkMode = useDarkMode();
  return <ThemeProvider>
      <div className={isDarkMode ? 'dark-theme' : ''}>
        <Footer {...args} />
      </div>
    </ThemeProvider>;
}`,...(k=(v=a.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};const S=["Default","CustomBackground","LeftAligned","WithDivider"];export{o as CustomBackground,r as Default,s as LeftAligned,a as WithDivider,S as __namedExportsOrder,A as default};
