import { useContext } from 'react';
import FieldSet from '../common/FieldSet';
import FormInput from '../common/FormInput';
import TextArea from '../common/TextArea';
import { PatientContext } from '../../context/PatientContext';

const NextOfKin = () => {
  const patientContext = useContext(PatientContext);
  return (
    <FieldSet title="Next of Kin">
      <>
        <div className="row">
          <div className="col position-relative">
            <FormInput
              value={patientContext.nextOfKinData.name}
              name="name"
              onChange={(e) => patientContext.handleInput('nextOfKinData', e)}
              className={`input-style ${
                patientContext.nextOfKinData.name && 'input-style-valid'
              }`}
              label="Name "
              noLabel={false}
              id="name"
            />
          </div>
          <div className="col position-relative">
            <FormInput
              value={patientContext.nextOfKinData.kinPhone}
              name="kinPhone"
              onChange={(e) => patientContext.handleInput('nextOfKinData', e)}
              className={`input-style ${
                patientContext.nextOfKinData.kinPhone && 'input-style-valid'
              }`}
              label="Phone Number "
              noLabel={false}
              id="kinPhone"
            />
          </div>
          <div className="col position-relative">
            <FormInput
              value={patientContext.nextOfKinData.relationship}
              name="relationship"
              onChange={(e) => patientContext.handleInput('nextOfKinData', e)}
              className={`input-style ${
                patientContext.nextOfKinData.relationship && 'input-style-valid'
              }`}
              label="Relationship "
              noLabel={false}
              id="relationship"
            />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-4 position-relative">
            <TextArea
              className={`input-group-textarea w-75 ${
                patientContext.nextOfKinData.address &&
                'input-group-textarea-valid'
              }`}
              name="address"
              id="address"
              value={patientContext.nextOfKinData.address}
              rows={10}
              label="Address"
              noLabel={false}
              onChange={(e) => patientContext.handleInput('nextOfKinData', e)}
            />
          </div>
        </div>
      </>
    </FieldSet>
  );
};
export default NextOfKin;
