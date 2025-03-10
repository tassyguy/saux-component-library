import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as b}from"./index-DmM0KDA7.js";import{T as f}from"./ThemeProvider-DGwBzojn.js";import{u as C}from"./index-Bdtnp1LJ.js";import"./index-DKWlSypl.js";const d=({type:a,checked:s,onChange:t,disabled:c=!1,label:n,name:g})=>{const x=`check-radio ${a==="radio"?"check-radio--radio":""} ${c?"disabled":""}`.trim();return e.jsxs("label",{className:x,children:[e.jsx("input",{type:a,checked:s,onChange:t,disabled:c,name:g,className:"check-radio__input"}),e.jsx("span",{className:"check-radio__box","aria-hidden":"true"}),n&&e.jsx("span",{className:"check-radio__label",children:n})]})};d.__docgenInfo={description:"",methods:[],displayName:"CheckRadio",props:{type:{required:!0,tsType:{name:"union",raw:'"checkbox" | "radio"',elements:[{name:"literal",value:'"checkbox"'},{name:"literal",value:'"radio"'}]},description:'Type of control: "checkbox" or "radio"'},checked:{required:!0,tsType:{name:"boolean"},description:"Whether the control is checked"},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback triggered when the control changes"},disabled:{required:!1,tsType:{name:"boolean"},description:"Optional flag to disable the control",defaultValue:{value:"false",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Optional label to display next to the control"},name:{required:!1,tsType:{name:"string"},description:"Name for radio group"}}};const j={title:"Components/CheckRadio",component:d},u=a=>{const[s,t]=b.useState(a.checked),c=C();return e.jsx(f,{children:e.jsx("div",{className:c?"dark-theme":"",children:e.jsx(d,{...a,checked:s,onChange:()=>t(!s)})})})},r=u.bind({});r.args={type:"checkbox",checked:!1,disabled:!1,label:"Example Checkbox"};const o=u.bind({});o.args={type:"radio",checked:!1,disabled:!1,label:"Example Radio Button",name:"exampleRadio"};var i,l,h;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(args.checked);
  const isDarkMode = useDarkMode();
  return <ThemeProvider>\r
      <div className={isDarkMode ? 'dark-theme' : ''}>\r
        <CheckRadio {...args} checked={checked} onChange={() => setChecked(!checked)} />\r
      </div>\r
    </ThemeProvider>;
}`,...(h=(l=r.parameters)==null?void 0:l.docs)==null?void 0:h.source}}};var m,p,k;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  const [checked, setChecked] = useState(args.checked);
  const isDarkMode = useDarkMode();
  return <ThemeProvider>\r
      <div className={isDarkMode ? 'dark-theme' : ''}>\r
        <CheckRadio {...args} checked={checked} onChange={() => setChecked(!checked)} />\r
      </div>\r
    </ThemeProvider>;
}`,...(k=(p=o.parameters)==null?void 0:p.docs)==null?void 0:k.source}}};const N=["Checkbox","RadioButton"];export{r as Checkbox,o as RadioButton,N as __namedExportsOrder,j as default};
