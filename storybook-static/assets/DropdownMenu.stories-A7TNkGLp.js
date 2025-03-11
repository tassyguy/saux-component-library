import{j as d}from"./jsx-runtime-D_zvdyIk.js";import{D as C}from"./DropdownMenu-BVSX-5X-.js";import{T as R}from"./ThemeProvider-CU-Py9wx.js";import{u as $}from"./index-D8d2bdkj.js";import{U as A}from"./user-BiLvmNRj.js";import{r as N,R as l}from"./index-BZISi7jw.js";import{P as i}from"./index-Co38GRlK.js";import"./UL-Dw8jzxtu.js";import"./Button-DzVHr0oo.js";import"./index-BtkQkHPN.js";import"./_commonjsHelpers-CqkleIqs.js";function v(){return v=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},v.apply(this,arguments)}function H(e,n){if(e==null)return{};var t=V(e,n),r,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function V(e,n){if(e==null)return{};var t={},r=Object.keys(e),o,a;for(a=0;a<r.length;a++)o=r[a],!(n.indexOf(o)>=0)&&(t[o]=e[o]);return t}var k=N.forwardRef(function(e,n){var t=e.color,r=t===void 0?"currentColor":t,o=e.size,a=o===void 0?24:o,f=H(e,["color","size"]);return l.createElement("svg",v({ref:n,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},f),l.createElement("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),l.createElement("polyline",{points:"16 17 21 12 16 7"}),l.createElement("line",{x1:"21",y1:"12",x2:"9",y2:"12"}))});k.propTypes={color:i.string,size:i.oneOfType([i.string,i.number])};k.displayName="LogOut";function h(){return h=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},h.apply(this,arguments)}function I(e,n){if(e==null)return{};var t=B(e,n),r,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function B(e,n){if(e==null)return{};var t={},r=Object.keys(e),o,a;for(a=0;a<r.length;a++)o=r[a],!(n.indexOf(o)>=0)&&(t[o]=e[o]);return t}var b=N.forwardRef(function(e,n){var t=e.color,r=t===void 0?"currentColor":t,o=e.size,a=o===void 0?24:o,f=I(e,["color","size"]);return l.createElement("svg",h({ref:n,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},f),l.createElement("circle",{cx:"12",cy:"12",r:"3"}),l.createElement("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"}))});b.propTypes={color:i.string,size:i.oneOfType([i.string,i.number])};b.displayName="Settings";const te={title:"Components/Dropdown Menu",component:C},g=e=>{const n=$();return d.jsx(R,{children:d.jsx("div",{className:n?"dark-theme":"",children:d.jsx(C,{...e})})})},F=[{value:"profile",label:"Profile",icon:d.jsx(A,{size:16}),onClick:()=>alert("Profile clicked")},{value:"settings",label:"Settings",icon:d.jsx(b,{size:16}),onClick:()=>alert("Settings clicked")},{value:"logout",label:"Logout",icon:d.jsx(k,{size:16}),onClick:()=>alert("Logged out")}],s=g.bind({});s.args={label:"Menu",items:F,disabled:!1};const c=g.bind({});c.args={...s.args,align:"right"};const p=g.bind({});p.args={...s.args,align:"center"};const m=g.bind({});m.args={...s.args,fullWidth:!0};const u=g.bind({});u.args={...s.args,disabled:!0};var D,y,w;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`args => {
  const isDarkMode = useDarkMode();
  return <ThemeProvider>\r
      <div className={isDarkMode ? 'dark-theme' : ''}>\r
        <DropdownMenu {...args} />\r
      </div>\r
    </ThemeProvider>;
}`,...(w=(y=s.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var M,O,j;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`args => {
  const isDarkMode = useDarkMode();
  return <ThemeProvider>\r
      <div className={isDarkMode ? 'dark-theme' : ''}>\r
        <DropdownMenu {...args} />\r
      </div>\r
    </ThemeProvider>;
}`,...(j=(O=c.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};var P,x,T;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`args => {
  const isDarkMode = useDarkMode();
  return <ThemeProvider>\r
      <div className={isDarkMode ? 'dark-theme' : ''}>\r
        <DropdownMenu {...args} />\r
      </div>\r
    </ThemeProvider>;
}`,...(T=(x=p.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var z,E,S;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`args => {
  const isDarkMode = useDarkMode();
  return <ThemeProvider>\r
      <div className={isDarkMode ? 'dark-theme' : ''}>\r
        <DropdownMenu {...args} />\r
      </div>\r
    </ThemeProvider>;
}`,...(S=(E=m.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var L,W,_;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`args => {
  const isDarkMode = useDarkMode();
  return <ThemeProvider>\r
      <div className={isDarkMode ? 'dark-theme' : ''}>\r
        <DropdownMenu {...args} />\r
      </div>\r
    </ThemeProvider>;
}`,...(_=(W=u.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};const oe=["Default","RightAligned","CenterAligned","FullWidth","Disabled"];export{p as CenterAligned,s as Default,u as Disabled,m as FullWidth,c as RightAligned,oe as __namedExportsOrder,te as default};
