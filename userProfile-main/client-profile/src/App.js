
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Login from './form/login/Login';
import Form from './form/register/Form';

function App() {

  return (
    <div className="App">
     <BrowserRouter>
       <Routes>
          <Route path='/' element={<Form/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
       </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
/*git push exixting code

git remote add origin https://github.com/vijay143pro/crud_mern.git
git branch -M main
git push -u origin main */