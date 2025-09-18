import React from 'react';
import { render } from '@testing-library/react';
import MapContainer from '../components/MapView/MapView';
import { location } from '../components/MapView/locationJSON';

// Mocking the google-maps-react components and methods
jest.mock('google-maps-react', () => ({
  Map: ({ children }) => <div>{children}</div>,
  Marker: () => <div>Marker</div>,
  GoogleApiWrapper: () => (Component) => Component,
}));

describe('<MapContainer />', () => {

  it('renders without crashing', () => {
    const { getByText } = render(<MapContainer />);
    expect(getByText('Marker')).toBeInTheDocument();
  });

  it('renders correct number of markers based on locationJSON', () => {
    const { getAllByText } = render(<MapContainer />);
    const markers = getAllByText('Marker');
    expect(markers.length).toBe(location.marker.length);
  });

  // Additional tests can be added as needed...
});
