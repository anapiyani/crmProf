import { useEffect, useState } from "react";
import Dashboard from "../../components/dashboard/dashboard";
import { AppDispatch, RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { getServices } from "../store/services.slice";

const DashboardContainer = () => {
  const dispatch = useDispatch<AppDispatch>();
  const services = useSelector((state: RootState) => state.services.services);
  const loading = useSelector((state: RootState) => state.services.loading);
  const iserror = useSelector((state: RootState) => state.services.iserror);

  useEffect(() => {
    dispatch(getServices());
  }, [dispatch]);

  return (
    <div className="dash">
      <Dashboard services={services} loading={loading} iserror={iserror} />
    </div>
  );
};

export default DashboardContainer;
