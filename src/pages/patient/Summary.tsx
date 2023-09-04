import PatientMedicalSummary from '../../components/patient/MedicalSummary';
import SurgicalSummary from '../../components/patient/SurgicalSummary';

const PatientSummary = () => {
  return (
    <>
      <div>
        <PatientMedicalSummary />
      </div>
      <div className="mt-4">
        <SurgicalSummary />
      </div>
    </>
  );
};

export default PatientSummary;
