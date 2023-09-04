import '../../scss/customRows.scss';
import DatePicker from 'react-datepicker';
import '../../scss/admission.scss';
import { AddAsset, RemoveAsset } from '../../assets/svg';
import { useContext } from 'react';
import { PatientContext } from '../../context/PatientContext';
import FormInput from '../common/FormInput';

const PatientCare = () => {
  const patientContext = useContext(PatientContext);
  return (
    <>
      <p className="normal-text">Care Type</p>
      <div className="row table-border-style">
        <div className="col py-2 font-style">
          Care Start Date
          <span className="mandatory-style"> *</span>
        </div>
        <div className="col py-2 font-style">
          Care Type
          <span className="mandatory-style"> *</span>
        </div>
        <div className="col-4 py-2 font-style">
          Care Notes
          <span className="mandatory-style"> *</span>
        </div>
        <div className="col"></div>
      </div>

      {patientContext.care.map((ele) => (
        <div key={ele.id}>
          <div
            className={`row mt-3 align-items-center ${
              ele.data.careStartDate && 'line-style'
            }`}
          >
            <div className="col">
              <div className="col-md-4">
                <DatePicker
                  selected={ele.data.careStartDate}
                  onChange={(e) =>
                    patientContext.handleDate(
                      'care',
                      'careStartDate',
                      e as Date,
                      ele.id,
                    )
                  }
                  maxDate={new Date()}
                  name="careStartDate"
                  id="careStartDate"
                  className="first-box-style"
                  placeholderText="Care Start Date"
                />
              </div>
            </div>
            <div className="col">
              <FormInput
                type="text"
                value={ele.data.careType ?? ''}
                name="careType"
                placeholder="Care Type Details"
                onChange={(e) => patientContext.handleInput('care', e, ele.id)}
                className="first-box-style"
                noLabel={true}
              />
            </div>
            <div className="col-4">
              <FormInput
                type="text"
                value={ele.data.careNotes ?? ''}
                placeholder="Care Notes and Information"
                name="careNotes"
                onChange={(e) => patientContext.handleInput('care', e, ele.id)}
                className="second-box-style"
                noLabel={true}
              />
            </div>
            <div className="col">
              {ele.id === 1 ? (
                <span
                  onClick={() => patientContext.addRow('care')}
                  className="cursor-pointer"
                >
                  <AddAsset />
                </span>
              ) : (
                <div>
                  <span
                    onClick={() => patientContext.addRow('care')}
                    className="cursor-pointer pe-5"
                  >
                    <AddAsset />
                  </span>

                  <span
                    onClick={() => patientContext.deleteRow('care', ele.id)}
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
  );
};

export default PatientCare;
