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

import { globalComponentProps } from '../../components/config/globalComponentProps';

const Template: StoryFn = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <ThemeProvider>
      <div {...globalComponentProps('padding', 'all', 'lg')}> {/* Large padding all around */}
        
        <label className="form-group__label">Header tags:</label>
        <H1 text="H1" {...globalComponentProps('margin', 'bottom', 'sm')} />
        <H2 text="H2" {...globalComponentProps('margin', 'bottom', 'sm')} />
        <H3 text="H3" {...globalComponentProps('margin', 'bottom', 'sm')} />
        <H4 text="H4" {...globalComponentProps('margin', 'bottom', 'sm')} />
        <H5 text="H5" {...globalComponentProps('margin', 'bottom', 'md')} />

        <label className="form-group__label">Table:</label>
        <Table columns={tableData} data={[]} {...globalComponentProps('margin', 'bottom', 'lg')} />

        <label className="form-group__label">Ordered Lists:</label>
        <OrderedList {...globalComponentProps('margin', 'top', 'sm')} items={[
          { icon: <CheckCircle size={16} />, key: 'success', label: 'Success Item', onClick: () => {} },
          { key: 'warning', label: 'Warning Item', onClick: () => {} },
          { key: 'info', label: 'Info Item', onClick: () => {} },
          { disabled: true, key: 'disabled', label: 'Disabled Item' }
        ]}/>

        <label className="form-group__label">Unordered Lists:</label>
        <UnorderedList {...globalComponentProps('padding', 'left', 'sm')} items={[
          { icon: <CheckCircle size={16} />, key: 'success', label: 'Success Item', onClick: () => {} },
          { key: 'warning', label: 'Warning Item', onClick: () => {} },
          { key: 'info', label: 'Info Item', onClick: () => {} },
          { disabled: true, key: 'disabled', label: 'Disabled Item' }
        ]}/>

        <label className="form-group__label">Accordion:</label>
        <Accordion {...globalComponentProps('padding', 'top', 'md')} items={[
          { content: <p>Content 1</p>, icon: <ChevronDown size={16} />, title: 'Item 1' },
          { content: <p>Content 2</p>, icon: <ChevronDown size={16} />, title: 'Item 2' },
          { content: <p>Content 3</p>, icon: <ChevronDown size={16} />, title: 'Item 3' }
        ]} />

        <label className="form-group__label">Pagination:</label>
        <Pagination {...globalComponentProps('margin', 'top', 'sm')} currentPage={0} totalPages={0} onPageChange={(page: number) => console.log(page)} />

        <label className="form-group__label">Sidebar Component:</label>
        <Sidebar title={'Sidebar'} items={sampleItems} {...globalComponentProps('padding', 'all', 'lg')} />

        <Breadcrumb items={breadcrumbs} {...globalComponentProps('margin', 'bottom', 'md')} />

        <label className="form-group__label">Dark Mode</label>
        <ToggleSwitch isOn={darkMode} onToggle={() => setDarkMode(!darkMode)} />

        <Footer {...globalComponentProps('padding', 'top', 'lg')}>
          <label className="form-group__label">Dark Mode</label>
          <ToggleSwitch isOn={darkMode} onToggle={() => setDarkMode(!darkMode)} />
        </Footer>

        <FormGroup {...globalComponentProps('margin', 'bottom', 'md')}>
          <label className="form-group__label">Dark Mode</label>
          <ToggleSwitch isOn={darkMode} onToggle={() => setDarkMode(!darkMode)} />
        </FormGroup>
      </div>
    </ThemeProvider>
  );
};


export const Dashboard = Template.bind({});
