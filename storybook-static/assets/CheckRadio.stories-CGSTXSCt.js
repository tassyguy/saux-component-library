import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./index-BZISi7jw.js";import{C as m}from"./CheckRadio-D__1AGvv.js";import{T as C}from"./ThemeProvider-CU-Py9wx.js";import{u as x}from"./index-D8d2bdkj.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BtkQkHPN.js";const T={title:"Components/CheckRadio",component:m},k=s=>{const[o,p]=u.useState(s.checked),l=x();return a.jsx(C,{children:a.jsx("div",{className:l?"dark-theme":"",children:a.jsx(m,{...s,checked:o,onChange:()=>p(!o)})})})},e=k.bind({});e.args={type:"checkbox",checked:!1,disabled:!1,label:"Example Checkbox"};const r=k.bind({});r.args={type:"radio",checked:!1,disabled:!1,label:"Example Radio Button",name:"exampleRadio"};var c,d,t;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(args.checked);
  const isDarkMode = useDarkMode();
  return <ThemeProvider>\r
      <div className={isDarkMode ? 'dark-theme' : ''}>\r
        <CheckRadio {...args} checked={checked} onChange={() => setChecked(!checked)} />\r
      </div>\r
    </ThemeProvider>;
}`,...(t=(d=e.parameters)==null?void 0:d.docs)==null?void 0:t.source}}};var n,i,h;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(args.checked);
  const isDarkMode = useDarkMode();
  return <ThemeProvider>\r
      <div className={isDarkMode ? 'dark-theme' : ''}>\r
        <CheckRadio {...args} checked={checked} onChange={() => setChecked(!checked)} />\r
      </div>\r
    </ThemeProvider>;
}`,...(h=(i=r.parameters)==null?void 0:i.docs)==null?void 0:h.source}}};const j=["Checkbox","RadioButton"];export{e as Checkbox,r as RadioButton,j as __namedExportsOrder,T as default};
