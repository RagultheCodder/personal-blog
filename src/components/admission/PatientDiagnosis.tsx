import { useContext } from 'react';
import FieldSet from '../common/FieldSet';
import DatePicker from 'react-datepicker';
import CustomAccordion from '../common/CustomAccordion';
import FormInput from '../common/FormInput';
import TextArea from '../common/TextArea';
import { PatientContext } from '../../context/PatientContext';
import Add from '../../assets/add.svg';

const PatientDiagnosis = () => {
  const patientContext = useContext(PatientContext);

  return (
    <FieldSet title="Diagnosis">
      <>
        <button
          className="btn btn-outline-primary ms-auto d-block mb-3"
          onClick={() => patientContext.addRow('diagnosis')}
        >
          <div className="d-flex justify-content-between align-items-center">
            <img src={Add} className="img-fluid pe-4" />
            Add New Diagnosis
          </div>
        </button>
        {patientContext.diagnosis.map((ele) => (
          <div key={ele.id}>
            <CustomAccordion
              id={`diagnosis-${ele.id}`}
              headerTitle={ele.data.diagnosisDate}
            >
              <div className="row mb-4 mt-4">
                <div className="col position-relative mb-4">
                  <FormInput
                    className={`input-style ${
                      ele.data.diagnosisSuggested && 'input-style-valid'
                    }`}
                    type="text"
                    value={ele.data.diagnosisSuggested}
                    name="diagnosisSuggested"
                    id={`diagnosisSuggested-${ele.id}`}
                    label="Diagnosis Suggested "
                    noLabel={false}
                    onChange={(e) =>
                      patientContext.handleInput('diagnosis', e, ele.id)
                    }
                  />
                </div>
                <div className="col position-relative mb-4">
                  <FormInput
                    value={ele.data.suggestedBy}
                    name="suggestedBy"
                    onChange={(e) =>
                      patientContext.handleInput('diagnosis', e, ele.id)
                    }
                    className={`input-style ${
                      ele.data.suggestedBy && 'input-style-valid'
                    }`}
                    label="Suggested By "
                    noLabel={false}
                    id={`suggestedBy-${ele.id}`}
                  />
                </div>
                <div className="col-md-4 position-relative mb-4">
                  <DatePicker
                    selected={ele.data.suggestedOn}
                    onChange={(e) =>
                      patientContext.handleDate(
                        'diagnosis',
                        'suggestedOn',
                        e as Date,
                        ele.id,
                      )
                    }
                    maxDate={new Date()}
                    name="suggestedOn"
                    className={`input-style ${
                      ele.data.suggestedBy && 'input-style-valid'
                    }`}
                    id={`suggestedOn-${ele.id}`}
                    dateFormat="MMM d, yyyy"
                  />
                  <>
                    <label className="label">
                      Suggested On<span className="icon-style">*</span>
                    </label>
                  </>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col position-relative">
                  <TextArea
                    value={ele.data.notes}
                    name="notes"
                    onChange={(e) =>
                      patientContext.handleInput('diagnosis', e, ele.id)
                    }
                    className={`large-input-style no-scroll ${
                      ele.data.notes && 'input-style-valid'
                    }`}
                    label="Notes and Comments "
                    noLabel={false}
                    style={{ width: '92%' }}
                    id={`diagnosis-notes-${ele.id}`}
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

export default PatientDiagnosis;
