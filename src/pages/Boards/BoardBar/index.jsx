import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import { Tooltip } from '@mui/material'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'

const MENU_STYLES = {
  color: 'white',
  bgcolor: 'transparent',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '.MuiSvgIcon-root':{
    color: 'white'
  },
  '&:hover': {
    bgcolor: 'primary.50'
  }
}

function BoardBar () {

  return (
    <Box sx={{
      width: '100%',
      height: (theme) => theme.trello.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      paddingX: 2,
      overflowX: 'auto',
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
      borderBottom: '1px solid white'
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip
          sx = {MENU_STYLES}
          icon={<DashboardIcon />}
          label="HuuTriDev MERN Stack Board"
          clickable
        />
        <Chip
          sx = {MENU_STYLES}
          icon={<VpnLockIcon />}
          label="Public/Private Workspace"
          clickable
        />
        <Chip
          sx = {MENU_STYLES}
          icon={<AddToDriveIcon />}
          label="Add To Google Driver"
          clickable
        />
        <Chip
          sx = {MENU_STYLES}
          icon={<BoltIcon />}
          label="Automation"
          clickable
        />
        <Chip
          sx = {MENU_STYLES}
          icon={<FilterListIcon />}
          label="Filters"
          clickable
        />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button
          variant="outlined"
          startIcon={<PersonAddIcon/>}
          sx={{
            color: 'white',
            borderColor: 'white',
            '&:hover' : { borderColor: 'white' }
          }}
        >
          Invite
        </Button>
        <AvatarGroup
          max={4}
          sx={{
            gap: '10px',
            '& .MuiAvatar-root':{
              width: 34,
              height: 34,
              fontSize: 16,
              border: 'none'
            }
          }}>
          <Tooltip title="HuuTriDev">
            <Avatar
              alt="HuuTriDev"
              src="https://i.pinimg.com/564x/dd/2d/0a/dd2d0a59ad7e79453110b2968af72d89.jpg" />
          </Tooltip>
          <Tooltip title="HuuTriDev">
            <Avatar
              alt="HuuTriDev"
              src="https://kynguyenlamdep.com/wp-content/uploads/2022/06/avatar-cute-meo-con-than-chet.jpg" />
          </Tooltip>
          <Tooltip title="HuuTriDev">
            <Avatar
              alt="HuuTriDev"
              src="https://i.pinimg.com/736x/85/87/8e/85878e87c9383fc05c9bb8cd28a27bbe.jpg" />
          </Tooltip>
          <Tooltip title="HuuTriDev">
            <Avatar
              alt="HuuTriDev"
              src="https://cf.shopee.vn/file/cdba802c4d96214b933652871b6f84b5" />
          </Tooltip>
          <Tooltip title="HuuTriDev">
            <Avatar
              alt="HuuTriDev"
              src="https://i.pinimg.com/564x/dd/2d/0a/dd2d0a59ad7e79453110b2968af72d89.jpg" />
          </Tooltip>
          <Tooltip title="HuuTriDev">
            <Avatar
              alt="HuuTriDev"
              src="https://kynguyenlamdep.com/wp-content/uploads/2022/06/avatar-cute-meo-con-than-chet.jpg" />
          </Tooltip>
          <Tooltip title="HuuTriDev">
            <Avatar
              alt="HuuTriDev"
              src="https://i.pinimg.com/736x/85/87/8e/85878e87c9383fc05c9bb8cd28a27bbe.jpg" />
          </Tooltip>
          <Tooltip title="HuuTriDev">
            <Avatar
              alt="HuuTriDev"
              src="https://cf.shopee.vn/file/cdba802c4d96214b933652871b6f84b5" />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar