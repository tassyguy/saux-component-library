import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as x}from"./index-DuZrfDUH.js";import{M as T}from"./Modal-DqC2TSTZ.js";import{B as C}from"./Button-D4b0BiQ0.js";import{T as S}from"./ThemeProvider-CKzi-S0a.js";import{u as b}from"./index-CZHJ-ciL.js";import"./_commonjsHelpers-CqkleIqs.js";import"./H5-Bra4vguc.js";import"./index-GeD_eG6w.js";const L={title:"Components/Modal",component:T},n=t=>{const[f,l]=x.useState(t.open),D=b();return a.jsx(S,{children:a.jsxs("div",{className:D?"dark-theme":"",children:[a.jsx(C,{label:"Open Modal",onClick:()=>l(!0)}),a.jsx(T,{...t,open:f,onClose:()=>l(!1),children:a.jsx("p",{children:"This is an example modal dialog. You can place any content here."})})]})})},e=n.bind({});e.args={open:!1,title:"Modal Title"};const o=n.bind({});o.args={...e.args,size:"small"};const s=n.bind({});s.args={...e.args,size:"large"};const r=n.bind({});r.args={...e.args,closeOnOverlayClick:!1};var p,d,i;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(args.open);
  const isDarkMode = useDarkMode();
  return <ThemeProvider>
      <div className={isDarkMode ? 'dark-theme' : ''}>
        <Button label="Open Modal" onClick={() => setOpen(true)} />
        <Modal {...args} open={open} onClose={() => setOpen(false)}>
          <p>
            This is an example modal dialog. You can place any content here.
          </p>
        </Modal>
      </div>
    </ThemeProvider>;
}`,...(i=(d=e.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var c,m,u;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(args.open);
  const isDarkMode = useDarkMode();
  return <ThemeProvider>
      <div className={isDarkMode ? 'dark-theme' : ''}>
        <Button label="Open Modal" onClick={() => setOpen(true)} />
        <Modal {...args} open={open} onClose={() => setOpen(false)}>
          <p>
            This is an example modal dialog. You can place any content here.
          </p>
        </Modal>
      </div>
    </ThemeProvider>;
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var M,g,h;s.parameters={...s.parameters,docs:{...(M=s.parameters)==null?void 0:M.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(args.open);
  const isDarkMode = useDarkMode();
  return <ThemeProvider>
      <div className={isDarkMode ? 'dark-theme' : ''}>
        <Button label="Open Modal" onClick={() => setOpen(true)} />
        <Modal {...args} open={open} onClose={() => setOpen(false)}>
          <p>
            This is an example modal dialog. You can place any content here.
          </p>
        </Modal>
      </div>
    </ThemeProvider>;
}`,...(h=(g=s.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var k,O,v;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(args.open);
  const isDarkMode = useDarkMode();
  return <ThemeProvider>
      <div className={isDarkMode ? 'dark-theme' : ''}>
        <Button label="Open Modal" onClick={() => setOpen(true)} />
        <Modal {...args} open={open} onClose={() => setOpen(false)}>
          <p>
            This is an example modal dialog. You can place any content here.
          </p>
        </Modal>
      </div>
    </ThemeProvider>;
}`,...(v=(O=r.parameters)==null?void 0:O.docs)==null?void 0:v.source}}};const R=["Default","Small","Large","NoOverlayClose"];export{e as Default,s as Large,r as NoOverlayClose,o as Small,R as __namedExportsOrder,L as default};
