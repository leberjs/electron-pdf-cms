import React, { Component } from 'react'

import CategorySelect from '../components/CategorySelect'
import SearchBox from '../components/SearchBox'

class App extends Component {
  render() {
    return (
      <div className="layout">
        <CategorySelect />
        <SearchBox />
        <hr />
      </div>
    )
  }
}
export default App