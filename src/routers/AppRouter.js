import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import AddExpense from "../components/AddExpense";
import EditExpense from "../components/EditExpense";
import ExpenseDashboard from "../components/ExpenseDashboard";
import Header from "../components/Header";
import Help from "../components/Help";
import NotFound from "../components/NotFound";
import { LoginPage } from "../components/LoginPage";

const AppRouter = () => (
  <Router>
    <div>
      <Header />
      <NavLink
        to="/home"
        className={({ isActive }) => {
          return isActive ? "is-active" : undefined;
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/create"
        className={({ isActive }) => {
          return isActive ? "is-active" : undefined;
        }}
      >
        Create Expense
      </NavLink>
      <NavLink
        to="/help"
        className={({ isActive }) => {
          return isActive ? "is-active" : undefined;
        }}
      >
        Help
      </NavLink>
    </div>
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} exact={true} />
        <Route path="/home" element={<ExpenseDashboard />} />
        <Route path="/create" element={<AddExpense />} />
        <Route path="/help" element={<Help />} />
        <Route path={`/edit/:id`} element={<EditExpense />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  </Router>
);

export default AppRouter;
