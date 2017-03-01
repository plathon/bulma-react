import React, { Component } from 'react'

import Container from './Container'
import Section from './Section'
import Columns from './Columns'
import Column from './Column'
import Title from './Title'
import Subtitle from './Subtitle'

import Button from './Button'
import Notification from './Notification'
import Tile from './Tile'

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

          <Title>Tiles</Title>
          <Tile is-ancestor>
            <Tile is-4 is-vertical is-parent>
              <Tile is-child box>
                <p className="title">One</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
              </Tile>
              <Tile is-child box>
                <p className="title">Two</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
              </Tile>
            </Tile>
            <Tile is-parent>
              <Tile is-child box>
                <p className="title">Three</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.</p>
                <p>Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. Sed eget varius ligula, at volutpat tortor.</p>
                <p>Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.</p>
              </Tile>
            </Tile>
          </Tile>
        </Container>
      </Section>
    )
  }
}
