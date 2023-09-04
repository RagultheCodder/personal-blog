import { Outlet } from 'react-router';
import '../scss/header.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { initialState, patientRoutes } from '../config/constant';
import { useContext } from 'react';
import { PatientContext } from '../context/PatientContext';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const patientContext = useContext(PatientContext);

  const getName = () => {
    const route = location.pathname.substring(
      location.pathname.lastIndexOf('/') + 1,
    );

    if (!route || route === 'patients') return 'Student Dashboard';

    const headerText = initialState.steppers.find(
      (x) => x.id === patientContext.selectedComponent,
    )?.headerTitle;

    if (!headerText) return 'Student Dashboard';
    return headerText;
  };

  const handleClick = () => {
    navigate('/patient/create');
  };

  const route = location.pathname.split('/')?.[2];

  return (
    <div className="header">
      <div className="p-3 d-flex justify-content-between align-items-center">
        <p className="mb-0 header-text">
          <strong>AEHR - {getName()}</strong>
        </p>
        {!patientRoutes.includes(route) && (
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
