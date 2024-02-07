import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

// redirects to login page if user is not logged

const privateRoute = (Component) => {
  const Route = (props) => {
    // const auth = useSelector((state) => state.auth);
    const token = localStorage.getItem("token")
    console.log(token);
    return token ?<Component {...props} />: <Navigate to="/" />;
  };

  return Route;
};

export default privateRoute;