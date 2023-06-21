import "./PageNotFound.scss";
import { Link, useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className="pagenotfound">
      <h2 className="pagenotfound__title">404</h2>
      <h3 className="pagenotfound__subtitle">Страница не найдена</h3>
      <Link
        className="text-link pagenotfound__button"
        onClick={() => {
          navigate(-1);
        }}
      >
        Назад
      </Link>
    </div>
  );
}

export default PageNotFound;
