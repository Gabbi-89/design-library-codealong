import React from 'react'
import styled from 'styled-components/macro'

const Container = styled.div`
  box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 
     1px 1px 0px rgba(0,0,0,0.14), 
     0px 1px 3px 0px rgba(0,0,0,0.12);
  border-radius: 6px;
  background: #fff;
  margin-bottom: 20px;
`

const Content = styled.div`
  padding: 20px;
`

const TitleBar = styled.div`
  display: flex;
  align-items: center;
`

const Title = styled.h1`
  margin: 0;
  font-size: 24px;
`

const Secondary = styled.p`
  margin: 0;
  color: #6b6a6a;
`

const CoverImage = styled.img`
  border-radius: 6px 6px 0 0;
  width: 100%;
`

const Thumbnail = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  margin-right: 10px;
`

export const Card = ({ title, secondaryText, cover, children, thumbnail, className }) => (
  <Container className={className}>
    {cover && <CoverImage src={cover} />}
    <Content>
      <TitleBar>
        {thumbnail && <Thumbnail backgroundImage={thumbnail} />}
        <div>
          {title && <Title>{title}</Title>}
          {secondaryText && <Secondary>{secondaryText}</Secondary>}
        </div>
      </TitleBar>
      {children}
    </Content>
  </Container>
)
