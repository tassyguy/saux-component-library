import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as T}from"./index-BZISi7jw.js";import{A as C}from"./Alert-BCuhkh4f.js";import{T as S}from"./ThemeProvider-D8qwjXKu.js";import{u as N}from"./index-D8d2bdkj.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BtkQkHPN.js";const _={title:"Components/Alert",component:C},i=a=>{const[k,A]=T.useState(!0),D=N();if(!k)return o.jsx("div",{children:"No alert visible"});const M=()=>{A(!1),a.onClose&&a.onClose()};return o.jsx(S,{children:o.jsx("div",{className:D?"dark-theme":"",children:o.jsx(C,{...a,onClose:M})})})},e=i.bind({});e.args={message:"This is an informational alert.",type:"info",dismissible:!0};const s=i.bind({});s.args={message:"Operation completed successfully!",type:"success",dismissible:!0};const r=i.bind({});r.args={message:"There was an error processing your request.",type:"error",dismissible:!0};const n=i.bind({});n.args={message:"Warning: Please check your input.",type:"warning",dismissible:!1};var t,l,d;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => {
  const [visible, setVisible] = useState(true);
  const isDarkMode = useDarkMode();
  if (!visible) {
    return <div>No alert visible</div>;
  }
  const handleClose = () => {
    setVisible(false);
    if (args.onClose) {
      args.onClose();
    }
  };
  return <ThemeProvider>\r
      <div className={isDarkMode ? 'dark-theme' : ''}>\r
        <Alert {...args} onClose={handleClose} />\r
      </div>\r
    </ThemeProvider>;
}`,...(d=(l=e.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var c,m,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  const [visible, setVisible] = useState(true);
  const isDarkMode = useDarkMode();
  if (!visible) {
    return <div>No alert visible</div>;
  }
  const handleClose = () => {
    setVisible(false);
    if (args.onClose) {
      args.onClose();
    }
  };
  return <ThemeProvider>\r
      <div className={isDarkMode ? 'dark-theme' : ''}>\r
        <Alert {...args} onClose={handleClose} />\r
      </div>\r
    </ThemeProvider>;
}`,...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var v,p,b;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
  const [visible, setVisible] = useState(true);
  const isDarkMode = useDarkMode();
  if (!visible) {
    return <div>No alert visible</div>;
  }
  const handleClose = () => {
    setVisible(false);
    if (args.onClose) {
      args.onClose();
    }
  };
  return <ThemeProvider>\r
      <div className={isDarkMode ? 'dark-theme' : ''}>\r
        <Alert {...args} onClose={handleClose} />\r
      </div>\r
    </ThemeProvider>;
}`,...(b=(p=r.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var g,h,f;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  const [visible, setVisible] = useState(true);
  const isDarkMode = useDarkMode();
  if (!visible) {
    return <div>No alert visible</div>;
  }
  const handleClose = () => {
    setVisible(false);
    if (args.onClose) {
      args.onClose();
    }
  };
  return <ThemeProvider>\r
      <div className={isDarkMode ? 'dark-theme' : ''}>\r
        <Alert {...args} onClose={handleClose} />\r
      </div>\r
    </ThemeProvider>;
}`,...(f=(h=n.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const w=["InfoAlert","SuccessAlert","ErrorAlert","WarningAlert"];export{r as ErrorAlert,e as InfoAlert,s as SuccessAlert,n as WarningAlert,w as __namedExportsOrder,_ as default};
