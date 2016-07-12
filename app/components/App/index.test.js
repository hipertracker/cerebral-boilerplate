// eslint-disable-next-line
import React from 'react'
import {shallow} from 'enzyme'
import App from './index'

describe('test', () => {
  it('<App/> exist and contains <div/>', () => {
    const wrapper = shallow(<App/>)
    expect(wrapper.is('div')).to.equal(true)
  })

  it('works again', () => {
    expect('hi').to.equal('hi')
  })
})
