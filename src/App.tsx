import { Route, BrowserRouter, Routes, Outlet } from "react-router-dom";
import LoginContainer from "./containers/loginContainer/loginContainer";
import RegisterContainer from "./containers/registerContainer/registerContainer";
import TeacherAiContainer from "./containers/teacherAiContainer/teacherAiContainer";
import DashboardContainer from "./containers/dashboardContainer/dashboard";
import Menu from "./components/layout/menu/menu";
import ClientsContainer from "./containers/clientsContainer/clientsContainer";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginContainer />} />
          <Route path="/register" element={<RegisterContainer />} />
          <Route element={<MainLayout />}>
            <Route path="/dashboard" element={<DashboardContainer />} />
            <Route path="/teacherai" element={<TeacherAiContainer />} />
            <Route path="/" element={<DashboardContainer />} />
            <Route path="/clients" element={<ClientsContainer />} />
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
