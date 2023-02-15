import { Box, IconButton } from "@mui/material"
import { InputBase } from "@mui/material"
import { SettingsOutlined } from "@mui/icons-material"
import { NotificationsOutlined } from "@mui/icons-material"
import { PersonOutline } from "@mui/icons-material"
import { SearchOutlined } from "@mui/icons-material"
import { useTheme } from '@mui/material/styles/';

const TopBar = () => {
    const theme = useTheme();
    return <Box display={"flex"} justifyContent="space-between" p={2}>
        <Box display={"flex"} backgroundColor={theme.palette.primary.main} borderRadius={"10px"} boxShadow={theme.palette.boxShadow}>
            <InputBase sx={{ ml:2, flex:1 }} />
            <IconButton>
                <SearchOutlined style={{ color: theme.palette.primary.contrastText }}/>
            </IconButton>
        </Box>
        <Box display={"flex"}>
            <IconButton>
                <SettingsOutlined style={{ color: theme.palette.primary.contrastText }}/>
            </IconButton>
            <IconButton>
                <NotificationsOutlined style={{ color: theme.palette.primary.contrastText }}/>
            </IconButton>
            <IconButton>
                <PersonOutline style={{ color: theme.palette.primary.contrastText }}/>
            </IconButton>
        </Box>
    </Box>
}
export default TopBar