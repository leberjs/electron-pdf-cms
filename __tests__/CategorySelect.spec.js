import React from 'react'
import { shallow, mount, render } from 'enzyme'
import { unwrap, createShallow } from 'material-ui/test-utils'

import CategorySelect from '../app/renderer/components/CategorySelect'

describe('Component: CategorySelect', () => {
  //let shallow
  let categories = [
    { label: 'TEST' },
    { label: 'five' },
    { label: 'wordsandstuff' }
  ]

  let openResultsModal = jest.fn()

  // beforeEach(() => {
  //   shallow = createShallow({ dive: true })
  // })

  it('should render without crashing', () => {
    const wrapper = shallow(<CategorySelect />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should have no category selected when first rendered', () => {
    const wrapper = mount(<CategorySelect />)
    const categoryInput = wrapper.find('Autosuggest')

    expect(categoryInput.props().inputProps.value).toBe('')
    expect(wrapper).toMatchSnapshot()
  })

  it('should handle query input', () => {
    const naked = unwrap(CategorySelect)

    const spy = jest.spyOn(naked.prototype, 'handleQueryInput')
    const wrapper = mount(<CategorySelect categories={categories} />)
    const categoryInput = wrapper.find('input')

    categoryInput.simulate('change', { target: { value: 'test' } })
    expect(spy).toHaveBeenCalledTimes(1)
  })

  it('should update state "value" when a select change is made', () => {
    const naked = unwrap(CategorySelect)

    const spy = jest.spyOn(naked.prototype, 'handleQuerySelect')
    const wrapper = mount(<CategorySelect categories={categories} />)
    const categoryInput = wrapper.find('input')

    categoryInput.simulate('change', { target: { value: 'test' } })
    expect(wrapper.update().find('input').props().value).toBe('test')
  })
})
