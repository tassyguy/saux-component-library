import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

// Typography & Misc Components

import {
  Column,
  Table,
  Accordion,
  Alert,
  Pagination,
  Sidebar,
  Breadcrumb,
  ToggleSwitch,
  Footer,
  FormGroup,
  Tooltip,
  CheckRadio,
  Button,
  ThemeProvider,
  H1,
  H2,
  H3,
  H4,
  H5,
  OrderedList,
  UnorderedList,
  Avatar,
  Badge,
  Card,
} from '../../components';
import { SidebarItem } from '../../components/Sidebar/src/Sidebar';
import { ChevronDown, CheckCircle } from 'react-feather';

export default {
  title: 'Sample Pages/Style Guide',
} as Meta;

const tableColumns = [
  { header: 'Name', accessor: 'name' },
  { header: 'Age', accessor: 'age' },
  { header: 'Email', accessor: 'email' },
];

const tableData = [
  { age: 29, email: 'somerandomemail@gmail.com', name: 'Alice' },
  { age: 39, email: 'reallyawesomedev@devs.com', name: 'Simon' },
  { age: 32, email: 'alsoawesomedev@devs.com', name: 'Amanda' },
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

const cardItems = [
  {
    description: 'Description 1',
    imageUrl:
      'https://fastly.picsum.photos/id/19/2500/1667.jpg?hmac=7epGozH4QjToGaBf_xb2HbFTXoV5o8n_cYzB7I4lt6g',
    title: 'Card 1',
  },
  {
    description: 'Description 2',
    imageUrl:
      'https://fastly.picsum.photos/id/25/5000/3333.jpg?hmac=yCz9LeSs-i72Ru0YvvpsoECnCTxZjzGde805gWrAHkM',
    title: 'Card 2',
  },
  {
    description: 'Description 3',
    imageUrl:
      'https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA',
    title: 'Card 3',
  },
];

import { globalComponentProps } from '../../components/config/globalComponentProps';
import CheckRadioStories from '../../components/CheckRadio/src/CheckRadio.stories';

const Template: StoryFn = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <ThemeProvider>
      <div {...globalComponentProps('padding', 'all', 'lg')}>
        {' '}
        {/* Large padding all around */}
        <label className="form-group__label">Header tags:</label>
        <H1 text="H1" className="margin-bottom-lg" />
        <H2 text="H2" className="margin-bottom-lg" />
        <H3 text="H3" className="margin-bottom-lg" />
        <H4 text="H4" className="margin-bottom-lg" />
        <H5 text="H5" className="margin-bottom-lg" />
        <div className="container">
          <label className="form-group__label">Alert:</label>
          <Alert
            className="margin-bottom-lg"
            message="This is an alert message."
            type="success"
          />
        </div>
        <div className="container">
          <label className="form-group__label blockDisplay">Avatar:</label>
          <Avatar
            className="margin-bottom-lg"
            src="https://via.placeholder.com/150"
            alt="Avatar"
          />
        </div>
        <div className="container">
          <label className="form-group__label blockDisplay">Badge:</label>
          <Badge className="margin-bottom-lg" text="Badge" />
        </div>
        <div className="container">
          <label className="form-group__label blockDisplay">Button:</label>
          <Button
            className="margin-bottom-lg"
            label="Button"
            onClick={() => console.log('Button clicked')}
          />
        </div>
        <div className="container">
          <label className="form-group__label blockDisplay">Card:</label>
          <Card className="margin-bottom-lg" items={cardItems} />
        </div>
        <div className="container">
          <label className="form-group__label blockDisplay">Table:</label>
          <Table
            columns={tableColumns}
            data={tableData}
            className="margin-bottom-lg"
          />
        </div>
        <div className="container">
          <label className="form-group__label blockDisplay">Check Radio:</label>
          <CheckRadio className="margin-bottom-lg" type="checkbox"  checked="false"/>
          <CheckRadio className="margin-bottom-lg" type="radio"  checked="false"/>
        </div>
        <div className="container">
          <label className="form-group__label blockDisplay">Table:</label>
          <Table
            columns={tableColumns}
            data={tableData}
            className="margin-bottom-lg"
          />
        </div>
        <div className="container">
          <label className="form-group__label blockDisplay">Ordered Lists:</label>
          <OrderedList
            className="margin-bottom-lg"
            items={[
              {
                icon: <CheckCircle size={16} />,
                key: 'success',
                label: 'Success Item',
                onClick: () => {},
              },
              { key: 'warning', label: 'Warning Item', onClick: () => {} },
              { key: 'info', label: 'Info Item', onClick: () => {} },
              { disabled: true, key: 'disabled', label: 'Disabled Item' },
            ]}
          />
        </div>
        <div className="container">
          <label className="form-group__label blockDisplay">Unordered Lists:</label>
          <UnorderedList
            className="margin-bottom-lg"
            items={[
              {
                icon: <CheckCircle size={16} />,
                key: 'success',
                label: 'Success Item',
                onClick: () => {},
              },
              { key: 'warning', label: 'Warning Item', onClick: () => {} },
              { key: 'info', label: 'Info Item', onClick: () => {} },
              { disabled: true, key: 'disabled', label: 'Disabled Item' },
            ]}
          />
        </div>
        <div className="container">
          <label className="form-group__label blockDisplay">Accordion:</label>
          <Accordion
            className="margin-bottom-lg"
            items={[
              {
                content: <p>Content 1</p>,
                icon: <ChevronDown size={16} />,
                title: 'Item 1',
              },
              {
                content: <p>Content 2</p>,
                icon: <ChevronDown size={16} />,
                title: 'Item 2',
              },
              {
                content: <p>Content 3</p>,
                icon: <ChevronDown size={16} />,
                title: 'Item 3',
              },
            ]}
          />
        </div>
        <div className="container">
          <label className="form-group__label blockDisplay">Pagination:</label>
          <Pagination
            className="margin-bottom-lg"
            currentPage={1}
            totalPages={5}
            onPageChange={(page: number) => console.log(page)}
          />
        </div>
        <div className="container">
          <label className="form-group__label blockDisplay">Sidebar Component:</label>
          <Sidebar
            className="margin-bottom-lg"
            title={'Sidebar'}
            items={sampleItems}
          />
        </div>
        <div className="container">
          <Breadcrumb className="margin-bottom-lg" items={breadcrumbs} />
        </div>
        <div className="container">
          <label className="form-group__label blockDisplay">Dark Mode</label>
          <ToggleSwitch
            className="margin-bottom-lg"
            isOn={darkMode}
            onToggle={() => setDarkMode(!darkMode)}
          />
        </div>
      </div>
    </ThemeProvider>
  );
};

export const Dashboard = Template.bind({});
