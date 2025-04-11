import{j as C}from"./jsx-runtime-D_zvdyIk.js";import{r as b}from"./index-DuZrfDUH.js";import{S}from"./SliderInput-Bv70Ub4E.js";import"./_commonjsHelpers-CqkleIqs.js";const I={title:"Components/Slider Input",component:S},n=s=>{const[g,h]=b.useState(s.value),v=V=>{h(V)};return C.jsx(S,{...s,value:g,onChange:v})},e=n.bind({});e.args={label:"Default Slider",value:50,min:0,max:100,step:1,showValue:!0};const a=n.bind({});a.args={label:"Disabled Slider",value:50,min:0,max:100,step:1,disabled:!0,showValue:!0};const r=n.bind({});r.args={label:"Custom Step Slider",value:10,min:0,max:100,step:10,showValue:!0};var t,l,u;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  const handleChange = (newValue: number) => {
    setValue(newValue);
  };
  return <SliderInput {...args} value={value} onChange={handleChange} />;
}`,...(u=(l=e.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var o,d,i;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  const handleChange = (newValue: number) => {
    setValue(newValue);
  };
  return <SliderInput {...args} value={value} onChange={handleChange} />;
}`,...(i=(d=a.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var m,p,c;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  const handleChange = (newValue: number) => {
    setValue(newValue);
  };
  return <SliderInput {...args} value={value} onChange={handleChange} />;
}`,...(c=(p=r.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const j=["DefaultSlider","DisabledSlider","CustomStepSlider"];export{r as CustomStepSlider,e as DefaultSlider,a as DisabledSlider,j as __namedExportsOrder,I as default};
