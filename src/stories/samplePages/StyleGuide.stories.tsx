import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';

// Typography & Misc Components

import {
  Column,
  Chip,
  DatePicker,
  Table,
  Accordion,
  Alert,
  Pagination,
  Sidebar,
  SelectInput,
  SliderInput,
  Stepper,
  Breadcrumb,
  ToggleSwitch,
  FileUpload,
  Footer,
  Form,
  FormGroup,
  InputField,
  Link,
  Modal,
  ProgressBar,
  TextArea,
  Tooltip,
  Grid,
  GridItem,
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
  DropdownMenu,
} from '../../components';

import CheckRadioGroup from '../../components/CheckRadio/src/CheckRadio';

import { SidebarItem } from '../../components/Sidebar/src/Sidebar';

import {
  ChevronDown,
  CheckCircle,
  User,
  Settings,
  LogOut,
  Mail,
  Info,
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

const dropdownItems = [
  {
    icon: <User size={16} />,
    label: 'Profile',
    onClick: () => {},
    value: 'profile',
  },
  {
    icon: <Settings size={16} />,
    label: 'Settings',
    onClick: () => {},
    value: 'settings',
  },
  {
    icon: <LogOut size={16} />,
    label: 'Logout',
    onClick: () => {},
    value: 'logout',
  },
];

const checkboxOptions = [
  { label: 'Checkbox Option #1', value: 'option1' },
  { label: 'Checkbox Option #2', value: 'option2' },
  { label: 'Checkbox Option #3', value: 'option3' },
];

const radioOptions = [
  { label: 'Radio Option A', value: 'A' },
  { label: 'Radio Option B', value: 'B' },
  { label: 'Radio Option C', value: 'C' },
];

const selectInputOptions = [
  {
    label: 'Option 1',
    value: 'option1',
  },
  {
    label: 'Option 2',
    value: 'option2',
  },
  {
    label: 'Option 3',
    value: 'option3',
  },
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
          <label className="form-group__label blockDisplay">Card:</label>
          <Chip label="Default Chip" />
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
          <label className="form-group__label blockDisplay">
            Checkbox Component:
          </label>
          <CheckRadioGroup
            type="checkbox"
            options={checkboxOptions}
            onChange={(selected) =>
              console.log('Selected checkboxes:', selected)
            }
            className="margin-bottom-lg"
          />
          <CheckRadioGroup
            type="radio"
            name="radio-group"
            options={radioOptions}
            onChange={(selected) => console.log('Selected radio:', selected)}
            className="margin-bottom-lg"
          />
        </div>
        <div className="container">
          <label className="form-group__label blockDisplay">Date Picker:</label>
          <DatePicker
            label="Select a Date"
            maxDate="2025-12-31"
            minDate="2025-01-01"
          />
        </div>
        <div className="container">
          <label className="form-group__label blockDisplay">
            Progress Bar:
          </label>
          <ProgressBar label="50%" value={50} variant="primary" />
        </div>
        <div className="container">
          <label className="form-group__label blockDisplay">
            Slider Input:
          </label>
          <SliderInput
            label="Default Slider"
            max={100}
            min={0}
            onChange={() => {}}
            showValue
            step={1}
            value={50}
          />
        </div>
        <div className="container">
          <label className="form-group__label blockDisplay">
            Dropdown Menu:
          </label>
          <DropdownMenu
            className="margin-bottom-lg"
            label="Option"
            items={dropdownItems}
          />
        </div>
        <div>
          <FileUpload
            accept="*"
            label="Upload File"
            onFilesSelected={() => {}}
          />
        </div>
        <div className="container">
          <label className="form-group__label blockDisplay">Footer:</label>
          <Footer className="margin-bottom-lg" />
        </div>
        <div className="container">
          <label className="form-group__label blockDisplay">Form Group:</label>
          <Form layout="vertical" onSubmit={() => {}} size="medium">
            <FormGroup htmlFor="name" label="Name" required>
              <InputField
                fullWidth
                icon={<User size={16} />}
                onChange={() => {}}
                placeholder="Enter your name"
                value=""
              />
            </FormGroup>
            <FormGroup
              error="Invalid email format"
              htmlFor="email"
              label="Email"
              required
            >
              <InputField
                fullWidth
                icon={<Mail size={16} />}
                onChange={() => {}}
                placeholder="Enter your email"
                type="email"
                value=""
              />
            </FormGroup>
            <FormGroup
              description="Max 500 characters"
              htmlFor="message"
              label="Message"
            >
              <TextArea
                characterCount
                fullWidth
                maxLength={500}
                onChange={() => {}}
                placeholder="Enter your message"
                rows={5}
                value=""
              />
            </FormGroup>
            <Button fullWidth label="Submit" type="submit" />
          </Form>
        </div>
        <div className="container">
          <label className="form-group__label blockDisplay">Grid:</label>
          <Stepper
            activeStep={0}
            onStepClick={() => {}}
            orientation="horizontal"
            steps={[
              {
                description: 'Description for step 1',
                icon: <CheckCircle size={16} />,
                label: 'Step 1',
              },
              {
                description: 'Description for step 2',
                icon: <Info size={16} />,
                label: 'Step 2',
              },
              {
                description: 'Description for step 3',
                label: 'Step 3',
              },
            ]}
          />
        </div>
        <div className="container">
          <label className="form-group__label blockDisplay">Grid:</label>
          <Grid columns={3} gap="1em">
            <GridItem>Item 1</GridItem>
            <GridItem>Item 2</GridItem>
            <GridItem>Item 3</GridItem>
            <GridItem>Item 4</GridItem>
            <GridItem>Item 5</GridItem>
            <GridItem>Item 6</GridItem>
          </Grid>
        </div>
        <div className="container">
          <label className="form-group__label blockDisplay">Input Field:</label>
          <InputField
            onChange={() => {}}
            placeholder="Enter text here..."
            value=""
          />
        </div>
        <div className="container">
          <label className="form-group__label blockDisplay">Link:</label>
          <Link href="https://www.google.com" label="Go to Google" />
        </div>
        <div className="container">
          <label className="form-group__label blockDisplay">
            Ordered Lists:
          </label>
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
          <label className="form-group__label blockDisplay">
            Unordered Lists:
          </label>
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
          <label className="form-group__label blockDisplay">Modal:</label>
          <Button label="Open Modal" onClick={() => {}} />
          <Modal open={false} onClose={() => {}} title="Modal Title">
            <p>
              This is an example modal dialog. You can place any content here.
            </p>
          </Modal>
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
            totalPages={15}
            maxVisiblePages={5}
            showFirstLast={true}
            onPageChange={(page) => console.log('Page:', page)}
          />
        </div>
        <div className="container">
          <label className="form-group__label blockDisplay">
            Select Input:
          </label>
          <SelectInput
            label="Choose an option:"
            options={selectInputOptions}
            onChange={(e) => console.log('Selected:', e.target.value)}
          />
        </div>
        <div className="container">
          <label className="form-group__label blockDisplay">
            Sidebar Component:
          </label>
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
