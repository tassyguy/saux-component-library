import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as D}from"./index-DmM0KDA7.js";import{u as M,T as N}from"./ThemeProvider-DGwBzojn.js";import{u as x}from"./index-Bdtnp1LJ.js";import"./index-DKWlSypl.js";const c=({message:s,type:t="info",dismissible:l=!1,onClose:d})=>(M(),e.jsxs("div",{className:`alert alert--${t}`,children:[e.jsx("span",{className:"alert__message",children:s}),l&&e.jsx("button",{className:"alert__close",onClick:d,"aria-label":"Close alert",children:"×"})]}));c.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{message:{required:!0,tsType:{name:"string"},description:"The alert message to display"},type:{required:!1,tsType:{name:"union",raw:"'success' | 'error' | 'warning' | 'info'",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"}]},description:'The type of alert determines its styling (defaults to "info")',defaultValue:{value:"'info'",computed:!1}},dismissible:{required:!1,tsType:{name:"boolean"},description:"Whether the alert is dismissible (shows a close button)",defaultValue:{value:"false",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback invoked when the alert is dismissed"}}};const w={title:"Components/Alert",component:c},o=s=>{const[t,l]=D.useState(!0),d=x();if(!t)return e.jsx("div",{children:"No alert visible"});const A=()=>{l(!1),s.onClose&&s.onClose()};return e.jsx(N,{children:e.jsx("div",{className:d?"dark-theme":"",children:e.jsx(c,{...s,onClose:A})})})},r=o.bind({});r.args={message:"This is an informational alert.",type:"info",dismissible:!0};const n=o.bind({});n.args={message:"Operation completed successfully!",type:"success",dismissible:!0};const a=o.bind({});a.args={message:"There was an error processing your request.",type:"error",dismissible:!0};const i=o.bind({});i.args={message:"Warning: Please check your input.",type:"warning",dismissible:!1};var m,u,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
}`,...(p=(u=r.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var v,f,g;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
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
}`,...(g=(f=n.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var h,b,C;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
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
}`,...(C=(b=a.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var k,T,y;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`args => {
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
}`,...(y=(T=i.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};const q=["InfoAlert","SuccessAlert","ErrorAlert","WarningAlert"];export{a as ErrorAlert,r as InfoAlert,n as SuccessAlert,i as WarningAlert,q as __namedExportsOrder,w as default};
