import React from 'react';
import { render,screen,fireEvent } from '@testing-library/react';
import Createnewchallange from '../../src/components/Createnewchallange/Createnewchallange';
import { toast } from 'react-toastify';

jest.mock('react-toastify'); 

describe("Button Functionality and Styling Verification", () => {
  const makeClear = jest.fn(() => {
    setName("");
    setDesc("");
    setKpi("");
    setEligibility("");
    setReqdata("");
    setStartDate("");
    setEndDate("");
    setAwards("");
  });
});

test('renders the component', () => {
  render(<Createnewchallange/>);
});

test('savedraft function should hide the component and display a success toast', () => {
  const { getByText } = render(
    <div className="submitclearbtn">
      <button className="btnclssone" onClick={makeClear} autoFocus>
        Clear
      </button>
      <button className="btnclsstwo" onClick={(e) => submitchallengeDetails(e)}>
        Submit
      </button>
    </div>
  );
  const submitButton = getByText("Submit");

  // Steps
  fireEvent.click(submitButton);

  // Expected Outcome
  expect(submitchallengeDetails).toHaveBeenCalledTimes(1);
  // Verify the desired outcome based on your application logic
});

describe('submit', () => {
  const submit = (e, setSubmitError) => {
    if (e.target.value === '') {
      setSubmitError(true);
    } else {
      setSubmitError(false);
    }
  };

  it('should set submitError to true when e.target.value is empty', () => {
    const setSubmitError = jest.fn();

    const event = { target: { value: '' } };

    submit(event, setSubmitError);

    expect(setSubmitError).toHaveBeenCalledWith(true);
  });

  it('should set submitError to false when e.target.value is not empty', () => {
    const setSubmitError = jest.fn();

    const event = { target: { value: '2023-06-30' } };

    submit(event, setSubmitError);

    expect(setSubmitError).toHaveBeenCalledWith(false);
  });
});

describe('submit', () => {
  const submit = (e, setSubmitError) => {
    if (e.target.value === '') {
      setSubmitError(true);
    } else {
      setSubmitError(false);
    }
  };

  it('should set submitError to true when e.target.value is empty', () => {
    const setSubmitError = jest.fn();

    const event = { target: { value: '' } };

    submit(event, setSubmitError);

    expect(setSubmitError).toHaveBeenCalledWith(true);
  });
});

//write test case to check whether the modal is opening or not for the button 'Create New Challenge' in the 'Challenges' page.



  const submitchallengeDetails = jest.fn((event) => {
    event.preventDefault();
    if(awardreqerror || reqdatareqerror || fnamereqError || desceqError || kpireqError || eligibilityreqError
      || awardshandelError || reqhandelError || eligibilityhandelError || deschandleError || kpihandleError 
      || fnamehandleError || reqdEndDateError || reqdStartDateerror)
    {
        event.preventDefault();

    }
    else
    {
    alert('data submitted successfully');
    setModalIsOpen(false);
    }
  });

  it("Test Case 1: Clicking on the 'Clear' button", () => {
    // Inputs
    const { getByText } = render(
      <div className="submitclearbtn">
        <button className="btnclssone" onClick={makeClear} autoFocus>
          Clear
        </button>
        <button className="btnclsstwo" onClick={(e) => submitchallengeDetails(e)}>
          Submit
        </button>
      </div>
    );
    const clearButton = getByText("Clear");

    // Steps
    fireEvent.click(clearButton);

    // Expected Outcome
    expect(makeClear).toHaveBeenCalledTimes(1);
    // Verify the desired outcome based on your application logic
  });

describe('reqdStartDate', () => {
  const reqdStartDate = (e, setReqdStartDateerror) => {
    if (e.target.value === '') {
      setReqdStartDateerror(true);
    } else {
      setReqdStartDateerror(false);
    }
  };

  it('should set reqdStartDateerror to true when e.target.value is empty', () => {
    const setReqdStartDateerror = jest.fn();

    const event = { target: { value: '' } };

    reqdStartDate(event, setReqdStartDateerror);

    expect(setReqdStartDateerror).toHaveBeenCalledWith(true);
  });

  it('should set reqdStartDateerror to false when e.target.value is not empty', () => {
    const setReqdStartDateerror = jest.fn();

    const event = { target: { value: '2023-06-30' } };

    reqdStartDate(event, setReqdStartDateerror);

    expect(setReqdStartDateerror).toHaveBeenCalledWith(false);
  });
});

