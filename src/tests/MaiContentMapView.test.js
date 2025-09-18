import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MainContent from '../components/EnrollNow/MainContent.jsx'
import { MemoryRouter as Router } from 'react-router-dom';

jest.mock('../components/MapView/MapView.jsx', () => () => <div>MapContainer Mock</div>);

describe('<MainContent />', () => {

    it('renders correctly', () => {
        const { getByText, getByTestId } = render(
            <Router>
                <MainContent />
            </Router>
        );
        expect(getByText('Map View')).toBeInTheDocument();
    });

    it('changes tabs correctly', () => {
        const { getByText, getByTestId } = render(
            <Router>
                <MainContent />
            </Router>
        );


        const tabs = getByTestId('tab-button');
        expect(tabs).toHaveAttribute('selectedIndex', '1');
    });

});
