import{j}from"./jsx-runtime-D_zvdyIk.js";import{r as _}from"./index-DuZrfDUH.js";import{S as f}from"./SelectInput-I0k_iOGe.js";import"./_commonjsHelpers-CqkleIqs.js";const W={title:"Components/Select Input",component:f},o=l=>{const[x,E]=_.useState(l.value);return j.jsx(f,{...l,value:x,onChange:O=>E(O.target.value)})},e=o.bind({});e.args={label:"Choose an option:",value:"option1",options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],disabled:!1};const a=o.bind({});a.args={...e.args,value:"",placeholder:"Select an option..."};const r=o.bind({});r.args={...e.args,size:"small"};const t=o.bind({});t.args={...e.args,size:"large"};const s=o.bind({});s.args={...e.args,variant:"error"};var n,u,c;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  return <SelectInput {...args} value={value} onChange={e => setValue(e.target.value)} />;
}`,...(c=(u=e.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var p,g,i;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  return <SelectInput {...args} value={value} onChange={e => setValue(e.target.value)} />;
}`,...(i=(g=a.parameters)==null?void 0:g.docs)==null?void 0:i.source}}};var m,v,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  return <SelectInput {...args} value={value} onChange={e => setValue(e.target.value)} />;
}`,...(d=(v=r.parameters)==null?void 0:v.docs)==null?void 0:d.source}}};var S,V,h;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  return <SelectInput {...args} value={value} onChange={e => setValue(e.target.value)} />;
}`,...(h=(V=t.parameters)==null?void 0:V.docs)==null?void 0:h.source}}};var b,C,I;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  return <SelectInput {...args} value={value} onChange={e => setValue(e.target.value)} />;
}`,...(I=(C=s.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};const R=["Default","WithPlaceholder","Small","Large","ErrorVariant"];export{e as Default,s as ErrorVariant,t as Large,r as Small,a as WithPlaceholder,R as __namedExportsOrder,W as default};
