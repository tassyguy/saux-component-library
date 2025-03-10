import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as n}from"./index-BZISi7jw.js";import{A as c}from"./Accordion-CQ7j9Ft1.js";import"./Alert-BJzkBjVg.js";import"./Avatar-D6MWNgeY.js";import"./Badge-CKuuYH8E.js";import{B as b}from"./Breadcrumb-DAh4NOpn.js";import{B as l}from"./Button-ZVXyelmP.js";import"./Card-CZccxv2H.js";import"./CheckRadio-D__1AGvv.js";import"./Container-BYXV-CiK.js";import"./DropdownMenu-CHzD4fHR.js";import{F as p}from"./Footer-Dj1ldVcV.js";import{a as h}from"./FormGroup-DX_xUZTS.js";import"./Grid-ClPR_fop.js";import{H as g,a as u,b as x,c as f,d as j}from"./H5-Dev1S6Nz.js";import"./InputField-Dq9wZl3x.js";import"./Link-EXO7U8nm.js";import{O as _,U as T}from"./OL-CAMqjInE.js";import"./Modal-DZJMhWb_.js";import{P as N}from"./Pagination-C0PIm8hu.js";import"./Section-CjxhfzDi.js";import"./SelectInput-DN22wjdY.js";import{S as v}from"./Sidebar-ECg5V6zZ.js";import{T as H}from"./Table-aStkCaoD.js";import"./TextArea-BDEx6zVr.js";import{T as S}from"./ThemeProvider-D8qwjXKu.js";import{T as o}from"./ToggleSwitch-UVct7IBL.js";import{T as t}from"./Tooltip-BYiIlgIG.js";import"./_commonjsHelpers-CqkleIqs.js";const ie={title:"Sample Pages/Style Guide"},k=[{header:"Name",accessor:"name"},{header:"Age",accessor:"age"},{header:"Email",accessor:"email"}],M=[{label:"Dashboard",href:"/dashboard"},{label:"Profile",href:"/profile"},{label:"Settings",href:"/settings"},{label:"Logout",onClick:()=>alert("Logged out!")}],P=[{label:"Home",href:"/"},{label:"Products",href:"/products"},{label:"Electronics",href:"/products/electronics"},{label:"Laptops"}],D=()=>{const[r,s]=n.useState(!1);return e.jsx(S,{children:e.jsxs("div",{style:{padding:"20px",fontFamily:"Arial, sans-serif"},children:[e.jsx("label",{className:"form-group__label",children:"Header tags:"}),e.jsx(g,{text:"H1"}),e.jsx(u,{text:"H2"}),e.jsx(x,{text:"H3"}),e.jsx(f,{text:"H4"}),e.jsx(j,{text:"H5"}),e.jsx("label",{className:"form-group__label",children:"Table:"}),e.jsx(H,{columns:k,data:[]}),e.jsx("label",{className:"form-group__label",children:"Ordered/Unordered Lists:"}),e.jsx(_,{items:[]}),e.jsx(T,{items:[]}),e.jsx("label",{className:"form-group__label",children:"Accordion:"}),e.jsx(c,{items:[]}),e.jsx("label",{className:"form-group__label",children:"Pagination:"}),e.jsx(N,{currentPage:0,totalPages:0,onPageChange:function(O){throw new Error("Function not implemented.")}}),e.jsx("label",{className:"form-group__label",children:"Sidebar Component:"}),e.jsx(v,{title:"Sidebar",items:M,className:""}),e.jsx(b,{items:P}),e.jsx("label",{className:"form-group__label",children:"Dark Mode"}),e.jsx(o,{isOn:r,onToggle:()=>s(!r)}),e.jsxs(p,{children:[e.jsx("label",{className:"form-group__label",children:"Dark Mode"}),e.jsx(o,{isOn:r,onToggle:()=>s(!r)})]}),e.jsxs(h,{children:[e.jsx("label",{className:"form-group__label",children:"Dark Mode"}),e.jsx(o,{isOn:r,onToggle:()=>s(!r)})]}),e.jsxs("div",{className:"dashboard-section",children:[e.jsx("h2",{children:"Statistics"}),e.jsx("div",{className:"dashboard-item",children:e.jsx(t,{content:"Total number of users",children:e.jsx("span",{children:"Total Users: 1,234"})})}),e.jsx("div",{className:"dashboard-item",children:e.jsx(t,{content:"Total number of orders",children:e.jsx("span",{children:"Total Orders: 567"})})})]}),e.jsxs("div",{className:"dashboard-section",children:[e.jsx("h2",{children:"Actions"}),e.jsx("div",{className:"dashboard-item",children:e.jsx(l,{label:"Add User",variant:"primary"})}),e.jsx("div",{className:"dashboard-item",children:e.jsx(l,{label:"Generate Report",variant:"secondary"})})]})]})})},a=D.bind({});var i,d,m;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
}`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const de=["Dashboard"];export{a as Dashboard,de as __namedExportsOrder,ie as default};
