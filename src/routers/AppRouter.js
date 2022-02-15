import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { connect } from "react-redux";
import {createBrowserHistory} from "history";
import AddExpense from "../components/AddExpense";
import EditExpense from "../components/EditExpense";
import ExpenseDashboard from "../components/ExpenseDashboard";
import Header from "../components/Header";
import NotFound from "../components/NotFound";
import LoginPage from "../components/LoginPage";

export const history = createBrowserHistory();

const privateHome = ({ 
  isAuthenticated,
})=>{
  return isAuthenticated ? <ExpenseDashboard /> : <Navigate to="/" />;
}

const privateAddExpense = ({ 
  isAuthenticated,
})=>{
  return isAuthenticated ? <AddExpense /> : <Navigate to="/" />;
}

const privateEditExpense = ({ 
  isAuthenticated,
})=>{
  return isAuthenticated ? <EditExpense/> : <Navigate to="/" />;
}

const publicLogin = ({
  isAuthenticated,
})=>{
  return isAuthenticated ? <Navigate to="/home"/> : <LoginPage/>
}

const mapStateToProps = (state)=>({
  isAuthenticated: !!state.auth.uid
});

const PrivateHome = connect(mapStateToProps)(privateHome);
const PrivateAddExpense = connect(mapStateToProps)(privateAddExpense);
const PrivateEditExpense = connect(mapStateToProps)(privateEditExpense);
const PublicLogin = connect(mapStateToProps)(publicLogin);


const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
    </div>
    <div>
      <Routes>
        <Route path="/" element={<PublicLogin />} exact={true} />
        <Route path="/home" element={<PrivateHome/>} />
        <Route path="/create" element={<PrivateAddExpense/>} />
        <Route path={`/edit/:id`} element={<PrivateEditExpense />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default AppRouter;
