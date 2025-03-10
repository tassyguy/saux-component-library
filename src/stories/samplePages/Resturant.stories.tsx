import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Button from '../../components/Button/src/Button';
import FormGroup from '../../components/Form/src/FormGroup';
import ToggleSwitch from '../../components/ToggleSwitch/ToggleSwitch';
import Tooltip from '../../components/Tooltip/src/Tooltip';
import '../../components/Button/Button.css';
import '../../components/Form/FormGroup.css';
import '../../components/ToggleSwitch/ToggleSwitch.css';
import '../../components/Tooltip/Tooltip.css';
import { ThemeProvider } from '../../components/Theme/src/ThemeProvider';

export default {
  title: 'Sample Pages/Restaurant Menu',
} as Meta;

const Template: StoryFn = () => {
  const [isVegan, setIsVegan] = React.useState(false);

  return (
    <ThemeProvider>
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1>Restaurant Menu</h1>
        <FormGroup>
          <label className="form-group__label">Vegan Options</label>
          <ToggleSwitch isOn={isVegan} onToggle={() => setIsVegan(!isVegan)} />
        </FormGroup>
        <div className="menu-section">
          <h2>Appetizers</h2>
          <div className="menu-item">
            <Tooltip content="A delicious starter with fresh ingredients">
              <span>Bruschetta</span>
            </Tooltip>
            <Button label="Order" variant="primary" />
          </div>
          <div className="menu-item">
            <Tooltip content="A vegan-friendly starter with fresh vegetables">
              <span>Garden Salad {isVegan && '(Vegan)'}</span>
            </Tooltip>
            <Button label="Order" variant="primary" />
          </div>
        </div>
        <div className="menu-section">
          <h2>Main Courses</h2>
          <div className="menu-item">
            <Tooltip content="A classic Italian pasta dish">
              <span>Spaghetti Carbonara</span>
            </Tooltip>
            <Button label="Order" variant="primary" />
          </div>
          <div className="menu-item">
            <Tooltip content="A vegan-friendly pasta dish with tomato sauce">
              <span>Spaghetti Marinara {isVegan && '(Vegan)'}</span>
            </Tooltip>
            <Button label="Order" variant="primary" />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export const RestaurantMenu = Template.bind({});
