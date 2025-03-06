import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{T as p}from"./ThemeProvider-BHFyjWwA.js";import{u}from"./index-D8d2bdkj.js";import"./index-BZISi7jw.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BtkQkHPN.js";const d=({columns:t,gap:s,children:n,className:c=""})=>{const l={gridTemplateColumns:t?`repeat(${t}, 1fr)`:void 0,gap:s||"1em"};return e.jsx("div",{className:`grid ${c}`,style:l,children:n})};d.__docgenInfo={description:"",methods:[],displayName:"Grid",props:{columns:{required:!1,tsType:{name:"number"},description:"Optionally specify the number of columns (if not provided, auto-fit is used)"},gap:{required:!1,tsType:{name:"string"},description:"Optional gap between grid items (default: 1em)"},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Grid children"},className:{required:!1,tsType:{name:"string"},description:"Additional class name for custom styling",defaultValue:{value:'""',computed:!1}}}};const r=({children:t,className:s=""})=>e.jsx("div",{className:`grid-item ${s}`,children:t});r.__docgenInfo={description:"",methods:[],displayName:"GridItem",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Content for the grid item"},className:{required:!1,tsType:{name:"string"},description:"Additional class name for custom styling",defaultValue:{value:'""',computed:!1}}}};const y={title:"Components/Grid",component:d},I=()=>{const t=u();return e.jsx(p,{children:e.jsx("div",{className:t?"dark-theme":"",children:e.jsxs(d,{columns:3,gap:"1em",children:[e.jsx(r,{children:"Item 1"}),e.jsx(r,{children:"Item 2"}),e.jsx(r,{children:"Item 3"}),e.jsx(r,{children:"Item 4"}),e.jsx(r,{children:"Item 5"}),e.jsx(r,{children:"Item 6"})]})})})},i=I.bind({});var a,m,o;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
}`,...(o=(m=i.parameters)==null?void 0:m.docs)==null?void 0:o.source}}};const v=["Default"];export{i as Default,v as __namedExportsOrder,y as default};
