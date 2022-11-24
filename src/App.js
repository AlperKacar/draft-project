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
import {useRoutes} from "react-router-dom";
import routes from "./routes/routes"


function App() {

  return useRoutes(routes)
}

export default App;