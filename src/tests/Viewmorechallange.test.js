import React from 'react';
import {create} from 'react-test-renderer';
import Viewmoredetails from '../components/Viewmorechallangedetails/Viewmoredetails';
import Viewmorecontent from '../components/Viewmorechallangedetails/Viewmorecontent';
import { useNavigate } from 'react-router-dom';



jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

test('renders the component', () => {
    create(<Viewmoredetails/>);
  });

test('renders the component', () => {
    create(<Viewmorecontent/>);
});

