import React from 'react'
import { shallow, mount, render } from 'enzyme'

import App from '../containers/App'

describe('Component: App', () => {
  it('should render without crashing', () => {
    shallow(<App />)
  })

  it('should render one CategorySelect component', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('CategorySelect').length).toBe(1)
  })

  it('should render one SearchBox component', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('SearchBox').length).toBe(1)
  })
})