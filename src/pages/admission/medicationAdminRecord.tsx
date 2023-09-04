import { useContext } from 'react';
import { PatientContext } from '../../context/PatientContext';
import { AddAsset, RemoveAsset } from '../../assets/svg';
import DatePicker from 'react-datepicker';
import FormInput from '../../components/common/FormInput';
import Select from 'react-select';

const MedicationAdminRecord = () => {
  const patientContext = useContext(PatientContext);
  return (
    <>
      <div className="row table-border-style">
        <div className="col-md-2 py-2 font-style">
          Medication name
          <span className="mandatory-style"> *</span>
        </div>
        <div className="col py-2 font-style">
          Date
          <span className="mandatory-style"> *</span>
        </div>
        <div className="col py-2 font-style">
          Dose
          <span className="mandatory-style"> *</span>
        </div>
        <div className="col-md-2 py-2 font-style">
          Route of Administration
          <span className="mandatory-style"> *</span>
        </div>
        <div className="col py-2 font-style">
          Time
          <span className="mandatory-style"> *</span>
        </div>
        <div className="col py-2 font-style">
          Action
          <span className="mandatory-style"> *</span>
        </div>
        <div className="col py-2 font-style">
          Signature
          <span className="mandatory-style"> *</span>
        </div>
        <div className="col"></div>
        <div className="col"></div>
      </div>

      {patientContext.medicalAdminRecord.map((ele) => (
        <div key={ele.id}>
          <div
            className={`row mt-3 align-items-center ${
              patientContext.medicalAdminRecord.length > 1 && 'line-style'
            }`}
          >
            <div className="col-md-2">
              <Select
                value={ele.data.admin_name}
                onChange={(e) =>
                  patientContext.handleDropDown(
                    'medicationAdminRecord',
                    'admin_name',
                    e,
                    ele.id,
                  )
                }
                options={patientContext.medicationType}
                className={'gender w-100'}
                name="admin_name"
              />
            </div>
            <div className="col">
              <DatePicker
                selected={ele.data.admin_date}
                onChange={(e) =>
                  patientContext.handleDate(
                    'medicationAdminRecord',
                    'admin_date',
                    e as Date,
                    ele.id,
                  )
                }
                maxDate={new Date()}
                name="admin_date"
                id="admin_date"
                className="first-box-style w-100"
                placeholderText="Date"
              />
            </div>
            <div className="col">
              <FormInput
                value={ele.data.admin_dose ?? ''}
                placeholder="Dose"
                name="admin_dose"
                id="admin_dose"
                onChange={(e) =>
                  patientContext.handleInput('medicationAdminRecord', e, ele.id)
                }
                className="second-box-style w-100"
                noLabel={true}
              />
            </div>
            <div className="col-md-2">
              <FormInput
                value={ele.data.admin_route_of_administration ?? ''}
                placeholder="Route of Administration"
                name="admin_route_of_administration"
                onChange={(e) =>
                  patientContext.handleInput('medicationAdminRecord', e, ele.id)
                }
                className="second-box-style w-100"
                noLabel={true}
                id="admin_route_of_administration"
              />
            </div>
            <div className="col">
              <FormInput
                value={ele.data.admin_time ?? ''}
                placeholder="Time"
                name="admin_time"
                onChange={(e) =>
                  patientContext.handleInput('medicationAdminRecord', e, ele.id)
                }
                className="second-box-style w-100"
                noLabel={true}
                id="admin_indication"
              />
            </div>
            <div className="col">
              <FormInput
                value={ele.data.admin_action ?? ''}
                placeholder="Action"
                name="admin_action"
                onChange={(e) =>
                  patientContext.handleInput('medicationAdminRecord', e, ele.id)
                }
                className="second-box-style w-100"
                noLabel={true}
                id="admin_action"
              />
            </div>
            <div className="col">
              <FormInput
                value={ele.data.admin_signature ?? ''}
                placeholder="Signature"
                name="admin_signature"
                onChange={(e) =>
                  patientContext.handleInput('medicationAdminRecord', e, ele.id)
                }
                className="second-box-style w-100"
                noLabel={true}
                id="admin_signature"
              />
            </div>
            <div className="col">
              {ele.id === 1 ? (
                <span
                  onClick={() => patientContext.addRow('medicationAdminRecord')}
                  className="cursor-pointer"
                >
                  <AddAsset />
                </span>
              ) : (
                <div>
                  <span
                    onClick={() =>
                      patientContext.addRow('medicationAdminRecord')
                    }
                    className="cursor-pointer pe-5"
                  >
                    <AddAsset />
                  </span>

                  <span
                    onClick={() =>
                      patientContext.deleteRow('medicationAdminRecord', ele.id)
                    }
                    className="cursor-pointer"
                  >
                    <RemoveAsset />
                  </span>
                </div>
              )}
            </div>
            <div className="col"></div>
          </div>
        </div>
      ))}
    </>
  );
};
export default MedicationAdminRecord;
