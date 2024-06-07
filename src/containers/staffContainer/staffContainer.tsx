import { useDispatch, useSelector } from "react-redux";
import Staff from "../../components/staff/staff";
import { AppDispatch, RootState } from "../store/store";
import { getClients } from "../store/clients.slice";
import { useEffect } from "react";

const StaffContainer = () => {
  const dispatch = useDispatch<AppDispatch>();
  const staff = useSelector((state: RootState) => state.clients.staff);
  const loading = useSelector((state: RootState) => state.clients.loading);

  useEffect(() => {
    dispatch(getClients());
  }, []);

  return <Staff clients={staff} loading={loading} />;
};

export default StaffContainer;
