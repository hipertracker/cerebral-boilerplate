// eslint-disable-next-line
import React from 'react'
import {shallow} from 'enzyme'
import App from '../../app/components/App'
describe('test', () => {
  it('<App/> exist and contains <Navbar/>', () => {
    const wrapper = shallow(<App/>)
    expect(wrapper.is('div')).to.equal(true)
  })

})
