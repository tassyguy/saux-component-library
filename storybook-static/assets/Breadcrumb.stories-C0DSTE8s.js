import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{B as D}from"./Breadcrumb-C4eao5jh.js";import{T}from"./ThemeProvider-CU-Py9wx.js";import{u as B}from"./index-D8d2bdkj.js";import"./index-BZISi7jw.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BtkQkHPN.js";const _={title:"Components/Breadcrumb",component:D},o=b=>{const M=B();return t.jsx(T,{children:t.jsx("div",{className:M?"dark-theme":"",children:t.jsx(D,{...b})})})},r=o.bind({});r.args={items:[{label:"Home",href:"/"},{label:"Products",href:"/products"},{label:"Laptops"}]};const e=o.bind({});e.args={...r.args,separator:"→"};const a=o.bind({});a.args={...r.args,truncate:!0};const s=o.bind({});s.args={...r.args,boldCurrent:!0};var d,n,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
  const isDarkMode = useDarkMode();
  return <ThemeProvider>\r
      <div className={isDarkMode ? 'dark-theme' : ''}>\r
        <Breadcrumb {...args} />\r
      </div>\r
    </ThemeProvider>;
}`,...(m=(n=r.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var c,i,u;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  const isDarkMode = useDarkMode();
  return <ThemeProvider>\r
      <div className={isDarkMode ? 'dark-theme' : ''}>\r
        <Breadcrumb {...args} />\r
      </div>\r
    </ThemeProvider>;
}`,...(u=(i=e.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var p,l,g;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  const isDarkMode = useDarkMode();
  return <ThemeProvider>\r
      <div className={isDarkMode ? 'dark-theme' : ''}>\r
        <Breadcrumb {...args} />\r
      </div>\r
    </ThemeProvider>;
}`,...(g=(l=a.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var k,h,v;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`args => {
  const isDarkMode = useDarkMode();
  return <ThemeProvider>\r
      <div className={isDarkMode ? 'dark-theme' : ''}>\r
        <Breadcrumb {...args} />\r
      </div>\r
    </ThemeProvider>;
}`,...(v=(h=s.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};const E=["Default","CustomSeparator","Truncated","BoldCurrent"];export{s as BoldCurrent,e as CustomSeparator,r as Default,a as Truncated,E as __namedExportsOrder,_ as default};
