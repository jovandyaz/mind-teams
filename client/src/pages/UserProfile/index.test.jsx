/* eslint-disable no-undef */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import UserProfile from './index';

describe('UserProfile', () => {
  test('renders the UserProfile component', () => {
    render(<UserProfile />);
    
    const nameElement = screen.getByText(/Name:/i);
    const emailElement = screen.getByText(/Email:/i);
    
    expect(nameElement).toBeInTheDocument();
    expect(emailElement).toBeInTheDocument();
  });
});