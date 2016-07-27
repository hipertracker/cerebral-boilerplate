import React from 'react'
import {shallow} from 'enzyme'
import App from 'components/App'
import Navbar from 'components/App/Navbar'

describe('<App/>', () => {
  it('renders <Navbar/>', () => {
    const wrapper = shallow(<App/>)
    expect(wrapper.find(Navbar)).to.have.length.of(1)
  })
})
