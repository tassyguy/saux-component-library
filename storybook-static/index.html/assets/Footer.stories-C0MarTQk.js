import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{F as a}from"./Footer-BVlV5DjD.js";import{T as d}from"./ThemeProvider-DGwBzojn.js";import{u as m}from"./index-Bdtnp1LJ.js";import"./index-DmM0KDA7.js";import"./index-DKWlSypl.js";const j={title:"Components/Footer",component:a},c=n=>{const i=m();return e.jsx(d,{children:e.jsx("div",{className:i?"dark-theme":"",children:e.jsx(a,{...n})})})},r=c.bind({});r.args={children:e.jsxs("div",{children:[e.jsxs("p",{children:["© ",new Date().getFullYear()," My Company. All rights reserved."]}),e.jsx("p",{children:"Designed by My Name."})]})};var s,o,t;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
  const isDarkMode = useDarkMode();
  return <ThemeProvider>\r
      <div className={isDarkMode ? 'dark-theme' : ''}>\r
        <Footer {...args} />\r
      </div>\r
    </ThemeProvider>;
}`,...(t=(o=r.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};const v=["Default"];export{r as Default,v as __namedExportsOrder,j as default};
