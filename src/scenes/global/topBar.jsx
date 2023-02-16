import { Box, IconButton } from "@mui/material"
import { InputBase } from "@mui/material"
import { SettingsOutlined } from "@mui/icons-material"
import { NotificationsOutlined } from "@mui/icons-material"
import { PersonOutline } from "@mui/icons-material"
import { SearchOutlined } from "@mui/icons-material"
import { useTheme } from '@mui/material/styles/';

const TopBar = () => {
    const theme = useTheme();
    return <Box m="0 20px" display={"flex"} justifyContent="space-between" p={2}>
        <Box display={"flex"} backgroundColor={theme.palette.primary[200]} borderRadius={"10px"} boxShadow={theme.palette.boxShadow}>
            <InputBase sx={{ ml:2, flex:1 }} />
            <IconButton>
                <SearchOutlined style={{ color: theme.palette.primary[300] }}/>
            </IconButton>
        </Box>
        <Box display={"flex"}>
            <IconButton>
                <SettingsOutlined style={{ color: theme.palette.primary[300] }}/>
            </IconButton>
            <IconButton>
                <NotificationsOutlined style={{ color: theme.palette.primary[300] }}/>
            </IconButton>
            <IconButton>
                <PersonOutline style={{ color: theme.palette.primary[300] }}/>
            </IconButton>
        </Box>
    </Box>
}
export default TopBar