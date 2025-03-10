import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./index-BZISi7jw.js";import{I as o}from"./InputField-Dq9wZl3x.js";import{T as c}from"./ThemeProvider-D8qwjXKu.js";import{u as h}from"./index-D8d2bdkj.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BtkQkHPN.js";const E={title:"Components/Input Field",component:o},v=t=>{const[l,u]=p.useState(t.value||""),d=h(),i=m=>{u(m.target.value)};return r.jsx(c,{children:r.jsx("div",{className:d?"dark-theme":"",children:r.jsx(o,{...t,value:l,onChange:i})})})},e=v.bind({});e.args={value:"",placeholder:"Enter text here..."};var a,n,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || '');
  const isDarkMode = useDarkMode();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return <ThemeProvider>\r
      <div className={isDarkMode ? 'dark-theme' : ''}>\r
        <InputField {...args} value={value} onChange={handleChange} />\r
      </div>\r
    </ThemeProvider>;
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const F=["DefaultInputField"];export{e as DefaultInputField,F as __namedExportsOrder,E as default};
