import { useState } from "react"
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar, sidebarClasses } from 'react-pro-sidebar';
import { Box, IconButton, Typography, useTheme } from "@mui/material"
import { Link } from "react-router-dom";
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import { PeopleOutline } from "@mui/icons-material";
import { CalendarTodayOutlined } from "@mui/icons-material";
import { BarChartOutlined } from "@mui/icons-material";
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import { ContactsOutlined } from "@mui/icons-material";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { style } from "@mui/system/Stack/createStack";
import logo from '../../assets/Logo.svg'

const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    return (
        <MenuItem active={selected == title} style={{ color: theme.palette.primary[400] }} onClick={() => setSelected(title)} icon={icon}>
            <Typography>{title}</Typography>
            <Link to={to}/>
        </MenuItem>
    )
}
const SideBar = () => {
    const theme = useTheme();
    const { collapseSidebar, toggleSidebar, collapsed, toggled } = useProSidebar();
    console.log(sidebarClasses);
    const [selected, setSelected] = useState('Dashboard');
    return (
        <Box sx={{
            backgroundColor: `${theme.palette.primary.dark}`,
            [`.${sidebarClasses.root}`]: {
                border:"none"
            },
            [`.${sidebarClasses.container}`]: {
                    backgroundColor: "transparent",
                },
        }}>
            <Sidebar collapse={collapsed} rootStyles={{
                ".ps-menu-button:hover": {
                    backgroundColor: "transparent",
                },
                ".ps-menu-button": {
                    height: "100%",
                    textAlign: "center",
                },
                // ".ps-sidebar-container": {
                // backgroundColor:`${theme.palette.primary.dark}`
                // },
                // "& .pro-icon-wrapper": {
                //     backgroundColor: "transparent !important"
                // },
                // "& .pro-inner-item": {
                //     padding:"5px 35px 5px 20px !important"
                // },
                // "& .pro-inner-item:hover": {
                //     color: `${theme.palette.primary.light}`
                // }
    // [`.${sidebarClasses.container}`]: {
    //   backgroundColor: `${theme.palette.primary.dark}`,
    //             },
    //             [`.${sidebarClasses.container}`]: {
    //   backgroundColor: `${theme.palette.primary.dark}`,
    //             },
                
  }}>
                <Menu>
                    <MenuItem onClick={() => collapseSidebar()}>
                        <img
                            width="100px"
                            height="100px"
                            src={logo}
                            alt="Logo"
                            style={{ cursor: "pointer" }}
                        />
                     {!collapsed && (
                        <Box display="flex" justifyContent="center" alignItems="center">
                            <Typography variant="h3">Admin</Typography>
                        </Box>
                    )}
                    </MenuItem>
                    <Box paddingLeft={collapsed ? undefined : "10%"}>
                        <Item
                            title="Dahsboard"
                            to="/"
                            icon={<MenuOutlinedIcon />}
                            selected={selected}
                        setSelected={setSelected}
                            
                        />
                        <Item
                            title="Contact"
                            to="/contact"
                            icon={<ContactsOutlined />}
                            selected={selected}
                        setSelected={setSelected}
                            
                        />
                        <Item
                            title="Chart"
                            to="/pie"
                            icon={<PieChartOutlineOutlinedIcon />}
                            selected={selected}
                        setSelected={setSelected}
                            
                        />
                    </Box>
                </Menu>
            </Sidebar>
        </Box>
    );
}
export default SideBar