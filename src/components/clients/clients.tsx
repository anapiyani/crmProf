import { TAuthStateInit } from "../../types/types";
import "./clients.scss";
import ClientsTable from "./clientsTable/clientsTable";

type TProps = {
  clients: TAuthStateInit[];
  loading: boolean;
};
const Clients = (props: TProps) => {
  return (
    <div className="clients">
      <div className="clients-side">
        <ClientsTable loading={props.loading} clients={props.clients} />
      </div>
    </div>
  );
};

export default Clients;
