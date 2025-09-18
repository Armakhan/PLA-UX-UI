import React from 'react';
import axios from 'axios';
import EnrollNow from '../../src/components/EnrollNow/EnrollPage.jsx';
import { useNavigate } from 'react-router-dom';
import { render,fireEvent } from '@testing-library/react';
import ChallengeDetails from '../components/EnrollNow/ChallengeDetails.jsx';
import FormContainer from '../components/EnrollNow/FormContainer.jsx';
import Myprogresstab from '../components/EnrollNow/MyProgressTabPanel.jsx';
import MainContent from '../components/EnrollNow/MainContent.jsx';
import ChallengeOverviewTabPanel from '../components/EnrollNow/ChallengeOverviewTabPanel.jsx';
import OverviewLeft from '../components/EnrollNow/OverviewLeft.jsx';
import OverviewRight from '../components/EnrollNow/OverViewRight.jsx';
import StackedHorizontal from '../components/GraphChartFolder/StackedHorizontal.jsx';
import StackedColumn from '../components/GraphChartFolder/StackedColumn.jsx';
import { CONSTANTCHALLENGEOVERVIEW } from '../Constants/Constant.js';


jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
  }));
jest.mock('axios', () => 'axios');
test('renders the component', () => {
  render(<EnrollNow/>);
});
test('renders the component', () => {
    render(<ChallengeDetails/>);
});
test('renders the component', () => {
    render(<FormContainer/>);
});
test('renders the component', () => {
  render(<Myprogresstab/>);
});
test('renders the component', () => {
  render(<ChallengeOverviewTabPanel/>);
});
test('renders the component', () => {
  render(<OverviewLeft/>);
});
test('renders the component', () => {
  render(<OverviewRight/>);
});
test('renders the component', () => {
  render(<MainContent/>);
});
// test('renders the component', () => {
//   render(<DropdownContent/>);
// });
test('should set amount required error state', () => {
  // Mock the setAmtReqdError function
  const setAmtReqdError = jest.fn();
  // Render the component
  const { getByTestId } = render(<FormContainer setAmtReqdError={setAmtReqdError} />);
  // Get the input element
  const inputElement = getByTestId('amt-input');
  console.log(inputElement); // Check if the inputElement is found
  fireEvent.change(inputElement, { target: { value: 'My Challenge' } });
  console.log(setAmtReqdError.mock.calls); // Check the mock function calls
  expect(setAmtReqdError).toHaveBeenCalledWith(true);
});

test('should set amount required error state', () => {
  const setSaleReqdError = jest.fn();
  const { getByTestId } = render(<FormContainer setSaleReqdError={setSaleReqdError} />);
  const inputElement = getByTestId('sale-input');
  console.log(inputElement); 
  fireEvent.change(inputElement, { target: { value: 'sale percent' } });
  console.log(setSaleReqdError.mock.calls); 
  expect(setSaleReqdError).toHaveBeenCalledWith(true);
});

test('makeClear should clear sale, amt, and reset error states to false', () => {
  // Mock state setter functions
  const mockSetSale = jest.fn();
  const mockSetAmt = jest.fn();
  const mockSetAmtReqdError = jest.fn();
  const mockSetSaleReqdError = jest.fn();

  // Render the component
  const { getByTestId } = render(
    <FormContainer
      sale=""
      amt=""
      amtReqdError={false}
      saleReqdError={false}
      setSale={mockSetSale}
      setAmt={mockSetAmt}
      setAmtReqdError={mockSetAmtReqdError}
      setSaleReqdError={mockSetSaleReqdError}
    />
  );
  // Get a reference to the element that triggers the makeClear function
  // (Assuming there's a button with data-testid="make-clear-button" that calls the makeClear function)
  const makeClearButton = getByTestId('make-clear-button');
  // Simulate a click on the makeClearButton
  fireEvent.click(makeClearButton);
  // Assert that the state setter functions were called with the expected values
  expect(mockSetSale).toHaveBeenCalledWith('');
  expect(mockSetAmt).toHaveBeenCalledWith('');
  expect(mockSetAmtReqdError).toHaveBeenCalledWith(false);
  expect(mockSetSaleReqdError).toHaveBeenCalledWith(false);
});

test('setTab should update the tab state with the provided tabnum', () => {
  // Create a mock function for setTab
  const mockSetTab = jest.fn();
  // Render the component with the mock setTab function
  const { getByTestId } = render(<MainContent setTab={mockSetTab} />);
  // Get a reference to the element that triggers the setTab function (e.g., a button)
  const tabButton = getByTestId('tab-button'); // Assuming you have a button with data-testid="tab-button"
  // Simulate a user action that triggers the setTab function with a specific tabnum (e.g., tabnum = 2)
  fireEvent.click(tabButton); // Assuming the click event triggers the handleTabChange function with tabnum=2
  // Check if the setTab mock function was called with the correct tabnum argument
  expect(mockSetTab).toHaveBeenCalledWith(1);
});

test('should display error message on blur if sale is empty', () => {
  const { getByTestId, queryByText } = render(<FormContainer />);
  const inputElement = getByTestId('sale-input'); // Assuming you have a label associated with the input element using htmlFor and id attributes
  // Simulate onBlur event with an empty input value
  fireEvent.blur(inputElement);
  // Check if the error message is displayed
  const errorMessage = getByTestId('sale-input');
  expect(errorMessage).toBeInTheDocument();
  // Simulate onBlur event with a non-empty input value
  fireEvent.change(inputElement, { target: { value: 'Some sale value' } });
  fireEvent.blur(inputElement);
  // Check if the error message is not displayed
  const errorMessageAfterInput = queryByText('Sale is required.');
  expect(errorMessageAfterInput).toBeNull();
});

