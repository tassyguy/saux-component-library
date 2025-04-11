import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as k}from"./index-DuZrfDUH.js";import{P as i}from"./ProgressBar-IOKn6Rt-.js";import"./_commonjsHelpers-CqkleIqs.js";const M={title:"Components/Progress Bar",component:i},c=o=>r.jsx(i,{...o}),e=c.bind({});e.args={value:50,label:"50%",variant:"primary"};const s=c.bind({});s.args={value:75,label:"75%",variant:"success"};const a=c.bind({});a.args={value:60,label:"60%",striped:!0,variant:"warning"};const t=c.bind({});t.args={value:40,label:"40%",striped:!0,animated:!0,variant:"error"};const n=()=>{const[o,g]=k.useState(0),R=()=>{g(C=>Math.min(C+10,100))},y=()=>{g(0)};return r.jsxs("div",{children:[r.jsx(i,{value:o,label:`${o}%`,variant:"primary"}),r.jsx("button",{onClick:R,style:{margin:"10px"},children:"Increase"}),r.jsx("button",{onClick:y,children:"Reset"})]})};var p,l,m;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:"args => <ProgressBar {...args} />",...(m=(l=e.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var d,u,P;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:"args => <ProgressBar {...args} />",...(P=(u=s.parameters)==null?void 0:u.docs)==null?void 0:P.source}}};var v,B,b;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:"args => <ProgressBar {...args} />",...(b=(B=a.parameters)==null?void 0:B.docs)==null?void 0:b.source}}};var x,h,S;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:"args => <ProgressBar {...args} />",...(S=(h=t.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var j,I,f;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  const [progress, setProgress] = useState(0);
  const handleIncrease = () => {
    setProgress(prev => Math.min(prev + 10, 100));
  };
  const handleReset = () => {
    setProgress(0);
  };
  return <div>
      <ProgressBar value={progress} label={\`\${progress}%\`} variant="primary" />
      <button onClick={handleIncrease} style={{
      margin: '10px'
    }}>
        Increase
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>;
}`,...(f=(I=n.parameters)==null?void 0:I.docs)==null?void 0:f.source}}};const $=["DefaultProgressBar","SuccessProgressBar","StripedProgressBar","AnimatedProgressBar","InteractiveProgressBar"];export{t as AnimatedProgressBar,e as DefaultProgressBar,n as InteractiveProgressBar,a as StripedProgressBar,s as SuccessProgressBar,$ as __namedExportsOrder,M as default};
