import {
  Routes,
  Route,
} from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import Form from './pages/Form';


 
function App() {
  return (
    <>
      <Routes>
        <Route>
          <Route path="/" element={<LandingPage />}/>
          <Route path="LoginPage" element={<LoginPage />}/>
          <Route path="Form" element={<Form />}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
