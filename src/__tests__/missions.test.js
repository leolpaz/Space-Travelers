import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import * as reactRedux from 'react-redux';
import Missions from '../Missions';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe('Test mission component', () => {
  const useSelectorMock = reactRedux.useSelector;
  const useDispatchMock = reactRedux.useDispatch;
  const mockStore = {
    missionsReducer: [{
      missionId: '1',
      missionName: 'Mock',
      description: 'Lorem ipsum dolor sit.',
    }],
  };
  beforeEach(() => {
    useDispatchMock.mockImplementation(() => () => {});
    useSelectorMock.mockImplementation((selector) => selector(mockStore));
    render(<Missions />);
  });
  afterEach(() => {
    useDispatchMock.mockClear();
    useSelectorMock.mockClear();
  });
  test('show list', () => {
    expect(screen.getByTestId('list-container')).toBeInTheDocument();
  });
  test('show if mission is on the page', () => {
    expect(screen.getByText('Lorem ipsum dolor sit.')).toBeInTheDocument();
  });
  test('check if Join Mission button is on the page', () => {
    const button = screen.getByText('Join Mission');
    expect(button).toBeInTheDocument();
  });
  test('check if button changes the text to Leave Mission', () => {
    mockStore.missionsReducer = [{ ...mockStore.missionsReducer[0], reserved: true }];
    render(<Missions />);
    const button = screen.getByText('Leave Mission');
    expect(button).toBeInTheDocument();
  });
});
