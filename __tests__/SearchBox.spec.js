import React from 'react'
import { shallow, mount, render } from 'enzyme'

import SearchBox from '../app/renderer/components/SearchBox'

describe('Component: SearchBox', () => {
  xit('should render without crashing', () => {
    shallow(<SearchBox />)
  })

  xit('should render one TextField component', () => {
    const wrapper = shallow(<SearchBox />)
    expect(wrapper.find('TextField').length).toBe(1)
  })
})
