import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as m}from"./index-DmM0KDA7.js";import{T as c}from"./ThemeProvider-DGwBzojn.js";import{u as h}from"./index-Bdtnp1LJ.js";import"./index-DKWlSypl.js";const o=({value:t,placeholder:r,onChange:s,disabled:n=!1})=>a.jsx("input",{type:"text",className:`input-field ${n?"disabled":""}`,value:t,placeholder:r,onChange:s,disabled:n});o.__docgenInfo={description:"",methods:[],displayName:"InputField",props:{value:{required:!0,tsType:{name:"string"},description:"The current value of the input"},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder text for the input"},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:"Callback for handling changes in the input"},disabled:{required:!1,tsType:{name:"boolean"},description:"Optional flag to disable the input",defaultValue:{value:"false",computed:!1}}}};const E={title:"Components/Input Field",component:o},g=t=>{const[r,s]=m.useState(t.value||""),n=h(),d=p=>{s(p.target.value)};return a.jsx(c,{children:a.jsx("div",{className:n?"dark-theme":"",children:a.jsx(o,{...t,value:r,onChange:d})})})},e=g.bind({});e.args={value:"",placeholder:"Enter text here..."};var l,i,u;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
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
}`,...(u=(i=e.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};const I=["DefaultInputField"];export{e as DefaultInputField,I as __namedExportsOrder,E as default};
