import './clients.scss';
import ClientsTable from './clientsTable/clientsTable';
import FiltersTable from './filtersTable/filtersTable';

const Clients = () => {
    return (
        <div className="clients">
            <div className="clients-side">
                <ClientsTable/>
                <FiltersTable/>
            </div>
        </div>
    )
}

export default Clients;