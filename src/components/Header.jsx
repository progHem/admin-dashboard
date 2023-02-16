import { Box, Typography, useTheme } from "@mui/material"

const Header = ({ title }) => {
    const theme = useTheme();
    return <Box m="20px 0 0 36px">
        <Typography variant="h2" color={theme.palette.primary[500]} fontWeight="bold" sx={{mb:"5px"}}>{title}</Typography>
    </Box>
}
export default Header