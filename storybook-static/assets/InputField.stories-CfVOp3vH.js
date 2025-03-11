import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{r as F,R as p}from"./index-BZISi7jw.js";import{I as R}from"./InputField-BeL4oBDu.js";import{T as z}from"./ThemeProvider-CU-Py9wx.js";import{u as H}from"./index-D8d2bdkj.js";import{M as _}from"./mail-DYXyPiVS.js";import{P as g}from"./index-Co38GRlK.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BtkQkHPN.js";function v(){return v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},v.apply(this,arguments)}function $(e,t){if(e==null)return{};var a=q(e,t),r,n;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function q(e,t){if(e==null)return{};var a={},r=Object.keys(e),n,s;for(s=0;s<r.length;s++)n=r[s],!(t.indexOf(n)>=0)&&(a[n]=e[n]);return a}var f=F.forwardRef(function(e,t){var a=e.color,r=a===void 0?"currentColor":a,n=e.size,s=n===void 0?24:n,N=$(e,["color","size"]);return p.createElement("svg",v({ref:t,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},N),p.createElement("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),p.createElement("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"}))});f.propTypes={color:g.string,size:g.oneOfType([g.string,g.number])};f.displayName="Lock";const Z={title:"Components/Input Field",component:R},i=e=>{const[t,a]=F.useState(e.value||""),r=H(),n=s=>{a(s.target.value)};return m.jsx(z,{children:m.jsx("div",{className:r?"dark-theme":"",children:m.jsx(R,{...e,value:t,onChange:n})})})},o=i.bind({});o.args={value:"",placeholder:"Enter text here..."};const u=i.bind({});u.args={...o.args,maxLength:50,characterCount:!0};const l=i.bind({});l.args={...o.args,error:"This field is required"};const d=i.bind({});d.args={...o.args,fullWidth:!0};const c=i.bind({});c.args={...o.args,icon:m.jsx(_,{size:16})};const h=i.bind({});h.args={...o.args,type:"password",placeholder:"Enter your password",icon:m.jsx(f,{size:16})};var k,M,C;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || '');
  const isDarkMode = useDarkMode();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return <ThemeProvider>\r
      <div className={isDarkMode ? 'dark-theme' : ''}>\r
        <InputField {...args} value={value} onChange={handleChange} />\r
      </div>\r
    </ThemeProvider>;
}`,...(C=(M=o.parameters)==null?void 0:M.docs)==null?void 0:C.source}}};var T,E,D;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || '');
  const isDarkMode = useDarkMode();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return <ThemeProvider>\r
      <div className={isDarkMode ? 'dark-theme' : ''}>\r
        <InputField {...args} value={value} onChange={handleChange} />\r
      </div>\r
    </ThemeProvider>;
}`,...(D=(E=u.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};var P,I,x;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || '');
  const isDarkMode = useDarkMode();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return <ThemeProvider>\r
      <div className={isDarkMode ? 'dark-theme' : ''}>\r
        <InputField {...args} value={value} onChange={handleChange} />\r
      </div>\r
    </ThemeProvider>;
}`,...(x=(I=l.parameters)==null?void 0:I.docs)==null?void 0:x.source}}};var b,y,j;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || '');
  const isDarkMode = useDarkMode();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return <ThemeProvider>\r
      <div className={isDarkMode ? 'dark-theme' : ''}>\r
        <InputField {...args} value={value} onChange={handleChange} />\r
      </div>\r
    </ThemeProvider>;
}`,...(j=(y=d.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var w,L,S;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || '');
  const isDarkMode = useDarkMode();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return <ThemeProvider>\r
      <div className={isDarkMode ? 'dark-theme' : ''}>\r
        <InputField {...args} value={value} onChange={handleChange} />\r
      </div>\r
    </ThemeProvider>;
}`,...(S=(L=c.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};var V,O,W;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value || '');
  const isDarkMode = useDarkMode();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return <ThemeProvider>\r
      <div className={isDarkMode ? 'dark-theme' : ''}>\r
        <InputField {...args} value={value} onChange={handleChange} />\r
      </div>\r
    </ThemeProvider>;
}`,...(W=(O=h.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};const ee=["Default","WithMaxLength","WithError","FullWidth","WithIcon","PasswordInput"];export{o as Default,d as FullWidth,h as PasswordInput,l as WithError,c as WithIcon,u as WithMaxLength,ee as __namedExportsOrder,Z as default};
