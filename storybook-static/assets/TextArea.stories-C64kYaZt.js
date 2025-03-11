import{j as _}from"./jsx-runtime-D_zvdyIk.js";import{r as y}from"./index-BZISi7jw.js";import{T as j}from"./TextArea-C3wGQDKz.js";import"./_commonjsHelpers-CqkleIqs.js";const Y={title:"Components/TextArea",component:j},a=l=>{const[z,L]=y.useState(l.value||"");return _.jsx(j,{...l,value:z,onChange:R=>L(R.target.value)})},e=a.bind({});e.args={label:"Your Message",value:"",placeholder:"Type your message here...",rows:5};const r=a.bind({});r.args={...e.args,maxLength:200,characterCount:!0};const s=a.bind({});s.args={...e.args,error:"Message is required"};const t=a.bind({});t.args={...e.args,fullWidth:!0};const u=a.bind({});u.args={...e.args,autoFocus:!0};const o=a.bind({});o.args={...e.args,resize:"none"};const n=a.bind({});n.args={...e.args,disabled:!0};var c,g,i;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || '');
  return <TextArea {...args} value={value} onChange={e => setValue(e.target.value)} />;
}`,...(i=(g=e.parameters)==null?void 0:g.docs)==null?void 0:i.source}}};var m,p,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || '');
  return <TextArea {...args} value={value} onChange={e => setValue(e.target.value)} />;
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var v,h,x;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || '');
  return <TextArea {...args} value={value} onChange={e => setValue(e.target.value)} />;
}`,...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var S,V,b;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || '');
  return <TextArea {...args} value={value} onChange={e => setValue(e.target.value)} />;
}`,...(b=(V=t.parameters)==null?void 0:V.docs)==null?void 0:b.source}}};var T,A,C;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || '');
  return <TextArea {...args} value={value} onChange={e => setValue(e.target.value)} />;
}`,...(C=(A=u.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var f,W,E;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || '');
  return <TextArea {...args} value={value} onChange={e => setValue(e.target.value)} />;
}`,...(E=(W=o.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var F,D,M;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || '');
  return <TextArea {...args} value={value} onChange={e => setValue(e.target.value)} />;
}`,...(M=(D=n.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};const k=["Default","WithMaxLength","WithError","FullWidth","AutoFocus","NonResizable","Disabled"];export{u as AutoFocus,e as Default,n as Disabled,t as FullWidth,o as NonResizable,s as WithError,r as WithMaxLength,k as __namedExportsOrder,Y as default};
