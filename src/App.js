import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';





import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Header from './Pages/Shared/Header/Header';
import AuthProvider from './context/AuthProvider';
import Home from './Pages/Home/Home/Home';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import BuyNow from './Pages/Dashboard/BuyNow/BuyNow';
import Contact from './Pages/Contact/Contact';
import Login from './Pages/Login/Login/Login';
import Footer from './Pages/Shared/Footer/Footer';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Register from './Pages/Login/Register/Register';
import Products from './Pages/Home/Products/Products';
import AdminPannel from './Pages/AdminPannel/AdminPannel/AdminPannel';
import AdminRoute from './Pages/Login/AdminRoute/AdminRoute';






function App() {
  return (
    <div className="App">

      <AuthProvider>
        <BrowserRouter>
          <Header></Header>

          <Switch>

            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/products">
              <Products></Products>
            </Route>


            <PrivateRoute path="/buy/:buyId">
              <BuyNow></BuyNow>
            </PrivateRoute>



            <Route exact path="/contact">
              <Contact></Contact>
            </Route>

            <AdminRoute path="/adminpannel">
              <AdminPannel></AdminPannel>
            </AdminRoute>


            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>



            <Route exact path="/login">
              <Login></Login>
            </Route>

            <Route exact path="/register">
              <Register></Register>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>


          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
