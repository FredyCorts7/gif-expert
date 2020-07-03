import React from 'react';
import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';
import '@testing-library/jest-dom';

describe('Testing to <GifGridItem/>', () => {
  const title = 'Naruto';
  const url = 'naruto.jpg';
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test('should be the same component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should has a paragraph with the title', () => {
    const paragraph = wrapper.find('p');

    expect(paragraph.text().trim()).toBe(title);
  });

  test('should has the image equal to url and alt of props', () => {
    const img = wrapper.find('img');
    const { src, alt } = img.props();

    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test('should has the same class', () => {
    const classNameExpected = 'animate__fadeIn';
    const div = wrapper.find('div');
    // const [, , classNameTest] = div.prop('className').split(' ');
    const classNameTest = div.prop('className').includes(classNameExpected);

    // expect(classNameTest).toBe(classNameExpected);
    expect(classNameTest).toBeTruthy();
  });
});
