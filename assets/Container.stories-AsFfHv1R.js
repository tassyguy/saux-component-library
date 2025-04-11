import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{C}from"./Container-Bv99HlK3.js";import{T}from"./ThemeProvider-CKzi-S0a.js";import{u as x}from"./index-CZHJ-ciL.js";import"./index-DuZrfDUH.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-GeD_eG6w.js";const H={title:"Components/Container",component:C},n=D=>{const M=x();return o.jsx(T,{children:o.jsx("div",{className:M?"dark-theme":"",children:o.jsx(C,{...D,children:o.jsx("p",{children:"This is a responsive container."})})})})},r=n.bind({});r.args={maxWidth:"900px",padding:"2rem",backgroundColor:"var(--background-color)",borderRadius:"8px",shadow:"medium"};const e=n.bind({});e.args={...r.args,fullHeight:!0};const s=n.bind({});s.args={...r.args,shadow:"none"};const a=n.bind({});a.args={...r.args,margin:"2rem auto"};var i,t,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
  const isDarkMode = useDarkMode();
  return <ThemeProvider>
      <div className={isDarkMode ? 'dark-theme' : ''}>
        <Container {...args}>
          <p>This is a responsive container.</p>
        </Container>
      </div>
    </ThemeProvider>;
}`,...(d=(t=r.parameters)==null?void 0:t.docs)==null?void 0:d.source}}};var m,c,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  const isDarkMode = useDarkMode();
  return <ThemeProvider>
      <div className={isDarkMode ? 'dark-theme' : ''}>
        <Container {...args}>
          <p>This is a responsive container.</p>
        </Container>
      </div>
    </ThemeProvider>;
}`,...(p=(c=e.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var u,h,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
  const isDarkMode = useDarkMode();
  return <ThemeProvider>
      <div className={isDarkMode ? 'dark-theme' : ''}>
        <Container {...args}>
          <p>This is a responsive container.</p>
        </Container>
      </div>
    </ThemeProvider>;
}`,...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var l,v,k;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
  const isDarkMode = useDarkMode();
  return <ThemeProvider>
      <div className={isDarkMode ? 'dark-theme' : ''}>
        <Container {...args}>
          <p>This is a responsive container.</p>
        </Container>
      </div>
    </ThemeProvider>;
}`,...(k=(v=a.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};const _=["Default","FullHeight","NoShadow","CustomMargin"];export{a as CustomMargin,r as Default,e as FullHeight,s as NoShadow,_ as __namedExportsOrder,H as default};
