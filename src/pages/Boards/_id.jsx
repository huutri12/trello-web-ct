import Container from '@mui/material/Container'
import AppBar from '../../components/AppBar'
import BoardBar from './BoardBar/index'
import BoardContent from './BoardContent/index'

function Board() {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <AppBar/>
      <BoardBar/>
      <BoardContent/>
    </Container>
  )
}

export default Board
