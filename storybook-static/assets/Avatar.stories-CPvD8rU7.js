import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{T as M}from"./ThemeProvider-DGwBzojn.js";import{u as N}from"./index-Bdtnp1LJ.js";import"./index-DmM0KDA7.js";import"./index-DKWlSypl.js";const d=({src:i,alt:n="Avatar",size:e=40,className:D=""})=>{const x={width:e,height:e,lineHeight:`${e}px`,fontSize:e/2},T=A=>{const r=A.split(" ");return r.length===0?"":r.length===1?r[0].charAt(0).toUpperCase():(r[0].charAt(0)+r[r.length-1].charAt(0)).toUpperCase()};return a.jsx("div",{className:`avatar ${D}`,style:x,children:i?a.jsx("img",{src:i,alt:n,className:"avatar__img",style:{width:e,height:e}}):a.jsx("span",{className:"avatar__fallback",children:T(n)})})};d.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{src:{required:!1,tsType:{name:"string"},description:"URL of the avatar image (optional)"},alt:{required:!1,tsType:{name:"string"},description:"Alternate text for the avatar (used for fallback initials if no src provided)",defaultValue:{value:'"Avatar"',computed:!1}},size:{required:!1,tsType:{name:"number"},description:"The size (width and height in pixels) of the avatar",defaultValue:{value:"40",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Optional extra className for custom styling",defaultValue:{value:'""',computed:!1}}}};const S={title:"Components/Avatar",component:d},c=i=>{const n=N();return a.jsx(M,{children:a.jsx("div",{className:n?"dark-theme":"",children:a.jsx(d,{...i})})})},s=c.bind({});s.args={alt:"John Doe",size:60,src:"https://via.placeholder.com/60"};const t=c.bind({});t.args={alt:"Jane Doe",size:60,src:""};const o=c.bind({});o.args={alt:"Custom Size",size:100,src:"https://via.placeholder.com/100"};var l,m,p;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
  const isDarkMode = useDarkMode();
  return <ThemeProvider>\r
      <div className={isDarkMode ? 'dark-theme' : ''}>\r
        <Avatar {...args} />\r
      </div>\r
    </ThemeProvider>;
}`,...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,h,v;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
  const isDarkMode = useDarkMode();
  return <ThemeProvider>\r
      <div className={isDarkMode ? 'dark-theme' : ''}>\r
        <Avatar {...args} />\r
      </div>\r
    </ThemeProvider>;
}`,...(v=(h=t.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var f,g,k;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
  const isDarkMode = useDarkMode();
  return <ThemeProvider>\r
      <div className={isDarkMode ? 'dark-theme' : ''}>\r
        <Avatar {...args} />\r
      </div>\r
    </ThemeProvider>;
}`,...(k=(g=o.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};const C=["Default","WithFallback","CustomSize"];export{o as CustomSize,s as Default,t as WithFallback,C as __namedExportsOrder,S as default};
