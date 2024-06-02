import './clientsTable.scss';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, IconButton
} from '@mui/material';
import ImportExportIcon from '@mui/icons-material/ImportExport';

interface Client {
  id: number;
  name: string;
  cardNumber: string;
  phone: string;
  category: string;
  age: number;
  birthDate: string;
  gender: string;
  occupation: string;
}

const ClientsTable = () => {
  const clients: Client[] = [
    { id: 1, name: 'Жулдыз Сарсембекова', cardNumber: '-', phone: '+1234567890', category: 'VIP', age: 30, birthDate: '1993-01-01', gender: 'Жен.', occupation: 'Не указано' },
    { id: 2, name: 'Ольга Кан', cardNumber: '200164', phone: '+2345678901', category: 'Без категории', age: 25, birthDate: '1998-02-02', gender: 'Жен.', occupation: 'Госслужайщий' },
  ];

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
                    Номер карты
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
                    Категория
                    <IconButton size="small">
                        <ImportExportIcon />
                    </IconButton>
                </div>
            </TableCell>
            <TableCell>
                <div className="header-table">
                    Возраст
                    <IconButton size="small">
                        <ImportExportIcon />
                    </IconButton>
                </div>
            </TableCell>
            <TableCell>
                <div className="header-table">
                    Дата рождения
                    <IconButton size="small">
                        <ImportExportIcon />
                    </IconButton>
                </div>
            </TableCell>
            <TableCell>
                <div className="header-table">
                    Пол
                    <IconButton size="small">
                        <ImportExportIcon />
                    </IconButton>
                </div>
            </TableCell>
            <TableCell>
                <div className="header-table">
                    Род занятий
                    <IconButton size="small">
                        <ImportExportIcon />
                    </IconButton>
                </div>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {clients.map((client) => (
            <TableRow key={client.id}>
              <TableCell>{client.id}</TableCell>
              <TableCell>{client.name}</TableCell>
              <TableCell>{client.cardNumber}</TableCell>
              <TableCell>{client.phone}</TableCell>
              <TableCell>{client.category}</TableCell>
              <TableCell>{client.age}</TableCell>
              <TableCell>{client.birthDate}</TableCell>
              <TableCell>{client.gender}</TableCell>
              <TableCell>{client.occupation}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ClientsTable;
