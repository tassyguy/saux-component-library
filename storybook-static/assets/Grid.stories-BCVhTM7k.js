import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{G as a}from"./Grid-ClPR_fop.js";import{T as n}from"./ThemeProvider-CU-Py9wx.js";import{u as c}from"./index-D8d2bdkj.js";import"./index-BZISi7jw.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BtkQkHPN.js";const r=({children:t,className:o=""})=>e.jsx("div",{className:`grid-item ${o}`,children:t});try{r.displayName="GridItem",r.__docgenInfo={description:"",displayName:"GridItem",props:{children:{defaultValue:null,description:"Content for the grid item",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Additional class name for custom styling",name:"className",required:!1,type:{name:"string"}}}}}catch{}const j={title:"Components/Grid",component:a},l=()=>{const t=c();return e.jsx(n,{children:e.jsx("div",{className:t?"dark-theme":"",children:e.jsxs(a,{columns:3,gap:"1em",children:[e.jsx(r,{children:"Item 1"}),e.jsx(r,{children:"Item 2"}),e.jsx(r,{children:"Item 3"}),e.jsx(r,{children:"Item 4"}),e.jsx(r,{children:"Item 5"}),e.jsx(r,{children:"Item 6"})]})})})},i=l.bind({});var m,d,s;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  const isDarkMode = useDarkMode();
  return <ThemeProvider>\r
      <div className={isDarkMode ? 'dark-theme' : ''}>\r
        <Grid columns={3} gap="1em">\r
          <GridItem>Item 1</GridItem>\r
          <GridItem>Item 2</GridItem>\r
          <GridItem>Item 3</GridItem>\r
          <GridItem>Item 4</GridItem>\r
          <GridItem>Item 5</GridItem>\r
          <GridItem>Item 6</GridItem>\r
        </Grid>\r
      </div>\r
    </ThemeProvider>;
}`,...(s=(d=i.parameters)==null?void 0:d.docs)==null?void 0:s.source}}};const _=["Default"];export{i as Default,_ as __namedExportsOrder,j as default};
