import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as v}from"./index-DuZrfDUH.js";import{F as S}from"./FileUpload-BdeJzUe8.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Button-D4b0BiQ0.js";const T={title:"Components/File Upload",component:S},t=x=>{const[a,h]=v.useState(null),g=n=>{h(n)};return e.jsxs("div",{children:[e.jsx(S,{...x,onFilesSelected:g}),a&&e.jsxs("div",{style:{marginTop:"16px"},children:[e.jsx("h4",{children:"Selected Files:"}),e.jsx("ul",{children:Array.from(a).map((n,U)=>e.jsx("li",{children:n.name},U))})]})]})},l=t.bind({});l.args={label:"Upload File",accept:"*",multiple:!1};const s=t.bind({});s.args={label:"Upload Multiple Files",accept:"image/*, .pdf",multiple:!0};const i=t.bind({});i.args={label:"Upload Disabled",disabled:!0};var r,d,o;l.parameters={...l.parameters,docs:{...(r=l.parameters)==null?void 0:r.docs,source:{originalSource:`args => {
  const [files, setFiles] = useState<FileList | null>(null);
  const handleFilesSelected = (selectedFiles: FileList | null) => {
    setFiles(selectedFiles);
  };
  return <div>
      <FileUpload {...args} onFilesSelected={handleFilesSelected} />
      {files && <div style={{
      marginTop: '16px'
    }}>
          <h4>Selected Files:</h4>
          <ul>
            {Array.from(files).map((file, index) => <li key={index}>{file.name}</li>)}
          </ul>
        </div>}
    </div>;
}`,...(o=(d=l.parameters)==null?void 0:d.docs)==null?void 0:o.source}}};var c,p,F;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  const [files, setFiles] = useState<FileList | null>(null);
  const handleFilesSelected = (selectedFiles: FileList | null) => {
    setFiles(selectedFiles);
  };
  return <div>
      <FileUpload {...args} onFilesSelected={handleFilesSelected} />
      {files && <div style={{
      marginTop: '16px'
    }}>
          <h4>Selected Files:</h4>
          <ul>
            {Array.from(files).map((file, index) => <li key={index}>{file.name}</li>)}
          </ul>
        </div>}
    </div>;
}`,...(F=(p=s.parameters)==null?void 0:p.docs)==null?void 0:F.source}}};var u,m,f;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
  const [files, setFiles] = useState<FileList | null>(null);
  const handleFilesSelected = (selectedFiles: FileList | null) => {
    setFiles(selectedFiles);
  };
  return <div>
      <FileUpload {...args} onFilesSelected={handleFilesSelected} />
      {files && <div style={{
      marginTop: '16px'
    }}>
          <h4>Selected Files:</h4>
          <ul>
            {Array.from(files).map((file, index) => <li key={index}>{file.name}</li>)}
          </ul>
        </div>}
    </div>;
}`,...(f=(m=i.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};const A=["DefaultFileUpload","MultipleFileUpload","DisabledFileUpload"];export{l as DefaultFileUpload,i as DisabledFileUpload,s as MultipleFileUpload,A as __namedExportsOrder,T as default};
