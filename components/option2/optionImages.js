import React, { useContext } from 'react'
import { Background, Wrapper } from '../../styles/styledBackground'
import { apiContext } from '../../context/apiContext'
import { Card } from './styledImages'
import { Menu } from '..//menu/menu'

export const OptionImages = () => {
  const { apiData } = useContext(apiContext)

  return (
    <Background>
      <Menu />
      <Wrapper>
        <Card>
          Presion Directa:
          <hr /> <p>{apiData['Presion Directa']}</p>
        </Card>
        <Card>
          Presion Anular: <hr />
          <p>{apiData['Presion Anular']}</p>
        </Card>
        <Card>
          Peso en Gancho: <hr />
          <p>{apiData['Peso en Gancho']}</p>
        </Card>
        <Card>
          Peso Aplicado: <hr />
          <p>{apiData['Peso Aplicado']}</p>
        </Card>
        <Card>
          Nivel de Pileta: <hr />
          <p>{apiData['Nivel de Pileta']}</p>
        </Card>
        <Card>
          Viento: <hr />
          <p>{apiData['Viento']}</p>
        </Card>
      </Wrapper>
    </Background>
  )
}
