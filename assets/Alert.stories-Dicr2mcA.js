import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as _}from"./index-DuZrfDUH.js";import{A as j}from"./Alert-BIbIwudL.js";import{T as O}from"./ThemeProvider-CKzi-S0a.js";import{u as q}from"./index-CZHJ-ciL.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-GeD_eG6w.js";const J={title:"Components/Alert",component:j,argTypes:{type:{control:{type:"select",options:["success","error","warning","info"]}},dismissible:{control:"boolean"},onClose:{action:"closed"},icon:{control:"text"},className:{control:"text"},style:{control:"object"},title:{control:"text"},duration:{control:"number"},ariaLabel:{control:"text"}}},e=d=>{const[W,w]=_.useState(!0),E=q();if(!W)return s.jsx("div",{children:"No alert visible"});const I=()=>{w(!1),d.onClose&&d.onClose()};return s.jsx(O,{children:s.jsx("div",{className:E?"dark-theme":"",children:s.jsx(j,{...d,onClose:I})})})},r=e.bind({});r.args={message:"This is an informational alert.",type:"info",dismissible:!0};const n=e.bind({});n.args={message:"Operation completed successfully!",type:"success",dismissible:!0};const o=e.bind({});o.args={message:"There was an error processing your request.",type:"error",dismissible:!0};const i=e.bind({});i.args={message:"Warning: Please check your input.",type:"warning",dismissible:!1};const t=e.bind({});t.args={message:"This is an alert with an icon.",type:"info",icon:s.jsx("i",{className:"icon-info"}),dismissible:!0};const a=e.bind({});a.args={message:"This is an alert with a title.",type:"info",title:"Alert Title",dismissible:!0};const l=e.bind({});l.args={message:"This alert will auto-dismiss after 3 seconds.",type:"info",duration:3e3,dismissible:!0};var c,m,u;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
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
  return <ThemeProvider>
      <div className={isDarkMode ? 'dark-theme' : ''}>
        <Alert {...args} onClose={handleClose} />
      </div>
    </ThemeProvider>;
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var v,b,p;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
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
  return <ThemeProvider>
      <div className={isDarkMode ? 'dark-theme' : ''}>
        <Alert {...args} onClose={handleClose} />
      </div>
    </ThemeProvider>;
}`,...(p=(b=n.parameters)==null?void 0:b.docs)==null?void 0:p.source}}};var g,h,f;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
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
  return <ThemeProvider>
      <div className={isDarkMode ? 'dark-theme' : ''}>
        <Alert {...args} onClose={handleClose} />
      </div>
    </ThemeProvider>;
}`,...(f=(h=o.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var C,k,A;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`args => {
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
  return <ThemeProvider>
      <div className={isDarkMode ? 'dark-theme' : ''}>
        <Alert {...args} onClose={handleClose} />
      </div>
    </ThemeProvider>;
}`,...(A=(k=i.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var T,D,M;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`args => {
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
  return <ThemeProvider>
      <div className={isDarkMode ? 'dark-theme' : ''}>
        <Alert {...args} onClose={handleClose} />
      </div>
    </ThemeProvider>;
}`,...(M=(D=t.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var N,S,P;a.parameters={...a.parameters,docs:{...(N=a.parameters)==null?void 0:N.docs,source:{originalSource:`args => {
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
  return <ThemeProvider>
      <div className={isDarkMode ? 'dark-theme' : ''}>
        <Alert {...args} onClose={handleClose} />
      </div>
    </ThemeProvider>;
}`,...(P=(S=a.parameters)==null?void 0:S.docs)==null?void 0:P.source}}};var V,x,y;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`args => {
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
  return <ThemeProvider>
      <div className={isDarkMode ? 'dark-theme' : ''}>
        <Alert {...args} onClose={handleClose} />
      </div>
    </ThemeProvider>;
}`,...(y=(x=l.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const K=["InfoAlert","SuccessAlert","ErrorAlert","WarningAlert","AlertWithIcon","AlertWithTitle","AutoDismissAlert"];export{t as AlertWithIcon,a as AlertWithTitle,l as AutoDismissAlert,o as ErrorAlert,r as InfoAlert,n as SuccessAlert,i as WarningAlert,K as __namedExportsOrder,J as default};
