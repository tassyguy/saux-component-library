import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{R as n}from"./index-BZISi7jw.js";import{u as c}from"./index-D8d2bdkj.js";import"./Accordion-1cSTl3tI.js";import"./Alert-DfPrbN5E.js";import"./Avatar-D6MWNgeY.js";import"./Badge-I_zC6lPQ.js";import"./Breadcrumb-C4eao5jh.js";import{B as e}from"./Button-DzVHr0oo.js";import"./Card-DFJ6yYOE.js";import"./CheckRadio-D__1AGvv.js";import"./Container-BaKh-NF9.js";import"./DropdownMenu-BVSX-5X-.js";import"./Footer-CDO3S1q7.js";import{a as p}from"./FormGroup-DIPCzEVb.js";import"./Grid-ClPR_fop.js";import"./H5-CNb8bXId.js";import"./InputField-BeL4oBDu.js";import"./Link-BddUE4Mn.js";import"./UL-Dw8jzxtu.js";import"./Modal-Bi7l_IbE.js";import"./Pagination-C0PIm8hu.js";import"./Section-CjxhfzDi.js";import"./SelectInput-DN22wjdY.js";import"./Sidebar-ECg5V6zZ.js";import"./Table-CHundMlw.js";import"./TextArea-C3wGQDKz.js";import{T as h}from"./ThemeProvider-CU-Py9wx.js";import{T as b}from"./ToggleSwitch-AXqZ_mB4.js";import{T as o}from"./Tooltip-BYiIlgIG.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BtkQkHPN.js";const V={title:"Sample Pages/Dashboard"},v=()=>{const[s,m]=n.useState(!1),l=c();return r.jsx(h,{children:r.jsxs("div",{className:l?"dark-theme":"",style:{padding:"20px",fontFamily:"Arial, sans-serif"},children:[r.jsx("h1",{children:"Dashboard"}),r.jsxs(p,{children:[r.jsx("label",{className:"form-group__label",children:"Dark Mode"}),r.jsx(b,{isOn:s,onToggle:()=>m(!s)})]}),r.jsxs("div",{className:"dashboard-section",children:[r.jsx("h2",{children:"Statistics"}),r.jsx("div",{className:"dashboard-item",children:r.jsx(o,{content:"Total number of users",children:r.jsx("span",{children:"Total Users: 1,234"})})}),r.jsx("div",{className:"dashboard-item",children:r.jsx(o,{content:"Total number of orders",children:r.jsx("span",{children:"Total Orders: 567"})})})]}),r.jsxs("div",{className:"dashboard-section",children:[r.jsx("h2",{children:"Actions"}),r.jsx("div",{className:"dashboard-item",children:r.jsx(e,{label:"Add User",variant:"primary"})}),r.jsx("div",{className:"dashboard-item",children:r.jsx(e,{label:"Generate Report",variant:"secondary"})})]})]})})},a=v.bind({});var t,i,d;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
  const [darkMode, setDarkMode] = React.useState(false);
  const isDarkMode = useDarkMode();
  return <ThemeProvider>\r
      <div className={isDarkMode ? 'dark-theme' : ''} style={{
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>\r
        <h1>Dashboard</h1>\r
        <FormGroup>\r
          <label className="form-group__label">Dark Mode</label>\r
          <ToggleSwitch isOn={darkMode} onToggle={() => setDarkMode(!darkMode)} />\r
        </FormGroup>\r
        <div className="dashboard-section">\r
          <h2>Statistics</h2>\r
          <div className="dashboard-item">\r
            <Tooltip content="Total number of users">\r
              <span>Total Users: 1,234</span>\r
            </Tooltip>\r
          </div>\r
          <div className="dashboard-item">\r
            <Tooltip content="Total number of orders">\r
              <span>Total Orders: 567</span>\r
            </Tooltip>\r
          </div>\r
        </div>\r
        <div className="dashboard-section">\r
          <h2>Actions</h2>\r
          <div className="dashboard-item">\r
            <Button label="Add User" variant="primary" />\r
          </div>\r
          <div className="dashboard-item">\r
            <Button label="Generate Report" variant="secondary" />\r
          </div>\r
        </div>\r
      </div>\r
    </ThemeProvider>;
}`,...(d=(i=a.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const W=["Dashboard"];export{a as Dashboard,W as __namedExportsOrder,V as default};
