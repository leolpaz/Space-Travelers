import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import * as reactRedux from 'react-redux';
import Rockets from '../Rockets';
import Rocket from '../Rocket';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe('Test Rockets component', () => {
  const useSelectorMock = reactRedux.useSelector;
  const useDispatchMock = reactRedux.useDispatch;
  const mockStore = {
    rocketsReducer: [
      {
        id: 1,
        rocketName: 'Rocket Test',
        description: 'Testing rockets',
        flickrImages: ['image-link'],
      },
    ],
  };
  beforeEach(() => {
    useDispatchMock.mockImplementation(() => () => {});
    useSelectorMock.mockImplementation((selector) => selector(mockStore));
  });
  afterEach(() => {
    useDispatchMock.mockClear();
    useSelectorMock.mockClear();
  });

  test('Create and Show list', () => {
    render(<Rockets />);
    expect(screen.getByTestId('list-container')).toBeInTheDocument();
  });
  test('Create a Rocket Component inside Rockets List', () => {
    const rocketData = useSelectorMock(
      (mockStore) => mockStore.rocketsReducer[0],
    );
    render(
      <Rocket
        key={rocketData.id}
        id={rocketData.id}
        rocketName={rocketData.rocketName}
        description={rocketData.description}
        flickrImages={rocketData.flickrImages[0]}
      />,
    );
    expect(screen.getByTestId('list-group-item')).toBeInTheDocument();
  });
  test('Check if button show Cancel Reservation when reserved its true', () => {
    mockStore.rocketsReducer = [
      { ...mockStore.rocketsReducer[0], reserved: true },
    ];
    render(<Rockets />);
    const reservedBtn = screen.getByText('Cancel Reservation');
    expect(reservedBtn).toBeInTheDocument();
  });
});
