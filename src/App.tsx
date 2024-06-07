import { Route, BrowserRouter, Routes, Outlet } from "react-router-dom";
import LoginContainer from "./containers/loginContainer/loginContainer";
import RegisterContainer from "./containers/registerContainer/registerContainer";
import TeacherAiContainer from "./containers/teacherAiContainer/teacherAiContainer";
import DashboardContainer from "./containers/dashboardContainer/dashboardContainer";
import Menu from "./components/layout/menu/menu";
import ClientsContainer from "./containers/clientsContainer/clientsContainer";
import AdminsContainer from "./containers/adminsContainer/adminsContainer";
import StaffContainer from "./containers/staffContainer/staffContainer";
import ServicesContainer from "./containers/servicesContainer/services";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginContainer />} />
          <Route path="/register" element={<RegisterContainer />} />
          <Route element={<MainLayout />}>
            <Route path="/" element={<DashboardContainer />} />
            <Route path="/dashboard" element={<DashboardContainer />} />
            <Route path="/services" element={<ServicesContainer />} />
            <Route path="/teacherai" element={<TeacherAiContainer />} />
            <Route path="/clients" element={<ClientsContainer />} />
            <Route path="/admins" element={<AdminsContainer />} />
            <Route path="/staff" element={<StaffContainer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

const MainLayout = () => {
  return (
    <>
      <div className="main-layout">
        <Menu />
        <div className="main-content">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default App;
