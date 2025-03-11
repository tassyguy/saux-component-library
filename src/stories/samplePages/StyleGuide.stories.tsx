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
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <label className="form-group__label">Header tags:</label>
        <H1 text="H1" />
        <H2 text="H2" />
        <H3 text="H3" />
        <H4 text="H4" />
        <H5 text="H5" />
        <label className="form-group__label">Table:</label>
        <Table columns={tableData} data={[]}></Table>
        <label className="form-group__label">Ordered/Unordered Lists:</label>
        <OrderedList items={[]}></OrderedList>
        <UnorderedList items={[]}></UnorderedList>
        <label className="form-group__label">Accordion:</label>
        <Accordion items={[]}></Accordion>
        <label className="form-group__label">Pagination:</label>
        <Pagination
          currentPage={0}
          totalPages={0}
          onPageChange={function (page: number): void {
            throw new Error('Function not implemented.');
          }}
        ></Pagination>
        <label className="form-group__label">Sidebar Component:</label>
        <Sidebar title={'Sidebar'} items={sampleItems} className=""></Sidebar>
        <Breadcrumb items={breadcrumbs} />
        <label className="form-group__label">Dark Mode</label>
        <ToggleSwitch isOn={darkMode} onToggle={() => setDarkMode(!darkMode)} />
        <Footer>
          <label className="form-group__label">Dark Mode</label>
          <ToggleSwitch
            isOn={darkMode}
            onToggle={() => setDarkMode(!darkMode)}
          />
        </Footer>

        <FormGroup>
          <label className="form-group__label">Dark Mode</label>
          <ToggleSwitch
            isOn={darkMode}
            onToggle={() => setDarkMode(!darkMode)}
          />
        </FormGroup>
        <div className="dashboard-section">
          <h2>Statistics</h2>
          <div className="dashboard-item">
            <Tooltip content="Total number of users">
              <span>Total Users: 1,234</span>
            </Tooltip>
          </div>
          <div className="dashboard-item">
            <Tooltip content="Total number of orders">
              <span>Total Orders: 567</span>
            </Tooltip>
          </div>
        </div>
        <div className="dashboard-section">
          <h2>Actions</h2>
          <div className="dashboard-item">
            <Button label="Add User" variant="primary" />
          </div>
          <div className="dashboard-item">
            <Button label="Generate Report" variant="secondary" />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export const Dashboard = Template.bind({});
