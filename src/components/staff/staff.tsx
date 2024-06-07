import { TAuthState, TAuthStateInit } from "../../types/types";
import "./admins.scss";
import StaffTable from "./Table/staffTable";

type TProps = {
  clients: TAuthStateInit[];
  loading: boolean;
};

const Staff = (props: TProps) => {
  return (
    <div className="clients">
      <div className="clients-side">
        <StaffTable loading={props.loading} clients={props.clients} />
      </div>
    </div>
  );
};

export default Staff;
