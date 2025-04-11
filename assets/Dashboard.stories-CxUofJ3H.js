import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{e as n}from"./index-DuZrfDUH.js";import{u as p}from"./index-CZHJ-ciL.js";import"./Accordion-I6TbV4JG.js";import"./Alert-BIbIwudL.js";import"./Avatar-BQE4GJaQ.js";import"./Badge-CPXNsfxw.js";import"./Breadcrumb-ngjmGBig.js";import{B as s}from"./Button-D4b0BiQ0.js";import"./Card-NYc52ij4.js";import"./CheckRadio-Cj3BjWDv.js";import"./Chip-m5ksWfhb.js";import"./Container-Bv99HlK3.js";import"./DatePicker-DBUvpsbK.js";import"./DropdownMenu-C0MXmgiw.js";import"./FileUpload-BdeJzUe8.js";import"./Footer-CDO3S1q7.js";import{a as c}from"./FormGroup-BCEwk9QW.js";import"./GridItem-BnM8Ntv2.js";import"./H5-Bra4vguc.js";import"./InputField-B_-rq-ua.js";import"./Link-8ZJ3Bftc.js";import"./UL-Cn2q-OuZ.js";import"./Modal-DqC2TSTZ.js";import"./Pagination-ViVRIjJi.js";import"./ProgressBar-IOKn6Rt-.js";import"./Section-BlNpUGrn.js";import"./SelectInput-I0k_iOGe.js";import"./Sidebar-COHALb8l.js";import"./SliderInput-Bv70Ub4E.js";import"./Stepper-C1LBPdwz.js";import"./Table-Cd0S6otO.js";import"./TextArea-lh6BSEFN.js";import{T as h}from"./ThemeProvider-CKzi-S0a.js";import"./ToastNotification-DKcBO1gs.js";import{T as b}from"./ToggleSwitch-BFnDKm8b.js";import{T as e}from"./Tooltip-G8WfGh4_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-GeD_eG6w.js";const or={title:"Sample Pages/Dashboard"},v=()=>{const[a,m]=n.useState(!1),l=p();return r.jsx(h,{children:r.jsxs("div",{className:l?"dark-theme":"",style:{padding:"20px",fontFamily:"Arial, sans-serif"},children:[r.jsx("h1",{children:"Dashboard"}),r.jsxs(c,{children:[r.jsx("label",{className:"form-group__label",children:"Dark Mode"}),r.jsx(b,{isOn:a,onToggle:()=>m(!a)})]}),r.jsxs("div",{className:"dashboard-section",children:[r.jsx("h2",{children:"Statistics"}),r.jsx("div",{className:"dashboard-item",children:r.jsx(e,{content:"Total number of users",children:r.jsx("span",{children:"Total Users: 1,234"})})}),r.jsx("div",{className:"dashboard-item",children:r.jsx(e,{content:"Total number of orders",children:r.jsx("span",{children:"Total Orders: 567"})})})]}),r.jsxs("div",{className:"dashboard-section",children:[r.jsx("h2",{children:"Actions"}),r.jsx("div",{className:"dashboard-item",children:r.jsx(s,{label:"Add User",variant:"primary"})}),r.jsx("div",{className:"dashboard-item",children:r.jsx(s,{label:"Generate Report",variant:"secondary"})})]})]})})},o=v.bind({});var t,i,d;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
  const [darkMode, setDarkMode] = React.useState(false);
  const isDarkMode = useDarkMode();
  return <ThemeProvider>
      <div className={isDarkMode ? 'dark-theme' : ''} style={{
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
        <h1>Dashboard</h1>
        <FormGroup>
          <label className="form-group__label">Dark Mode</label>
          <ToggleSwitch isOn={darkMode} onToggle={() => setDarkMode(!darkMode)} />
        </FormGroup>
        <div className="dashboard-section">
          <h2>Statistics</h2>
          <div className="dashboard-item">
            <Tooltip content="Total number of users">
              <span>Total Users: 1,234</span>
            </Tooltip>
          </div>
          <div className="dashboard-item">
            <Tooltip content="Total number of orders">
              <span>Total Orders: 567</span>
            </Tooltip>
          </div>
        </div>
        <div className="dashboard-section">
          <h2>Actions</h2>
          <div className="dashboard-item">
            <Button label="Add User" variant="primary" />
          </div>
          <div className="dashboard-item">
            <Button label="Generate Report" variant="secondary" />
          </div>
        </div>
      </div>
    </ThemeProvider>;
}`,...(d=(i=o.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const ar=["Dashboard"];export{o as Dashboard,ar as __namedExportsOrder,or as default};
