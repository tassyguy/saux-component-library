import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{T as a}from"./ToggleSwitch-BTXhhXI7.js";import{T as m}from"./ThemeProvider-DGwBzojn.js";import{u as d}from"./index-Bdtnp1LJ.js";import"./index-DmM0KDA7.js";import"./index-DKWlSypl.js";const f={title:"Components/Toggle Switch",component:a},c=i=>{const n=d();return r.jsx(m,{children:r.jsx("div",{className:n?"dark-theme":"",children:r.jsx(a,{...i})})})},e=c.bind({});e.args={isOn:!1,onToggle:()=>{}};var o,s,t;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`args => {
  const isDarkMode = useDarkMode();
  return <ThemeProvider>\r
      <div className={isDarkMode ? 'dark-theme' : ''}>\r
        <ToggleSwitch {...args} />\r
      </div>\r
    </ThemeProvider>;
}`,...(t=(s=e.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};const k=["Default"];export{e as Default,k as __namedExportsOrder,f as default};
