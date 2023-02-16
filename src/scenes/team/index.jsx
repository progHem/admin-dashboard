import Header from "../../components/Header"
import { DataGrid } from '@mui/x-data-grid';
import { Box, Typography, useTheme } from "@mui/material"
import { teamData } from "../../data/teamData";

const Team = () => {
    const theme = useTheme()
    const columns = [
        {field:"id", headerName:"ID"},
        {field:"name", headerName:"Name", flex:1, cellClassName:"name-column--cell"},
        {field:"email", headerName:"Email", flex:1},
        {field:"phone", headerName:"Phone", flex:1},
        {
            field: "access", headerName: "Access Level", flex: 1, renderCell: ({ row: { access } }) => {
                return (
                    <Box width="fit-content" minWidth="100px" m="0 auto" p="5px" display="flex" justifyContent="center" borderRadius="5px" fontWeight="bold"
                    backgroundColor={access === "admin" ? theme.palette.primary['A100'] : access === "manager" ? theme.palette.primary['A300'] : theme.palette.primary['A500']} color={access === "admin" ? theme.palette.primary['A200'] : access === "manager" ? theme.palette.primary['A400'] : theme.palette.primary['A600']}>{access}</Box>
                )
        }},
    ]
    return (
        <Box>
            <Header title="Team" />
            <Box m="30px 36px 0 36px" height="70vh" backgroundColor={theme.palette.primary[200]} borderRadius={"10px"} boxShadow={theme.palette.boxShadow}>
                <DataGrid rows={teamData} columns={columns} sx={{
                    fontFamily: "Poppins",
                    ".MuiDataGrid-columnHeaders": {
                        backgroundColor: theme.palette.primary[600],
                        borderRadius:"10px"
                    },
                    ".MuiDataGrid-columnHeaderTitle": {
                        fontWeight: 700,
                        color: theme.palette.primary[300],
                    },
                    ".MuiDataGrid-iconSeparator": {
                      color:"transparent"  
                    },
                    ".MuiDataGrid-columnHeader:focus-within,.MuiDataGrid-cell:focus, .MuiDataGrid-cell:focus-within": {
                        outline:"none"
                    }
                }}
                checkboxSelection
                disableSelectionOnClick/>
            </Box> 
        </Box>
    )
}
export default Team