import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{R as m}from"./index-BZISi7jw.js";import"./Accordion-1cSTl3tI.js";import"./Alert-DfPrbN5E.js";import"./Avatar-D6MWNgeY.js";import"./Badge-I_zC6lPQ.js";import"./Breadcrumb-C4eao5jh.js";import{B as a}from"./Button-DzVHr0oo.js";import"./Card-DFJ6yYOE.js";import"./CheckRadio-D__1AGvv.js";import"./Container-BaKh-NF9.js";import"./DropdownMenu-BVSX-5X-.js";import"./Footer-CDO3S1q7.js";import{a as p}from"./FormGroup-DIPCzEVb.js";import"./Grid-ClPR_fop.js";import"./H5-CNb8bXId.js";import"./InputField-BeL4oBDu.js";import"./Link-BddUE4Mn.js";import"./UL-Dw8jzxtu.js";import"./Modal-Bi7l_IbE.js";import"./Pagination-C0PIm8hu.js";import"./Section-CjxhfzDi.js";import"./SelectInput-DN22wjdY.js";import"./Sidebar-ECg5V6zZ.js";import"./Table-CHundMlw.js";import"./TextArea-C3wGQDKz.js";import{T as d}from"./ThemeProvider-CU-Py9wx.js";import{T as c}from"./ToggleSwitch-AXqZ_mB4.js";import{T as s}from"./Tooltip-BYiIlgIG.js";import"./_commonjsHelpers-CqkleIqs.js";const J={title:"Sample Pages/Restaurant Menu"},h=()=>{const[e,l]=m.useState(!1);return r.jsx(d,{children:r.jsxs("div",{style:{padding:"20px",fontFamily:"Arial, sans-serif"},children:[r.jsx("h1",{children:"Restaurant Menu"}),r.jsxs(p,{children:[r.jsx("label",{className:"form-group__label",children:"Vegan Options"}),r.jsx(c,{isOn:e,onToggle:()=>l(!e)})]}),r.jsxs("div",{className:"menu-section",children:[r.jsx("h2",{children:"Appetizers"}),r.jsxs("div",{className:"menu-item",children:[r.jsx(s,{content:"A delicious starter with fresh ingredients",children:r.jsx("span",{children:"Bruschetta"})}),r.jsx(a,{label:"Order",variant:"primary"})]}),r.jsxs("div",{className:"menu-item",children:[r.jsx(s,{content:"A vegan-friendly starter with fresh vegetables",children:r.jsxs("span",{children:["Garden Salad ",e&&"(Vegan)"]})}),r.jsx(a,{label:"Order",variant:"primary"})]})]}),r.jsxs("div",{className:"menu-section",children:[r.jsx("h2",{children:"Main Courses"}),r.jsxs("div",{className:"menu-item",children:[r.jsx(s,{content:"A classic Italian pasta dish",children:r.jsx("span",{children:"Spaghetti Carbonara"})}),r.jsx(a,{label:"Order",variant:"primary"})]}),r.jsxs("div",{className:"menu-item",children:[r.jsx(s,{content:"A vegan-friendly pasta dish with tomato sauce",children:r.jsxs("span",{children:["Spaghetti Marinara ",e&&"(Vegan)"]})}),r.jsx(a,{label:"Order",variant:"primary"})]})]})]})})},t=h.bind({});var i,n,o;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  const [isVegan, setIsVegan] = React.useState(false);
  return <ThemeProvider>\r
      <div style={{
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>\r
        <h1>Restaurant Menu</h1>\r
        <FormGroup>\r
          <label className="form-group__label">Vegan Options</label>\r
          <ToggleSwitch isOn={isVegan} onToggle={() => setIsVegan(!isVegan)} />\r
        </FormGroup>\r
        <div className="menu-section">\r
          <h2>Appetizers</h2>\r
          <div className="menu-item">\r
            <Tooltip content="A delicious starter with fresh ingredients">\r
              <span>Bruschetta</span>\r
            </Tooltip>\r
            <Button label="Order" variant="primary" />\r
          </div>\r
          <div className="menu-item">\r
            <Tooltip content="A vegan-friendly starter with fresh vegetables">\r
              <span>Garden Salad {isVegan && '(Vegan)'}</span>\r
            </Tooltip>\r
            <Button label="Order" variant="primary" />\r
          </div>\r
        </div>\r
        <div className="menu-section">\r
          <h2>Main Courses</h2>\r
          <div className="menu-item">\r
            <Tooltip content="A classic Italian pasta dish">\r
              <span>Spaghetti Carbonara</span>\r
            </Tooltip>\r
            <Button label="Order" variant="primary" />\r
          </div>\r
          <div className="menu-item">\r
            <Tooltip content="A vegan-friendly pasta dish with tomato sauce">\r
              <span>Spaghetti Marinara {isVegan && '(Vegan)'}</span>\r
            </Tooltip>\r
            <Button label="Order" variant="primary" />\r
          </div>\r
        </div>\r
      </div>\r
    </ThemeProvider>;
}`,...(o=(n=t.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const K=["RestaurantMenu"];export{t as RestaurantMenu,K as __namedExportsOrder,J as default};
