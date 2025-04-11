import{j as x}from"./jsx-runtime-D_zvdyIk.js";import{r as S}from"./index-DuZrfDUH.js";import{P as h}from"./Pagination-ViVRIjJi.js";import"./_commonjsHelpers-CqkleIqs.js";const j={title:"Components/Pagination",component:h,argTypes:{currentPage:{control:"number"},totalPages:{control:"number"},className:{control:"text"},style:{control:"object"},prevAriaLabel:{control:"text"},nextAriaLabel:{control:"text"}}},t=e=>{const[C,d]=S.useState(e.currentPage),b=g=>{d(g),e.onPageChange(g)};return x.jsx(h,{...e,currentPage:C,onPageChange:b})},a=t.bind({});a.args={currentPage:1,totalPages:10,onPageChange:e=>console.log(`Page changed to ${e}`)};const n=t.bind({});n.args={currentPage:1,totalPages:10,className:"custom-pagination",style:{backgroundColor:"lightgray"},onPageChange:e=>console.log(`Page changed to ${e}`)};const r=t.bind({});r.args={currentPage:1,totalPages:10,prevAriaLabel:"Go to previous page",nextAriaLabel:"Go to next page",onPageChange:e=>console.log(`Page changed to ${e}`)};var o,s,c;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`args => {
  const [currentPage, setCurrentPage] = useState(args.currentPage);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    args.onPageChange(page);
  };
  return <Pagination {...args} currentPage={currentPage} onPageChange={handlePageChange} />;
}`,...(c=(s=a.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var P,u,l;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`args => {
  const [currentPage, setCurrentPage] = useState(args.currentPage);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    args.onPageChange(page);
  };
  return <Pagination {...args} currentPage={currentPage} onPageChange={handlePageChange} />;
}`,...(l=(u=n.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var i,p,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
  const [currentPage, setCurrentPage] = useState(args.currentPage);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    args.onPageChange(page);
  };
  return <Pagination {...args} currentPage={currentPage} onPageChange={handlePageChange} />;
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const v=["Default","CustomStyled","WithAriaLabels"];export{n as CustomStyled,a as Default,r as WithAriaLabels,v as __namedExportsOrder,j as default};
