import { useContext } from 'react';
import '../../scss/customRows.scss';
import FieldSet from '../common/FieldSet';
import { PatientContext } from '../../context/PatientContext';
import { AddAsset, RemoveAsset } from '../../assets/svg';
import Select from 'react-select';
import { aidsTypes } from '../../config/constant';
import FormInput from '../common/FormInput';

const PatientMedicalSummary = () => {
  const patientContext = useContext(PatientContext);

  return (
    <FieldSet title="Aids / Prosthetics">
      <>
        <div className="row table-border-style">
          <div className="col-sm-4 py-2 font-style">
            Aids Type
            <span className="mandatory-style"> *</span>
          </div>
          <div className="col-sm-4 py-2 font-style">
            Aids Reason
            <span className="mandatory-style"> *</span>
          </div>
          <div className="col-sm-4"></div>
          <div className="col-sm-4"></div>
        </div>

        {patientContext.aidsData.map((ele) => (
          <div key={ele.id}>
            <div
              className={`row mt-3 align-items-center ${
                patientContext.aidsData.length > 1 && 'line-style'
              }`}
            >
              <div className="col-sm-4">
                <Select
                  value={ele.data.aidsType}
                  onChange={(e) =>
                    patientContext.handleDropDown(
                      'aidsData',
                      'aidsType',
                      e,
                      ele.id,
                    )
                  }
                  options={aidsTypes.filter(
                    (x) =>
                      !patientContext.aidsData
                        .map((y) => y.data.aidsType.value)
                        .includes(x.value),
                  )}
                  className={'gender w-100'}
                  name="aidsType"
                />
              </div>

              <div className="col-sm-4">
                <FormInput
                  type="text"
                  value={ele.data.aidsReason ?? ''}
                  name="aidsReason"
                  placeholder="Aids Reason"
                  onChange={(e) =>
                    patientContext.handleInput('aidsData', e, ele.id)
                  }
                  className="first-box-style w-100"
                  noLabel={true}
                />
              </div>

              <div className="col-sm-4">
                {ele.id === 1 ? (
                  <span
                    onClick={() => patientContext.addRow('aidsData')}
                    className="cursor-pointer"
                  >
                    <AddAsset />
                  </span>
                ) : (
                  <div>
                    <span
                      onClick={() => patientContext.addRow('aidsData')}
                      className="cursor-pointer pe-5"
                    >
                      <AddAsset />
                    </span>

                    <span
                      onClick={() =>
                        patientContext.deleteRow('aidsData', ele.id)
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

export default PatientMedicalSummary;
