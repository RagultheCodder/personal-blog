import FieldSet from '../../components/common/FieldSet';
import '../../scss/admission.scss';
import MedicationAdminRecord from './medicationAdminRecord';
import { useContext } from 'react';
import { PatientContext } from '../../context/PatientContext';
import MedicationCommon from '../../components/common/medication';

const MedicationRecord = () => {
  const patientContext = useContext(PatientContext);
  return (
    <FieldSet title="Medication Record">
      <>
        <div>
          <p className="normal-text">Scheduled</p>
          <MedicationCommon
            medRecord={patientContext.medicationRecord}
            stateText="medicationRecord"
          />
        </div>
        <div className="mt-4">
          <p className="normal-text">PRN</p>
          <MedicationCommon
            medRecord={patientContext.prnRecord}
            stateText="prnRecord"
          />{' '}
        </div>
        <div className="mt-4">
          <p className="normal-text">Medication Administration Record</p>
          <MedicationAdminRecord />
        </div>
      </>
    </FieldSet>
  );
};

export default MedicationRecord;
