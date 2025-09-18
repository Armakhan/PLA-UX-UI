import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import OtpPage from '../components/OtpPage/OtpPage.jsx';
import axios from 'axios';
jest.mock('axios', () => 'axios');
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));
test('renders the component', () => {
  render(<OtpPage/>);
});
describe('OtpPage', () => {
  it('displays error message if OTP is not entered', async () => {
    render(<OtpPage/>); 
    const verifyButton = screen.getByText('Verify');
    fireEvent.click(verifyButton);
    await waitFor(() => {
      expect(screen.getByText('Please enter the OTP')).toBeInTheDocument();
    });
  });
  it('displays success message after successful OTP verification', async () => {
    // Mock the axios.post function to simulate a successful response
    const axiosMock = jest.spyOn(axios, 'post');
    axiosMock.mockResolvedValue({ data: { statusCode: 200 } });
    render(<OtpPage/>);
    const otpInputs = screen.getAllByRole('isOtp');
    otpInputs.forEach((input, index) => {
      fireEvent.change(input, { target: { value: '123456' } });
    });
    const verifyButton = screen.getByText('Verify');
    fireEvent.click(verifyButton);
    await waitFor(() => {
      expect(screen.getByText('Verification successful!')).toBeInTheDocument();
    });
    axiosMock.mockRestore(); // Restore axios.post to its original implementation
  });
  it('displays error message if OTP is invalid', async () => {
    // Mock the axios.post function to simulate an unsuccessful response
    const axiosMock = jest.spyOn(axios, 'post');
    axiosMock.mockResolvedValue({ data: { statusCode: 401 } });
    render(<OtpPage/>);
    const otpInputs = screen.getAllByRole('isOtp');
    otpInputs.forEach((input, index) => {
      fireEvent.change(input, { target: { value: '12345' } });
    });
    const verifyButton = screen.getByText('Verify');
    fireEvent.click(verifyButton);
    await waitFor(() => {
      expect(screen.getByText('Invalid OTP! Try again')).toBeInTheDocument();
    });
    axiosMock.mockRestore(); // Restore axios.post to its original implementation
  });
  it('displays error message if OTP is invalided', async () => {
    // Mock the axios.post function to simulate an unsuccessful response
    const axiosMock = jest.spyOn(axios, 'post');
    axiosMock.mockResolvedValue({ data: { statusCode: 401 } });
    render(<OtpPage/>); 
    const otpInputs = screen.getAllByRole('isOtp');
    otpInputs.forEach((input, index) => {
      fireEvent.change(input, { target: { value: '17845' } });
    });   
    const verifyButton = screen.getByText('Verify');
    fireEvent.click(verifyButton);
    await waitFor(() => {
      expect(screen.getByText('Invalid OTP! Try again')).toBeInTheDocument();
    });
    axiosMock.mockRestore(); // Restore axios.post to its original implementation
  });
  it('displays resend success message after clicking Resend', async () => {
    // Mock the axios.post function to simulate a successful response
    const axiosMock = jest.spyOn(axios, 'post');
    axiosMock.mockResolvedValue({ data: { statusCode: 200 } });
    render(<OtpPage/>); 
    const resendButton = screen.getByText('Resend OTP');
    fireEvent.click(resendButton);
    await waitFor(() => {
      expect(screen.getByText('OTP sent again')).toBeInTheDocument();
    });
    axiosMock.mockRestore(); // Restore axios.post to its original implementation
  });
});









