import { TAuthState, TAuthStateInit } from "../../types/types";
import "./admins.scss";
import ClientsTable from "./Table/adminTable";

type TProps = {
  clients: TAuthStateInit[];
  loading: boolean;
};

const Admins = (props: TProps) => {
  return (
    <div className="clients">
      <div className="clients-side">
        <ClientsTable loading={props.loading} clients={props.clients} />
      </div>
    </div>
  );
};

export default Admins;
