import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Autocomplete, Box, Button, Stack, TextField, Typography } from '@mui/material';
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const columns = [
    { id: 'sn', label: 'S.n', },
    { id: 'name', label: 'Name', },
    {
        id: 'cont',
        label: 'Contact',
        // minWidth: 90,
        // align: 'right',
        // format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'addr',
        label: 'Address',
        // minWidth: 90,
        // align: 'right',
        // format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'pass',
        label: 'Password',
        // minWidth: 100,
        // align: 'right',
        // format: (value) => value.toFixed(2),
    },
    {
        id: 'order',
        label: 'Orders',
        // minWidth: 90,
        // align: 'right',
        // format: (value) => value.toFixed(2),
    },
];

function createData(sn, name, cont, addr, pass, order) {
    return { sn, name, cont, addr, pass, order };
}

const rows = [
    createData('1', 'Birendra Bikram', '9810000000', 'Jukot, Bajura', '**********', '24'),
    createData('1', 'Birendra Bikram', '9810000000', 'Jukot, Bajura', '**********', '24'),
    createData('1', 'Birendra Bikram', '9810000000', 'Jukot, Bajura', '**********', '24'),
    createData('1', 'Birendra Bikram', '9810000000', 'Jukot, Bajura', '**********', '24'),
    createData('1', 'Birendra Bikram', '9810000000', 'Jukot, Bajura', '**********', '24'),
    createData('1', 'Birendra Bikram', '9810000000', 'Jukot, Bajura', '**********', '24'),
    createData('1', 'Birendra Bikram', '9810000000', 'Jukot, Bajura', '**********', '24'),
    createData('1', 'Birendra Bikram', '9810000000', 'Jukot, Bajura', '**********', '24'),
    createData('1', 'Birendra Bikram', '9810000000', 'Jukot, Bajura', '**********', '24'),
    createData('1', 'Birendra Bikram', '9810000000', 'Jukot, Bajura', '**********', '24'),
    createData('1', 'Birendra Bikram', '9810000000', 'Jukot, Bajura', '**********', '24'),
    createData('1', 'Birendra Bikram', '9810000000', 'Jukot, Bajura', '**********', '24'),
    createData('1', 'Birendra Bikram', '9810000000', 'Jukot, Bajura', '**********', '24'),

];

export default function CustomerSub() {
    const [page, setPage] = React.useState(0);
    const [searchTerm, setSearchTerm] = React.useState("");
    // const [rows, setRows] = React.useState([]);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    // const getUsers = async () => {
    //     const data = await getDocs(empCollectionRef);
    //     setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    // };

    // const filterData = (v) => {
    //     if (v) {
    //         setRows([v]);
    //     } else {
    //         getUsers();
    //     }
    // };

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden', marginTop: '10px' }}>
            <Box sx={{ width: '98%', display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                <Stack direction="row" spacing={2} className="my-2 mb-2">
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={rows}
                        sx={{ width: 300 }}
                        // onChange={(e, v) => filterData(v)}
                        getOptionLabel={(rows) => rows.name || ""}
                        renderInput={(params) => (
                            <TextField {...params} size="small" label="Search By Name" sx={{ marginLeft: '4px' }} />
                        )}
                    />

                </Stack>
                <Stack>
                    <Box>
                        <TextField
                            id="filled-search"
                            // label="Search field"
                            placeholder='Search by'
                            type="search"
                            variant="outlined"
                            size='small'
                        />
                        <Button variant='contained' sx={{ marginLeft: '10px', backgroundColor: '#34A853' }}>Find</Button>
                    </Box>

                </Stack>
                <Button variant="outlined" sx={{ color: '#34A853', borderColor: '#34A853', borderWidth: '3px', fontWeight: '600' }}>
                    Add User
                </Button></Box>

            <TableContainer sx={{ maxHeight: 440, marginTop: '20px' }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow role="checkbox" tabIndex={-1} key={row.code}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.format && typeof value === 'number'
                                                        ? column.format(value)
                                                        : value}
                                                </TableCell>
                                            );
                                        })}
                                        <TableCell >
                                            <Stack spacing={2} direction="row">
                                                <EditIcon
                                                    style={{
                                                        fontSize: "20px",
                                                        color: "#34A853",
                                                        cursor: "pointer",
                                                    }}
                                                    className="cursor-pointer"
                                                // onClick={() => editUser(row.id)}
                                                />
                                                <DeleteIcon
                                                    style={{
                                                        fontSize: "20px",
                                                        color: "#DE5454",
                                                        cursor: "pointer",
                                                    }}
                                                // onClick={() => {
                                                //     deleteUser(row.id);
                                                // }}
                                                />
                                            </Stack>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper >
    );
}
// export default Customer