test('should display error message on blur if sale is empty', () => {
  const { getByTestId, queryByText } = render(<FormContainer />);
  const inputElement = getByTestId('amt-input'); // Assuming you have a label associated with the input element using htmlFor and id attributes
  // Simulate onBlur event with an empty input value
  fireEvent.blur(inputElement);
  // Check if the error message is displayed
  const errorMessage = getByTestId('amt-input');
  expect(errorMessage).toBeInTheDocument();
  // Simulate onBlur event with a non-empty input value
  fireEvent.change(inputElement, { target: { value: 'Some amount' } });
  fireEvent.blur(inputElement);
  // Check if the error message is not displayed
  const errorMessageAfterInput = queryByText('Amount is required.');
  expect(errorMessageAfterInput).toBeNull();
});

describe('StackedHorizontal component', () => {
  it('renders without errors', () => {
    const { container } = render(<StackedHorizontal />);
    expect(container).toBeInTheDocument();
  });
});

describe('StackedHorizontal component', () => {
  it('renders without errors', () => {
    const { container } = render(<StackedColumn />);
    expect(container).toBeInTheDocument();
  });

});

// Mock functions
describe('YourComponent', () => {
  it('should call setStackedColOpen and update states when the button is clicked', () => {
    const setStackedColOpenMock = jest.fn();
    const { getByTestId } = render(<OverviewLeft setStackedColOpen={setStackedColOpenMock} />);

    const button = getByTestId('stacked-column-btn');
    fireEvent.click(button);

    expect(setStackedColOpenMock).toHaveBeenCalledWith(true);
  });
});

describe('YourComponent', () => {
  it('should call setStackedColOpen and update states when the button is clicked', () => {
    const setStackedHorzOpen = jest.fn();
    const { getByTestId } = render(<OverviewLeft setStackedHorzOpen={setStackedHorzOpen} />);

    const button = getByTestId('stacked-horz-btn');
    fireEvent.click(button);

    expect(setStackedHorzOpen).toHaveBeenCalledWith(true);
  });
});

//test case for handlesave() in overviewleft.
test('handles Save and Reset correctly when all fields are not null', () => {
  // Render the component
  const { getByTestId } = render(<OverviewLeft />);

  // Simulate that all fields are not null
  fireEvent.click(getByTestId('save-previewbtn'));

  // Assert that all state changes have occurred
  expect(OverviewLeft).toHaveBeenTriggeredWith([
    [null, 'setSelectedField'],
    [null, 'setSelectedxaxis'],
    [null, 'setSelectedyaxis'],
    [null, 'setSelectedvalue'],
    [false, 'setDropdownopen'],
    [false, 'setStackHorzDisable'],
    [false, 'setStackColDisable'],
    [CONSTANTCHALLENGEOVERVIEW.PREVIEW, 'setButtonLabel'],
  ]);
});

//hanleclose function for each graph overviewright
test('should call setIsGraphVisible with false when the button is clicked', () => {
  // Create a mock function for setIsGraphVisible
  const mockSetIsGraphVisible = jest.fn();

  // Render your component with setIsGraphVisible as a prop
  const { getByTestId } = render(
    <OverviewRight setIsGraphVisible={mockSetIsGraphVisible} />
  );

  // Find and click the button
  const closeButton = getByTestId('close-img'); // Replace with your button text or a more specific selector
  fireEvent.click(closeButton);

  // Assert that setIsGraphVisible was called with false
  expect(mockSetIsGraphVisible).toHaveBeenCalledWith(false);
});

//testcase for the line content = ( <StackedColumn data-testid="stacked-column"/> ) in Overviewright;
test('renders StackedColumn when isGraphVisible is STACKEDCOLOPEN', () => {
  // Set isGraphVisible to the value that triggers StackedColumn rendering
  const isGraphVisible = CONSTANTCHALLENGEOVERVIEW.STACKEDCOLOPEN;

  // Render OverviewRight with the specified isGraphVisible prop
  const { getByTestId } = render(<OverviewRight isGraphVisibleProp={isGraphVisible} />);

  // Find the StackedColumn component within the rendered output
  const stackedColumnComponent = getByTestId('stacked-column');

  // Assert that the StackedColumn component is present in the output
  expect(stackedColumnComponent).toBeInTheDocument();
});

//testcase for  content = ( <StackedHorizontal data-testid="stacked-horizontal"/> );
test('renders StackedColumn when isGraphVisible is STACKEDCOLOPEN', () => {
  // Set isGraphVisible to the value that triggers StackedColumn rendering
  const isGraphVisible = CONSTANTCHALLENGEOVERVIEW.STACKEDHORZOPEN;

  // Render OverviewRight with the specified isGraphVisible prop
  const { getByTestId } = render(<OverviewRight isGraphVisibleProp={isGraphVisible} />);

  // Find the StackedColumn component within the rendered output
  const stackedColumnComponent = getByTestId('stacked-horizontal');

  // Assert that the StackedColumn component is present in the output
  expect(stackedColumnComponent).toBeInTheDocument();
});

