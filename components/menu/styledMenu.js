import styled from 'styled-components'

export const Card = styled.div`
  margin-bottom: 1rem;
  display: flex;
`
export const MenuContainer = styled.div`
  height: ${(props) => (props.toogle ? '20%' : '100%')};
  top: ${(props) => (props.toogle ? '0%' : '')};
  background: rgba(255,255,255,.9);
  position: absolute;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: ${(props) => (props.toogle ? 'row' : 'column')};
  justify-content: center;
  align-items: center;
  transition: 0.2s;

  @media (max-width: 600px){
    top: 0;
    width: 100%;
  }
`
export const Button = styled.p`
  transition: 0.5s ease-in-out;
  color: black;
  border: 1px solid black;
  margin: 5px;
  padding: 10px;
  :hover {
    background: black;
    color: white;
    border: 1px solid white;
    cursor: pointer;
  }
`
