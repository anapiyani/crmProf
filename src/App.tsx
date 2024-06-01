import { Route, BrowserRouter, Routes } from 'react-router-dom'
import LoginContainer from './containers/loginContainer/loginContainer';
import RegisterContainer from './containers/registerContainer/registerContainer';

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route index path='/login' element={<LoginContainer/>} />
          <Route path='register' element={<RegisterContainer/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;