import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{r as k}from"./index-DuZrfDUH.js";import{C as y}from"./CheckRadio-Cj3BjWDv.js";import{T as _}from"./ThemeProvider-CKzi-S0a.js";import{u as L}from"./index-CZHJ-ciL.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-GeD_eG6w.js";const J={title:"Components/Check Radio",component:y},n=c=>{const[o,h]=k.useState(c.checked),[m,j]=k.useState(c.indeterminate||!1),z=L(),B=()=>{m?(j(!1),h(!0)):h(!o)};return i.jsx(_,{children:i.jsx("div",{className:z?"dark-theme":"",children:i.jsx(y,{...c,checked:o,indeterminate:m,onChange:B})})})},e=n.bind({});e.args={type:"checkbox",checked:!1,disabled:!1,label:"Example Checkbox",size:"medium",variant:"primary"};const t=n.bind({});t.args={type:"radio",checked:!1,disabled:!1,label:"Example Radio Button",name:"exampleRadio",size:"medium",variant:"primary"};const a=n.bind({});a.args={...e.args,size:"small"};const r=n.bind({});r.args={...e.args,size:"large"};const s=n.bind({});s.args={...e.args,variant:"error"};const d=n.bind({});d.args={type:"checkbox",checked:!1,indeterminate:!0,disabled:!1,label:"Indeterminate Checkbox",size:"medium",variant:"primary"};var l,g,C;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(args.checked);
  const [indeterminate, setIndeterminate] = useState(args.indeterminate || false);
  const isDarkMode = useDarkMode();
  const handleChange = () => {
    if (indeterminate) {
      setIndeterminate(false); // Clear indeterminate state on first click
      setChecked(true); // Set to checked
    } else {
      setChecked(!checked); // Toggle checked state
    }
  };
  return <ThemeProvider>
      <div className={isDarkMode ? 'dark-theme' : ''}>
        <CheckRadio {...args} checked={checked} indeterminate={indeterminate} onChange={handleChange} />
      </div>
    </ThemeProvider>;
}`,...(C=(g=e.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var u,p,f;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(args.checked);
  const [indeterminate, setIndeterminate] = useState(args.indeterminate || false);
  const isDarkMode = useDarkMode();
  const handleChange = () => {
    if (indeterminate) {
      setIndeterminate(false); // Clear indeterminate state on first click
      setChecked(true); // Set to checked
    } else {
      setChecked(!checked); // Toggle checked state
    }
  };
  return <ThemeProvider>
      <div className={isDarkMode ? 'dark-theme' : ''}>
        <CheckRadio {...args} checked={checked} indeterminate={indeterminate} onChange={handleChange} />
      </div>
    </ThemeProvider>;
}`,...(f=(p=t.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var v,S,b;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(args.checked);
  const [indeterminate, setIndeterminate] = useState(args.indeterminate || false);
  const isDarkMode = useDarkMode();
  const handleChange = () => {
    if (indeterminate) {
      setIndeterminate(false); // Clear indeterminate state on first click
      setChecked(true); // Set to checked
    } else {
      setChecked(!checked); // Toggle checked state
    }
  };
  return <ThemeProvider>
      <div className={isDarkMode ? 'dark-theme' : ''}>
        <CheckRadio {...args} checked={checked} indeterminate={indeterminate} onChange={handleChange} />
      </div>
    </ThemeProvider>;
}`,...(b=(S=a.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var x,T,D;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(args.checked);
  const [indeterminate, setIndeterminate] = useState(args.indeterminate || false);
  const isDarkMode = useDarkMode();
  const handleChange = () => {
    if (indeterminate) {
      setIndeterminate(false); // Clear indeterminate state on first click
      setChecked(true); // Set to checked
    } else {
      setChecked(!checked); // Toggle checked state
    }
  };
  return <ThemeProvider>
      <div className={isDarkMode ? 'dark-theme' : ''}>
        <CheckRadio {...args} checked={checked} indeterminate={indeterminate} onChange={handleChange} />
      </div>
    </ThemeProvider>;
}`,...(D=(T=r.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var M,I,R;s.parameters={...s.parameters,docs:{...(M=s.parameters)==null?void 0:M.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(args.checked);
  const [indeterminate, setIndeterminate] = useState(args.indeterminate || false);
  const isDarkMode = useDarkMode();
  const handleChange = () => {
    if (indeterminate) {
      setIndeterminate(false); // Clear indeterminate state on first click
      setChecked(true); // Set to checked
    } else {
      setChecked(!checked); // Toggle checked state
    }
  };
  return <ThemeProvider>
      <div className={isDarkMode ? 'dark-theme' : ''}>
        <CheckRadio {...args} checked={checked} indeterminate={indeterminate} onChange={handleChange} />
      </div>
    </ThemeProvider>;
}`,...(R=(I=s.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var P,E,N;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(args.checked);
  const [indeterminate, setIndeterminate] = useState(args.indeterminate || false);
  const isDarkMode = useDarkMode();
  const handleChange = () => {
    if (indeterminate) {
      setIndeterminate(false); // Clear indeterminate state on first click
      setChecked(true); // Set to checked
    } else {
      setChecked(!checked); // Toggle checked state
    }
  };
  return <ThemeProvider>
      <div className={isDarkMode ? 'dark-theme' : ''}>
        <CheckRadio {...args} checked={checked} indeterminate={indeterminate} onChange={handleChange} />
      </div>
    </ThemeProvider>;
}`,...(N=(E=d.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};const K=["Checkbox","RadioButton","SmallCheckbox","LargeCheckbox","ErrorCheckbox","IndeterminateCheckbox"];export{e as Checkbox,s as ErrorCheckbox,d as IndeterminateCheckbox,r as LargeCheckbox,t as RadioButton,a as SmallCheckbox,K as __namedExportsOrder,J as default};
