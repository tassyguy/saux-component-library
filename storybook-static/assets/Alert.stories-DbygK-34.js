import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as V}from"./index-BZISi7jw.js";import{u as x}from"./ThemeProvider-DIJNcvl7.js";import"./_commonjsHelpers-CqkleIqs.js";const u=({message:e,type:l="info",dismissible:o=!1,onClose:c})=>(x(),a.jsxs("div",{className:`alert alert--${l}`,children:[a.jsx("span",{className:"alert__message",children:e}),o&&a.jsx("button",{className:"alert__close",onClick:c,"aria-label":"Close alert",children:"×"})]}));u.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{message:{required:!0,tsType:{name:"string"},description:"The alert message to display"},type:{required:!1,tsType:{name:"union",raw:'"success" | "error" | "warning" | "info"',elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"error"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"info"'}]},description:'The type of alert determines its styling (defaults to "info")',defaultValue:{value:'"info"',computed:!1}},dismissible:{required:!1,tsType:{name:"boolean"},description:"Whether the alert is dismissible (shows a close button)",defaultValue:{value:"false",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback invoked when the alert is dismissed"}}};const j={title:"Components/Alert",component:u},i=e=>{const[l,o]=V.useState(!0);if(!l)return a.jsx("div",{children:"No alert visible"});const c=()=>{o(!1),e.onClose&&e.onClose()};return a.jsx(u,{...e,onClose:c})},s=i.bind({});s.args={message:"This is an informational alert.",type:"info",dismissible:!0};const r=i.bind({});r.args={message:"Operation completed successfully!",type:"success",dismissible:!0};const n=i.bind({});n.args={message:"There was an error processing your request.",type:"error",dismissible:!0};const t=i.bind({});t.args={message:"Warning: Please check your input.",type:"warning",dismissible:!1};var d,m,p;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
  const [visible, setVisible] = useState(true);
  if (!visible) {
    return <div>No alert visible</div>;
  }
  const handleClose = () => {
    setVisible(false);
    if (args.onClose) {
      args.onClose();
    }
  };
  return <Alert {...args} onClose={handleClose} />;
}`,...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var f,g,b;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
  const [visible, setVisible] = useState(true);
  if (!visible) {
    return <div>No alert visible</div>;
  }
  const handleClose = () => {
    setVisible(false);
    if (args.onClose) {
      args.onClose();
    }
  };
  return <Alert {...args} onClose={handleClose} />;
}`,...(b=(g=r.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var v,C,h;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
  const [visible, setVisible] = useState(true);
  if (!visible) {
    return <div>No alert visible</div>;
  }
  const handleClose = () => {
    setVisible(false);
    if (args.onClose) {
      args.onClose();
    }
  };
  return <Alert {...args} onClose={handleClose} />;
}`,...(h=(C=n.parameters)==null?void 0:C.docs)==null?void 0:h.source}}};var y,A,S;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`args => {
  const [visible, setVisible] = useState(true);
  if (!visible) {
    return <div>No alert visible</div>;
  }
  const handleClose = () => {
    setVisible(false);
    if (args.onClose) {
      args.onClose();
    }
  };
  return <Alert {...args} onClose={handleClose} />;
}`,...(S=(A=t.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};const q=["InfoAlert","SuccessAlert","ErrorAlert","WarningAlert"];export{n as ErrorAlert,s as InfoAlert,r as SuccessAlert,t as WarningAlert,q as __namedExportsOrder,j as default};
