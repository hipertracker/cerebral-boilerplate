import React from 'react'
import {shallow} from 'enzyme'
import App from 'components/App'
import Admin from 'components/App/Admin'
import Home from 'components/App/Home'
import Navbar from 'components/App/Navbar'

describe('<App/>', () => {
  it('renders <Home/> and <Navbar/>', () => {
    const wrapper = shallow(<App currentPage="home"/>)
    expect(wrapper.find(Home)).to.have.length.of(1)
    expect(wrapper.find(Navbar)).to.have.length.of(1)
  })
  
  it('renders <Admin/> and <Navbar/>', () => {
    const wrapper = shallow(<App currentPage="admin"/>)
    expect(wrapper.find(Admin)).to.have.length.of(1)
    expect(wrapper.find(Navbar)).to.have.length.of(1)
  })
})
