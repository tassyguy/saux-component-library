import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{D as P}from"./DropdownMenu-C0MXmgiw.js";import{T as S}from"./ThemeProvider-CKzi-S0a.js";import{u as j}from"./index-CZHJ-ciL.js";import{U as w}from"./user-D4N7TVLy.js";import{S as C,L as N}from"./settings-C49HahGd.js";import"./index-DuZrfDUH.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-GeD_eG6w.js";import"./index-Co38GRlK.js";const q={title:"Components/Dropdown Menu",component:P},i=T=>{const x=j();return r.jsx(S,{children:r.jsx("div",{className:x?"dark-theme":"",children:r.jsx(P,{...T})})})},A=[{value:"profile",label:"Profile",icon:r.jsx(w,{size:16}),onClick:()=>alert("Profile clicked")},{value:"settings",label:"Settings",icon:r.jsx(C,{size:16}),onClick:()=>alert("Settings clicked")},{value:"logout",label:"Logout",icon:r.jsx(N,{size:16}),onClick:()=>alert("Logged out")}],e=i.bind({});e.args={label:"Menu",items:A,disabled:!1};const s=i.bind({});s.args={...e.args,align:"right"};const o=i.bind({});o.args={...e.args,align:"center"};const a=i.bind({});a.args={...e.args,fullWidth:!0};const n=i.bind({});n.args={...e.args,disabled:!0};var t,d,m;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => {
  const isDarkMode = useDarkMode();
  return <ThemeProvider>
      <div className={isDarkMode ? 'dark-theme' : ''}>
        <DropdownMenu {...args} />
      </div>
    </ThemeProvider>;
}`,...(m=(d=e.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var c,l,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  const isDarkMode = useDarkMode();
  return <ThemeProvider>
      <div className={isDarkMode ? 'dark-theme' : ''}>
        <DropdownMenu {...args} />
      </div>
    </ThemeProvider>;
}`,...(u=(l=s.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var p,g,D;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  const isDarkMode = useDarkMode();
  return <ThemeProvider>
      <div className={isDarkMode ? 'dark-theme' : ''}>
        <DropdownMenu {...args} />
      </div>
    </ThemeProvider>;
}`,...(D=(g=o.parameters)==null?void 0:g.docs)==null?void 0:D.source}}};var k,M,h;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`args => {
  const isDarkMode = useDarkMode();
  return <ThemeProvider>
      <div className={isDarkMode ? 'dark-theme' : ''}>
        <DropdownMenu {...args} />
      </div>
    </ThemeProvider>;
}`,...(h=(M=a.parameters)==null?void 0:M.docs)==null?void 0:h.source}}};var v,f,b;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
  const isDarkMode = useDarkMode();
  return <ThemeProvider>
      <div className={isDarkMode ? 'dark-theme' : ''}>
        <DropdownMenu {...args} />
      </div>
    </ThemeProvider>;
}`,...(b=(f=n.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const y=["Default","RightAligned","CenterAligned","FullWidth","Disabled"];export{o as CenterAligned,e as Default,n as Disabled,a as FullWidth,s as RightAligned,y as __namedExportsOrder,q as default};
