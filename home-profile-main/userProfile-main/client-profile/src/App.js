
import { BrowserRouter, Route, Routes,Switch } from 'react-router-dom';
import './App.css';
import Login from './form/login/Login';
import Form from './form/register/Form';
import axios from 'axios'
import ProtectorRoute from './homePage/ProtectorRoute';
import Home from './homePage/Home';

function App() {
  const create=data=>{
    axios.post("http://localhost:4000/info",data).catch((error) => {
        
    if (error.response) {
      var obj=error.response.data
      var txt=JSON.stringify(obj)
      alert(txt);
    }
  }).then(()=>{
    alert("page redirect to login apge")
  });
  }

  return (
    <div className="App">
     <BrowserRouter>
       <Routes>
          <Route path='/' element={<Form mydata={create}/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/home/:id' element={<Home/>}/>
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