import React, { useContext } from 'react'
import { Background, Wrapper } from '../../styles/styledBackground'
import { apiContext } from '../../context/apiContext'
import { Card } from './styledImages'

export const OptionImages = () => {
  const { apiData } = useContext(apiContext)

  return (
    <Background>
      <Wrapper>
        <Card>Presion Directa: {apiData['Presion Directa']}</Card>
        <Card>Presion Anular: {apiData['Presion Anular']}</Card>
        <Card>Peso en Gancho: {apiData['Peso en Gancho']}</Card>
        <Card>Peso Aplicado: {apiData['Peso Aplicado']}</Card>
        <Card>Nivel de Pileta: {apiData['Nivel de Pileta']}</Card>
        <Card>Viento: {apiData['Viento']}</Card>
      </Wrapper>
    </Background>
  )
}
