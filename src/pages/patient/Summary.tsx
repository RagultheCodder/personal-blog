import PatientMedicalSummary from '../../components/MedicalSummary';
import SurgicalSummary from '../../components/SurgicalSummary';

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
