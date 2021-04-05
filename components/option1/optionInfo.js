import React, { useContext } from 'react'
import { Background  } from '../../styles/styledBackground'
import { apiContext } from '../../context/apiContext'
import { Card } from './styledInfo'

export const OptionInfo = () => {
  const { apiData } = useContext(apiContext)

  return (
    <Background>
      <Card> Presion Directa: {apiData['Presion Directa']}</Card>
    </Background>
  )
}
