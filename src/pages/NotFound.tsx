import { Link } from "react-router-dom";

const NotFound = (): JSX.Element => {
  return (
    <div>
      Page Not Found. <Link to="/">Go Home</Link>
    </div>
  );
};

export default NotFound;
