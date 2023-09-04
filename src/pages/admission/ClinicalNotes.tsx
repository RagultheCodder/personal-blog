import { useContext } from 'react';
import FieldSet from '../../components/common/FieldSet';
import { PatientContext } from '../../context/PatientContext';
import DatePicker from 'react-datepicker';
import { AddAsset, RemoveAsset } from '../../assets/svg';

const ClinicalNotes = () => {
  const patientContext = useContext(PatientContext);
  return (
    <FieldSet title="Clinical Notes">
      <>
        <div className="row table-border-style">
          <div className="col-sm-3 py-2 font-style">
            Document captured by <span className="mandatory-style"> *</span>
          </div>
          <div className="col-sm-3 py-2 font-style">
            Date and Time <span className="mandatory-style"> *</span>
          </div>
          <div className="col-sm-4 py-2 font-style">
            Clinical Note <span className="mandatory-style"> *</span>
          </div>
          <div className="col-sm-2"></div>
        </div>

        {patientContext.clinicalNotes.map((ele) => (
          <div key={ele.id} className="mt-3">
            <div
              className={`row align-items-center ${
                patientContext.clinicalNotes.length > 1 && 'line-style'
              }`}
            >
              <div className="col-sm-3">
                <input
                  type="text"
                  value={ele.data.documentCapturedBy}
                  name="documentCapturedBy"
                  className="first-box-style w-100"
                  id="documentCapturedBy"
                  placeholder="Name"
                  onChange={(e) =>
                    patientContext.handleInput('clinicalNotes', e, ele.id)
                  }
                />
              </div>
              <div className="col-sm-3">
                <DatePicker
                  selected={ele.data.dateAndTime}
                  onChange={(e) =>
                    patientContext.handleDate(
                      'clinicalNotes',
                      'dateAndTime',
                      e as Date,
                      ele.id,
                    )
                  }
                  maxDate={new Date()}
                  name="dateAndTime"
                  placeholderText="Date"
                  className="input-style"
                  dateFormat="MMM d, yyyy"
                />
              </div>
              <div className="col-sm-4">
                <input
                  type="text"
                  value={ele.data.note}
                  name="note"
                  id="note"
                  placeholder="Reason for surgery"
                  onChange={(e) =>
                    patientContext.handleInput('clinicalNotes', e, ele.id)
                  }
                  className="first-box-style w-100"
                />
              </div>
              <div className="col-sm-2">
                {ele.id === 1 ? (
                  <span
                    onClick={() => patientContext.addRow('clinicalNotes')}
                    className="cursor-pointer"
                  >
                    <AddAsset />
                  </span>
                ) : (
                  <div>
                    <span
                      onClick={() => patientContext.addRow('clinicalNotes')}
                      className="cursor-pointer pe-5"
                    >
                      <AddAsset />
                    </span>

                    <span
                      onClick={() =>
                        patientContext.deleteRow('clinicalNotes', ele.id)
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

export default ClinicalNotes;
