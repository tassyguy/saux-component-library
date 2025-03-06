import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as d}from"./index-BZISi7jw.js";import{B as n}from"./Button-BtZQpITv.js";import{F as m}from"./FormGroup-CTWfyQxp.js";import{T as c}from"./ToggleSwitch-CTu3Sg79.js";import{T as a}from"./Tooltip-BPSTs6Tu.js";import{T as p}from"./ThemeProvider-BHFyjWwA.js";import"./_commonjsHelpers-CqkleIqs.js";const y={title:"Sample Pages/Restaurant Menu",component:n},h=()=>{const[r,l]=d.useState(!1);return e.jsx(p,{children:e.jsxs("div",{style:{padding:"20px",fontFamily:"Arial, sans-serif"},children:[e.jsx("h1",{children:"Restaurant Menu"}),e.jsxs(m,{children:[e.jsx("label",{className:"form-group__label",children:"Vegan Options"}),e.jsx(c,{isOn:r,onToggle:()=>l(!r)})]}),e.jsxs("div",{className:"menu-section",children:[e.jsx("h2",{children:"Appetizers"}),e.jsxs("div",{className:"menu-item",children:[e.jsx(a,{content:"A delicious starter with fresh ingredients",children:e.jsx("span",{children:"Bruschetta"})}),e.jsx(n,{label:"Order",variant:"primary"})]}),e.jsxs("div",{className:"menu-item",children:[e.jsx(a,{content:"A vegan-friendly starter with fresh vegetables",children:e.jsxs("span",{children:["Garden Salad ",r&&"(Vegan)"]})}),e.jsx(n,{label:"Order",variant:"primary"})]})]}),e.jsxs("div",{className:"menu-section",children:[e.jsx("h2",{children:"Main Courses"}),e.jsxs("div",{className:"menu-item",children:[e.jsx(a,{content:"A classic Italian pasta dish",children:e.jsx("span",{children:"Spaghetti Carbonara"})}),e.jsx(n,{label:"Order",variant:"primary"})]}),e.jsxs("div",{className:"menu-item",children:[e.jsx(a,{content:"A vegan-friendly pasta dish with tomato sauce",children:e.jsxs("span",{children:["Spaghetti Marinara ",r&&"(Vegan)"]})}),e.jsx(n,{label:"Order",variant:"primary"})]})]})]})})},s=h.bind({});var t,i,o;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
  const [isVegan, setIsVegan] = React.useState(false);
  return <ThemeProvider>\r
    <div style={{
      padding: "20px",
      fontFamily: "Arial, sans-serif"
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
            <span>Garden Salad {isVegan && "(Vegan)"}</span>\r
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
            <span>Spaghetti Marinara {isVegan && "(Vegan)"}</span>\r
          </Tooltip>\r
          <Button label="Order" variant="primary" />\r
        </div>\r
      </div>\r
    </div>\r
    </ThemeProvider>;
}`,...(o=(i=s.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};const V=["RestaurantMenu"];export{s as RestaurantMenu,V as __namedExportsOrder,y as default};
