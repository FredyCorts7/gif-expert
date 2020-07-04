import React from 'react';
import { shallow } from 'enzyme';
import GifGrid from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import '@testing-library/jest-dom';
jest.mock('../../hooks/useFetchGifs');

describe('Testing to <GifGrid/>', () => {
  const category = 'Demon Slayer';

  test('should be the same component', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true
    });
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should show items when load images', () => {
    const gifs = [
      {
        id: '1f23yj2',
        title: 'Somethings',
        url: 'https://somethings.png'
      },
      {
        id: '758dg5sa',
        title: 'Anymore',
        url: 'https://anymore.png'
      }
    ];
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false
    });
    const wrapper = shallow(<GifGrid category={category} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').exists()).toBeFalsy();
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
  });
});
