import React from "react";
import ReactDOM from "react-dom";

const Info = (props) => (
  <div>
    <h1>info</h1>
    <p>the info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      <p>this is private info. please dont share</p>
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated && <WrappedComponent {...props} />}
      {!props.isAuthenticated && "you are not authenticated"}
    </div>
  );
};

// const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(
//   <AdminInfo info="there are the details" />,
//   document.getElementById("app")
// );

ReactDOM.render(
  <AuthInfo isAuthenticated={false} info="there are the details" />,
  document.getElementById("app")
);
