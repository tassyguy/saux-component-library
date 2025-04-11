import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as x}from"./index-DuZrfDUH.js";import{S}from"./Stepper-C1LBPdwz.js";import{C}from"./check-circle-Cl5K7JZr.js";import{I as f}from"./info-cVd8RQ0G.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-Co38GRlK.js";const A={title:"Components/Stepper",component:S},l=p=>{const[m,d]=x.useState(p.activeStep),v=u=>{d(u)};return r.jsx(S,{...p,activeStep:m,onStepClick:v})},e=l.bind({});e.args={steps:[{label:"Step 1",description:"Description for step 1",icon:r.jsx(C,{size:16})},{label:"Step 2",description:"Description for step 2",icon:r.jsx(f,{size:16})},{label:"Step 3",description:"Description for step 3"}],activeStep:0,orientation:"horizontal"};const t=l.bind({});t.args={...e.args,orientation:"vertical"};var s,o,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
  const [activeStep, setActiveStep] = useState(args.activeStep);
  const handleStepClick = (stepIndex: number) => {
    setActiveStep(stepIndex);
  };
  return <Stepper {...args} activeStep={activeStep} onStepClick={handleStepClick} />;
}`,...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var a,n,c;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
  const [activeStep, setActiveStep] = useState(args.activeStep);
  const handleStepClick = (stepIndex: number) => {
    setActiveStep(stepIndex);
  };
  return <Stepper {...args} activeStep={activeStep} onStepClick={handleStepClick} />;
}`,...(c=(n=t.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const D=["HorizontalStepper","VerticalStepper"];export{e as HorizontalStepper,t as VerticalStepper,D as __namedExportsOrder,A as default};
