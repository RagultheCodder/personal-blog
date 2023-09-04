import AidsAndProsthetics from '../../components/admission/AidsAndProsthetics';
import NextOfKin from '../../components/admission/NextOfKin';
import OrientationToWard from '../../components/admission/OrientationToWard';
import PatientAdmission from '../../components/admission/PatientAdmission';

const Admission = () => {
  return (
    <>
      <div>
        <PatientAdmission />
      </div>

      <div className="mt-3">
        <NextOfKin />
      </div>

      <div className="mt-3">
        <AidsAndProsthetics />
      </div>

      <div className="mt-3">
        <OrientationToWard />
      </div>
    </>
  );
};

export default Admission;
