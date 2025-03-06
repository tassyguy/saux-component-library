import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./index-BZISi7jw.js";import{B as m}from"./Button-BtZQpITv.js";import{T as u}from"./ThemeProvider-BHFyjWwA.js";import{u as h}from"./index-D8d2bdkj.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BtkQkHPN.js";const n=({open:r,onClose:s,title:o,children:t})=>r?e.jsx("div",{className:"modal-overlay",onClick:s,children:e.jsxs("div",{className:"modal-content",onClick:c=>c.stopPropagation(),children:[e.jsxs("div",{className:"modal-header",children:[o&&e.jsx("h3",{children:o}),e.jsx("button",{className:"modal-close",onClick:s,"aria-label":"Close modal",children:"×"})]}),e.jsx("div",{className:"modal-body",children:t})]})}):null;n.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{open:{required:!0,tsType:{name:"boolean"},description:"Whether the modal is open"},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback triggered when the modal should be closed"},title:{required:!1,tsType:{name:"string"},description:"Optional title to display in the header"},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The modal body content"}}};const y={title:"Components/Modal",component:n},x=r=>{const[s,o]=p.useState(r.open),t=h();return e.jsx(u,{children:e.jsxs("div",{className:t?"dark-theme":"",children:[e.jsx(m,{label:"Open Modal",onClick:()=>o(!0)}),e.jsx(n,{...r,open:s,onClose:()=>o(!1),children:e.jsx("p",{children:"This is an example modal dialog. You can place any content here."})})]})})},a=x.bind({});a.args={open:!1,title:"Modal Title"};var l,d,i;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
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
}`,...(i=(d=a.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};const b=["Default"];export{a as Default,b as __namedExportsOrder,y as default};
