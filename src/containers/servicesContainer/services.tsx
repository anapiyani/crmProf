import { useEffect, useState } from "react";
import Services from "../../components/services/services";
import { AppDispatch, RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { getServices } from "../store/services.slice";

const ServicesContainer = () => {
  const dispatch = useDispatch<AppDispatch>();
  const services = useSelector((state: RootState) => state.services.services);
  const loading = useSelector((state: RootState) => state.services.loading);
  const iserror = useSelector((state: RootState) => state.services.iserror);

  useEffect(() => {
    dispatch(getServices());
  }, [dispatch]);

  return (
    <div className="dash">
      <Services services={services} loading={loading} iserror={iserror} />
    </div>
  );
};

export default ServicesContainer;
