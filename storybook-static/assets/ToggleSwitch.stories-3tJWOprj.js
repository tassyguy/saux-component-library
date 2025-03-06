import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./index-BZISi7jw.js";import{T as a}from"./ToggleSwitch-CTu3Sg79.js";import{T as m}from"./ThemeProvider-BHFyjWwA.js";import"./_commonjsHelpers-CqkleIqs.js";const u={title:"Components/Toggle Switch",component:a},T=s=>{const[o,g]=l.useState(s.isOn),c=()=>{g(!o)};return t.jsx(m,{children:t.jsx(a,{...s,isOn:o,onToggle:c})})},e=T.bind({});e.args={isOn:!1,disabled:!1};var r,n,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`args => {
  const [isOn, setIsOn] = useState(args.isOn);
  const handleToggle = () => {
    setIsOn(!isOn);
  };
  return <ThemeProvider><ToggleSwitch {...args} isOn={isOn} onToggle={handleToggle} /></ThemeProvider>;
}`,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const f=["ToggleSwitchStory"];export{e as ToggleSwitchStory,f as __namedExportsOrder,u as default};
