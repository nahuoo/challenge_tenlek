import React, { useContext } from 'react'
import { Background, Wrapper } from '../../styles/styledBackground'
import { apiContext } from '../../context/apiContext'
import { Card } from './styledImages'

export const OptionImages = () => {
  const { apiData } = useContext(apiContext)

  return (
    <Background>
      <Wrapper>
        <Card>
          Presion Directa: <p>{apiData['Presion Directa']}</p>
        </Card>
        <Card>
          Presion Anular: <p>{apiData['Presion Anular']}</p>
        </Card>
        <Card>
          Peso en Gancho: <p>{apiData['Peso en Gancho']}</p>
        </Card>
        <Card>
          Peso Aplicado: <p>{apiData['Peso Aplicado']}</p>
        </Card>
        <Card>
          Nivel de Pileta: <p>{apiData['Nivel de Pileta']}</p>
        </Card>
        <Card>
          Viento: <p>{apiData['Viento']}</p>
        </Card>
      </Wrapper>
    </Background>
  )
}
