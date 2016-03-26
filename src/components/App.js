import React, { Component } from 'react'

import Container from './Container'
import Section from './Section'
import Columns from './Columns'
import Column from './Column'
import Title from './Title'
import Subtitle from './Subtitle'

import Button from './Button'
import Notification from './Notification'

export default class App extends Component {
  render () {
    return (
      <Section>
        <Container>

          <Title is-1>React Bulma Components</Title>
          <Subtitle is-2>enjoy it! :)</Subtitle>

          <hr />

          <Title>Basic example</Title>

          <table className="table">
            <tbody>
              <tr>
                <Columns>
                  <td>
                    <Column is-half>
                      <Button>Enter</Button>
                    </Column>
                  </td>

                  <td>
                    <Column is-half>
                      {`<Button>Enter</Button>`}
                    </Column>
                  </td>
                </Columns>
              </tr>
              <tr>
                <Columns>
                  <td>
                    <Column is-half>
                      <Button is-primary>Enter</Button>
                    </Column>
                  </td>

                  <td>
                    <Column is-half>
                      {`<Button is-primary>Enter</Button>`}
                    </Column>
                  </td>
                </Columns>
              </tr>
              <tr>
                <Columns>
                  <td>
                    <Column is-half>
                      <Button is-info>Enter</Button>
                    </Column>
                  </td>

                  <td>
                    <Column is-half>
                      {`<Button is-info>Enter</Button>`}
                    </Column>
                  </td>
                </Columns>
              </tr>
              <tr>
                <Columns>
                  <td>
                    <Column is-half>
                      <Button is-success>Enter</Button>
                    </Column>
                  </td>

                  <td>
                    <Column is-half>
                      {`<Button is-success>Enter</Button>`}
                    </Column>
                  </td>
                </Columns>
              </tr>
              <tr>
                <Columns>
                  <td>
                    <Column is-half>
                      <Button is-warning>Enter</Button>
                    </Column>
                  </td>

                  <td>
                    <Column is-half>
                      {`<Button is-warning>Enter</Button>`}
                    </Column>
                  </td>
                </Columns>
              </tr>
              <tr>
                <Columns>
                  <td>
                    <Column is-half>
                      <Button is-danger>Enter</Button>
                    </Column>
                  </td>

                  <td>
                    <Column is-half>
                      {`<Button is-danger>Enter</Button>`}
                    </Column>
                  </td>
                </Columns>
              </tr>
            </tbody>
          </table>

          <Subtitle>Size</Subtitle>

          <table className="table">
            <tbody>
              <tr>
                <Columns>
                  <td>
                    <Column is-half>
                      <Button is-small>Enter</Button>
                    </Column>
                  </td>

                  <td>
                    <Column is-half>
                      {`<Button is-small>Enter</Button>`}
                    </Column>
                  </td>
                </Columns>
              </tr>
              <tr>
                <Columns>
                  <td>
                    <Column is-half>
                      <Button is-medium>Enter</Button>
                    </Column>
                  </td>

                  <td>
                    <Column is-half>
                      {`<Button is-medium>Enter</Button>`}
                    </Column>
                  </td>
                </Columns>
              </tr>
              <tr>
                <Columns>
                  <td>
                    <Column is-half>
                      <Button is-large>Enter</Button>
                    </Column>
                  </td>

                  <td>
                    <Column is-half>
                      {`<Button is-large>Enter</Button>`}
                    </Column>
                  </td>
                </Columns>
              </tr>
            </tbody>
          </table>

          <Subtitle>State</Subtitle>

          <table className="table">
            <tbody>
              <tr>
                <Columns>
                  <td>
                    <Column is-half>
                      <Button is-primary is-outlined>Enter</Button>
                    </Column>
                  </td>

                  <td>
                    <Column is-half>
                      {`<Button is-primary is-outlined>Enter</Button>`}
                    </Column>
                  </td>
                </Columns>
              </tr>
              <tr>
                <Columns>
                  <td>
                    <Column is-half>
                      <Button is-primary is-loading>Enter</Button>
                    </Column>
                  </td>

                  <td>
                    <Column is-half>
                      {`<Button is-primary is-loading>Enter</Button>`}
                    </Column>
                  </td>
                </Columns>
              </tr>
              <tr>
                <Columns>
                  <td>
                    <Column is-half>
                      <Button is-primary is-disabled>Enter</Button>
                    </Column>
                  </td>

                  <td>
                    <Column is-half>
                      {`<Button is-primary is-disabled>Enter</Button>`}
                    </Column>
                  </td>
                </Columns>
              </tr>
            </tbody>
          </table>

          <hr/>
            <Subtitle>
              The pattern is ever the same <strong>{`<component is-active/>`}</strong> or <strong>{`<component is-active={true}/>`}</strong> and to disable use <strong>{`<component is-active={false}/>`}</strong><br/><br/>
            <p className="is-text-centered">For more: <a href="http://bulma.io/documentation/overview/start/" target="_blank">see the official documentation</a></p>
            </Subtitle>
          <hr/>

        </Container>
      </Section>
    )
  }
}
