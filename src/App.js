import React from 'react'
import styled from 'styled-components'
import { Card } from 'lib/Card'
import { Button } from 'lib/Button'

const Container = styled.main`
  margin: 50px;
`

const SmallerCard = styled(Card)`
  width: 400px;
`

export const App = () => {
  return (
    <Container>
      <SmallerCard
        title="Hello world"
        secondaryText="Secondary text goes here"
        thumbnail="https://www.fillmurray.com/128/128"
        cover="https://www.fillmurray.com/640/360" />

      <Card
        title="Second card"
        secondaryText="This one has body!">
        <p>Something something something</p>
      </Card>

      <Card>
        <h1>I only have body!</h1>
        <Button onClick={() => window.alert('Hej')}>Hello</Button>
      </Card>
    </Container>
  )
}
