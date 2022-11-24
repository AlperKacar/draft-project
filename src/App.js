/* 
//random user axios ile çekip görsel tasarladım.
import Header from "./components/Header"
import UserList from "./components/UserList"


function App() {

  return (
   <>
   <Header/>
   <UserList/>
   </>
  );
}

export default App;
*/

/*
//jsonplaceholderdan photos ları çekip axios ile çekip görsel tasarladım.
import Header1 from "./Components1/Header1";
import AlbumList from "./Components1/AlbumList";

function App() {

  return (
   <>
   <Header1/>
   <AlbumList/>
   </>
  );
}

export default App;
*/
import { Routes, Route} from "react-router-dom";
import AuthLayout from "./auth/AuthLayout";
import Login from "./auth/Login";
import PrivateRoute from "./components2/PrivateRoute";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";


function App() {

  return (
   <>
   <div>
    <a href="/profile"> profile</a>
   </div>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/auth" element={<AuthLayout/>}>
      <Route path="login" element={<Login/>}/>
    </Route>
    <Route path="/profile" element={<PrivateRoute><Profile/></PrivateRoute>}/>
   </Routes>
   </>
  );
}

export default App;