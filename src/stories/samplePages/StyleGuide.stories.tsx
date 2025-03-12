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

const tableData: Column[] = [
  { header: 'Name', accessor: 'name' },
  { header: 'Age', accessor: 'age' },
  { header: 'Email', accessor: 'email' },
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

const Template: StoryFn = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <ThemeProvider>
      <div className="padding-lg font-family-alt">
        <label className="form-group__label margin-bottom-sm">Header tags:</label>
        <H1 text="H1" className="margin-bottom-xs" />
        <H2 text="H2" className="margin-bottom-xs" />
        <H3 text="H3" className="margin-bottom-xs" />
        <H4 text="H4" className="margin-bottom-xs" /> 
        <H5 text="H5" className="margin-bottom-md" />
        
        <label className="form-group__label margin-bottom-sm">Table:</label>
        <Table columns={tableData} data={[]} className="margin-bottom-lg" />

        <label className="form-group__label margin-bottom-sm">Ordered Lists:</label>
        <OrderedList
          className="padding-md"
          items={[
            { icon: <CheckCircle size={16} />, key: 'success', label: 'Success Item', onClick: () => {} },
            { key: 'warning', label: 'Warning Item', onClick: () => {} },
            { key: 'info', label: 'Info Item', onClick: () => {} },
            { disabled: true, key: 'disabled', label: 'Disabled Item' },
          ]}
        />

        <label className="form-group__label margin-bottom-sm">Unordered Lists:</label>
        <UnorderedList
          className="padding-md"
          items={[
            { icon: <CheckCircle size={16} />, key: 'success', label: 'Success Item', onClick: () => {} },
            { key: 'warning', label: 'Warning Item', onClick: () => {} },
            { key: 'info', label: 'Info Item', onClick: () => {} },
            { disabled: true, key: 'disabled', label: 'Disabled Item' },
          ]}
        />

        <label className="form-group__label margin-bottom-sm">Accordion:</label>
        <Accordion
          className="margin-bottom-lg"
          items={[
            { content: <p>Content 1</p>, icon: <ChevronDown size={16} />, title: 'Item 1' },
            { content: <p>Content 2</p>, icon: <ChevronDown size={16} />, title: 'Item 2' },
            { content: <p>Content 3</p>, icon: <ChevronDown size={16} />, title: 'Item 3' },
          ]}
        />

        <label className="form-group__label margin-bottom-sm">Pagination:</label>
        <Pagination
          currentPage={0}
          totalPages={0}
          className="margin-bottom-lg"
          onPageChange={(page: number) => console.log(`Page changed to ${page}`)}
        />

        <label className="form-group__label margin-bottom-sm">Sidebar Component:</label>
        <Sidebar title={'Sidebar'} items={sampleItems} className="padding-lg margin-bottom-lg" />
        
        <Breadcrumb items={breadcrumbs} className="margin-bottom-md" />

        <label className="form-group__label margin-bottom-sm">Dark Mode</label>
        <ToggleSwitch isOn={darkMode} onToggle={() => setDarkMode(!darkMode)} className="margin-bottom-md" />

        <Footer className="padding-md">
          <label className="form-group__label margin-bottom-sm">Dark Mode</label>
          <ToggleSwitch isOn={darkMode} onToggle={() => setDarkMode(!darkMode)} />
        </Footer>

        <FormGroup className="padding-md">
          <label className="form-group__label margin-bottom-sm">Dark Mode</label>
          <ToggleSwitch isOn={darkMode} onToggle={() => setDarkMode(!darkMode)} />
        </FormGroup>

        <div className="dashboard-section margin-bottom-lg">
          <h2 className="margin-bottom-md">Statistics</h2>
          <div className="dashboard-item padding-md">
            <Tooltip content="Total number of users">
              <span>Total Users: 1,234</span>
            </Tooltip>
          </div>
          <div className="dashboard-item padding-md">
            <Tooltip content="Total number of orders">
              <span>Total Orders: 567</span>
            </Tooltip>
          </div>
        </div>

        <div className="dashboard-section margin-bottom-lg">
          <h2 className="margin-bottom-md">Actions</h2>
          <div className="dashboard-item margin-bottom-sm">
            <Button label="Add User" variant="primary" className="padding-sm" />
          </div>
          <div className="dashboard-item">
            <Button label="Generate Report" variant="secondary" className="padding-sm" />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};


export const Dashboard = Template.bind({});
