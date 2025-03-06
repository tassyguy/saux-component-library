import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{R as l}from"./index-BZISi7jw.js";import{B as s}from"./Button-BtZQpITv.js";import{F as c}from"./FormGroup-CTWfyQxp.js";import{T as m}from"./ToggleSwitch-CTu3Sg79.js";import{T as o}from"./Tooltip-BPSTs6Tu.js";import{T as h}from"./ThemeProvider-BHFyjWwA.js";import"./_commonjsHelpers-CqkleIqs.js";const N={title:"Sample Pages/Dashboard",component:s},p=()=>{const[e,i]=l.useState(!1);return r.jsx(h,{children:r.jsxs("div",{style:{padding:"20px",fontFamily:"Arial, sans-serif"},children:[r.jsx("h1",{children:"Dashboard"}),r.jsxs(c,{children:[r.jsx("label",{className:"form-group__label",children:"Dark Mode"}),r.jsx(m,{isOn:e,onToggle:()=>i(!e)})]}),r.jsxs("div",{className:"dashboard-section",children:[r.jsx("h2",{children:"Statistics"}),r.jsx("div",{className:"dashboard-item",children:r.jsx(o,{content:"Total number of users",children:r.jsx("span",{children:"Total Users: 1,234"})})}),r.jsx("div",{className:"dashboard-item",children:r.jsx(o,{content:"Total number of orders",children:r.jsx("span",{children:"Total Orders: 567"})})})]}),r.jsxs("div",{className:"dashboard-section",children:[r.jsx("h2",{children:"Actions"}),r.jsx("div",{className:"dashboard-item",children:r.jsx(s,{label:"Add User",variant:"primary"})}),r.jsx("div",{className:"dashboard-item",children:r.jsx(s,{label:"Generate Report",variant:"secondary"})})]})]})})},a=p.bind({});var n,d,t;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  const [darkMode, setDarkMode] = React.useState(false);
  return <ThemeProvider>\r
    <div style={{
      padding: "20px",
      fontFamily: "Arial, sans-serif"
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
}`,...(t=(d=a.parameters)==null?void 0:d.docs)==null?void 0:t.source}}};const D=["Dashboard"];export{a as Dashboard,D as __namedExportsOrder,N as default};
