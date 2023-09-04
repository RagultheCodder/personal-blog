/* eslint-disable max-len */
import FieldSet from '../common/FieldSet';
import { useContext } from 'react';
import '../../scss/formInput.scss';
import TextArea from '../common/TextArea';
import { PatientContext } from '../../context/PatientContext';
import Add from '../../assets/add.svg';
import CustomAccordion from '../common/CustomAccordion';
import FormInput from '../common/FormInput';

const PatientObservation = () => {
  const patientContext = useContext(PatientContext);

  return (
    <FieldSet title="Observation">
      <>
        <button
          className="btn btn-outline-primary ms-auto d-block mb-3"
          onClick={() => patientContext.addRow('observation')}
        >
          <div className="d-flex justify-content-between align-items-center">
            <img src={Add} className="img-fluid pe-4" />
            Add New Observation
          </div>
        </button>

        {patientContext.observation.map((ele) => (
          <div key={ele.id}>
            <CustomAccordion
              id={`observation-${ele.id}`}
              headerTitle={ele.data.observationDate}
            >
              <div className="row mb-4 mt-4">
                <div className="col position-relative mb-4">
                  <FormInput
                    type="text"
                    value={ele.data.temperature}
                    name="temperature"
                    id={`temperature-${ele.id}`}
                    onChange={(e) =>
                      patientContext.handleInput('observation', e, ele.id)
                    }
                    className={`input-style ${
                      ele.data.temperature && 'input-style-valid'
                    }`}
                    label="Temperature"
                    noLabel={false}
                    error={patientContext.validator.current.message(
                      'temperature',
                      ele.data.temperature,
                      'required',
                    )}
                  />
                </div>
                <div className="col position-relative mb-4">
                  <FormInput
                    type="text"
                    value={ele.data.bloodPressure}
                    name="bloodPressure"
                    id={`bloodPressure-${ele.id}`}
                    onChange={(e) =>
                      patientContext.handleInput('observation', e, ele.id)
                    }
                    className={`input-style ${
                      ele.data.bloodPressure && 'input-style-valid'
                    }`}
                    label="Blood Pressure"
                    noLabel={false}
                    error={patientContext.validator.current.message(
                      'bloodPressure',
                      ele.data.bloodPressure,
                      'required',
                    )}
                  />
                </div>
                <div className="col position-relative mb-4">
                  <FormInput
                    type="text"
                    value={ele.data.heartRate}
                    name="heartRate"
                    id={`heartRate-${ele.id}`}
                    onChange={(e) =>
                      patientContext.handleInput('observation', e, ele.id)
                    }
                    className={`input-style ${
                      ele.data.heartRate && 'input-style-valid'
                    }`}
                    label="Heart Rate"
                    noLabel={false}
                    error={patientContext.validator.current.message(
                      'heartRate',
                      ele.data.heartRate,
                      'required',
                    )}
                  />
                </div>
              </div>

              <div className="row mb-4">
                <div className="col position-relative mb-4">
                  <FormInput
                    type="text"
                    value={ele.data.spo}
                    name="spo"
                    id={`spo-${ele.id}`}
                    onChange={(e) =>
                      patientContext.handleInput('observation', e, ele.id)
                    }
                    className={`input-style ${
                      ele.data.spo && 'input-style-valid'
                    }`}
                    label="SPo2"
                    noLabel={false}
                    error={patientContext.validator.current.message(
                      'spo',
                      ele.data.spo,
                      'required',
                    )}
                  />
                </div>
                <div className="col position-relative mb-4">
                  <FormInput
                    type="text"
                    value={ele.data.oxygen}
                    name="oxygen"
                    id={`oxygen-${ele.id}`}
                    onChange={(e) =>
                      patientContext.handleInput('observation', e, ele.id)
                    }
                    className={`input-style ${
                      ele.data.oxygen && 'input-style-valid'
                    }`}
                    label="Oxygen Flow Rate"
                    noLabel={false}
                    error={patientContext.validator.current.message(
                      'oxygen',
                      ele.data.oxygen,
                      'required',
                    )}
                  />
                </div>
                <div className="col position-relative mb-4">
                  <FormInput
                    type="text"
                    value={ele.data.exercise}
                    name="exercise"
                    id={`exercise-${ele.id}`}
                    onChange={(e) =>
                      patientContext.handleInput('observation', e, ele.id)
                    }
                    className={`input-style ${
                      ele.data.exercise && 'input-style-valid'
                    }`}
                    label="Recording of exercise"
                    noLabel={false}
                    error={patientContext.validator.current.message(
                      'exercise',
                      ele.data.exercise,
                      'required',
                    )}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col position-relative mb-4">
                  <TextArea
                    value={ele.data.notes}
                    name="notes"
                    onChange={(e) =>
                      patientContext.handleInput('observation', e, ele.id)
                    }
                    className={`large-input-style no-scroll ${
                      ele.data.notes && 'large-input-style-valid no-scroll'
                    }`}
                    label="Notes and Comments "
                    noLabel={false}
                    style={{ width: '93%' }}
                    id={`observation-notes-${ele.id}`}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 d-flex position-relative align-items-center">
                  <input
                    type="range"
                    className="w-75"
                    min="0"
                    max="10"
                    id={`painLevel-${ele.id}`}
                    name="painLevel"
                    onChange={(e) =>
                      patientContext.handleInput('observation', e, ele.id)
                    }
                    value={ele.data.painLevel}
                  />
                  <span className="ms-4 border border-primary py-1 px-3">
                    {ele.data.painLevel}
                  </span>
                </div>
                <div className="col-md-8">
                  <TextArea
                    value={ele.data.painLevelNotes}
                    name="painLevelNotes"
                    onChange={(e) =>
                      patientContext.handleInput('observation', e, ele.id)
                    }
                    className={`large-input-style no-scroll ${
                      ele.data.painLevelNotes &&
                      'large-input-style-valid no-scroll'
                    }`}
                    label="Pain Level Notes "
                    noLabel={false}
                    style={{ width: '90%' }}
                    id={`painLevelNotes-${ele.id}`}
                  />
                </div>
              </div>
            </CustomAccordion>
          </div>
        ))}
      </>
    </FieldSet>
  );
};

export default PatientObservation;
