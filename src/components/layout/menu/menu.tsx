import { Link, NavLink } from 'react-router-dom';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import BorderAllOutlinedIcon from '@mui/icons-material/BorderAllOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

import './menu.scss'

const Menu = () => {
    return (
        <div className="menu">
            <div className="menu-content">
                <div className="menu-header">
                    <div className="logotype">
                        <Link className='logo-link' to="/">ПрофСалон</Link>
                    </div>
                </div>
                <div className="menu-items">
                    <div className="item-user">
                        <div className="user">
                            <div className="user-image">
                                {/* Here will be image but not now i think so i put icon */}
                                {/* <img src={} alt="" /> */}
                                <AccountCircleOutlinedIcon className='icon'/>
                            </div>
                            <NavLink to="/settings" className="user-info">
                                <div className="names">
                                    <h3>Сиерра Андресон</h3>
                                    <p>sierraanersion@gmail.com</p>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                    <div className="menu-linkes">
                        <ul>
                            <li className='menu-link-item'>
                                <NavLink className='menu-link' to="/">
                                    <DashboardOutlinedIcon className="icon-menu" /> Панель управления
                                </NavLink>
                            </li>
                            <li className='menu-link-item'>
                                <NavLink className='menu-link' to="/teacherai">
                                    <ChatBubbleOutlineOutlinedIcon className="icon-menu" /> Чат Ai
                                </NavLink>
                            </li>
                            <li className='menu-link-item'>
                                <NavLink className='menu-link' to="/clients">
                                    <PeopleAltOutlinedIcon className="icon-menu" /> Клиенты
                                </NavLink>
                            </li>
                            <li className='menu-link-item'>
                                <NavLink className='menu-link' to="/kassa">
                                    <BorderAllOutlinedIcon className="icon-menu" /> Касса
                                </NavLink>
                            </li>
                            <hr />
                            <li className='menu-link-item'>
                                <NavLink className='menu-link' to="/settings">
                                    <SettingsOutlinedIcon className="icon-menu" /> Настройки
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu;