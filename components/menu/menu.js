import React, { useContext } from 'react'
import { Button, Card, MenuContainer } from './styledMenu'
import { apiContext } from '../../context/apiContext'
import Link from 'next/link'

export const Menu = () => {
    const { toggleMenu, activeMenu } = useContext(apiContext)

  return (
    <MenuContainer toogle={activeMenu}>
      <Card>
        <Link href="/info" style={{ textDecoration: 'none' }}>
          <Button onClick={toggleMenu}>Opción 1</Button>
        </Link>
      </Card>
      <Card>
        <Link href="/images" style={{ textDecoration: 'none' }}>
          <Button onClick={toggleMenu}>Opción 2</Button>
        </Link>
      </Card>
    </MenuContainer>
  )
}
