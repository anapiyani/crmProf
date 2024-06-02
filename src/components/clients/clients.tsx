import './clients.scss';
import ClientsTable from './clientsTable/clientsTable';

const Clients = () => {
    return (
        <div className="clients">
            <div className="clients-side">
                <ClientsTable/>
                
            </div>
        </div>
    )
}

export default Clients;