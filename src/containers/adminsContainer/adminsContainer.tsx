import Admins from "../../components/admins/admins";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { getClients } from "../store/clients.slice";
import { useEffect } from "react";

const AdminsContainer = () => {
  const dispatch = useDispatch<AppDispatch>();
  const admins = useSelector((state: RootState) => state.clients.admins);
  const loading = useSelector((state: RootState) => state.clients.loading);

  useEffect(() => {
    dispatch(getClients());
  }, [dispatch]);

  return <Admins clients={admins} loading={loading} />;
};

export default AdminsContainer;
