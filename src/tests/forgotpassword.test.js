import React from 'react';
import ForgotPassword from '../components/ForgotPassword/ForgotPassword';
import { render,fireEvent,screen,waitFor } from '@testing-library/react';
import { handleResendOTP} from '../components/ForgotPassword/ForgotPassword.jsx';
import axios from 'axios';
import {router} from 'react-router-dom';
jest.mock('axios', () => 'axios');
test('renders the componentall', () => {
  render(<ForgotPassword />);
});


jest.mock('axios'); 

describe('MyComponent', () => {
  it('handles resend OTP', async () => {
    const { getByText } = render(<handleResendOTP />);

    const resendButton = screen.getByText('Resend OTP');

    axios.post.mockResolvedValue({});
    
    fireEvent.click(resendButton);

    await waitFor(() => expect(axios.post).toHaveBeenCalled());
    
    const successMessage = screen.getByText('OTP sent again');
    expect(successMessage.textContent).toBe('OTP sent again');
  });

});

describe('ForgotPassword', () => {
  it('displays error message if Email ID is not entered', async () => {
    render(<ForgotPassword />);
    const NextButton = screen.getByText('Next');
    fireEvent.click(NextButton);
    await waitFor(() => {
      expect(screen.getByText('Please enter the Email Id (required**)')).toBeInTheDocument();
    });
  });
  it('displays error message if Email ID is invalid', async () => {
    render(<ForgotPassword />);
    const NextButton = screen.getByText('Next');
    fireEvent.click(NextButton);
    await waitFor(() => {
      expect(screen.getByText('Email Id is not Valid')).toBeInTheDocument();
    });
  });
  //

describe('MyComponent', () => {
  it('handles successful POST request', async () => {
    axios.post.mockResolvedValue({ data: { message: 'Success' } });

    const { getByText, getByTestId } = render(<ForgotPassword />);
    const submitButton = screen.getByText('Next');
    fireEvent.click(submitButton);

 
    await waitFor(() => expect(axios.post).toHaveBeenCalled());


    const successMessage = screen.getByTestId('');
    expect(successMessage.textContent).toBe('');
  });

  it('handles failed POST request', async () => {
    axios.post.mockRejectedValue({ message: 'Error' });

    const { getByText, getByTestId } = render(<ForgotPassword />);
    const submitButton = screen.getByText('Next');
    fireEvent.click(submitButton);


    await waitFor(() => expect(axios.post).toHaveBeenCalled());


    const errorMessage = screen.getByTestId('');
    expect(errorMessage.textContent).toBe('');
  });
});

  //
  it ('displays error message if Email ID is noy correct', async () => {
    render(<ForgotPassword />);
    const NextButton = screen.getAllByRole('employeeMailId');
    fireEvent.change(NextButton, { target: { value: 'Password' } });
    fireEvent.click(NextButton);
    await waitFor(() => {
      expect(screen.getByText('Please enter correct Email ID')).toBeInTheDocument();
    });
  });

  it('displays error message if OTP is not entered', async () => {
    render(<ForgotPassword />);
    const DoneButton = screen.getByText('Done');
    fireEvent.click(DoneButton);
    await waitFor(() => {
      expect(screen.getByText('Invalid OTP! Try again')).toBeInTheDocument();
    });
  });
  it('displays error message if six digit OTP is not entered', async () => {
    render(<ForgotPassword />);
    const otpInputs = screen.getAllByRole('isOtpForget');
    otpInputs.forEach((input, index) => {
      fireEvent.change(input, { target: { value: '12345' } });
    });
    
    const verifyButton = screen.getByText('Done');
    fireEvent.click(verifyButton);

    await waitFor(() => {
      expect(screen.getByText('Invalid OTP! Try again')).toBeInTheDocument();
    });
  });
  it('displays error message if Password is not entered', async () => {
    render(<ForgotPassword />);
    const DoneButton = screen.getByText('Change Password');
    fireEvent.click(DoneButton);
    await waitFor(() => {
      expect(screen.getByText('Please enter eight digit new Password (required**)')).toBeInTheDocument();
      
    });
    await waitFor(() => {
      expect(screen.getByText('Please re-enter the password (required**)')).toBeInTheDocument();
    });
  });
  it('displays error message if rePassword is not entered', async () => {
    render(<ForgotPassword />);
    const DoneButton = screen.getByText('Change Password');
    fireEvent.click(DoneButton);
    await waitFor(() => {
      expect(screen.getByText('Please re-enter the password (required**)')).toBeInTheDocument();
    });
  });
  it('displays error message if Password and rePassword do not match', async () => {
    render(<ForgotPassword />);
    const passwordInput = screen.getAllByRole('text');
    fireEvent.change(passwordInput, { target: { value: 'Password123' } });
    const rePasswordInput = screen.getAllByRole('reText');
    fireEvent.change(rePasswordInput, { target: { value: 'Password456' } });
    const DoneButton = screen.getByText('Change Password');
    fireEvent.click(DoneButton);
    await waitFor(() => {
      expect(screen.getByText('Password does not match')).toBeInTheDocument();
    }
    );
  });

  it('displays error message if Password is 8 charracter or not', async () => {
    render(<ForgotPassword />);
    const passwordInput = screen.getAllByRole('text');
    fireEvent.change(passwordInput, { target: { value: 'Passwor' } });
    expect(screen.getByText('Password should be at least 8 characters long')).toBeInTheDocument();
    });
   it ('displays error message if Password is not alphanumeric', async () => {
    render(<ForgotPassword />);
    const passwordInput = screen.getAllByRole('text');
    fireEvent.change(passwordInput, { target: { value: 'Password@' } });
    expect(screen.getByText('Password must contain at least one special character (@,#), 1 uppercase letter, 1 lowercase letter, and 1 number.')).toBeInTheDocument();
    });
    it('displays error message if Password is 8 charracter', async () => {
      render(<ForgotPassword />);
      const passwordInput = screen.getAllByRole('text');
      fireEvent.change(passwordInput, { target: { value: 'Password' } });
      expect(screen.getByText('Password should be at least 8 characters long')).toBeInTheDocument();
      });
      
        it('displays error message for password length less than 8 characters', () => {
          const { getAllByRole } = render(<ForgotPassword />);
          const passwordInput = screen.getAllByRole('text');
      
          fireEvent.change(passwordInput, { target: { value: 'abc123' } });
      
          const errorText = screen.getByTestId('error-message');
          expect(errorText.textContent).toBe('Password should be at least 8 characters long');
        });
      
        it('displays error message for invalid password format', () => {
          const { getAllByRole } = render(<ForgotPassword />);
          const passwordInput = screen.getAllByRole('text');
      
          fireEvent.change(passwordInput, { target: { value: 'password' } });
      
          const errorText = screen.getByTestId('error-message');
          expect(errorText.textContent).toBe('Password must contain at least one special character (@,#), 1 uppercase letter, 1 lowercase letter, and 1 number.');
        });
      
        it('clears error message and updates password on valid input', () => {
          const { getAllByRole } = render(<ForgotPassword />);
          const passwordInput = screen.getAllByRole('text');
      
          fireEvent.change(passwordInput, { target: { value: 'P@ssw0rd' } });
      
          const errorText = screen.getByText('Password must contain at least one special character (@,#), 1 uppercase letter, 1 lowercase letter, and 1 number.');
          expect(errorText.textContent).toBe(''); 
      

        });
      });







