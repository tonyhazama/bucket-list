import React, { ReactNode } from 'react'
import AppHeader from './app-header'
import Container from './container'

interface Props {
  children: ReactNode;
}

export default function Layout({children}: Props) {
  return (
    <>
      <AppHeader />
      <Container>
        {children}
      </Container>
    </>
  )
}
