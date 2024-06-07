import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DashBoard from "../../components/dashboard/dashboard";
import { dashboardInfo } from "../store/dashboard.slice";
import { AppDispatch, RootState } from "../store/store";

const DashBoardContainer = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { requests, loading, error } = useSelector(
    (state: RootState) => state.dashboard
  );

  useEffect(() => {
    dispatch(dashboardInfo());
  }, [dispatch]);

  return <DashBoard requests={requests} loading={loading} error={error} />;
};

export default DashBoardContainer;
