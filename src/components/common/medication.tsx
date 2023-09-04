import { AddAsset, RemoveAsset } from '../../assets/svg';
import DatePicker from 'react-datepicker';
import FormInput from '../../components/common/FormInput';
import Select from 'react-select';
import { recordStatusOptions } from '../../config/constant';
import {
  MedicationPRNRecordData,
  MedicationRecordData,
} from '../../interface/patientCareDetails.interface';
import { useContext } from 'react';
import { PatientContext } from '../../context/PatientContext';

const MedicationCommon = (props: {
  medRecord: MedicationRecordData[] | MedicationPRNRecordData[];
  stateText: string;
}) => {
  const patientContext = useContext(PatientContext);

  return (
    <>
      <div className="row table-border-style">
        <div className="col-md-2 py-2 font-style">
          Medication name
          <span className="mandatory-style"> *</span>
        </div>
        <div className="col py-2 font-style">
          Date Ordered
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
          Frequency
          <span className="mandatory-style"> *</span>
        </div>
        <div className="col py-2 font-style">
          Indication
          <span className="mandatory-style"> *</span>
        </div>
        <div className="col py-2 font-style">
          Prescriber
          <span className="mandatory-style"> *</span>
        </div>
        <div className="col py-2 font-style">
          Status
          <span className="mandatory-style"> *</span>
        </div>
        <div className="col"></div>
      </div>

      {props.medRecord.map((ele) => (
        <div key={ele.id}>
          <div
            className={`row mt-3 align-items-center ${
              props.medRecord.length > 1 && 'line-style'
            }`}
          >
            <div className="col-md-2">
              <FormInput
                value={ele.data.name ?? ''}
                placeholder="Name"
                name="name"
                id="name"
                onChange={(e) =>
                  patientContext.handleInput(props.stateText, e, ele.id)
                }
                className="second-box-style w-100"
                noLabel={true}
              />
            </div>
            <div className="col">
              <div className="col">
                <DatePicker
                  selected={ele.data.date_ordered}
                  onChange={(e) =>
                    patientContext.handleDate(
                      props.stateText,
                      'date_ordered',
                      e as Date,
                      ele.id,
                    )
                  }
                  maxDate={new Date()}
                  name="date_ordered"
                  id="date_ordered"
                  className="first-box-style custom-width-date"
                  placeholderText="Date Ordered"
                />
              </div>
            </div>
            <div className="col">
              <FormInput
                value={ele.data.dose ?? ''}
                placeholder="Dose"
                name="dose"
                id="dose"
                onChange={(e) =>
                  patientContext.handleInput(props.stateText, e, ele.id)
                }
                className="second-box-style w-100"
                noLabel={true}
              />
            </div>
            <div className="col-md-2">
              <FormInput
                value={ele.data.route_of_administration ?? ''}
                placeholder="Route of Administration"
                name="route_of_administration"
                onChange={(e) =>
                  patientContext.handleInput(props.stateText, e, ele.id)
                }
                className="second-box-style w-100"
                noLabel={true}
                id="route_of_administration"
              />
            </div>
            <div className="col">
              <FormInput
                value={ele.data.frequency ?? ''}
                placeholder="Frequency"
                name="frequency"
                onChange={(e) =>
                  patientContext.handleInput(props.stateText, e, ele.id)
                }
                className="second-box-style w-100"
                noLabel={true}
                id="frequency"
              />
            </div>
            <div className="col">
              <FormInput
                value={ele.data.indication ?? ''}
                placeholder="Indication"
                name="indication"
                onChange={(e) =>
                  patientContext.handleInput(props.stateText, e, ele.id)
                }
                className="second-box-style w-100"
                noLabel={true}
                id="indication"
              />
            </div>
            <div className="col">
              <FormInput
                value={ele.data.prescriber ?? ''}
                placeholder="Prescriber"
                name="prescriber"
                onChange={(e) =>
                  patientContext.handleInput(props.stateText, e, ele.id)
                }
                className="second-box-style w-100"
                noLabel={true}
                id="prescriber"
              />
            </div>
            <div className="col">
              <Select
                value={ele.data.status}
                onChange={(e) =>
                  patientContext.handleDropDown(
                    props.stateText,
                    'status',
                    e,
                    ele.id,
                  )
                }
                options={recordStatusOptions}
                className={'gender w-100'}
                name="status"
                placeholder="Status"
                id="status"
              />
            </div>
            <div className="col">
              {ele.id === 1 ? (
                <span
                  onClick={() => patientContext.addRow(props.stateText)}
                  className="cursor-pointer"
                >
                  <AddAsset />
                </span>
              ) : (
                <div>
                  <span
                    onClick={() => patientContext.addRow(props.stateText)}
                    className="cursor-pointer pe-5"
                  >
                    <AddAsset />
                  </span>

                  <span
                    onClick={() =>
                      patientContext.deleteRow(props.stateText, ele.id)
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
  );
};
export default MedicationCommon;
