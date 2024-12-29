import Box from '@mui/material/Box'
import ModeSelect from '~/components/ModeSelect'
import AppsIcon from '@mui/icons-material/Apps'
import { ReactComponent as TrelloIcon } from '~/assets/Trello.svg'
import SvgIcon from '@mui/material/SvgIcon'
import Typography from '@mui/material/Typography'
import Workspaces from '~/components/AppBar/Menus/Workspaces'
import Recent from '~/components/AppBar/Menus/Recent'
import Templates from '~/components/AppBar/Menus/Templates'
import Starred from '~/components/AppBar/Menus/Starred'
import Button from '@mui/material/Button'

function AppBar () {
  return (
    <Box px={2} sx={{
      width: '100%',
      height: (theme) => theme.trello.appBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <AppsIcon sx={{ color: 'primary.main' }} />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <SvgIcon component={TrelloIcon} inheritViewBox sx={{ color: 'primary.main' }} />
          <Typography variant="span" sx={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'primary.main' }}
          >Trello</Typography>

          <Workspaces/>
          <Recent/>
          <Starred/>
          <Templates/>

          <Button variant="outlined">Create</Button>
        </Box>
      </Box>
      <Box>
        <ModeSelect/>
      </Box>
    </Box>
  )
}

export default AppBar