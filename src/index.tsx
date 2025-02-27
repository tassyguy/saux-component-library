import React from "react";

// Layout component imports :

// Navigation component imports:

// UI/Interactive component imports:
import { default as Button } from "./components/Button/Button";
import { default as Link } from "./components/Link/Link";
import { default as CardList } from "./components/Card/CardItem";

// Form component imports:

// Data Display component imports:
import Table from "./components/Table/Table";
import OL from "./components/List/OL";
import UL from "./components/List/UL";
import Accordion from "./components/Accordion/Accordion";

// Typography & Misc component imports:
import { default as H1 } from "./components/Header/H1";
import { default as H2 } from "./components/Header/H2";
import { default as H3 } from "./components/Header/H3";
import { default as H4 } from "./components/Header/H4";
import { default as H5 } from "./components/Header/H5";


const navItems = [
    { label: "Home"},
    { label: "About"},
    { label: "Contact"}
  ];

  const cardItems = [
    {
      title: "Card One",
      description: "This is the description for card one.",
      imageUrl: "https://via.placeholder.com/300",
      onClick: () => console.log("Card One clicked"),
    },
    {
      title: "Card Two",
      description: "This is the description for card two.",
      imageUrl: "https://via.placeholder.com/300",
    },
    {
      title: "Card Three",
      description: "This is the description for card three.",
      onClick: () => console.log("Card Three clicked"),
    }
];

const tableColumns = [
    { header: "Name", accessor: "name" },
    { header: "Age", accessor: "age" },
    { header: "Email", accessor: "email" },
  ];

  const tableData = [
    { name: "Alice", age: 25, email: "alice@example.com" },
    { name: "Bob", age: 30, email: "bob@example.com" },
    { name: "Charlie", age: 35, email: "charlie@example.com" },
  ];

  const accordionItems = [
    {
      title: "Section 1",
      content: <p>This is the content of section 1.</p>,
    },
    {
      title: "Section 2",
      content: (
        <div>
          <p>Content for section 2 can include more complex elements.</p>
          <p>For example, lists, images, or even other components.</p>
        </div>
      ),
    },
    {
      title: "Section 3",
      content: <p>Section 3's content is right here.</p>,
    },
  ];

const StyleGuide: React.FC = () => {
  return (
    <div>
      <p>Style Guide:</p>

      <p>Layout Components</p>
      // Container component goes here 
      // Grid System component goes here 
      // Section/Wrapper component goes here

      <p>Navigation Components</p>
      // Header/Nav Bar component goes here 
      // Sidebar component goes here
      // Breadcrumb component goes here 
      // Footer component goes here

      <p>UI/Interactive Components</p>
      <Button label="This is a button component" onClick={() => alert("This is a button alert!")} /> // Button component DONE
      <Link label="This is a link component" href="www.google.com" /> // Link comopnent DONE
      <CardList items={cardItems} /> // Card component DONE
      // Modal/Dialog component goes here
      // Tooltip component goes here 
      // Dropdown/Menu component goes here 
      // Avatar component goes here 
      // Badge component goes here 
      // Alert/Notification component goes here

      <p>Form Components</p>
      // Input Field component goes here 
      // Textarea component goes here
      // Select/Dropdown Input component goes here 
      // Checkbox/Radio Button goes here 
      // Form & FormGroup component goes here 
      // Toggle Switch component goes here

      <p>Data Display Components</p>
      <Table columns={tableColumns} data={tableData} /> // Table component DONE
      <OL items={navItems} /> // Unordered list component DONE
      <UL items={navItems} /> // Unordered list component DONE
      <Accordion items={accordionItems} /> // Accordion component DONE
      // Pagination component goes here

      <p>Typography & Misc Components</p>
      <H1 text="This is an H1 tag"></H1> // H1 Component Done
      <H2 text="This is an H2 tag"></H2> // H2 Component Done
      <H3 text="This is an H3 tag"></H3> // H3 Component Done
      <H4 text="This is an H4 tag"></H4> // H4 Component Done
      <H5 text="This is an H5 tag"></H5> // H5 Component Done

    </div>
  );
};

export default StyleGuide;
