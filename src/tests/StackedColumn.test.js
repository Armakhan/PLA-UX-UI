import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { render,fireEvent } from '@testing-library/react';
import StackedColumn from "../components/GraphChartFolder/StackedColumn";

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
  }));
jest.mock('axios', () => 'axios');

test('renders the component', () => {
    render(<StackedColumn/>);
  });