import { initialState } from '../../config/constant';
import '../../scss/patientCareDetails.scss';
import PatientHeader from './PatientHeader';
import PatientFooter from './PatientFooter';
import Demographics from './Demographics';
import PatientOnboard from './PatientOnboard';
import BreadCrumbs from '../../components/common/BreadCrumbs';
import PatientSummary from './Summary';
import PatientAllergy from './PatientAllergy';
import DiagnosisAndObservation from '../admission/DiagnosisAndObservation';
import { useLocation } from 'react-router-dom';
import Stepper from '../../components/common/Stepper';
import ErrorPage from '../../error-page';
import { useContext, useEffect } from 'react';
import { PatientContext } from '../../context/PatientContext';
import { getStudentDataById } from '../../service/PatientService';
import MedicationRecord from '../admission/medicationRecord';
import Discharge from '../admission/Discharge';
import ClinicalNotes from '../admission/ClinicalNotes';
import Admission from '../admission/AdmissionWard';
import LabTestAndReport from '../admission/LabTestAndReports';

const RenderChild = (child: number) => {
  const name = initialState.steppers.find((x) => x.id === child)?.name;

  switch (name) {
    case 'Basic Details':
      return <PatientOnboard />;
    case 'Patient Demographics':
      return <Demographics />;
    case 'Medical Summary':
      return <PatientSummary />;
    case 'Allergies':
      return <PatientAllergy />;
    case 'Medication Record':
      return <MedicationRecord />;
    case 'Diagnosis & Observation':
      return <DiagnosisAndObservation />;
    case 'Observation':
      return <DiagnosisAndObservation />;
    case 'Admission Ward':
      return <Admission />;
    case 'Clinical Notes':
      return <ClinicalNotes />;
    case 'Lab Test and Reports':
      return <LabTestAndReport />;
    case 'Discharge':
      return <Discharge />;
    default:
      return <ErrorPage />;
  }
};

const PatientCareDetails = () => {
  const location = useLocation();
  const patientContext = useContext(PatientContext);

  const route = location.pathname.substring(
    location.pathname.lastIndexOf('/') + 1,
  );

  useEffect(() => {
    if (route === 'create') {
      patientContext.updateMode('create');
    } else {
      patientContext.updateMode('edit');
      getStudentDataById(Number(route))
        .then((resp) => {
          patientContext.updatePatientDetails(resp.data);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  useEffect(() => {
    if (patientContext.value > 0) {
      patientContext.checkAndUpdateValue();
    }
  }, [patientContext.value]);

  return (
    <div className="container-fluid">
      <div className="row patient-care-wrapper">
        <div className="col-md-4 col-xl-2 pt-5">
          <Stepper />
        </div>
        <div
          className="
        col-md-8 col-xl-10 left-border position-relative d-flex flex-column px-0 pt-5"
        >
          <div className="patient-care-header bg-white">
            <BreadCrumbs
              child1={
                initialState.steppers.find(
                  (x) => x.id === patientContext.selectedComponent,
                )?.headerTitle
              }
              child2={
                initialState.steppers.find(
                  (x) => x.id === patientContext.selectedComponent,
                )?.name
              }
            />
            {patientContext.selectedComponent > 2 && <PatientHeader />}
          </div>
          <div className="patient-care-content flex-grow-1">
            {RenderChild(patientContext.selectedComponent)}
          </div>
          <div className="patient-care-footer bg-white w-100 position-absolute bottom-0">
            <PatientFooter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientCareDetails;
