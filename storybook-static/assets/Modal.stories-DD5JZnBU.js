import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./index-BZISi7jw.js";import{M as l}from"./Modal-DZJMhWb_.js";import{B as m}from"./Button-ZVXyelmP.js";import{T as c}from"./ThemeProvider-D8qwjXKu.js";import{u}from"./index-D8d2bdkj.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BtkQkHPN.js";const g={title:"Components/Modal",component:l},M=r=>{const[p,a]=d.useState(r.open),i=u();return e.jsx(c,{children:e.jsxs("div",{className:i?"dark-theme":"",children:[e.jsx(m,{label:"Open Modal",onClick:()=>a(!0)}),e.jsx(l,{...r,open:p,onClose:()=>a(!1),children:e.jsx("p",{children:"This is an example modal dialog. You can place any content here."})})]})})},o=M.bind({});o.args={open:!1,title:"Modal Title"};var s,t,n;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
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
}`,...(n=(t=o.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};const v=["Default"];export{o as Default,v as __namedExportsOrder,g as default};
