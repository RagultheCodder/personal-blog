import PatientDiagnosis from '../../components/PatientDiagnosis';
import PatientObservation from '../../components/PatientObservation';

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
