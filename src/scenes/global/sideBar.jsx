import { useState } from "react"
import { Sidebar, Menu, MenuItem, useProSidebar, sidebarClasses } from 'react-pro-sidebar';
import { Box, Typography, useTheme } from "@mui/material"
import { Link } from "react-router-dom";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import { PeopleOutline } from "@mui/icons-material";
import { CalendarTodayOutlined } from "@mui/icons-material";
import { BarChartOutlined } from "@mui/icons-material";
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
import logo from '../../assets/Logo.svg'

const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    return (
        <MenuItem active={selected == title} style={{ color: selected == title ? theme.palette.primary[100]: theme.palette.primary[400] }} onClick={() => setSelected(title)} icon={icon} component={ <Link to={to} />}>{title}
        </MenuItem>
    )
}

const SideBar = () => {
    const theme = useTheme();
    const { collapseSidebar, collapsed } = useProSidebar();
    const [selected, setSelected] = useState('Dashboard');
    return (
        <Box sx={{
            backgroundColor: `${theme.palette.primary[500]}`,
            [`.${sidebarClasses.root}`]: {
                border:"none"
            },
            [`.${sidebarClasses.container}`]: {
                    backgroundColor: "transparent",
                },}}>
            <Sidebar collapse={collapsed} rootStyles={{
                ".ps-menu-button:hover": {
                    backgroundColor: "transparent !important",
                },
                ".ps-menu-button": {
                    height: "100%",
                },
                ".ps-menuitem-root:not(:first-of-type)": {
                    padding:"5px 35px 5px 0"
                },
                }}>
                <Menu>
                    <MenuItem onClick={() => collapseSidebar()} style={{paddingRight:"17px", textAlign:"center"}}>
                        <img
                            width="100px"
                            height="100px"
                            src={logo}
                            alt="Logo"
                            style={{ cursor: "pointer" }}
                        />
                    </MenuItem>
                    <Box paddingLeft={collapsed ? undefined : "10%"}>
                        <Item
                            title="Dashboard"
                            to="/"
                            icon={<DashboardOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Typography variant="h6" color={theme.palette.primary[400]} sx={{m: "15px 0 5px 20px"}}>Data</Typography>
                        <Item
                            title="Team"
                            to="/team"
                            icon={<PeopleOutline />}
                            selected={selected}
                        setSelected={setSelected}
                            
                        />
                        {/* <Item
                            title="Contact"
                            to="/contact"
                            icon={<Con />}
                            selected={selected}
                        setSelected={setSelected}
                            
                        /> */}
                        <Item
                            title="Profile form"
                            to="/profile"
                            icon={<PersonOutlinedIcon />}
                            selected={selected}
                        setSelected={setSelected}
                            
                        />
                        <Typography variant="h6" color={theme.palette.primary[400]} sx={{m: "15px 0 5px 20px"}}>Pages</Typography>
                        <Item
                            title="Calender"
                            to="/calender"
                            icon={<CalendarTodayOutlined />}
                            selected={selected}
                        setSelected={setSelected}
                            
                        />
                        <Item
                            title="FAQ page"
                            to="/faq"
                            icon={<HelpOutlinedIcon />}
                            selected={selected}
                        setSelected={setSelected}
                            
                        />
                        <Typography variant="h6" color={theme.palette.primary[400]} sx={{m: "15px 0 5px 20px"}}>Charts</Typography>
                        <Item
                            title="Bar chart"
                            to="/bar"
                            icon={<BarChartOutlined />}
                            selected={selected}
                        setSelected={setSelected}
                            
                        />
                        <Item
                            title="Pie Chart"
                            to="/pie"
                            icon={<PieChartOutlineOutlinedIcon />}
                            selected={selected}
                        setSelected={setSelected}
                            
                        />
                        <Item
                            title="Line Chart"
                            to="/line"
                            icon={<TimelineOutlinedIcon />}
                            selected={selected}
                        setSelected={setSelected}
                            
                        />
                        <Item
                            title="Geography Chart"
                            to="/geography"
                            icon={<MapOutlinedIcon />}
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