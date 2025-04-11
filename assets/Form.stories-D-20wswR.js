import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./index-DuZrfDUH.js";import{F as y,a as u}from"./FormGroup-BCEwk9QW.js";import{I as n}from"./InputField-B_-rq-ua.js";import{T as I}from"./TextArea-lh6BSEFN.js";import{B as T}from"./Button-D4b0BiQ0.js";import{T as j}from"./ThemeProvider-CKzi-S0a.js";import{u as z}from"./index-CZHJ-ciL.js";import{U as q}from"./user-D4N7TVLy.js";import{M as P}from"./mail-ETHYRO4z.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-GeD_eG6w.js";import"./index-Co38GRlK.js";const X={title:"Components/Form",component:y},l=m=>{const G=z(),[S,C]=i.useState(""),[W,k]=i.useState(""),[N,D]=i.useState("");return e.jsx(j,{children:e.jsx("div",{className:G?"dark-theme":"",children:e.jsxs(y,{...m,children:[e.jsx(u,{label:"Name",htmlFor:"name",required:!0,children:e.jsx(n,{value:S,onChange:r=>C(r.target.value),placeholder:"Enter your name",icon:e.jsx(q,{size:16}),fullWidth:!0})}),e.jsx(u,{label:"Email",htmlFor:"email",required:!0,error:"Invalid email format",children:e.jsx(n,{type:"email",value:W,onChange:r=>k(r.target.value),placeholder:"Enter your email",icon:e.jsx(P,{size:16}),fullWidth:!0})}),e.jsx(u,{label:"Message",htmlFor:"message",description:"Max 500 characters",children:e.jsx(I,{value:N,onChange:r=>D(r.target.value),placeholder:"Enter your message",rows:5,maxLength:500,characterCount:!0,fullWidth:!0})}),e.jsx(T,{type:"submit",label:"Submit",fullWidth:!0})]})})})},a=l.bind({});a.args={onSubmit:m=>{m.preventDefault(),alert("Form submitted!")},layout:"vertical",size:"medium"};const t=l.bind({});t.args={...a.args,layout:"horizontal"};const o=l.bind({});o.args={...a.args,layout:"inline"};const s=l.bind({});s.args={...a.args,isLoading:!0};var d,c,h;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
  const isDarkMode = useDarkMode();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  return <ThemeProvider>
      <div className={isDarkMode ? 'dark-theme' : ''}>
        <Form {...args}>
          <FormGroup label="Name" htmlFor="name" required>
            <InputField value={name} onChange={e => setName(e.target.value)} placeholder="Enter your name" icon={<User size={16} />} fullWidth />
          </FormGroup>
          <FormGroup label="Email" htmlFor="email" required error="Invalid email format">
            <InputField type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email" icon={<Mail size={16} />} fullWidth />
          </FormGroup>
          <FormGroup label="Message" htmlFor="message" description="Max 500 characters">
            <TextArea value={message} onChange={e => setMessage(e.target.value)} placeholder="Enter your message" rows={5} maxLength={500} characterCount fullWidth />
          </FormGroup>
          <Button type="submit" label="Submit" fullWidth />
        </Form>
      </div>
    </ThemeProvider>;
}`,...(h=(c=a.parameters)==null?void 0:c.docs)==null?void 0:h.source}}};var p,g,F;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  const isDarkMode = useDarkMode();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  return <ThemeProvider>
      <div className={isDarkMode ? 'dark-theme' : ''}>
        <Form {...args}>
          <FormGroup label="Name" htmlFor="name" required>
            <InputField value={name} onChange={e => setName(e.target.value)} placeholder="Enter your name" icon={<User size={16} />} fullWidth />
          </FormGroup>
          <FormGroup label="Email" htmlFor="email" required error="Invalid email format">
            <InputField type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email" icon={<Mail size={16} />} fullWidth />
          </FormGroup>
          <FormGroup label="Message" htmlFor="message" description="Max 500 characters">
            <TextArea value={message} onChange={e => setMessage(e.target.value)} placeholder="Enter your message" rows={5} maxLength={500} characterCount fullWidth />
          </FormGroup>
          <Button type="submit" label="Submit" fullWidth />
        </Form>
      </div>
    </ThemeProvider>;
}`,...(F=(g=t.parameters)==null?void 0:g.docs)==null?void 0:F.source}}};var v,f,M;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
  const isDarkMode = useDarkMode();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  return <ThemeProvider>
      <div className={isDarkMode ? 'dark-theme' : ''}>
        <Form {...args}>
          <FormGroup label="Name" htmlFor="name" required>
            <InputField value={name} onChange={e => setName(e.target.value)} placeholder="Enter your name" icon={<User size={16} />} fullWidth />
          </FormGroup>
          <FormGroup label="Email" htmlFor="email" required error="Invalid email format">
            <InputField type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email" icon={<Mail size={16} />} fullWidth />
          </FormGroup>
          <FormGroup label="Message" htmlFor="message" description="Max 500 characters">
            <TextArea value={message} onChange={e => setMessage(e.target.value)} placeholder="Enter your message" rows={5} maxLength={500} characterCount fullWidth />
          </FormGroup>
          <Button type="submit" label="Submit" fullWidth />
        </Form>
      </div>
    </ThemeProvider>;
}`,...(M=(f=o.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var b,x,E;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`args => {
  const isDarkMode = useDarkMode();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  return <ThemeProvider>
      <div className={isDarkMode ? 'dark-theme' : ''}>
        <Form {...args}>
          <FormGroup label="Name" htmlFor="name" required>
            <InputField value={name} onChange={e => setName(e.target.value)} placeholder="Enter your name" icon={<User size={16} />} fullWidth />
          </FormGroup>
          <FormGroup label="Email" htmlFor="email" required error="Invalid email format">
            <InputField type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email" icon={<Mail size={16} />} fullWidth />
          </FormGroup>
          <FormGroup label="Message" htmlFor="message" description="Max 500 characters">
            <TextArea value={message} onChange={e => setMessage(e.target.value)} placeholder="Enter your message" rows={5} maxLength={500} characterCount fullWidth />
          </FormGroup>
          <Button type="submit" label="Submit" fullWidth />
        </Form>
      </div>
    </ThemeProvider>;
}`,...(E=(x=s.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const Y=["Default","Horizontal","Inline","Loading"];export{a as Default,t as Horizontal,o as Inline,s as Loading,Y as __namedExportsOrder,X as default};
