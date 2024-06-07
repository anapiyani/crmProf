import "./adminTable.scss";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  CircularProgress,
} from "@mui/material";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import { TAuthStateInit } from "../../../types/types";

type TProps = {
  clients: TAuthStateInit[];
  loading: boolean;
};

const StaffTable = (props: TProps) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>
              <div className="header-table">
                ФИО
                <IconButton size="small">
                  <ImportExportIcon />
                </IconButton>
              </div>
            </TableCell>
            <TableCell>
              <div className="header-table">
                Телефон
                <IconButton size="small">
                  <ImportExportIcon />
                </IconButton>
              </div>
            </TableCell>
            <TableCell>
              <div className="header-table">
                Роль
                <IconButton size="small">
                  <ImportExportIcon />
                </IconButton>
              </div>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.loading ? <CircularProgress className="loading" /> : ""}
          {props.clients.map((client) => (
            <TableRow key={client.id}>
              <TableCell>{client.id}</TableCell>
              <TableCell>{`${client.first_name || ""} ${
                client.last_name || ""
              }`}</TableCell>
              <TableCell>{client.phone_number || ""}</TableCell>
              <TableCell>Сотрудники</TableCell>{" "}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StaffTable;
