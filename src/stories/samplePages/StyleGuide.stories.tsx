import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

// Layout Components
import Container from '../../components/Container/src/Container';
import Grid from '../../components/Grid/src/Grid';
import Section from '../../components/Section/src/Section';

// Navigation Components
import Header from '../../components/Header/src/Header';
import Sidebar, { SidebarItem } from '../../components/Sidebar/src/Sidebar';
import Breadcrumb from '../../components/Breadcrumb/src/Breadcrumb';
import Footer from '../../components/Footer/src/Footer';

// UI/Interactive Components
import Button from '../../components/Button/src/Button';
import Link from '../../components/Link/src/Link';
import CardItem from '../../components/Card/src/Card';
import Modal from '../../components/Modal/src/Modal';
import Tooltip from '../../components/Tooltip/src/Tooltip';
import Dropdown from '../../components/DropdownMenu/src/DropdownMenu';
import Avatar from '../../components/Avatar/src/Avatar';
import Badge from '../../components/Badge/src/Badge';
import Alert from '../../components/Alert/src/Alert';
// Form Components
import InputField from '../../components/InputField/src/InputField';
import TextArea from '../../components/TextArea/src/TextArea';
import SelectInput from '../../components/SelectInput/src/SelectInput';
import CheckRadio from '../../components/CheckRadio/src/CheckRadio';
import Form from '../../components/Form/src/Form';
import FormGroup from '../../components/Form/src/FormGroup';
import ToggleSwitch from '../../components/ToggleSwitch/src/ToggleSwitch';

// Data Display Components
import Table, { Column } from '../../components/Table/src/Table';
import OL from '../../components/List/src/OL';
import UL from '../../components/List/src/UL';
import Accordion from '../../components/Accordion/src/Accordion';
import Pagination from '../../components/Pagination/src/Pagination';

// Typography & Misc Components
import { H1, H2, H3, H4, H5 } from '../../components/Header';

import { ThemeProvider } from '../../components/Theme/src/ThemeProvider';

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
        <OL items={[]}></OL>
        <UL items={[]}></UL>
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
