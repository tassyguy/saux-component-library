import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{r as v}from"./index-DuZrfDUH.js";import{T as N}from"./ToastNotification-DKcBO1gs.js";import"./_commonjsHelpers-CqkleIqs.js";const E={title:"Components/Toast Notification",component:N},n=S=>{const[T,a]=v.useState(!0),V=()=>{a(!1)};return i.jsxs(i.Fragment,{children:[T&&i.jsx(N,{...S,onClose:V}),i.jsx("button",{onClick:()=>a(!0),children:"Show Notification"})]})},s=n.bind({});s.args={message:"This is a success notification!",type:"success",duration:3e3};const t=n.bind({});t.args={message:"This is an error notification!",type:"error",duration:3e3};const e=n.bind({});e.args={message:"This is a warning notification!",type:"warning",duration:3e3};const o=n.bind({});o.args={message:"This is an info notification!",type:"info",duration:3e3};var r,c,l;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`args => {
  const [visible, setVisible] = useState(true);
  const handleClose = () => {
    setVisible(false);
  };
  return <>
      {visible && <ToastNotification {...args} onClose={handleClose} />}
      <button onClick={() => setVisible(true)}>Show Notification</button>
    </>;
}`,...(l=(c=s.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var u,f,b;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
  const [visible, setVisible] = useState(true);
  const handleClose = () => {
    setVisible(false);
  };
  return <>
      {visible && <ToastNotification {...args} onClose={handleClose} />}
      <button onClick={() => setVisible(true)}>Show Notification</button>
    </>;
}`,...(b=(f=t.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var d,m,p;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
  const [visible, setVisible] = useState(true);
  const handleClose = () => {
    setVisible(false);
  };
  return <>
      {visible && <ToastNotification {...args} onClose={handleClose} />}
      <button onClick={() => setVisible(true)}>Show Notification</button>
    </>;
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var g,h,C;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  const [visible, setVisible] = useState(true);
  const handleClose = () => {
    setVisible(false);
  };
  return <>
      {visible && <ToastNotification {...args} onClose={handleClose} />}
      <button onClick={() => setVisible(true)}>Show Notification</button>
    </>;
}`,...(C=(h=o.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};const y=["SuccessNotification","ErrorNotification","WarningNotification","InfoNotification"];export{t as ErrorNotification,o as InfoNotification,s as SuccessNotification,e as WarningNotification,y as __namedExportsOrder,E as default};
