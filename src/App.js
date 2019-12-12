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
        title="Bill Murray"
        secondaryText="This is his card"
        thumbnail="https://www.fillmurray.com/128/128"
        cover="https://www.fillmurray.com/550/300" />

      <Card
        title="Second card"
        secondaryText="Not about bill murray">
        <p>Something something something</p>
      </Card>

      <Card>
        <h1>This card doesn't have a title!</h1>
        <Button onClick={() => window.alert('Hej')}>It has a button</Button>
      </Card>
    </Container>
  )
}
