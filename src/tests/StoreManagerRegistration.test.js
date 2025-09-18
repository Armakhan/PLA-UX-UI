import React from 'react';
import StoreManagerRegistration from '../components/StoreManagerRegistration/StoreManagerRegistration';
import { render } from '@testing-library/react';


jest.mock('axios', () => 'axios');

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

test('renders the component', () => {
  render(<StoreManagerRegistration />);
});
