import React, { Component } from 'react'

import Container from './Container'
import Columns from './Columns'
import Column from './Column'
import NavBar from './NavBar'
//form
import Search from './Search'
import Input from './Input'
import Select from './Select'
import Checkbox from './Checkbox'
import Radio from './Radio'
import Textarea from './Textarea'
import Button from './Button'

export default class App extends Component {
  render () {
    return (
      <Container>
        <Columns>
          <Column>
            <NavBar>
              <NavBar position="left">
                <Search name="serach"
                        placeholder="buscar"
                        handleChange={() => {}}
                        handleSubmit={() => {}}/>
              </NavBar>
            </NavBar>
          </Column>
          <Column>
            <h1>Main Page</h1>
            <Button is-primary>button</Button>
          </Column>
          <Column>
            <form>
              <Input name="name" handleChange={() => {}} />
              <Select name="city" data={[{name: 'test'}]} />
              <Checkbox name="agree" description="agree terms and conditions" />
              <Textarea name="description" />
              <p className="control">
                <Radio name="yes_or_no" value="yes"/>
                <Radio name="yes_or_no" value="no"/>
              </p>
              <p className="control">
                <Button is-primary type="button">Send</Button>
                <Button type="button">Cancel</Button>
              </p>
            </form>
          </Column>
        </Columns>
      </Container>
    )
  }
}
