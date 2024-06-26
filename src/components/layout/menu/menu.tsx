import { Link, NavLink, useNavigate } from "react-router-dom";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import BorderAllOutlinedIcon from "@mui/icons-material/BorderAllOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../containers/store/store";
import { TuserData } from "../../../types/types";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUserData } from "../../../containers/store/user.slice";
import SupervisorAccountOutlinedIcon from "@mui/icons-material/SupervisorAccountOutlined";
import "./menu.scss";

const Menu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      dispatch(fetchUserData());
    } else {
      navigate("/login");
    }
  }, [dispatch]);

  const user: TuserData | null = useSelector(
    (state: RootState) => state.user.data
  );

  return (
    <div className="menu">
      <div className="menu-content">
        <div className="menu-header">
          <div className="logotype">
            <Link className="logo-link" to="/">
              ПрофСалон
            </Link>
          </div>
        </div>
        <div className="menu-items">
          <div className="item-user">
            <div className="user">
              <div className="user-image">
                {/* Here will be image but not now i think so i put icon */}
                {/* <img src={} alt="" /> */}
                <AccountCircleOutlinedIcon className="icon" />
              </div>
              <NavLink to="/profile" className="user-info">
                <div className="names">
                  <h3>
                    {user?.first_name} {user?.last_name}
                  </h3>
                  <p>{user?.email}</p>
                </div>
              </NavLink>
            </div>
          </div>
          <div className="menu-linkes">
            <ul>
              <li className="menu-link-item">
                <NavLink className="menu-link" to="/dashboard">
                  <BorderAllOutlinedIcon className="icon-menu" /> Дашборд
                </NavLink>
              </li>
              <li className="menu-link-item">
                <NavLink className="menu-link" to="/services">
                  <DashboardOutlinedIcon className="icon-menu" /> Сервисы
                </NavLink>
              </li>
              <li className="menu-link-item">
                <NavLink className="menu-link" to="/teacherai">
                  <ChatBubbleOutlineOutlinedIcon className="icon-menu" /> Чат Ai
                </NavLink>
              </li>
              <li className="menu-link-item">
                <NavLink className="menu-link" to="/clients">
                  <PeopleAltOutlinedIcon className="icon-menu" /> Клиенты
                </NavLink>
              </li>
              <li className="menu-link-item">
                <NavLink className="menu-link" to="/admins">
                  <SupervisorAccountOutlinedIcon className="icon-menu" /> Админы
                </NavLink>
              </li>
              <li className="menu-link-item">
                <NavLink className="menu-link" to="/staff">
                  <SupervisorAccountOutlinedIcon className="icon-menu" />{" "}
                  Сотрудники
                </NavLink>
              </li>
              <hr />
              <li className="menu-link-item">
                <NavLink className="menu-link" to="/settings">
                  <SettingsOutlinedIcon className="icon-menu" /> Настройки
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
