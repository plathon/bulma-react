import React, { Component } from 'react'

import Container from './Container'
import Columns from './Columns'
import Column from './Column'
import NavBar from './NavBar'
import Button from './Button'
import Search from './Search'

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
        </Columns>
      </Container>
    )
  }
}
