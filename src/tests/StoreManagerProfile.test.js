import React from 'react';
import { render,fireEvent } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import Profile from '../../src/components/StoreManagerProfile/Profile.jsx';
import ProfileLeft from '../components/StoreManagerProfile/ProfileLeft.jsx';
import ProfileRight from '../components/StoreManagerProfile/ProfileRight.jsx';
import ProfileMyChallenges from '../components/StoreManagerProfile/ProfileMyChallenges.jsx';
import ProfileMySavings from '../components/StoreManagerProfile/ProfileMySavings.jsx';
import { MemoryRouter } from 'react-router-dom';
import MyChallengeCard from '../components/StoreManagerHome/MyChallengeCard.jsx';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
  }));

  jest.mock('axios', () => 'axios');
  
test('renders the component', () => {
    render(<Profile/>);
});

test('renders the component', () => {
    render(<ProfileLeft/>);
});

test('renders the component', () => {
    render(<ProfileRight/>);
});

test('renders the component', () => {
    render(<ProfileMyChallenges/>);
});

test('renders the component', () => {
    render(<ProfileMySavings/>);
});

describe('ProfileLeft API Integration', () => {
  it('fetches and displays data from API', async () => {
    const mockData = { /* Mocked JSON data */ };
    const mockResponse = {
      json: jest.fn().mockResolvedValue(mockData),
    };
    global.fetch = jest.fn().mockResolvedValue(mockResponse);

    const { getByTestId } = render(<ProfileLeft />);

    // Assuming your component uses useEffect to fetch data
    await waitFor(() => getByTestId('data-loaded'));

    // Assertions
    expect(global.fetch).toHaveBeenCalledWith('your-api-url');
    expect(mockResponse.json).toHaveBeenCalled();
    expect(getByTestId('data-element')).toHaveTextContent('Expected Content'); // Adjust based on your component's rendering logic
  });
});

describe('ProfileMySavings API Integration', () => {
    it('fetches and displays data from API', async () => {
      const mockData = { /* Mocked JSON data */ };
      const mockResponse = {
        json: jest.fn().mockResolvedValue(mockData),
      };
      global.fetch = jest.fn().mockResolvedValue(mockResponse);
  
      const { getByTestId } = render(<ProfileMySavings/>);
  
      // Assuming your component uses useEffect to fetch data
      await waitFor(() => getByTestId('data-loaded'));
  
      // Assertions
      expect(global.fetch).toHaveBeenCalledWith('your-api-url');
      expect(mockResponse.json).toHaveBeenCalled();
      expect(getByTestId('data-element')).toHaveTextContent('Expected Content'); // Adjust based on your component's rendering logic
    });
  });


  describe('ProfileMyChallenges API Integration', () => {
    it('fetches and displays data from API', async () => {
      const mockData = { /* Mocked JSON data */ };
      const mockResponse = {
        json: jest.fn().mockResolvedValue(mockData),
      };
      global.fetch = jest.fn().mockResolvedValue(mockResponse);
  
      const { getByTestId } = render(<ProfileMyChallenges/>);
      await waitFor(() => getByTestId('data-loaded'));
  
      // Assertions
      expect(global.fetch).toHaveBeenCalledWith('your-api-url');
      expect(mockResponse.json).toHaveBeenCalled();
      expect(getByTestId('data-element')).toHaveTextContent('Expected Content'); // Adjust based on your component's rendering logic
    });
  });


  describe('ProfileRight API Integration', () => {
    it('fetches and displays data from API', async () => {
      const mockData = { /* Mocked JSON data */ };
      const mockResponse = {
        json: jest.fn().mockResolvedValue(mockData),
      };
      global.fetch = jest.fn().mockResolvedValue(mockResponse);
  
      const { getByTestId } = render(<ProfileRight/>);
  
      // Assuming your component uses useEffect to fetch data
      await waitFor(() => getByTestId('data-loaded'));
  
      // Assertions
      expect(global.fetch).toHaveBeenCalledWith('your-api-url');
      expect(mockResponse.json).toHaveBeenCalled();
      expect(getByTestId('data-element')).toHaveTextContent('Expected Content'); // Adjust based on your component's rendering logic
    });
  });