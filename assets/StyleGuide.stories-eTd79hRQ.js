import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{e as h}from"./index-DuZrfDUH.js";import{A as x}from"./Accordion-I6TbV4JG.js";import{A as N}from"./Alert-BIbIwudL.js";import{A as f}from"./Avatar-BQE4GJaQ.js";import{B as v}from"./Badge-CPXNsfxw.js";import{B as k}from"./Breadcrumb-ngjmGBig.js";import{B as l}from"./Button-D4b0BiQ0.js";import{C as j}from"./Card-NYc52ij4.js";import{C as d}from"./CheckRadio-Cj3BjWDv.js";import{C as y}from"./Chip-m5ksWfhb.js";import"./Container-Bv99HlK3.js";import{D as _}from"./DatePicker-DBUvpsbK.js";import{D as C}from"./DropdownMenu-C0MXmgiw.js";import{F as D}from"./FileUpload-BdeJzUe8.js";import{F as I}from"./Footer-CDO3S1q7.js";import{F as S,a as t}from"./FormGroup-BCEwk9QW.js";import{G as B,a as s}from"./GridItem-BnM8Ntv2.js";import{H as M,a as F,b as P,c as G,d as z}from"./H5-Bra4vguc.js";import{I as n}from"./InputField-B_-rq-ua.js";import{L}from"./Link-8ZJ3Bftc.js";import{O as T,U as w}from"./UL-Cn2q-OuZ.js";import{M as A}from"./Modal-DqC2TSTZ.js";import{P as O}from"./Pagination-ViVRIjJi.js";import{P as H}from"./ProgressBar-IOKn6Rt-.js";import"./Section-BlNpUGrn.js";import{S as R}from"./SelectInput-I0k_iOGe.js";import{S as q}from"./Sidebar-COHALb8l.js";import{S as E}from"./SliderInput-Bv70Ub4E.js";import{S as U}from"./Stepper-C1LBPdwz.js";import{T as W}from"./Table-Cd0S6otO.js";import{T as b}from"./TextArea-lh6BSEFN.js";import{T as V}from"./ThemeProvider-CKzi-S0a.js";import{T as Y}from"./ToastNotification-DKcBO1gs.js";import{T as $}from"./ToggleSwitch-BFnDKm8b.js";import"./Tooltip-G8WfGh4_.js";import{C as c}from"./check-circle-Cl5K7JZr.js";import{I as Q}from"./info-cVd8RQ0G.js";import{C as m}from"./chevron-down-DPvSbOnF.js";import{U as Z}from"./user-D4N7TVLy.js";import{S as J,L as X}from"./settings-C49HahGd.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-Co38GRlK.js";const K=(o="padding",i="all",a="md")=>({className:i==="all"?`${o}-${a}`:`${o}-${i}-${a}`}),ea={title:"Sample Pages/Style Guide"},ee=[{header:"Name",accessor:"name"},{header:"Age",accessor:"age"},{header:"Email",accessor:"email"}],ae=[{age:29,email:"somerandomemail@gmail.com",name:"Alice"},{age:39,email:"reallyawesomedev@devs.com",name:"Simon"},{age:32,email:"alsoawesomedev@devs.com",name:"Amanda"}],le=[{label:"Dashboard",href:"/dashboard"},{label:"Profile",href:"/profile"},{label:"Settings",href:"/settings"},{label:"Logout",onClick:()=>alert("Logged out!")}],se=[{label:"Home",href:"/"},{label:"Products",href:"/products"},{label:"Electronics",href:"/products/electronics"},{label:"Laptops"}],oe=[{icon:e.jsx(Z,{size:16}),label:"Profile",onClick:()=>{},value:"profile"},{icon:e.jsx(J,{size:16}),label:"Settings",onClick:()=>{},value:"settings"},{icon:e.jsx(X,{size:16}),label:"Logout",onClick:()=>{},value:"logout"}],ie=[{label:"Checkbox Option #1",value:"option1"},{label:"Checkbox Option #2",value:"option2"},{label:"Checkbox Option #3",value:"option3"}],re=[{label:"Radio Option A",value:"A"},{label:"Radio Option B",value:"B"},{label:"Radio Option C",value:"C"}],te=[{label:"Option 1",value:"option1"},{label:"Option 2",value:"option2"},{label:"Option 3",value:"option3"}],ne=[{description:"Description 1",imageUrl:"https://fastly.picsum.photos/id/19/2500/1667.jpg?hmac=7epGozH4QjToGaBf_xb2HbFTXoV5o8n_cYzB7I4lt6g",title:"Card 1"},{description:"Description 2",imageUrl:"https://fastly.picsum.photos/id/25/5000/3333.jpg?hmac=yCz9LeSs-i72Ru0YvvpsoECnCTxZjzGde805gWrAHkM",title:"Card 2"},{description:"Description 3",imageUrl:"https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA",title:"Card 3"}],ce=()=>{const[o,i]=h.useState(!1);return e.jsx(V,{children:e.jsxs("div",{...K("padding","all","lg"),children:[" ",e.jsx("label",{className:"form-group__label",children:"Header tags:"}),e.jsx(M,{text:"H1",className:"margin-bottom-lg"}),e.jsx(F,{text:"H2",className:"margin-bottom-lg"}),e.jsx(P,{text:"H3",className:"margin-bottom-lg"}),e.jsx(G,{text:"H4",className:"margin-bottom-lg"}),e.jsx(z,{text:"H5",className:"margin-bottom-lg"}),e.jsxs("div",{className:"container",children:[e.jsx("label",{className:"form-group__label",children:"Alert:"}),e.jsx(N,{className:"margin-bottom-lg",message:"This is an alert message.",type:"success"})]}),e.jsxs("div",{className:"container",children:[e.jsx("label",{className:"form-group__label blockDisplay",children:"Avatar:"}),e.jsx(f,{className:"margin-bottom-lg",src:"https://via.placeholder.com/150",alt:"Avatar"})]}),e.jsxs("div",{className:"container",children:[e.jsx("label",{className:"form-group__label blockDisplay",children:"Badge:"}),e.jsx(v,{className:"margin-bottom-lg",text:"Badge"})]}),e.jsxs("div",{className:"container",children:[e.jsx("label",{className:"form-group__label blockDisplay",children:"Buttons:"}),e.jsx(l,{className:"margin-bottom-lg",label:"Small Button",variant:"primary",size:"small",onClick:()=>console.log("Small primary Button clicked")}),e.jsx(l,{className:"margin-bottom-lg",label:"Medium Button",variant:"primary",size:"medium",onClick:()=>console.log("Medium primary Button clicked")}),e.jsx(l,{className:"margin-bottom-lg",label:"Large Button",variant:"primary",size:"large",onClick:()=>console.log("Large primary Button clicked")}),e.jsx(l,{className:"margin-bottom-lg",label:"Small Button",variant:"secondary",size:"small",onClick:()=>console.log("Small secondary Button clicked")}),e.jsx(l,{className:"margin-bottom-lg",label:"Medium Button",variant:"secondary",size:"medium",onClick:()=>console.log("Medium secondary Button clicked")}),e.jsx(l,{className:"margin-bottom-lg",label:"Large Button",variant:"secondary",size:"large",onClick:()=>console.log("Large secondary Button clicked")})]}),e.jsxs("div",{className:"container",children:[e.jsx("label",{className:"form-group__label blockDisplay",children:"Card:"}),e.jsx(j,{className:"margin-bottom-lg",items:ne})]}),e.jsxs("div",{className:"container",children:[e.jsx("label",{className:"form-group__label blockDisplay",children:"Card:"}),e.jsx(y,{label:"Default Chip"})]}),e.jsxs("div",{className:"container",children:[e.jsx("label",{className:"form-group__label blockDisplay",children:"Table:"}),e.jsx(W,{columns:ee,data:ae,className:"margin-bottom-lg"})]}),e.jsxs("div",{className:"container",children:[e.jsx("label",{className:"form-group__label blockDisplay",children:"Checkbox Component:"}),e.jsx(d,{type:"checkbox",options:ie,onChange:a=>console.log("Selected checkboxes:",a),className:"margin-bottom-lg"}),e.jsx(d,{type:"radio",name:"radio-group",options:re,onChange:a=>console.log("Selected radio:",a),className:"margin-bottom-lg"})]}),e.jsxs("div",{className:"container",children:[e.jsx("label",{className:"form-group__label blockDisplay",children:"Date Picker:"}),e.jsx(_,{label:"Select a Date",minDate:"2025-01-01",maxDate:"2025-12-31",isRequired:!0,errorMessage:"Please select a valid date within the range"})]}),e.jsxs("div",{className:"container",children:[e.jsx("label",{className:"form-group__label blockDisplay",children:"Progress Bar:"}),e.jsx(H,{label:"50%",value:50,variant:"primary"})]}),e.jsxs("div",{className:"container",children:[e.jsx("label",{className:"form-group__label blockDisplay",children:"Slider Input:"}),e.jsx(E,{label:"Default Slider",min:0,max:100})]}),e.jsxs("div",{className:"container",children:[e.jsx("label",{className:"form-group__label blockDisplay",children:"Dropdown Menu:"}),e.jsx(C,{className:"margin-bottom-lg",label:"Option",items:oe})]}),e.jsxs("div",{className:"container",children:[e.jsx("label",{className:"form-group__label blockDisplay",children:"File Upload:"}),e.jsx("div",{children:e.jsx(D,{accept:"*",label:"Upload File",buttonVariant:"secondary",buttonSize:"large",onFilesSelected:()=>{}})})]}),e.jsxs("div",{className:"container",children:[e.jsx("label",{className:"form-group__label blockDisplay",children:"Footer:"}),e.jsx(I,{className:"margin-bottom-lg"})]}),e.jsxs("div",{className:"container",children:[e.jsx("label",{className:"form-group__label blockDisplay",children:"Form Group:"}),e.jsxs(S,{layout:"vertical",onSubmit:()=>{},size:"medium",children:[e.jsx(t,{htmlFor:"name",label:"Name",required:!0,children:e.jsx(n,{placeholder:"Enter your name",isRequired:!0,errorMessage:"Please enter your name"})}),e.jsx(t,{htmlFor:"email",label:"Email",required:!0,children:e.jsx(n,{placeholder:"Enter your email",isRequired:!0,reqIncludes:["@",".com"],errorMessage:"Email is required",fullWidth:!0})}),e.jsx(t,{description:"Max 500 characters",htmlFor:"message",label:"Message",children:e.jsx(b,{characterCount:!0,fullWidth:!0,maxLength:500,onChange:()=>{},placeholder:"Enter your message",rows:5,value:"",isRequired:!0,errorMessage:"Please enter a message to continue"})}),e.jsx(l,{fullWidth:!0,label:"Submit",type:"submit"})]})]}),e.jsxs("div",{className:"container",children:[e.jsx("label",{className:"form-group__label blockDisplay",children:"Grid:"}),e.jsx(U,{activeStep:0,onStepClick:()=>{},orientation:"horizontal",steps:[{description:"Description for step 1",icon:e.jsx(c,{size:16}),label:"Step 1"},{description:"Description for step 2",icon:e.jsx(Q,{size:16}),label:"Step 2"},{description:"Description for step 3",label:"Step 3"}]})]}),e.jsxs("div",{className:"container",children:[e.jsx("label",{className:"form-group__label blockDisplay",children:"Grid:"}),e.jsxs(B,{columns:3,gap:"1em",children:[e.jsx(s,{children:"Item 1"}),e.jsx(s,{children:"Item 2"}),e.jsx(s,{children:"Item 3"}),e.jsx(s,{children:"Item 4"}),e.jsx(s,{children:"Item 5"}),e.jsx(s,{children:"Item 6"})]})]}),e.jsxs("div",{className:"container",children:[e.jsx("label",{className:"form-group__label blockDisplay",children:"Input Field:"}),e.jsx(n,{placeholder:"Enter your name",isRequired:!0,errorMessage:"Please enter your name"})]}),e.jsxs("div",{className:"container",children:[e.jsx("label",{className:"form-group__label blockDisplay",children:"Text Area:"}),e.jsx(b,{placeholder:"Enter your message",characterCount:!0,maxLength:500,isRequired:!0,errorMessage:"Please enter a message",fullWidth:!0})]}),e.jsxs("div",{className:"container",children:[e.jsx("label",{className:"form-group__label blockDisplay",children:"Link:"}),e.jsx(L,{href:"https://www.google.com",label:"Go to Google"})]}),e.jsxs("div",{className:"container",children:[e.jsx("label",{className:"form-group__label blockDisplay",children:"Ordered Lists:"}),e.jsx(T,{className:"margin-bottom-lg",items:[{icon:e.jsx(c,{size:16}),key:"success",label:"Success Item",onClick:()=>{}},{key:"warning",label:"Warning Item",onClick:()=>{}},{key:"info",label:"Info Item",onClick:()=>{}},{disabled:!0,key:"disabled",label:"Disabled Item"}]})]}),e.jsxs("div",{className:"container",children:[e.jsx("label",{className:"form-group__label blockDisplay",children:"Unordered Lists:"}),e.jsx(w,{className:"margin-bottom-lg",items:[{icon:e.jsx(c,{size:16}),key:"success",label:"Success Item",onClick:()=>{}},{key:"warning",label:"Warning Item",onClick:()=>{}},{key:"info",label:"Info Item",onClick:()=>{}},{disabled:!0,key:"disabled",label:"Disabled Item"}]})]}),e.jsxs("div",{className:"container",children:[e.jsx("label",{className:"form-group__label blockDisplay",children:"Modal:"}),e.jsx(l,{label:"Open Modal",onClick:()=>{}}),e.jsx(A,{open:!1,onClose:()=>{},title:"Modal Title",children:e.jsx("p",{children:"This is an example modal dialog. You can place any content here."})})]}),e.jsxs("div",{className:"container",children:[e.jsx("label",{className:"form-group__label blockDisplay",children:"Accordion:"}),e.jsx(x,{className:"margin-bottom-lg",items:[{content:e.jsx("p",{children:"Content 1"}),icon:e.jsx(m,{size:16}),title:"Item 1"},{content:e.jsx("p",{children:"Content 2"}),icon:e.jsx(m,{size:16}),title:"Item 2"},{content:e.jsx("p",{children:"Content 3"}),icon:e.jsx(m,{size:16}),title:"Item 3"}]})]}),e.jsxs("div",{className:"container",children:[e.jsx("label",{className:"form-group__label blockDisplay",children:"Pagination:"}),e.jsx(O,{totalPages:15,maxVisiblePages:5,showFirstLast:!0,onPageChange:a=>console.log("Page:",a)})]}),e.jsxs("div",{className:"container",children:[e.jsx("label",{className:"form-group__label blockDisplay",children:"Pagination:"}),e.jsx(Y,{duration:3e3,message:"This is a success notification!",onClose:()=>{},type:"success"}),e.jsx("button",{onClick:()=>{},children:"Show Notification"})]}),e.jsxs("div",{className:"container",children:[e.jsx("label",{className:"form-group__label blockDisplay",children:"Select Input:"}),e.jsx(R,{label:"Choose an option:",options:te,onChange:a=>console.log("Selected:",a.target.value)})]}),e.jsxs("div",{className:"container",children:[e.jsx("label",{className:"form-group__label blockDisplay",children:"Sidebar Component:"}),e.jsx(q,{className:"margin-bottom-lg",title:"Sidebar",items:le})]}),e.jsx("div",{className:"container",children:e.jsx(k,{className:"margin-bottom-lg",items:se})}),e.jsxs("div",{className:"container",children:[e.jsx("label",{className:"form-group__label blockDisplay",children:"Dark Mode"}),e.jsx($,{className:"margin-bottom-lg",isOn:o,onToggle:()=>i(!o)})]})]})})},r=ce.bind({});var p,g,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  const [darkMode, setDarkMode] = React.useState(false);
  return <ThemeProvider>
      <div {...globalComponentProps('padding', 'all', 'lg')}>
        {' '}
        {/* Large padding all around */}
        <label className="form-group__label">Header tags:</label>
        <H1 text="H1" className="margin-bottom-lg" />
        <H2 text="H2" className="margin-bottom-lg" />
        <H3 text="H3" className="margin-bottom-lg" />
        <H4 text="H4" className="margin-bottom-lg" />
        <H5 text="H5" className="margin-bottom-lg" />
        <div className="container">
          <label className="form-group__label">Alert:</label>
          <Alert className="margin-bottom-lg" message="This is an alert message." type="success" />
        </div>
        <div className="container">
          <label className="form-group__label blockDisplay">Avatar:</label>
          <Avatar className="margin-bottom-lg" src="https://via.placeholder.com/150" alt="Avatar" />
        </div>
        <div className="container">
          <label className="form-group__label blockDisplay">Badge:</label>
          <Badge className="margin-bottom-lg" text="Badge" />
        </div>
        <div className="container">
          <label className="form-group__label blockDisplay">Buttons:</label>
          <Button className="margin-bottom-lg" label="Small Button" variant="primary" size="small" onClick={() => console.log('Small primary Button clicked')} />
          <Button className="margin-bottom-lg" label="Medium Button" variant="primary" size="medium" onClick={() => console.log('Medium primary Button clicked')} />
          <Button className="margin-bottom-lg" label="Large Button" variant="primary" size="large" onClick={() => console.log('Large primary Button clicked')} />

          <Button className="margin-bottom-lg" label="Small Button" variant="secondary" size="small" onClick={() => console.log('Small secondary Button clicked')} />
          <Button className="margin-bottom-lg" label="Medium Button" variant="secondary" size="medium" onClick={() => console.log('Medium secondary Button clicked')} />
          <Button className="margin-bottom-lg" label="Large Button" variant="secondary" size="large" onClick={() => console.log('Large secondary Button clicked')} />
        </div>
        <div className="container">
          <label className="form-group__label blockDisplay">Card:</label>
          <Card className="margin-bottom-lg" items={cardItems} />
        </div>
        <div className="container">
          <label className="form-group__label blockDisplay">Card:</label>
          <Chip label="Default Chip" />
        </div>
        <div className="container">
          <label className="form-group__label blockDisplay">Table:</label>
          <Table columns={tableColumns} data={tableData} className="margin-bottom-lg" />
        </div>
        <div className="container">
          <label className="form-group__label blockDisplay">
            Checkbox Component:
          </label>
          <CheckRadioGroup type="checkbox" options={checkboxOptions} onChange={selected => console.log('Selected checkboxes:', selected)} className="margin-bottom-lg" />
          <CheckRadioGroup type="radio" name="radio-group" options={radioOptions} onChange={selected => console.log('Selected radio:', selected)} className="margin-bottom-lg" />
        </div>
        <div className="container">
          <label className="form-group__label blockDisplay">Date Picker:</label>
          <DatePicker label="Select a Date" minDate="2025-01-01" maxDate="2025-12-31" isRequired errorMessage="Please select a valid date within the range" />
        </div>
        <div className="container">
          <label className="form-group__label blockDisplay">
            Progress Bar:
          </label>
          <ProgressBar label="50%" value={50} variant="primary" />
        </div>
        <div className="container">
          <label className="form-group__label blockDisplay">
            Slider Input:
          </label>
          <SliderInput label="Default Slider" min={0} max={100} />
        </div>
        <div className="container">
          <label className="form-group__label blockDisplay">
            Dropdown Menu:
          </label>
          <DropdownMenu className="margin-bottom-lg" label="Option" items={dropdownItems} />
        </div>
        <div className="container">
          <label className="form-group__label blockDisplay">File Upload:</label>
          <div>
            <FileUpload accept="*" label="Upload File" buttonVariant="secondary" buttonSize="large" onFilesSelected={() => {}} />
          </div>
        </div>
        <div className="container">
          <label className="form-group__label blockDisplay">Footer:</label>
          <Footer className="margin-bottom-lg" />
        </div>
        <div className="container">
          <label className="form-group__label blockDisplay">Form Group:</label>
          <Form layout="vertical" onSubmit={() => {}} size="medium">
            <FormGroup htmlFor="name" label="Name" required>
              <InputField placeholder="Enter your name" isRequired errorMessage="Please enter your name" />
            </FormGroup>
            <FormGroup htmlFor="email" label="Email" required>
              <InputField placeholder="Enter your email" isRequired reqIncludes={['@', '.com']} errorMessage="Email is required" fullWidth />
            </FormGroup>
            <FormGroup description="Max 500 characters" htmlFor="message" label="Message">
              <TextArea characterCount fullWidth maxLength={500} onChange={() => {}} placeholder="Enter your message" rows={5} value="" isRequired errorMessage="Please enter a message to continue" />
            </FormGroup>
            <Button fullWidth label="Submit" type="submit" />
          </Form>
        </div>
        <div className="container">
          <label className="form-group__label blockDisplay">Grid:</label>
          <Stepper activeStep={0} onStepClick={() => {}} orientation="horizontal" steps={[{
          description: 'Description for step 1',
          icon: <CheckCircle size={16} />,
          label: 'Step 1'
        }, {
          description: 'Description for step 2',
          icon: <Info size={16} />,
          label: 'Step 2'
        }, {
          description: 'Description for step 3',
          label: 'Step 3'
        }]} />
        </div>
        <div className="container">
          <label className="form-group__label blockDisplay">Grid:</label>
          <Grid columns={3} gap="1em">
            <GridItem>Item 1</GridItem>
            <GridItem>Item 2</GridItem>
            <GridItem>Item 3</GridItem>
            <GridItem>Item 4</GridItem>
            <GridItem>Item 5</GridItem>
            <GridItem>Item 6</GridItem>
          </Grid>
        </div>
        <div className="container">
          <label className="form-group__label blockDisplay">Input Field:</label>
          <InputField placeholder="Enter your name" isRequired errorMessage="Please enter your name" />
        </div>
        <div className="container">
          <label className="form-group__label blockDisplay">Text Area:</label>
          <TextArea placeholder="Enter your message" characterCount maxLength={500} isRequired errorMessage="Please enter a message" fullWidth />
        </div>
        <div className="container">
          <label className="form-group__label blockDisplay">Link:</label>
          <Link href="https://www.google.com" label="Go to Google" />
        </div>
        <div className="container">
          <label className="form-group__label blockDisplay">
            Ordered Lists:
          </label>
          <OrderedList className="margin-bottom-lg" items={[{
          icon: <CheckCircle size={16} />,
          key: 'success',
          label: 'Success Item',
          onClick: () => {}
        }, {
          key: 'warning',
          label: 'Warning Item',
          onClick: () => {}
        }, {
          key: 'info',
          label: 'Info Item',
          onClick: () => {}
        }, {
          disabled: true,
          key: 'disabled',
          label: 'Disabled Item'
        }]} />
        </div>
        <div className="container">
          <label className="form-group__label blockDisplay">
            Unordered Lists:
          </label>
          <UnorderedList className="margin-bottom-lg" items={[{
          icon: <CheckCircle size={16} />,
          key: 'success',
          label: 'Success Item',
          onClick: () => {}
        }, {
          key: 'warning',
          label: 'Warning Item',
          onClick: () => {}
        }, {
          key: 'info',
          label: 'Info Item',
          onClick: () => {}
        }, {
          disabled: true,
          key: 'disabled',
          label: 'Disabled Item'
        }]} />
        </div>
        <div className="container">
          <label className="form-group__label blockDisplay">Modal:</label>
          <Button label="Open Modal" onClick={() => {}} />
          <Modal open={false} onClose={() => {}} title="Modal Title">
            <p>
              This is an example modal dialog. You can place any content here.
            </p>
          </Modal>
        </div>
        <div className="container">
          <label className="form-group__label blockDisplay">Accordion:</label>
          <Accordion className="margin-bottom-lg" items={[{
          content: <p>Content 1</p>,
          icon: <ChevronDown size={16} />,
          title: 'Item 1'
        }, {
          content: <p>Content 2</p>,
          icon: <ChevronDown size={16} />,
          title: 'Item 2'
        }, {
          content: <p>Content 3</p>,
          icon: <ChevronDown size={16} />,
          title: 'Item 3'
        }]} />
        </div>
        <div className="container">
          <label className="form-group__label blockDisplay">Pagination:</label>
          <Pagination totalPages={15} maxVisiblePages={5} showFirstLast={true} onPageChange={page => console.log('Page:', page)} />
        </div>
        <div className="container">
          <label className="form-group__label blockDisplay">Pagination:</label>
          <ToastNotification duration={3000} message="This is a success notification!" onClose={() => {}} type="success" />
          <button onClick={() => {}}>Show Notification</button>
        </div>
        <div className="container">
          <label className="form-group__label blockDisplay">
            Select Input:
          </label>
          <SelectInput label="Choose an option:" options={selectInputOptions} onChange={e => console.log('Selected:', e.target.value)} />
        </div>
        <div className="container">
          <label className="form-group__label blockDisplay">
            Sidebar Component:
          </label>
          <Sidebar className="margin-bottom-lg" title={'Sidebar'} items={sampleItems} />
        </div>
        <div className="container">
          <Breadcrumb className="margin-bottom-lg" items={breadcrumbs} />
        </div>
        <div className="container">
          <label className="form-group__label blockDisplay">Dark Mode</label>
          <ToggleSwitch className="margin-bottom-lg" isOn={darkMode} onToggle={() => setDarkMode(!darkMode)} />
        </div>
      </div>
    </ThemeProvider>;
}`,...(u=(g=r.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const aa=["Dashboard"];export{r as Dashboard,aa as __namedExportsOrder,ea as default};