test('renders the component', () => {
    render(<Createnewchallange/>);
  });
test('savedraft function should hide the component and display a success toast', () => {
    // Step 1: Render the MainComponent
    render(<Createnewchallange/>);
  
    // Step 2: Find the component and check if it's initially visible
    const mainComponent = screen.getByTestId('entirebtn'); // Replace 'data-testid' with an appropriate test id for your component
    expect(mainComponent).toBeVisible();
  
    // Step 3: Trigger the savedraft function
    fireEvent.click(screen.getByTestId('savedrafttest')); // Replace 'Save Draft' with the text of the button that triggers the savedraft function
  
    // Step 4: Check if the component is no longer visible
    expect(mainComponent).not.toBeVisible();
  
    // Step 5: Check if the toast.success function was called with the correct parameters
    expect(toast.success).toHaveBeenCalledWith("Success - Sustainability Challenge is saved successfully.", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      theme: "colored",
      background: 'yellow'
    });
  });

  test('should display error message on blur if sale is empty', () => {
    const { getByTestId, queryByText } = render(<Createnewchallange />);
    const inputElement = getByTestId('challengename'); // Assuming you have a label associated with the input element using htmlFor and id attributes
    // Simulate onBlur event with an empty input value
    fireEvent.blur(inputElement);
    // Check if the error message is displayed
    const errorMessage = getByTestId('challengename');
    expect(errorMessage).toBeInTheDocument();
    // Simulate onBlur event with a non-empty input value
    fireEvent.change(inputElement, { target: { value: 'Some name' } });
    fireEvent.blur(inputElement);
    // Check if the error message is not displayed
    const errorMessageAfterInput = queryByText('Please enter the Challenge Name');
    expect(errorMessageAfterInput).toBeNull();
  });

  describe('YourComponent', () => {
    it('should call the setVisible function when the button is clicked', () => {
      // Mock the setVisible function
      const mockSetVisible = jest.fn();
  
      // Render the component
      const { getByText } = render(<Createnewchallange setVisible={mockSetVisible} />);
  
      // Click on the button
      fireEvent.click(getByText('Create Challenge'));
  
      // Check if the setVisible function is called
      expect(mockSetVisible).toHaveBeenCalledTimes(1);
    });
  
    it('should display the "Create Challenge" text on the button', () => {
      // Render the component
      const { getByText } = render(<Createnewchallange />);
  
      // Check if the "Create Challenge" text is displayed on the button
      expect(getByText('Create Challenge')).toBeVisible();
    });
  
    it('should show the dialog when the button is clicked', () => {
      // Render the component
      const { getByText, queryByText } = render(<Createnewchallange />);
  
      // Check if the dialog is initially hidden
      expect(queryByText('Create New Challenge')).toBeNull();
  
      // Click on the button to show the dialog
      fireEvent.click(getByText('Create Challenge'));
  
      // Check if the dialog is now visible
      expect(queryByText('Create New Challenge')).toBeVisible();
    });
  
    it('should hide the dialog when the close button is clicked', () => {
      // Render the component
      const { getByText, queryByText, getByAltText } = render(<Createnewchallange />);
  
      // Click on the button to show the dialog
      fireEvent.click(getByText('Create Challenge'));
  
      // Check if the dialog is now visible
      expect(queryByText('Create New Challenge')).toBeVisible();
  
      // Find the close button (assuming it has "Close" text or an alt attribute set to "Close")
      const closeButton = getByAltText('Close');
  
      // Click the close button to hide the dialog
      fireEvent.click(closeButton);
  
      // Check if the dialog is hidden after clicking the close button
      expect(queryByText('Create New Challenge')).toBeNull();
    });
  });
  
  
  
  