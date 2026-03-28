import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

const DataRow = ({ row, columns }) => (
  <TableRow sx={{ bgcolor: "#0f0f0f" }}>
    {columns.map((column) => {
      // console.log(column);
     return (
      <TableCell key={column} sx={{ color: "white" }}>
        {row[column]}
      </TableCell>
      );
    })}
  </TableRow>
);

export default DataRow;