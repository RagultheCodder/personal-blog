import { useContext } from 'react';
import '../../scss/customRows.scss';
import FieldSet from '../common/FieldSet';
import { PatientContext } from '../../context/PatientContext';
import { AddAsset, RemoveAsset } from '../../assets/svg';

const PatientMedicalSummary = () => {
  const patientContext = useContext(PatientContext);

  return (
    <FieldSet title="Medical Summary">
      <>
        <div className="form-check form-switch align-items-center toggle-text-style pb-4">
          <input
            className="form-check-input toggle-style mt-0"
            type="checkbox"
            role="switch"
            checked={patientContext.medicalSummaryCheckBox}
            onChange={() => patientContext.handleCheckBox('medicalSummary')}
          />
          <label className="form-check-label ms-2">
            If you have medical summary fill the below other wise ignore
          </label>
        </div>
        {patientContext.medicalSummaryCheckBox && (
          <div className="row table-border-style">
            <div className="col py-2 font-style">
              Medication Name
              <span className="mandatory-style"> *</span>
            </div>
            <div className="col py-2 font-style">
              Dose Information
              <span className="mandatory-style"> *</span>
            </div>
            <div className="col-4 py-2 font-style">
              Reason For Taking The Medication
              <span className="mandatory-style"> *</span>
            </div>
            <div className="col"></div>
          </div>
        )}

        {patientContext.medicalSummaryCheckBox &&
          patientContext.medicalSummary.map((ele) => (
            <div key={ele.id}>
              <div
                className={`row mt-3 align-items-center ${
                  patientContext.medicalSummary.length > 1 && 'line-style'
                }`}
              >
                <div className="col">
                  <input
                    type="text"
                    value={ele.data.medicationName ?? ''}
                    name="medicationName"
                    placeholder="Medication Name"
                    onChange={(e) =>
                      patientContext.handleInput('medicalSummary', e, ele.id)
                    }
                    className="first-box-style"
                  />
                </div>
                <div className="col">
                  <input
                    value={ele.data.doseInformation ?? ''}
                    placeholder="Dose Information"
                    name="doseInformation"
                    onChange={(e) =>
                      patientContext.handleInput('medicalSummary', e, ele.id)
                    }
                    className="first-box-style"
                  />
                </div>
                <div className="col-4">
                  <input
                    value={ele.data.reason ?? ''}
                    placeholder="Reason For Taking The Medication"
                    name="reason"
                    onChange={(e) =>
                      patientContext.handleInput('medicalSummary', e, ele.id)
                    }
                    className="second-box-style"
                  />
                </div>
                <div className="col">
                  {ele.id === 1 ? (
                    <span
                      onClick={() => patientContext.addRow('medicalSummary')}
                      className="cursor-pointer"
                    >
                      <AddAsset />
                    </span>
                  ) : (
                    <div>
                      <span
                        onClick={() => patientContext.addRow('medicalSummary')}
                        className="cursor-pointer pe-5"
                      >
                        <AddAsset />
                      </span>

                      <span
                        onClick={() =>
                          patientContext.deleteRow('medicalSummary', ele.id)
                        }
                        className="cursor-pointer"
                      >
                        <RemoveAsset />
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
      </>
    </FieldSet>
  );
};

export default PatientMedicalSummary;
