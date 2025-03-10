import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { useDarkMode } from 'storybook-dark-mode';
import {
  ThemeProvider,
  FormGroup,
  ToggleSwitch,
  Tooltip,
  Button,
} from '../../components';

export default {
  title: 'Sample Pages/Dashboard',
} as Meta;

const Template: StoryFn = () => {
  const [darkMode, setDarkMode] = React.useState(false);
  const isDarkMode = useDarkMode();

  return (
    <ThemeProvider>
      <div
        className={isDarkMode ? 'dark-theme' : ''}
        style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}
      >
        <h1>Dashboard</h1>
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
