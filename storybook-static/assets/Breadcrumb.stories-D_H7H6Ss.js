import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as t}from"./Breadcrumb-DAh4NOpn.js";import{T as c}from"./ThemeProvider-D8qwjXKu.js";import{u as i}from"./index-D8d2bdkj.js";import"./index-BZISi7jw.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BtkQkHPN.js";const x={title:"Components/Breadcrumb",component:t},n=m=>{const d=i();return e.jsx(c,{children:e.jsx("div",{className:d?"dark-theme":"",children:e.jsx(t,{...m})})})},r=n.bind({});r.args={items:[{label:"Home",href:"/"},{label:"Products",href:"/products"},{label:"Electronics",href:"/products/electronics"},{label:"Laptops"}]};var s,o,a;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
  const isDarkMode = useDarkMode();
  return <ThemeProvider>\r
      <div className={isDarkMode ? 'dark-theme' : ''}>\r
        <Breadcrumb {...args} />\r
      </div>\r
    </ThemeProvider>;
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const D=["Default"];export{r as Default,D as __namedExportsOrder,x as default};
