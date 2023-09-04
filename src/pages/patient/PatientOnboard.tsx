import { useContext } from 'react';
import '../../scss/patientOnboard.scss';
import Select from 'react-select';
import FieldSet from '../../components/common/FieldSet';
import FormInput from '../../components/common/FormInput';
import TextArea from '../../components/common/TextArea';
import '../../scss/fieldset.scss';
import DatePicker from 'react-datepicker';
import { PatientContext } from '../../context/PatientContext';
import { genders } from '../../config/constant';

const PatientOnboard = () => {
  const patientContext = useContext(PatientContext);

  return (
    <FieldSet title="Patient Basic Details">
      <div className="patient-onboard-form">
        <div className="row ms-4 mb-5">
          <div className="col-md-4 position-relative">
            <FormInput
              className={`input-style w-75 ${
                patientContext.patientBasicDetails.familyName &&
                'input-style-valid'
              }`}
              type="text"
              name="familyName"
              id="familyName"
              value={patientContext.patientBasicDetails.familyName ?? ''}
              label="Family Name "
              noLabel={false}
              onChange={(e) =>
                patientContext.handleInput('patientBasicDetails', e)
              }
              error={patientContext.validator.current.message(
                'familyName',
                patientContext.patientBasicDetails.familyName,
                'required',
              )}
            />
          </div>

          <div className="col-md-4 position-relative">
            <FormInput
              className={`input-style w-75 ${
                patientContext.patientBasicDetails.givenName &&
                'input-style-valid'
              }`}
              type="text"
              name="givenName"
              id="givenName"
              value={patientContext.patientBasicDetails.givenName ?? ''}
              label="Given Name "
              noLabel={false}
              onChange={(e) =>
                patientContext.handleInput('patientBasicDetails', e)
              }
              error={patientContext.validator.current.message(
                'givenName',
                patientContext.patientBasicDetails.givenName,
                'required',
              )}
            />
          </div>

          <div className="col-md-4 position-relative ">
            <Select
              value={patientContext.patientBasicDetails.gender}
              onChange={(e) =>
                patientContext.handleDropDown(
                  'patientBasicDetails',
                  'gender',
                  e,
                )
              }
              options={genders}
              className="gender w-75"
              name="gender"
            />
            <>
              <label className="label">
                Sex <span className="icon-style">*</span>
              </label>
            </>
            {patientContext.validator.current.message(
              'gender',
              patientContext.patientBasicDetails.gender.value,
              'required',
            )}
          </div>
        </div>

        <div className="row ms-4 mb-5">
          <div className="col-md-4 position-relative">
            <DatePicker
              selected={patientContext.patientBasicDetails.dob}
              onChange={(e) =>
                patientContext.handleDate(
                  'patientBasicDetails',
                  'dob',
                  e as Date,
                )
              }
              maxDate={new Date()}
              name="dob"
              className={'input-style'}
              dateFormat="MMM d, yyyy"
            />
            <>
              <label className="label">
                Date of Birth <span className="icon-style">*</span>
              </label>
            </>
          </div>

          <div className="col-md-4 position-relative">
            <FormInput
              className={`input-style w-75 ${
                patientContext.patientBasicDetails.age &&
                'input-style-valid'
              }`}
              type="text"
              name="age"
              id="age"
              value={patientContext.patientBasicDetails.age ?? 2}
              readOnly
              label="age"
              noLabel={false}
            />
          </div>

          <div className="col-md-4 position-relative">
            <TextArea
              className={`input-group-textarea w-75 ${
                patientContext.patientBasicDetails.address &&
                'input-group-textarea-valid'
              }`}
              name="address"
              id="address"
              value={patientContext.patientBasicDetails.address ?? ''}
              rows={5}
              label="Residential Address"
              noLabel={false}
              onChange={(e) =>
                patientContext.handleInput('patientBasicDetails', e)
              }
              error={patientContext.validator.current.message(
                'address',
                patientContext.patientBasicDetails.address,
                'required',
              )}
            />
          </div>
        </div>
      </div>
    </FieldSet>
  );
};

export default PatientOnboard;
