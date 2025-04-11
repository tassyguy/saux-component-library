import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{e as l}from"./index-DuZrfDUH.js";import"./Accordion-I6TbV4JG.js";import"./Alert-BIbIwudL.js";import"./Avatar-BQE4GJaQ.js";import"./Badge-CPXNsfxw.js";import"./Breadcrumb-ngjmGBig.js";import{B as r}from"./Button-D4b0BiQ0.js";import"./Card-NYc52ij4.js";import"./CheckRadio-Cj3BjWDv.js";import"./Chip-m5ksWfhb.js";import"./Container-Bv99HlK3.js";import"./DatePicker-DBUvpsbK.js";import"./DropdownMenu-C0MXmgiw.js";import"./FileUpload-BdeJzUe8.js";import"./Footer-CDO3S1q7.js";import{a as p}from"./FormGroup-BCEwk9QW.js";import"./GridItem-BnM8Ntv2.js";import"./H5-Bra4vguc.js";import"./InputField-B_-rq-ua.js";import"./Link-8ZJ3Bftc.js";import"./UL-Cn2q-OuZ.js";import"./Modal-DqC2TSTZ.js";import"./Pagination-ViVRIjJi.js";import"./ProgressBar-IOKn6Rt-.js";import"./Section-BlNpUGrn.js";import"./SelectInput-I0k_iOGe.js";import"./Sidebar-COHALb8l.js";import"./SliderInput-Bv70Ub4E.js";import"./Stepper-C1LBPdwz.js";import"./Table-Cd0S6otO.js";import"./TextArea-lh6BSEFN.js";import{T as d}from"./ThemeProvider-CKzi-S0a.js";import"./ToastNotification-DKcBO1gs.js";import{T as c}from"./ToggleSwitch-BFnDKm8b.js";import{T as t}from"./Tooltip-G8WfGh4_.js";import"./_commonjsHelpers-CqkleIqs.js";const Y={title:"Sample Pages/Restaurant Menu"},h=()=>{const[a,m]=l.useState(!1);return e.jsx(d,{children:e.jsxs("div",{style:{padding:"20px",fontFamily:"Arial, sans-serif"},children:[e.jsx("h1",{children:"Restaurant Menu"}),e.jsxs(p,{children:[e.jsx("label",{className:"form-group__label",children:"Vegan Options"}),e.jsx(c,{isOn:a,onToggle:()=>m(!a)})]}),e.jsxs("div",{className:"menu-section",children:[e.jsx("h2",{children:"Appetizers"}),e.jsxs("div",{className:"menu-item",children:[e.jsx(t,{content:"A delicious starter with fresh ingredients",children:e.jsx("span",{children:"Bruschetta"})}),e.jsx(r,{label:"Order",variant:"primary"})]}),e.jsxs("div",{className:"menu-item",children:[e.jsx(t,{content:"A vegan-friendly starter with fresh vegetables",children:e.jsxs("span",{children:["Garden Salad ",a&&"(Vegan)"]})}),e.jsx(r,{label:"Order",variant:"primary"})]})]}),e.jsxs("div",{className:"menu-section",children:[e.jsx("h2",{children:"Main Courses"}),e.jsxs("div",{className:"menu-item",children:[e.jsx(t,{content:"A classic Italian pasta dish",children:e.jsx("span",{children:"Spaghetti Carbonara"})}),e.jsx(r,{label:"Order",variant:"primary"})]}),e.jsxs("div",{className:"menu-item",children:[e.jsx(t,{content:"A vegan-friendly pasta dish with tomato sauce",children:e.jsxs("span",{children:["Spaghetti Marinara ",a&&"(Vegan)"]})}),e.jsx(r,{label:"Order",variant:"primary"})]})]})]})})},i=h.bind({});var s,n,o;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  const [isVegan, setIsVegan] = React.useState(false);
  return <ThemeProvider>
      <div style={{
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
        <h1>Restaurant Menu</h1>
        <FormGroup>
          <label className="form-group__label">Vegan Options</label>
          <ToggleSwitch isOn={isVegan} onToggle={() => setIsVegan(!isVegan)} />
        </FormGroup>
        <div className="menu-section">
          <h2>Appetizers</h2>
          <div className="menu-item">
            <Tooltip content="A delicious starter with fresh ingredients">
              <span>Bruschetta</span>
            </Tooltip>
            <Button label="Order" variant="primary" />
          </div>
          <div className="menu-item">
            <Tooltip content="A vegan-friendly starter with fresh vegetables">
              <span>Garden Salad {isVegan && '(Vegan)'}</span>
            </Tooltip>
            <Button label="Order" variant="primary" />
          </div>
        </div>
        <div className="menu-section">
          <h2>Main Courses</h2>
          <div className="menu-item">
            <Tooltip content="A classic Italian pasta dish">
              <span>Spaghetti Carbonara</span>
            </Tooltip>
            <Button label="Order" variant="primary" />
          </div>
          <div className="menu-item">
            <Tooltip content="A vegan-friendly pasta dish with tomato sauce">
              <span>Spaghetti Marinara {isVegan && '(Vegan)'}</span>
            </Tooltip>
            <Button label="Order" variant="primary" />
          </div>
        </div>
      </div>
    </ThemeProvider>;
}`,...(o=(n=i.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const Z=["RestaurantMenu"];export{i as RestaurantMenu,Z as __namedExportsOrder,Y as default};
