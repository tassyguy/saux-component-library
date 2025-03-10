import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{R as m}from"./index-DmM0KDA7.js";import{B as e}from"./Button-DCWmwqCP.js";import{F as c}from"./FormGroup-CTWfyQxp.js";import{T as h}from"./ToggleSwitch-BTXhhXI7.js";import{T as o}from"./Tooltip-CSd09PIC.js";import{T as p}from"./ThemeProvider-DGwBzojn.js";import{u as b}from"./index-Bdtnp1LJ.js";import"./index-DKWlSypl.js";const M={title:"Sample Pages/Dashboard"},v=()=>{const[s,l]=m.useState(!1),n=b();return r.jsx(p,{children:r.jsxs("div",{className:n?"dark-theme":"",style:{padding:"20px",fontFamily:"Arial, sans-serif"},children:[r.jsx("h1",{children:"Dashboard"}),r.jsxs(c,{children:[r.jsx("label",{className:"form-group__label",children:"Dark Mode"}),r.jsx(h,{isOn:s,onToggle:()=>l(!s)})]}),r.jsxs("div",{className:"dashboard-section",children:[r.jsx("h2",{children:"Statistics"}),r.jsx("div",{className:"dashboard-item",children:r.jsx(o,{content:"Total number of users",children:r.jsx("span",{children:"Total Users: 1,234"})})}),r.jsx("div",{className:"dashboard-item",children:r.jsx(o,{content:"Total number of orders",children:r.jsx("span",{children:"Total Orders: 567"})})})]}),r.jsxs("div",{className:"dashboard-section",children:[r.jsx("h2",{children:"Actions"}),r.jsx("div",{className:"dashboard-item",children:r.jsx(e,{label:"Add User",variant:"primary"})}),r.jsx("div",{className:"dashboard-item",children:r.jsx(e,{label:"Generate Report",variant:"secondary"})})]})]})})},a=v.bind({});var d,t,i;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
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
}`,...(i=(t=a.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};const y=["Dashboard"];export{a as Dashboard,y as __namedExportsOrder,M as default};
