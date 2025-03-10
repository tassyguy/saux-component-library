import React from "react";
import { Meta, StoryFn } from "@storybook/react";


// Layout Components
import Container from "../../components/Container/Container";
import Grid from "../../components/Grid/Grid";
import Section from "../../components/Section/Section";
import "../../components/Container/Container.css";
import "../../components/Grid/Grid.css";
import "../../components/Section/Section.css";

// Navigation Components
import Header from "../../components/Header/Header";
import Sidebar, { SidebarItem } from "../../components/Sidebar/Sidebar";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Footer from "../../components/Footer/Footer";
import "../../components/Header/Header.css";
import "../../components/Sidebar/Sidebar.css";
import "../../components/Breadcrumb/Breadcrumb.css";
import "../../components/Footer/Footer.css";

// UI/Interactive Components
import Button from "../../components/Button/Button";
import Link from "../../components/Link/Link";
import CardItem from "../../components/Card/CardItem";
import Modal from "../../components/Modal/Modal";
import Tooltip from "../../components/Tooltip/Tooltip";
import Dropdown from "../../components/DropdownMenu/DropdownMenu";
import Avatar from "../../components/Avatar/Avatar";
import Badge from "../../components/Badge/Badge";
import Alert from "../../components/Alert/Alert";
import "../../components/Button/Button.css";
import "../../components/Link/Link.css";
import "../../components/Card/CardItem.css";
import "../../components/Modal/Modal.css";
import "../../components/Tooltip/Tooltip.css";
import "../../components/DropdownMenu/DropdownMenu.css";
import "../../components/Avatar/Avatar.css";
import "../../components/Badge/Badge.css";
import "../../components/Alert/Alert.css";

// Form Components
import InputField from "../../components/InputField/InputField";
import TextArea from "../../components/TextArea/TextArea";
import SelectInput from "../../components/SelectInput/SelectInput";
import CheckRadio from "../../components/CheckRadio/CheckRadio";
import Form from "../../components/Form/Form";
import FormGroup from "../../components/Form/FormGroup";
import ToggleSwitch from "../../components/ToggleSwitch/ToggleSwitch";
import "../../components/InputField/InputField.css";
import "../../components/TextArea/TextArea.css";
import "../../components/SelectInput/SelectInput.css";
import "../../components/CheckRadio/CheckRadio.css";
import "../../components/Form/Form.css";
import "../../components/Form/FormGroup.css";
import "../../components/ToggleSwitch/ToggleSwitch.css";

// Data Display Components
import Table, { Column } from "../../components/Table/Table";
import OL from "../../components/List/OL";
import UL from "../../components/List/UL";
import Accordion from "../../components/Accordion/Accordion";
import Pagination from "../../components/Pagination/Pagination";
import "../../components/Table/Table.css";
import "../../components/List/OL.css";
import "../../components/List/UL.css";
import "../../components/Accordion/Accordion.css";
import "../../components/Pagination/Pagination.css";

// Typography & Misc Components
import H1 from "../../components/Header/H1";
import H2 from "../../components/Header/H2";
import H3 from "../../components/Header/H3";
import H4 from "../../components/Header/H4";
import H5 from "../../components/Header/H5";
import "../../components/Header/H1.css";
import "../../components/Header/H2.css";
import "../../components/Header/H3.css";
import "../../components/Header/H4.css";
import "../../components/Header/H5.css";

import { ThemeProvider } from "../../components/Theme/ThemeProvider";

export default {
  title: "Sample Pages/Style Guide",
} as Meta;

const tableData: Column[] = [
    { header: "Name", accessor: "name" },
    { header: "Age", accessor: "age" },
    { header: "Email", accessor: "email" },
  ]

  const sampleItems: SidebarItem[] = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Profile", href: "/profile" },
    { label: "Settings", href: "/settings" },
    { label: "Logout", onClick: () => alert("Logged out!") },
  ];

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Electronics', href: '/products/electronics' },
    { label: 'Laptops' },
  ]

const Template: StoryFn = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <ThemeProvider>
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif"}}>
        <label className="form-group__label">Header tags:</label>
        <H1 text="H1"/>
        <H2 text="H2"/>
        <H3 text="H3"/>
        <H4 text="H4"/>
        <H5 text="H5"/>
        <label className="form-group__label">Table:</label>
        <Table columns={tableData} data={[]}></Table>
        <label className="form-group__label">Ordered/Unordered Lists:</label>
        <OL items={[]}></OL> 
        <UL items={[]}></UL>
        <label className="form-group__label">Accordion:</label>
        <Accordion items={[]}></Accordion>
        <label className="form-group__label">Pagination:</label>
        <Pagination currentPage={0} totalPages={0} onPageChange={function (page: number): void {
                  throw new Error("Function not implemented.");
              } }></Pagination>
              <label className="form-group__label">Sidebar Component:</label>
      <Sidebar title={"Sidebar"} items={sampleItems} className="">
        
      </Sidebar>
      <Breadcrumb items={breadcrumbs}/>
        <label className="form-group__label">Dark Mode</label>
        <ToggleSwitch
          isOn={darkMode}
          onToggle={() => setDarkMode(!darkMode)}
        />
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