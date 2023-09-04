import PatientDiagnosis from '../../components/admission/PatientDiagnosis';
import PatientObservation from '../../components/admission/PatientObservation';

const DiagnosisAndObservation = () => {
  return (
    <>
      <div>
        <PatientDiagnosis />
      </div>
      <div className="mt-4">
        <PatientObservation />
      </div>
    </>
  );
};

export default DiagnosisAndObservation;
