import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{D as n}from"./DropdownMenu-CHzD4fHR.js";import{T as l}from"./ThemeProvider-D8qwjXKu.js";import{u as p}from"./index-D8d2bdkj.js";import"./index-BZISi7jw.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BtkQkHPN.js";const O={title:"Components/Dropdown Menu",component:n},d=a=>{const i=p();return o.jsx(l,{children:o.jsx("div",{className:i?"dark-theme":"",children:o.jsx(n,{...a})})})},m=[{value:"option1",label:"Option 1",onClick:()=>alert("Option 1 selected")},{value:"option2",label:"Option 2",onClick:()=>alert("Option 2 selected")},{value:"option3",label:"Option 3",onClick:()=>alert("Option 3 selected")}],e=d.bind({});e.args={label:"Select an Option",items:m,disabled:!1};var r,t,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`args => {
  const isDarkMode = useDarkMode();
  return <ThemeProvider>\r
      <div className={isDarkMode ? 'dark-theme' : ''}>\r
        <DropdownMenu {...args} />\r
      </div>\r
    </ThemeProvider>;
}`,...(s=(t=e.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};const h=["Default"];export{e as Default,h as __namedExportsOrder,O as default};
