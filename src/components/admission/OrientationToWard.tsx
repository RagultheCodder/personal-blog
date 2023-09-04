import { useContext } from 'react';
import FieldSet from '../common/FieldSet';
import FormInput from '../common/FormInput';
import Select from 'react-select';
import { PatientContext } from '../../context/PatientContext';
import { wardOrientationStatus } from '../../config/constant';

const OrientationToWard = () => {
  const patientContext = useContext(PatientContext);
  return (
    <>
      <FieldSet title="Orientation To Ward">
        <>
          <div className="row d-flex">
            <div className="col position-relative">
              <FormInput
                type="text"
                name="wardNumber"
                id="wardNumber"
                className={`input-style ${
                  patientContext.wardData.wardNumber && 'input-style-valid'
                }`}
                value={patientContext.wardData.wardNumber}
                label="Ward Number "
                noLabel={false}
                onChange={(e) => patientContext.handleInput('wardData', e)}
              />
            </div>
            <div className="col position-relative">
              <FormInput
                className={`input-style ${
                  patientContext.wardData.wardName && 'input-style-valid'
                }`}
                type="text"
                name="wardName"
                id="wardName"
                value={patientContext.wardData.wardName}
                label="Ward Name "
                noLabel={false}
                onChange={(e) => patientContext.handleInput('wardData', e)}
              />
            </div>
            <div className="col position-relative ">
              <Select
                value={patientContext.wardData.orientationToWard}
                onChange={(e) =>
                  patientContext.handleDropDown(
                    'wardData',
                    'orientationToWard',
                    e,
                  )
                }
                options={wardOrientationStatus}
                className={'gender w-75'}
                name="orientationToWard"
              />
              <>
                <label className="label">
                  Orientation To Ward <span className="icon-style">*</span>
                </label>
              </>
            </div>
          </div>
        </>
      </FieldSet>
    </>
  );
};

export default OrientationToWard;
