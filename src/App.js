import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Login from './Components/Login';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Components/Home';
import Register from './Components/Register';
import CreatePost from './Components/CreatePost';
import EditPost from './Components/EditPost';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header/>
        <Routes>
            <Route path='/' element={<Login />}/>
            <Route path='/register' element={<Register />}/>
            <Route path='/dashboard' element={<Home />}/>
            <Route path='/create-post' element={<CreatePost />}/>
            <Route path='/edit-post/:id' element={<EditPost />}/>
          </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
