import React from 'react'
import expect from 'expect'
import { shallow } from 'enzyme'

import Button from '../src/components/Button'

describe('Button', () => {

  it('should display default button', () => {
    const renderedComponent = shallow(<Button>button</Button>)
    expect(renderedComponent.html()).toEqual('<a class="button">button</a>');
  })

})
