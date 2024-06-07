import { CircularProgress } from "@mui/material";
import { TServices } from "../../types/types";
import "./dashboard.scss";
import EachService from "./eachService/earchService";

type TProps = {
  services: TServices[];
  loading: boolean;
  iserror: boolean;
};
const Dashboard = (props: TProps) => {
  return (
    <div className="services">
      <div className="container">
        <div className="services-content">
          <div className="header-text">
            <h1>Сервисы</h1>
          </div>
          <div className="all-services">
            {props.iserror ? (
              <p className="error">
                Упс! Ошибка, попробуйте перезагрузить страницу
              </p>
            ) : (
              ""
            )}
            {props.loading ? <CircularProgress /> : ""}
            {props.services.map((item) => (
              <EachService
                key={item.id}
                title={item.name}
                descr={item.description}
                price={item.price}
                duration={item.duration}
                createdAt={item.created_at}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
