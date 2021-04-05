import React, { useContext } from 'react'
import { Background } from '../../styles/styledBackground'
import { apiContext } from '../../context/apiContext'
import { Card } from './styledInfo'
import { Menu } from '..//menu/menu'

export const OptionInfo = () => {
  const { apiData } = useContext(apiContext)

  return (
    <Background>
      <Menu />
      <Card>
        Presion Directa: <p>{apiData['Presion Directa']}</p>
      </Card>
    </Background>
  )
}
