import { useContext } from 'react';
import '../../scss/customRows.scss';
import Select from 'react-select';
import FieldSet from '../../components/common/FieldSet';
import { allergyOptions, severityOptions } from '../../config/constant';
import { PatientContext } from '../../context/PatientContext';
import { AddAsset, RemoveAsset } from '../../assets/svg';

const PatientAllergy = () => {
  const patientContext = useContext(PatientContext);

  return (
    <FieldSet title="Allergies">
      <>
        <div className="form-check form-switch align-items-center toggle-text-style pb-4">
          <input
            className="form-check-input toggle-style mt-0"
            type="checkbox"
            role="switch"
            checked={patientContext.allergyCheckBox}
            onChange={() => patientContext.handleCheckBox('allergy')}
          />
          <label className="form-check-label ms-2">Nil Known Allergies</label>
        </div>
        {patientContext.allergyCheckBox && (
          <div className="row table-border-style">
            <div className="col py-2 font-style">
              Substance
              <span className="mandatory-style"> *</span>
            </div>
            <div className="col py-2 font-style">
              Reaction
              <span className="mandatory-style"> *</span>
            </div>
            <div className="col py-2 font-style">
              Symptoms
              <span className="mandatory-style"> *</span>
            </div>
            <div className="col py-2 font-style">
              Severity
              <span className="mandatory-style"> *</span>
            </div>
            <div className="col"></div>
          </div>
        )}

        {patientContext.allergyCheckBox &&
          patientContext.allergy.map((ele) => (
            <div key={ele.id}>
              <div
                className={`row mt-3 align-items-center ${
                  patientContext.allergy.length > 1 && 'line-style'
                }`}
              >
                <div className="col">
                  {' '}
                  <input
                    type="text"
                    value={ele.data.substance ?? ''}
                    name="substance"
                    placeholder="Substance"
                    onChange={(e) =>
                      patientContext.handleInput('allergy', e, ele.id)
                    }
                    className="first-box-style"
                  />
                </div>
                <div className="col">
                  <Select
                    value={ele.data.reaction}
                    onChange={(e) =>
                      patientContext.handleDropDown(
                        'allergy',
                        'reaction',
                        e,
                        ele.id,
                      )
                    }
                    options={allergyOptions}
                    className={'select-style'}
                    name="reaction"
                  />
                </div>
                <div className="col">
                  <input
                    value={ele.data.symptoms ?? ''}
                    placeholder="Symptoms"
                    name="symptoms"
                    onChange={(e) =>
                      patientContext.handleInput('allergy', e, ele.id)
                    }
                    className="first-box-style"
                  />
                </div>
                <div className="col">
                  <Select
                    value={ele.data.severity}
                    onChange={(e) =>
                      patientContext.handleDropDown(
                        'allergy',
                        'severity',
                        e,
                        ele.id,
                      )
                    }
                    options={severityOptions}
                    className={'select-style'}
                    name="severity"
                  />
                </div>
                <div className="col">
                  {ele.id === 1 ? (
                    <span
                      onClick={() => patientContext.addRow('allergy')}
                      className="cursor-pointer"
                    >
                      <AddAsset />
                    </span>
                  ) : (
                    <div>
                      <span
                        onClick={() => patientContext.addRow('allergy')}
                        className="cursor-pointer pe-5"
                      >
                        <AddAsset />
                      </span>

                      <span
                        onClick={() =>
                          patientContext.deleteRow('allergy', ele.id)
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

export default PatientAllergy;
