import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

// Typography & Misc Components

import {
  Column,
  Table,
  Accordion,
  Pagination,
  Sidebar,
  Breadcrumb,
  ToggleSwitch,
  Footer,
  FormGroup,
  Tooltip,
  Button,
  ThemeProvider,
  H1,
  H2,
  H3,
  H4,
  H5,
  OrderedList,
  UnorderedList,
} from '../../components';
import { SidebarItem } from '../../components/Sidebar/src/Sidebar';
import { ChevronDown, 
  CheckCircle
} from 'react-feather';

export default {
  title: 'Sample Pages/Style Guide',
} as Meta;

const tableColumns = [
  { header: 'Name', accessor: 'name' },
  { header: 'Age', accessor: 'age' },
  { header: 'Email', accessor: 'email' },
];

const tableData = [
  { age: 29, email: 'name' , name: 'Alice' },
  { age: 39, email: 'name' , name: 'Alice' },
  { age: 32, email: 'name' , name: 'Alice' },
];

const sampleItems: SidebarItem[] = [
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Profile', href: '/profile' },
  { label: 'Settings', href: '/settings' },
  { label: 'Logout', onClick: () => alert('Logged out!') },
];

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Electronics', href: '/products/electronics' },
  { label: 'Laptops' },
];

import { globalComponentProps } from '../../components/config/globalComponentProps';

const Template: StoryFn = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <ThemeProvider>
      <div {...globalComponentProps('padding', 'all', 'lg')}> {/* Large padding all around */}
        
        <label className="form-group__label">Header tags:</label>
        <H1 text="H1" className="margin-bottom-lg"/>
        <H2 text="H2" className="margin-bottom-lg"/>
        <H3 text="H3" className="margin-bottom-lg"/>
        <H4 text="H4" className="margin-bottom-lg"/>
        <H5 text="H5" className="margin-bottom-lg"/>

        <label className="form-group__label">Table:</label>
        <Table columns={tableColumns} data={[]} className="margin-bottom-lg" />

        <label className="form-group__label">Ordered Lists:</label>
        <OrderedList className="margin-bottom-lg" items={[
          { icon: <CheckCircle size={16} />, key: 'success', label: 'Success Item', onClick: () => {} },
          { key: 'warning', label: 'Warning Item', onClick: () => {} },
          { key: 'info', label: 'Info Item', onClick: () => {} },
          { disabled: true, key: 'disabled', label: 'Disabled Item' }
        ]}/>

        <label className="form-group__label">Unordered Lists:</label>
        <UnorderedList className="margin-bottom-lg" items={[
          { icon: <CheckCircle size={16} />, key: 'success', label: 'Success Item', onClick: () => {} },
          { key: 'warning', label: 'Warning Item', onClick: () => {} },
          { key: 'info', label: 'Info Item', onClick: () => {} },
          { disabled: true, key: 'disabled', label: 'Disabled Item' }
        ]}/>

        <label className="form-group__label">Accordion:</label>
        <Accordion className="margin-bottom-lg" items={[
          { content: <p>Content 1</p>, icon: <ChevronDown size={16} />, title: 'Item 1' },
          { content: <p>Content 2</p>, icon: <ChevronDown size={16} />, title: 'Item 2' },
          { content: <p>Content 3</p>, icon: <ChevronDown size={16} />, title: 'Item 3' }
        ]} />

        <label className="form-group__label">Pagination:</label>
        <Pagination className="margin-bottom-lg" currentPage={0} totalPages={0} onPageChange={(page: number) => console.log(page)} />

        <label className="form-group__label">Sidebar Component:</label>
        <Sidebar className="margin-bottom-lg" title={'Sidebar'} items={sampleItems}  />

        <Breadcrumb className="margin-bottom-lg" items={breadcrumbs}  />

        <label className="form-group__label">Dark Mode</label>
        <ToggleSwitch className="margin-bottom-lg" isOn={darkMode} onToggle={() => setDarkMode(!darkMode)} />
        
      </div>
    </ThemeProvider>
  );
};


export const Dashboard = Template.bind({});
