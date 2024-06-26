import { useDispatch, useSelector } from "react-redux";
import Clients from "../../components/clients/clients";
import { AppDispatch, RootState } from "../store/store";
import { getClients } from "../store/clients.slice";
import { useEffect } from "react";

const ClientsContainer = () => {
  const dispatch = useDispatch<AppDispatch>();
  const clients = useSelector((state: RootState) => state.clients.clients);
  const loading = useSelector((state: RootState) => state.clients.loading);

  useEffect(() => {
    dispatch(getClients());
  }, []);

  return <Clients clients={clients} loading={loading} />;
};

export default ClientsContainer;
