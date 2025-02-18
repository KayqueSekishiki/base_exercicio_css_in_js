import styled from 'styled-components'

const CabecalhoEstilizado = styled.header`
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  text-align: center;
  padding: 24px 0;
`

const Cabecalho = () => (
  <CabecalhoEstilizado>
    <h1>EBAC Jobs</h1>
  </CabecalhoEstilizado>
)

export default Cabecalho
