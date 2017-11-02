import React from 'react'
import { shallow, mount, render } from 'enzyme'
import { createShallow } from 'material-ui/test-utils'

import CategorySelect from '../renderer/components/CategorySelect'

describe('Component: CategorySelect', () => {
  let shallow

  beforeEach(() => {
    shallow = createShallow()
  })

  it('should render without crashing', () => {
    shallow(<CategorySelect />)
  })

  // it('should have an initial state "value" of zero', () => {
  //   const wrapper = shallow(<CategorySelect />)
  //   const select = wrapper.find('SelectField')

  //   expect(wrapper.state().value).toBe(0)
  //   expect(select.props().value).toBe(0)
  // })

  // it('should update state "value" when a select change is made', () => {
  //   const wrapper = mount(<CategorySelect />)
  //   const select = wrapper.find('SelectField')

  //   const onChange = jest.fn()

  //   select.simulate('change')
  //   expect(onChange).toHaveBeenCalled()
  // })
})