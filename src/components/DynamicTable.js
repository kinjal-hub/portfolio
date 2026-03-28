import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
const DynamicTable = ({info}) => {
   const headers = Object.keys(info[0]);
   console.log(headers);
   const rowValue = info.map((obj) => Object.values(obj));
   console.log(rowValue[2]);
return (
    <TableContainer sx={{ bgcolor:"#f5f5f5", maxWidth:400, mt:'20px', justifySelf:'center'}}>
        <Table>
            <TableHead>
                <TableRow>
                    {headers.map((header) => (
                    <TableCell key={header}>
                       {header.toUpperCase()}
                    </TableCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {rowValue.map((row, rowIndex) => (
                <TableRow key={rowIndex}>
                    {row.map((value,i) => (
                    <TableCell key={i}>
                       {value}
                    </TableCell>
                    ))}
                </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
  )
}

export default DynamicTable