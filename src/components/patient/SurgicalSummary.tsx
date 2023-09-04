import { useContext } from 'react';
import '../../scss/customRows.scss';
import FieldSet from '../common/FieldSet';
import DatePicker from 'react-datepicker';
import { PatientContext } from '../../context/PatientContext';
import { AddAsset, RemoveAsset } from '../../assets/svg';

const SurgicalSummary = () => {
  const patientContext = useContext(PatientContext);

  return (
    <FieldSet title="Surgical Summary">
      <>
        <div className="form-check form-switch align-items-center toggle-text-style pb-4">
          <input
            className="form-check-input toggle-style mt-0"
            type="checkbox"
            role="switch"
            checked={patientContext.surgicalSummaryCheckBox}
            onChange={() => patientContext.handleCheckBox('surgicalSummary')}
          />
          <label className="form-check-label ms-2">
            If you have surgical summary fill the below other wise ignore
          </label>
        </div>
        {patientContext.surgicalSummaryCheckBox && (
          <div className="row table-border-style">
            <div className="col py-2 font-style">
              Surgery Performed/Procedure name
              <span className="mandatory-style"> *</span>
            </div>
            <div className="col py-2 font-style">
              Surgery Date
              <span className="mandatory-style"> *</span>
            </div>
            <div className="col-4 py-2 font-style">
              Reason For the Surgery
              <span className="mandatory-style"> *</span>
            </div>
            <div className="col"></div>
          </div>
        )}

        {patientContext.surgicalSummaryCheckBox &&
          patientContext.surgicalSummary.map((ele) => (
            <div key={ele.id}>
              <div
                className={`row mt-3 align-items-center ${
                  patientContext.surgicalSummary.length > 1 && 'line-style'
                }`}
              >
                <div className="col">
                  <input
                    type="text"
                    value={ele.data.surgeryName ?? ''}
                    name="surgeryName"
                    placeholder="Surgery Name"
                    onChange={(e) =>
                      patientContext.handleInput('surgicalSummary', e, ele.id)
                    }
                    className="first-box-style"
                  />
                </div>
                <div className="col">
                  <div className="col-md-4">
                    <DatePicker
                      selected={ele.data.surgeryDate}
                      onChange={(e) =>
                        patientContext.handleDate(
                          'surgicalSummary',
                          'surgeryDate',
                          e as Date,
                          ele.id,
                        )
                      }
                      maxDate={new Date()}
                      name="surgeryDate"
                      className="first-box-style"
                      placeholderText="Surgery Date"
                      dateFormat="MMM d, yyyy"
                    />
                  </div>
                </div>
                <div className="col-4">
                  <input
                    value={ele.data.reason ?? ''}
                    placeholder="Reason For Surgery"
                    name="reason"
                    onChange={(e) =>
                      patientContext.handleInput('surgicalSummary', e, ele.id)
                    }
                    className="second-box-style"
                  />
                </div>
                <div className="col">
                  {ele.id === 1 ? (
                    <span
                      onClick={() => patientContext.addRow('surgicalSummary')}
                      className="cursor-pointer"
                    >
                      <AddAsset />
                    </span>
                  ) : (
                    <div>
                      <span
                        onClick={() => patientContext.addRow('surgicalSummary')}
                        className="cursor-pointer pe-5"
                      >
                        <AddAsset />
                      </span>

                      <span
                        onClick={() =>
                          patientContext.deleteRow('surgicalSummary', ele.id)
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

export default SurgicalSummary;
