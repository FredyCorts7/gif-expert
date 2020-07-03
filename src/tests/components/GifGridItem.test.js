import React from 'react';
import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';
import '@testing-library/jest-dom';

describe('Testing to <GifGridItem/>', () => {
  test('should be the same component', () => {
    const title = 'Naruto';
    const url = 'naruto.jpg';
    const wrapper = shallow(<GifGridItem title={title} url={url} />);

    expect(wrapper).toMatchSnapshot();
  });
});
