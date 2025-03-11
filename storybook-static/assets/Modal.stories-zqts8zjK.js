import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as x}from"./index-BZISi7jw.js";import{M as T}from"./Modal-Bi7l_IbE.js";import{B as C}from"./Button-DzVHr0oo.js";import{T as S}from"./ThemeProvider-CU-Py9wx.js";import{u as b}from"./index-D8d2bdkj.js";import"./_commonjsHelpers-CqkleIqs.js";import"./H5-CNb8bXId.js";import"./index-BtkQkHPN.js";const L={title:"Components/Modal",component:T},n=t=>{const[f,l]=x.useState(t.open),D=b();return r.jsx(S,{children:r.jsxs("div",{className:D?"dark-theme":"",children:[r.jsx(C,{label:"Open Modal",onClick:()=>l(!0)}),r.jsx(T,{...t,open:f,onClose:()=>l(!1),children:r.jsx("p",{children:"This is an example modal dialog. You can place any content here."})})]})})},e=n.bind({});e.args={open:!1,title:"Modal Title"};const a=n.bind({});a.args={...e.args,size:"small"};const o=n.bind({});o.args={...e.args,size:"large"};const s=n.bind({});s.args={...e.args,closeOnOverlayClick:!1};var p,d,i;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(args.open);
  const isDarkMode = useDarkMode();
  return <ThemeProvider>\r
      <div className={isDarkMode ? 'dark-theme' : ''}>\r
        <Button label="Open Modal" onClick={() => setOpen(true)} />\r
        <Modal {...args} open={open} onClose={() => setOpen(false)}>\r
          <p>\r
            This is an example modal dialog. You can place any content here.\r
          </p>\r
        </Modal>\r
      </div>\r
    </ThemeProvider>;
}`,...(i=(d=e.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var c,m,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(args.open);
  const isDarkMode = useDarkMode();
  return <ThemeProvider>\r
      <div className={isDarkMode ? 'dark-theme' : ''}>\r
        <Button label="Open Modal" onClick={() => setOpen(true)} />\r
        <Modal {...args} open={open} onClose={() => setOpen(false)}>\r
          <p>\r
            This is an example modal dialog. You can place any content here.\r
          </p>\r
        </Modal>\r
      </div>\r
    </ThemeProvider>;
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var M,g,h;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(args.open);
  const isDarkMode = useDarkMode();
  return <ThemeProvider>\r
      <div className={isDarkMode ? 'dark-theme' : ''}>\r
        <Button label="Open Modal" onClick={() => setOpen(true)} />\r
        <Modal {...args} open={open} onClose={() => setOpen(false)}>\r
          <p>\r
            This is an example modal dialog. You can place any content here.\r
          </p>\r
        </Modal>\r
      </div>\r
    </ThemeProvider>;
}`,...(h=(g=o.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var k,O,v;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(args.open);
  const isDarkMode = useDarkMode();
  return <ThemeProvider>\r
      <div className={isDarkMode ? 'dark-theme' : ''}>\r
        <Button label="Open Modal" onClick={() => setOpen(true)} />\r
        <Modal {...args} open={open} onClose={() => setOpen(false)}>\r
          <p>\r
            This is an example modal dialog. You can place any content here.\r
          </p>\r
        </Modal>\r
      </div>\r
    </ThemeProvider>;
}`,...(v=(O=s.parameters)==null?void 0:O.docs)==null?void 0:v.source}}};const R=["Default","Small","Large","NoOverlayClose"];export{e as Default,o as Large,s as NoOverlayClose,a as Small,R as __namedExportsOrder,L as default};
