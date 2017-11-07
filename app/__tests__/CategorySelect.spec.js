import React from 'react'
import { shallow, mount, render } from 'enzyme'
import { createShallow } from 'material-ui/test-utils'
import renderer from 'react-test-renderer'

import CategorySelect from '../renderer/components/CategorySelect'

describe('Component: CategorySelect', () => {
  let shallow

  beforeEach(() => {
    shallow = createShallow()
  })

  it('should render without crashing', () => {
    const wrapper = shallow(<CategorySelect />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should have no category selected when first rendered', () => {
    const wrapper = mount(<CategorySelect />)
    const categoryInput = wrapper.find('TextField')

    expect(categoryInput.props().value).toBe('')
    expect(wrapper).toMatchSnapshot()
  })

  // it('should update state "value" when a select change is made', () => {
  //   const wrapper = mount(<CategorySelect />)
  //   const select = wrapper.find('SelectField')

  //   const onChange = jest.fn()

  //   select.simulate('change')
  //   expect(onChange).toHaveBeenCalled()
  // })
})
