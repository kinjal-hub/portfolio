import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const TableHeader = ({ columns }) => (
  <TableHead>
    <TableRow sx={{ bgcolor: "#0f0f0f" }}>
      {columns.map((column) => {
        // console.log(column);
        return (
        <TableCell
          key={column}
          sx={{ fontWeight: 'bold', textTransform: 'uppercase', color: "white" }}
        >
          {column}
        </TableCell>
        );
      })}
    </TableRow>
  </TableHead>
);

export default TableHeader;