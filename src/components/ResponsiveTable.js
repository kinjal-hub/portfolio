import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHeader from './TableHeader';
import DataRow from './DataRow';

const ResponsiveTable = ({ data }) => {
  
  const columns = Object.keys(data[0]); // gets keys Arrays as string
  // console.log(data[4]['famousFood']);
    return (
     <TableContainer sx={{ maxWidth: 500, justifySelf: "center", mt: "50px" }}>
      <Table>
        <TableHeader columns={columns} />
        <TableBody>
          {data.map((row, rowIndex) => (
            <DataRow key={rowIndex} row={row} columns={columns} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
);
};

export default ResponsiveTable;
