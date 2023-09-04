import { useContext } from 'react';
import FieldSet from '../../components/common/FieldSet';
import FormInput from '../../components/common/FormInput';
import { PatientContext } from '../../context/PatientContext';
import Select from 'react-select';
import { modeOfDischarge, yesOrNo } from '../../config/constant';
import DatePicker from 'react-datepicker';
import TextArea from '../../components/common/TextArea';

const Discharge = () => {
  const patientContext = useContext(PatientContext);
  return (
    <FieldSet title="Discharge">
      <>
        <div className="row mb-4">
          <div className="col position-relative mb-4">
            <FormInput
              type="text"
              value={patientContext.discharge.treatingDoctor}
              name="treatingDoctor"
              onChange={(e) => patientContext.handleInput('discharge', e)}
              className={`input-style ${
                patientContext.discharge.treatingDoctor && 'input-style-valid'
              }`}
              label="Treating doctor at Discharge"
              noLabel={false}
              id="treatingDoctor"
              error={patientContext.validator.current.message(
                'treatingDoctor',
                patientContext.discharge.treatingDoctor,
                'required',
              )}
            />
          </div>
          <div className="col position-relative mb-4">
            <Select
              value={patientContext.discharge.modeOfDischarge}
              onChange={(e) =>
                patientContext.handleDropDown('discharge', 'modeOfDischarge', e)
              }
              options={modeOfDischarge}
              className="gender"
              name="modeOfDischarge"
              id="modeOfDischarge"
            />
            <>
              <label className="label">
                <div className="text">
                  Mode of Discharge
                  <span className="icon-style">*</span>
                </div>
              </label>
            </>
            {patientContext.validator.current.message(
              'modeOfDischarge',
              patientContext.discharge.modeOfDischarge.value,
              'required',
            )}
          </div>
          <div className="col position-relative mb-4">
            <DatePicker
              selected={patientContext.discharge.dischargeDateAndTime}
              onChange={(e) =>
                patientContext.handleDate(
                  'discharge',
                  'dischargeDateAndTime',
                  e as Date,
                )
              }
              maxDate={new Date()}
              showTimeSelect
              dateFormat="MMM d, yyyy h:mm aa"
              name="dischargeDateAndTime"
              className="input-style"
            />
            <>
              <label className="label">
                Discharge Date & Time <span className="icon-style">*</span>
              </label>
            </>
          </div>
        </div>

        <div className="row mb-5">
          <div className="position-relative">
            <TextArea
              className={`input-group-textarea h-100 ${
                patientContext.discharge.dischargeSummary &&
                'input-group-textarea-valid'
              }`}
              value={patientContext.discharge.dischargeSummary}
              onChange={(e) => patientContext.handleInput('discharge', e)}
              name="dischargeSummary"
              id="dischargeSummary"
              label="Discharge Summary Note"
              noLabel={false}
              style={{ width: '92%' }}
              error={patientContext.validator.current.message(
                'dischargeSummary',
                patientContext.discharge.dischargeSummary,
                'required',
              )}
            />
          </div>
        </div>

        <div className="row mb-5">
          <div className="col position-relative">
            <FormInput
              type="text"
              value={patientContext.discharge.transferringFacility}
              name="transferringFacility"
              onChange={(e) => patientContext.handleInput('discharge', e)}
              className={`input-style ${
                patientContext.discharge.transferringFacility &&
                'input-style-valid'
              }`}
              label="Transferring to facility number"
              noLabel={false}
              id="transferringFacility"
            />
          </div>
          <div className="col position-relative">
            <FormInput
              type="text"
              value={patientContext.discharge.babyAdmissionWeight}
              name="babyAdmissionWeight"
              onChange={(e) => patientContext.handleInput('discharge', e)}
              className={`input-style ${
                patientContext.discharge.babyAdmissionWeight &&
                'input-style-valid'
              }`}
              label="Baby admission weight"
              noLabel={false}
              id="babyAdmissionWeight"
            />
          </div>
          <div className="col position-relative">
            <FormInput
              type="text"
              value={patientContext.discharge.referralToFurtherCare}
              name="referralToFurtherCare"
              onChange={(e) => patientContext.handleInput('discharge', e)}
              className={`input-style ${
                patientContext.discharge.referralToFurtherCare &&
                'input-style-valid'
              }`}
              label="Referral to further care"
              noLabel={false}
              id="referralToFurtherCare"
            />
          </div>
        </div>
        <div className="row mb-5">
          <div className="col position-relative">
            <FormInput
              type="text"
              value={patientContext.discharge.mentalHealthLegalStatusIndicator}
              name="mentalHealthLegalStatusIndicator"
              onChange={(e) => patientContext.handleInput('discharge', e)}
              className={`input-style ${
                patientContext.discharge.mentalHealthLegalStatusIndicator &&
                'input-style-valid'
              }`}
              label="Mental health legal status indicator"
              noLabel={false}
              id="mentalHealthLegalStatusIndicator"
            />
          </div>
          <div className="col position-relative">
            <FormInput
              type="text"
              value={patientContext.discharge.consentToReleasePatientDetails}
              name="consentToReleasePatientDetails"
              onChange={(e) => patientContext.handleInput('discharge', e)}
              className={`input-style ${
                patientContext.discharge.consentToReleasePatientDetails &&
                'input-style-valid'
              }`}
              label="Consent to release patient details"
              noLabel={false}
              id="consentToReleasePatientDetails"
            />
          </div>
          <div className="col position-relative">
            <FormInput
              type="text"
              value={patientContext.discharge.criteriaLedDischargeType}
              name="criteriaLedDischargeType"
              onChange={(e) => patientContext.handleInput('discharge', e)}
              className={`input-style ${
                patientContext.discharge.criteriaLedDischargeType &&
                'input-style-valid'
              }`}
              label="Criterial led discharge type"
              noLabel={false}
              id="criteriaLedDischargeType"
            />
          </div>
        </div>
        <div className="row mb-5">
          <div className="col position-relative">
            <Select
              value={patientContext.discharge.followUpAppointmentMade}
              onChange={(e) =>
                patientContext.handleDropDown(
                  'discharge',
                  'followUpAppointmentMade',
                  e,
                )
              }
              options={yesOrNo}
              className="gender"
              name="followUpAppointmentMade"
              id="followUpAppointmentMade"
            />
            <>
              <label className="label">
                <div className="text">
                  Follow up Appointment Made
                  <span className="icon-style">*</span>
                </div>
              </label>
            </>
          </div>
          <div className="col position-relative">
            <DatePicker
              selected={patientContext.discharge.followUpDateAndTime}
              onChange={(e) =>
                patientContext.handleDate(
                  'discharge',
                  'followUpDateAndTime',
                  e as Date,
                )
              }
              showTimeSelect
              dateFormat="MMM d, yyyy h:mm aa"
              maxDate={new Date()}
              name="followUpDateAndTime"
              className="input-style"
            />
            <>
              <label className="label">
                Followup Date & Time <span className="icon-style">*</span>
              </label>
            </>
          </div>
          <div className="col"></div>
        </div>
        <div className="row mb-5">
          <div className="col-12 position-relative">
            <TextArea
              className={`input-group-textarea h-100 ${
                patientContext.discharge.appointmentMadeNotes &&
                'input-group-textarea-valid'
              }`}
              type="text"
              value={patientContext.discharge.appointmentMadeNotes}
              onChange={(e) => patientContext.handleInput('discharge', e)}
              name="appointmentMadeNotes"
              id="appointmentMadeNotes"
              label="Appointment Made Notes"
              noLabel={false}
              style={{ width: '92%' }}
              error={patientContext.validator.current.message(
                'appointmentMadeNotes',
                patientContext.discharge.appointmentMadeNotes,
                'required',
              )}
            />
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-sm-4 position-relative">
            <Select
              value={patientContext.discharge.transportConfirmed}
              onChange={(e) =>
                patientContext.handleDropDown(
                  'discharge',
                  'transportConfirmed',
                  e,
                )
              }
              options={yesOrNo}
              className="gender"
              name="transportConfirmed"
              id="transportConfirmed"
            />
            <>
              <label className="label">
                <div className="text">
                  Transport Confirmed
                  <span className="icon-style">*</span>
                </div>
              </label>
            </>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-12 position-relative">
            <TextArea
              className={`input-group-textarea h-100 ${
                patientContext.discharge.transportNotes &&
                'input-group-textarea-valid'
              }`}
              type="text"
              value={patientContext.discharge.transportNotes}
              onChange={(e) => patientContext.handleInput('discharge', e)}
              name="transportNotes"
              id="transportNotes"
              label="Transport Confirmed"
              noLabel={false}
              style={{ width: '92%' }}
              error={patientContext.validator.current.message(
                'transportNotes',
                patientContext.discharge.transportNotes,
                'required',
              )}
            />
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-sm-4 position-relative">
            <Select
              value={patientContext.discharge.valuablesReturned}
              onChange={(e) =>
                patientContext.handleDropDown(
                  'discharge',
                  'valuablesReturned',
                  e,
                )
              }
              options={yesOrNo}
              className="gender"
              name="valuablesReturned"
              id="valuablesReturned"
            />
            <>
              <label className="label">
                <div className="text">
                  Value Returned
                  <span className="icon-style">*</span>
                </div>
              </label>
            </>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-12 position-relative">
            <TextArea
              className={`input-group-textarea h-100 ${
                patientContext.discharge.valuablesNotes &&
                'input-group-textarea-valid'
              }`}
              value={patientContext.discharge.valuablesNotes}
              onChange={(e) => patientContext.handleInput('discharge', e)}
              name="valuablesNotes"
              id="valuablesNotes"
              label="Transport Confirmed"
              noLabel={false}
              style={{ width: '92%' }}
              error={patientContext.validator.current.message(
                'valuablesNotes',
                patientContext.discharge.valuablesNotes,
                'required',
              )}
            />
          </div>
        </div>
      </>
    </FieldSet>
  );
};

export default Discharge;
