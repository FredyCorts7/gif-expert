import React from 'react';
import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';
import '@testing-library/jest-dom';

describe('Testing to <AddCategory/>', () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test('should be the same component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should change the textField', () => {
    const valueExpected = 'Hola Kamado';

    const input = wrapper.find('input');
    input.simulate('change', { target: { value: valueExpected } });
    const valueTest = wrapper.find('p').text();

    expect(valueTest).toBe(valueExpected);
  });

  test('should not post information with submit', () => {
    wrapper.find('form').simulate('submit', { preventDefault() {} });

    expect(setCategories).not.toHaveBeenCalled();
  });

  test('should call setCategories and clean textField', () => {
    const expectedValue = 'One Piece';

    wrapper
      .find('input')
      .simulate('change', { target: { value: expectedValue } });
    wrapper.find('form').simulate('submit', { preventDefault() {} });
    const testValue = wrapper.find('input').prop('value');

    expect(setCategories).toBeCalledTimes(1);
    expect(setCategories).toBeCalledWith(expect.any(Function));
    expect(testValue).toBe('');
  });
});
