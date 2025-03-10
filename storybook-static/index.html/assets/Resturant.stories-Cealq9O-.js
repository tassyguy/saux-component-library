import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as d}from"./index-DmM0KDA7.js";import{B as a}from"./Button-DCWmwqCP.js";import{F as m}from"./FormGroup-CTWfyQxp.js";import{T as c}from"./ToggleSwitch-BTXhhXI7.js";import{T as s}from"./Tooltip-CSd09PIC.js";import{T as p}from"./ThemeProvider-DGwBzojn.js";const b={title:"Sample Pages/Restaurant Menu"},h=()=>{const[r,o]=d.useState(!1);return e.jsx(p,{children:e.jsxs("div",{style:{padding:"20px",fontFamily:"Arial, sans-serif"},children:[e.jsx("h1",{children:"Restaurant Menu"}),e.jsxs(m,{children:[e.jsx("label",{className:"form-group__label",children:"Vegan Options"}),e.jsx(c,{isOn:r,onToggle:()=>o(!r)})]}),e.jsxs("div",{className:"menu-section",children:[e.jsx("h2",{children:"Appetizers"}),e.jsxs("div",{className:"menu-item",children:[e.jsx(s,{content:"A delicious starter with fresh ingredients",children:e.jsx("span",{children:"Bruschetta"})}),e.jsx(a,{label:"Order",variant:"primary"})]}),e.jsxs("div",{className:"menu-item",children:[e.jsx(s,{content:"A vegan-friendly starter with fresh vegetables",children:e.jsxs("span",{children:["Garden Salad ",r&&"(Vegan)"]})}),e.jsx(a,{label:"Order",variant:"primary"})]})]}),e.jsxs("div",{className:"menu-section",children:[e.jsx("h2",{children:"Main Courses"}),e.jsxs("div",{className:"menu-item",children:[e.jsx(s,{content:"A classic Italian pasta dish",children:e.jsx("span",{children:"Spaghetti Carbonara"})}),e.jsx(a,{label:"Order",variant:"primary"})]}),e.jsxs("div",{className:"menu-item",children:[e.jsx(s,{content:"A vegan-friendly pasta dish with tomato sauce",children:e.jsxs("span",{children:["Spaghetti Marinara ",r&&"(Vegan)"]})}),e.jsx(a,{label:"Order",variant:"primary"})]})]})]})})},t=h.bind({});var i,n,l;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
}`,...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};const y=["RestaurantMenu"];export{t as RestaurantMenu,y as __namedExportsOrder,b as default};
