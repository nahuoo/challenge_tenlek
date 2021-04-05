import React, { useState } from 'react'
import { Button, Card, MenuContainer } from './styledMenu'
import Link from 'next/link'


export const Menu = () => {
  const [toogle, setToogle] = useState(false)

 
  const handleButton = () => {
    setToogle(true)
  }

  return (
    <MenuContainer toogle={toogle} >
      <Card>
        <Link href="/info" style={{ textDecoration: 'none' }} onClick={handleButton}>
          <Button>Opción 1</Button>
        </Link>
      </Card>
      <Card>
        <Link href="/images" style={{ textDecoration: 'none' }} onClick={handleButton}>
          <Button>Opción 2</Button>
        </Link>
      </Card>
    </MenuContainer>
  )
}
