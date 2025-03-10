import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as m}from"./index-DmM0KDA7.js";import{S as c}from"./Sidebar-BCkd3d3c.js";import{B as b}from"./Breadcrumb-BUtv4gyG.js";import{F as p}from"./Footer-BVlV5DjD.js";import{B as l}from"./Button-DCWmwqCP.js";import{T as t}from"./Tooltip-CSd09PIC.js";import{F as h}from"./FormGroup-CTWfyQxp.js";import{T as o}from"./ToggleSwitch-BTXhhXI7.js";import{T as g}from"./Table-Ck6mOZYg.js";import{O as u,U as x}from"./OL-CU3B1mEV.js";import{A as f}from"./Accordion-28CmJsIO.js";import{P as j}from"./Pagination-BTaJRewL.js";import{H as _,a as T,b as N,c as v,d as H}from"./H5-P8g6n0NP.js";import{T as S}from"./ThemeProvider-DGwBzojn.js";const K={title:"Sample Pages/Style Guide"},k=[{header:"Name",accessor:"name"},{header:"Age",accessor:"age"},{header:"Email",accessor:"email"}],M=[{label:"Dashboard",href:"/dashboard"},{label:"Profile",href:"/profile"},{label:"Settings",href:"/settings"},{label:"Logout",onClick:()=>alert("Logged out!")}],P=[{label:"Home",href:"/"},{label:"Products",href:"/products"},{label:"Electronics",href:"/products/electronics"},{label:"Laptops"}],D=()=>{const[r,s]=m.useState(!1);return e.jsx(S,{children:e.jsxs("div",{style:{padding:"20px",fontFamily:"Arial, sans-serif"},children:[e.jsx("label",{className:"form-group__label",children:"Header tags:"}),e.jsx(_,{text:"H1"}),e.jsx(T,{text:"H2"}),e.jsx(N,{text:"H3"}),e.jsx(v,{text:"H4"}),e.jsx(H,{text:"H5"}),e.jsx("label",{className:"form-group__label",children:"Table:"}),e.jsx(g,{columns:k,data:[]}),e.jsx("label",{className:"form-group__label",children:"Ordered/Unordered Lists:"}),e.jsx(u,{items:[]}),e.jsx(x,{items:[]}),e.jsx("label",{className:"form-group__label",children:"Accordion:"}),e.jsx(f,{items:[]}),e.jsx("label",{className:"form-group__label",children:"Pagination:"}),e.jsx(j,{currentPage:0,totalPages:0,onPageChange:function(O){throw new Error("Function not implemented.")}}),e.jsx("label",{className:"form-group__label",children:"Sidebar Component:"}),e.jsx(c,{title:"Sidebar",items:M,className:""}),e.jsx(b,{items:P}),e.jsx("label",{className:"form-group__label",children:"Dark Mode"}),e.jsx(o,{isOn:r,onToggle:()=>s(!r)}),e.jsxs(p,{children:[e.jsx("label",{className:"form-group__label",children:"Dark Mode"}),e.jsx(o,{isOn:r,onToggle:()=>s(!r)})]}),e.jsxs(h,{children:[e.jsx("label",{className:"form-group__label",children:"Dark Mode"}),e.jsx(o,{isOn:r,onToggle:()=>s(!r)})]}),e.jsxs("div",{className:"dashboard-section",children:[e.jsx("h2",{children:"Statistics"}),e.jsx("div",{className:"dashboard-item",children:e.jsx(t,{content:"Total number of users",children:e.jsx("span",{children:"Total Users: 1,234"})})}),e.jsx("div",{className:"dashboard-item",children:e.jsx(t,{content:"Total number of orders",children:e.jsx("span",{children:"Total Orders: 567"})})})]}),e.jsxs("div",{className:"dashboard-section",children:[e.jsx("h2",{children:"Actions"}),e.jsx("div",{className:"dashboard-item",children:e.jsx(l,{label:"Add User",variant:"primary"})}),e.jsx("div",{className:"dashboard-item",children:e.jsx(l,{label:"Generate Report",variant:"secondary"})})]})]})})},a=D.bind({});var i,d,n;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  const [darkMode, setDarkMode] = React.useState(false);
  return <ThemeProvider>\r
      <div style={{
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>\r
        <label className="form-group__label">Header tags:</label>\r
        <H1 text="H1" />\r
        <H2 text="H2" />\r
        <H3 text="H3" />\r
        <H4 text="H4" />\r
        <H5 text="H5" />\r
        <label className="form-group__label">Table:</label>\r
        <Table columns={tableData} data={[]}></Table>\r
        <label className="form-group__label">Ordered/Unordered Lists:</label>\r
        <OL items={[]}></OL>\r
        <UL items={[]}></UL>\r
        <label className="form-group__label">Accordion:</label>\r
        <Accordion items={[]}></Accordion>\r
        <label className="form-group__label">Pagination:</label>\r
        <Pagination currentPage={0} totalPages={0} onPageChange={function (page: number): void {
        throw new Error('Function not implemented.');
      }}></Pagination>\r
        <label className="form-group__label">Sidebar Component:</label>\r
        <Sidebar title={'Sidebar'} items={sampleItems} className=""></Sidebar>\r
        <Breadcrumb items={breadcrumbs} />\r
        <label className="form-group__label">Dark Mode</label>\r
        <ToggleSwitch isOn={darkMode} onToggle={() => setDarkMode(!darkMode)} />\r
        <Footer>\r
          <label className="form-group__label">Dark Mode</label>\r
          <ToggleSwitch isOn={darkMode} onToggle={() => setDarkMode(!darkMode)} />\r
        </Footer>\r
\r
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
}`,...(n=(d=a.parameters)==null?void 0:d.docs)==null?void 0:n.source}}};const Q=["Dashboard"];export{a as Dashboard,Q as __namedExportsOrder,K as default};
