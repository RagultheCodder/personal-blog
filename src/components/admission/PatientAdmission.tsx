import { useContext } from 'react';
import PatientCare from './PatientCare';
import FieldSet from '../common/FieldSet';
import FormInput from '../common/FormInput';
import TextArea from '../common/TextArea';
import DatePicker from 'react-datepicker';
import { PatientContext } from '../../context/PatientContext';

const PatientAdmission = () => {
  const patientContext = useContext(PatientContext);

  return (
    <FieldSet title="Admission Details">
      <>
        <div className=" d-flex">
          <div>
            <div className="position-relative custom-bottom-margin px-2">
              <FormInput
                name="admittingDoctor"
                id="admittingDoctor"
                value={patientContext.admissionDetails.admittingDoctor}
                className={`input-style ${
                  patientContext.admissionDetails.admittingDoctor &&
                  'input-style-valid'
                }`}
                label="Admitting Doctor "
                noLabel={false}
                onChange={(e) =>
                  patientContext.handleInput('admissionDetails', e)
                }
              />
            </div>
            <div className="position-relative custom-bottom-margin px-2">
              <DatePicker
                selected={patientContext.admissionDetails.admissionTime}
                onChange={(date) =>
                  patientContext.handleDate(
                    'admissionDetails',
                    'admissionTime',
                    date as Date,
                  )
                }
                maxDate={new Date()}
                name="admissionTime"
                className={'input-style'}
                id="admissionTime"
              />
              <>
                <label className="label">
                  Admission Date & Time <span className="icon-style">*</span>
                </label>
              </>
            </div>
            <div className="position-relative custom-bottom-margin px-2">
              <FormInput
                name="gp"
                id="gp"
                value={patientContext.admissionDetails.gp}
                className={`input-style ${
                  patientContext.admissionDetails.gp && 'input-style-valid'
                }`}
                label="GP "
                noLabel={false}
                onChange={(e) =>
                  patientContext.handleInput('admissionDetails', e)
                }
              />
            </div>
            <div className="position-relative custom-bottom-margin px-2">
              <FormInput
                name="medicareNo"
                id="medicareNo"
                value={patientContext.admissionDetails.medicareNo}
                className={`input-style ${
                  patientContext.admissionDetails.medicareNo &&
                  'input-style-valid'
                }`}
                label="Medicare No "
                noLabel={false}
                onChange={(e) =>
                  patientContext.handleInput('admissionDetails', e)
                }
              />
            </div>

            <div className="position-relative custom-bottom-margin px-2">
              <FormInput
                name="membershipNo"
                id="membershipNo"
                value={patientContext.admissionDetails.membershipNo}
                className={`input-style ${
                  patientContext.admissionDetails.membershipNo &&
                  'input-style-valid'
                }`}
                label="Membership No "
                noLabel={false}
                onChange={(e) =>
                  patientContext.handleInput('admissionDetails', e)
                }
              />
            </div>
          </div>
          <div>
            <div className="position-relative custom-bottom-margin px-2">
              <FormInput
                name="height"
                id="height"
                value={patientContext.admissionDetails.height}
                className={`input-style ${
                  patientContext.admissionDetails.height && 'input-style-valid'
                }`}
                label="Patient Height "
                noLabel={false}
                onChange={(e) =>
                  patientContext.handleInput('admissionDetails', e)
                }
              />
            </div>
            <div className="position-relative custom-bottom-margin px-2">
              <FormInput
                name="admissionProcedure"
                id="admissionProcedure"
                value={patientContext.admissionDetails.admissionProcedure}
                className={`input-style ${
                  patientContext.admissionDetails.admissionProcedure &&
                  'input-style-valid'
                }`}
                label="Admission Procedure "
                noLabel={false}
                onChange={(e) =>
                  patientContext.handleInput('admissionDetails', e)
                }
              />
            </div>
            <div className="position-relative custom-bottom-margin px-2">
              <FormInput
                name="phoneNumber"
                id="phoneNumber"
                value={patientContext.admissionDetails.phoneNumber}
                className={`input-style ${
                  patientContext.admissionDetails.phoneNumber &&
                  'input-style-valid'
                }`}
                label="Phone Number "
                noLabel={false}
                onChange={(e) =>
                  patientContext.handleInput('admissionDetails', e)
                }
              />
            </div>
            <div className="position-relative custom-bottom-margin px-2">
              <FormInput
                name="cardNo"
                id="cardNo"
                value={patientContext.admissionDetails.cardNo}
                className={`input-style ${
                  patientContext.admissionDetails.cardNo && 'input-style-valid'
                }`}
                label="Card Ref. No. "
                noLabel={false}
                onChange={(e) =>
                  patientContext.handleInput('admissionDetails', e)
                }
              />
            </div>

            <div className="position-relative custom-bottom-margin px-2">
              <FormInput
                name="treatingDoctor"
                id="treatingDoctor"
                value={patientContext.admissionDetails.treatingDoctor}
                className={`input-style ${
                  patientContext.admissionDetails.treatingDoctor &&
                  'input-style-valid'
                }`}
                label="Treating Doctor at Admission "
                noLabel={false}
                onChange={(e) =>
                  patientContext.handleInput('admissionDetails', e)
                }
              />
            </div>
          </div>

          <div>
            <div className="position-relative custom-bottom-margin px-2">
              <FormInput
                name="weight"
                id="weight"
                value={patientContext.admissionDetails.weight}
                className={`input-style ${
                  patientContext.admissionDetails.weight && 'input-style-valid'
                }`}
                label="Patient Weight "
                noLabel={false}
                onChange={(e) =>
                  patientContext.handleInput('admissionDetails', e)
                }
              />
            </div>
            <div className="position-relative custom-bottom-margin px-2">
              <TextArea
                className={`input-group-textarea w-100 custom-textarea-height  ${
                  patientContext.admissionDetails.reasonForAdmission &&
                  'input-group-textarea-valid'
                }`}
                name="reasonForAdmission"
                id="reasonForAdmission"
                value={patientContext.admissionDetails.reasonForAdmission}
                rows={10}
                label="Reason for Admission"
                noLabel={false}
                onChange={(e) =>
                  patientContext.handleInput('admissionDetails', e)
                }
              />
            </div>
            <div className="position-relative custom-bottom-margin px-2">
              <FormInput
                name="insurance"
                id="insurance"
                value={patientContext.admissionDetails.insurance}
                className={`input-style ${
                  patientContext.admissionDetails.insurance &&
                  'input-style-valid'
                }`}
                label="Health Fund / Insurance No. "
                noLabel={false}
                onChange={(e) =>
                  patientContext.handleInput('admissionDetails', e)
                }
              />
            </div>
          </div>
        </div>
        <PatientCare />
      </>
    </FieldSet>
  );
};
export default PatientAdmission;
