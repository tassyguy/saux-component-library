import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{T as b}from"./ThemeProvider-BHFyjWwA.js";import{u as B}from"./index-D8d2bdkj.js";import"./index-BZISi7jw.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BtkQkHPN.js";const c=({text:i,variant:d="primary",className:f=""})=>t.jsx("span",{className:`badge badge--${d} ${f}`.trim(),children:i});c.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{text:{required:!0,tsType:{name:"string"},description:"The text to display in the badge"},variant:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "success" | "warning" | "error"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'}]},description:"The variant determines the color styling of the badge",defaultValue:{value:'"primary"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Optional additional CSS classes",defaultValue:{value:'""',computed:!1}}}};const W={title:"Components/Badge",component:c},o=i=>{const d=B();return t.jsx(b,{children:t.jsx("div",{className:d?"dark-theme":"",children:t.jsx(c,{...i})})})},r=o.bind({});r.args={text:"Primary",variant:"primary"};const e=o.bind({});e.args={text:"Secondary",variant:"secondary"};const a=o.bind({});a.args={text:"Success",variant:"success"};const s=o.bind({});s.args={text:"Warning",variant:"warning"};const n=o.bind({});n.args={text:"Error",variant:"error"};var m,u,l;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  const isDarkMode = useDarkMode();
  return <ThemeProvider>\r
      <div className={isDarkMode ? 'dark-theme' : ''}>\r
        <Badge {...args} />\r
      </div>\r
    </ThemeProvider>;
}`,...(l=(u=r.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var p,g,v;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  const isDarkMode = useDarkMode();
  return <ThemeProvider>\r
      <div className={isDarkMode ? 'dark-theme' : ''}>\r
        <Badge {...args} />\r
      </div>\r
    </ThemeProvider>;
}`,...(v=(g=e.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var h,k,y;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  const isDarkMode = useDarkMode();
  return <ThemeProvider>\r
      <div className={isDarkMode ? 'dark-theme' : ''}>\r
        <Badge {...args} />\r
      </div>\r
    </ThemeProvider>;
}`,...(y=(k=a.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var T,D,M;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`args => {
  const isDarkMode = useDarkMode();
  return <ThemeProvider>\r
      <div className={isDarkMode ? 'dark-theme' : ''}>\r
        <Badge {...args} />\r
      </div>\r
    </ThemeProvider>;
}`,...(M=(D=s.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var x,P,S;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`args => {
  const isDarkMode = useDarkMode();
  return <ThemeProvider>\r
      <div className={isDarkMode ? 'dark-theme' : ''}>\r
        <Badge {...args} />\r
      </div>\r
    </ThemeProvider>;
}`,...(S=(P=n.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};const C=["Primary","Secondary","Success","Warning","Error"];export{n as Error,r as Primary,e as Secondary,a as Success,s as Warning,C as __namedExportsOrder,W as default};
