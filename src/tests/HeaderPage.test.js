import React from 'react';
import { useNavigate } from 'react-router-dom';
import { render,screen,fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event'; // For simulating user events
import HeaderPage from '../components/HeaderComponent/HeaderPage.jsx';
import { Dropdown } from 'primereact/dropdown';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
  }));

  const countries = [
    { name: 'Country 1', value: 'country1' },
    { name: 'Country 2', value: 'country2' },
    // Add more countries as needed
  ];

  describe('Dropdown Component', () => {
    it('should render the Dropdown component with options and change selected value on selection', () => {
      // Mock the setSelectedcountry function using React's useState
      const setSelectedcountry = jest.fn();
  
      // Render the Dropdown component with the required props
      render(
        <Dropdown
          value={countries[0]} // Set the initial selected country
          onChange={(e) => setSelectedcountry(e.value)} // Call the mocked setSelectedcountry function on change
          options={countries}
          optionLabel="name"
          placeholder="Select Country" // Replace with the placeholder text from your code
          className="countrydropdownclass"
        />
      );
  
      // Ensure the Dropdown is rendered with the correct options
      const dropdownElement = screen.getByText('Select Country');
      expect(dropdownElement).toBeInTheDocument();
      expect(screen.getAllByRole('option').length).toBe(countries.length);
  
      // Simulate selection of a different country
      const secondCountryOption = screen.getByText(countries[1].name);
      userEvent.click(dropdownElement);
      userEvent.click(secondCountryOption);
  
      // Check if the mocked setSelectedcountry function was called with the correct value
      expect(setSelectedcountry).toHaveBeenCalledWith(countries[1].value);
    });
  });
  describe('Headerpage', () => {
    it('should navigate to /storemanagerlogin when logout button is clicked', () => {
      render(<HeaderPage />);
  
      // Get the mocked useNavigate function from the mock
      const navigate = useNavigate;
  
      const logoutButton = screen.getByText('Logout');
      userEvent.click(logoutButton);
  
      expect(navigate).toHaveBeenCalledWith('/storemanagerlogin');
    });
});
describe('HeaderpageNoti', () => {
  it('should navigate to /enrollpage when view more button is clicked', () => {
    render(<HeaderPage />);

    // Get the mocked useNavigate function from the mock
    const navigate = useNavigate;

    const viewmorebutton = screen.getByText('View more');
    userEvent.click(viewmorebutton);

    expect(navigate).toHaveBeenCalledWith('/enrollpage');
  });
});
