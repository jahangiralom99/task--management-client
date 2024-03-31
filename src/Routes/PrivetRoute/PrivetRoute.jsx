import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import LoadingCompo from "../../components/Common/LoadingCompo";
import PropTypes from "prop-types";

const PrivetRoute = ({ children }) => {
  const { user, loader } = useAuth();
  const location = useLocation();

  // Loader for user
  if (loader) return <LoadingCompo />;

  // if not user go to login page and set PathName
  if (!user) return <Navigate state={location.pathname} to="/login"></Navigate>;

  return children;
};

PrivetRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivetRoute;
