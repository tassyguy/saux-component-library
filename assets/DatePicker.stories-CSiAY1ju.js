import{j as p}from"./jsx-runtime-D_zvdyIk.js";import{r as h}from"./index-DuZrfDUH.js";import{D as l}from"./DatePicker-DBUvpsbK.js";import"./_commonjsHelpers-CqkleIqs.js";const v={title:"Components/Date Picker",component:l},D=t=>{const[d,u]=h.useState(t.value),m=g=>{u(g)};return p.jsx(l,{...t,value:d,onChange:m})},e=D.bind({});e.args={label:"Select a Date",value:"2025-03-25",minDate:"2025-01-01",maxDate:"2025-12-31"};const a=D.bind({});a.args={label:"Disabled Date Picker",value:"2025-03-25",disabled:!0};var r,s,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`args => {
  const [date, setDate] = useState(args.value);
  const handleChange = (newDate: string) => {
    setDate(newDate);
  };
  return <DatePicker {...args} value={date} onChange={handleChange} />;
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var o,c,i;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`args => {
  const [date, setDate] = useState(args.value);
  const handleChange = (newDate: string) => {
    setDate(newDate);
  };
  return <DatePicker {...args} value={date} onChange={handleChange} />;
}`,...(i=(c=a.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const x=["DefaultDatePicker","DisabledDatePicker"];export{e as DefaultDatePicker,a as DisabledDatePicker,x as __namedExportsOrder,v as default};
