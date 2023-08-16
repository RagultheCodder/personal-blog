import { stepers } from '../../config/constant';
import '../../scss/patientCareDetails.scss';
import PatientHeader from './PatientHeader';
import PatientFooter from './PatientFooter';
// import { usePatientContext } from '../../context/PatientContext';
import Demographics from './Demographics';
import PatientOnboard from './PatientOnboard';
import BreadCrumbs from '../../components/common/BreadCrumbs';
import PatientSummary from './Summary';
import PatientAllergy from '../../components/PatientAllergy';
import DiagnosisAndObservation from './DiagnosisAndObservation';
import { useLocation, useNavigate } from 'react-router-dom';
import Stepper from '../../components/Stepper';
import usePatientData from '../../hook/usePatientData';
import ErrorPage from '../../error-page';

const PatientCareDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { sideNav, selectedComponent, selectComponent, handleNext } =
    usePatientData();

  location.pathname.substring(location.pathname.lastIndexOf('/') + 1);

  const renderChild = (child: number) => {
    const name = stepers[child]?.name;
    switch (name) {
      case 'Basic Details':
        return <PatientOnboard />;
      case 'Patient Demographics':
        return <Demographics />;
      case 'Medical Summary':
        return <PatientSummary />;
      case 'Allergies':
        return <PatientAllergy />;
      case 'Observation':
        return <DiagnosisAndObservation />;
      case '':
        navigate('/students', { replace: true });
        break;
      default:
        return <ErrorPage />;
    }
  };

  return (
    <div className="container-fluid">
      <div className="row patient-care-wrapper">
        <div className="col-md-4 col-xl-2 pt-5">
          <Stepper data={sideNav} selectComponent={selectComponent} />
        </div>
        <div
          className="
        col-md-8 col-xl-10 left-boder position-relative d-flex flex-column px-0 pt-5"
        >
          <div className="patient-care-header bg-white">
            <BreadCrumbs
              child1={stepers[selectedComponent]?.headerTitle}
              child2={stepers[selectedComponent]?.name}
            />
            {selectedComponent > 1 && <PatientHeader />}
          </div>
          <div className="patient-care-content flex-grow-1">
            {renderChild(selectedComponent)}
          </div>
          <div className="patient-care-footer bg-white w-100 position-absolute bottom-0">
            <PatientFooter
              handleNext={handleNext}
              selectedComponent={selectedComponent}
              isPatientDetails={selectedComponent === 1 ? true : false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientCareDetails;
