import { Outlet } from 'react-router';
import '../scss/header.scss';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    navigate('/patient-onboard');
  };

  return (
    <div className="header">
      <div className="p-3 d-flex justify-content-between align-items-center">
        <p className="mb-0 header-text">
          <strong>AEHR - Student Dashboard</strong>
        </p>
        {location.pathname !== '/patient-onboard' && (
          <button
            className="btn text-white text-center rounded header-button"
            type="button"
            onClick={() => handleClick()}
          >
            + Add Patient
          </button>
        )}
      </div>
      <hr className="m-0 header-hr" />
      <Outlet />
    </div>
  );
};

export default Header;
