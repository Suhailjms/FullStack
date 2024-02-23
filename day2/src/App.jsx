// App.jsx
import { Navigate,Route,Routes } from 'react-router-dom';
import { lazy } from "react"
import UserLayout from './pages/user/UserLayout';
// import Header from './components/Header';
import LazyLayout from './components/LazyLayout';
import './App.css'; 
const LazyLogin = lazy(()=> import('./pages/auth/login'));
const LazyRegister = lazy(()=> import('./pages/auth/register'));
const LazyHome = lazy(()=> import('./pages/user/Home'));
// const LazyHeader = lazy(()=> import('./components/Header'));
// const LazyLogin =lazy(()=>import("../pages/auth/Login"))
// const LazyRegister = lazy(()=>import("../pages/auth/register"))
// const LazyHome = lazy(()=> import("./pages/user/Home"))
// const LazyDashboard = lazy(()=> import("./pages/admin/Dashboard"))

const UserRoutes = () => {
  return(
    <UserLayout>
    <Routes>
      <Route path="/home" element={<LazyLayout component={LazyHome}/>}/>
    </Routes>
    </UserLayout>
  )
}

// const AdminRoutes = () => {
//   return(
//     <UserLayout>
//     <Routes>
//       <Route path="/dashboard" element={<LazyLayout component={LazyHome}/>}/>
//     </Routes>
//     </UserLayout>
//   )
// }


const App = () => {
  return (
    <Routes>

      <Route path="/" element={<Navigate to="/eventhub/login"/>}/>
      <Route path="/eventhub/login" element={<LazyLayout component={LazyLogin}/>}/>
      <Route path="/eventhub/register" element={<LazyLayout component={LazyRegister}/>}/>
      {/* <Route path='/eventhub/nav' element={<LazyLayout component={LazyHeader}/>}/> */}
      <Route path="/eventhub/user/*" element={<UserRoutes/>}/>
      {/* <Route path="/rovertours/admin/*" element={<AdminRoutes/>}/> */}
    </Routes>
  );
};

export default App;
