import React from 'react';
import FieldSet from '../../components/common/FieldSet';
import FormInput from '../../components/common/FormInput';
import TextArea from '../../components/common/TextArea';
import '../../scss/formInput.scss';
import Select, { SingleValue } from 'react-select';
import '../../scss/customRows.scss';

const Demographics = () => {
  const [data, setData] = React.useState({
    contactNumber: '',
    emergencyContact: '',
    status: { value: '0', label: 'select' },
    country: { value: '0', label: 'select' },
    religion: '',
    maritalStatus: { value: '0', label: 'select' },
    language: { value: '0', label: 'select' },
    interpreter: { value: '0', label: 'select' },
    socialHistory: '',
    familyHistory: '',
  });

  const options = [
    { value: '1', label: 'test1' },
    { value: '2', label: 'test2' },
    { value: '3', label: 'test3' },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelect = (
    options: SingleValue<{ value: string; label: string }>,
    name: string,
  ) => {
    if (!options) {
      return;
    }
    const { label, value } = options;
    setData({
      ...data,
      [name]: { label, value },
    });
  };

  return (
    <div>
      <FieldSet title="Patient Demographics">
        <div>
          <div className="row">
            <div className="col position-relative">
              <FormInput
                type="number"
                value={data.contactNumber ?? ''}
                name="contactNumber"
                onChange={(e) => handleChange(e)}
                className={`input-style ${
                  data.contactNumber && 'input-style-valid'
                }`}
                label="Contact Number "
                noLabel={false}
                id="contactNumber"
              />
            </div>

            <div className="col position-relative">
              <FormInput
                type="number"
                value={data.emergencyContact ?? ''}
                name="emergencyContact"
                onChange={(e) => handleChange(e)}
                className={`input-style ${
                  data.emergencyContact && 'input-style-valid'
                }`}
                label="Emergency Contact Number "
                noLabel={false}
                id="emergencyContact"
              />
            </div>
            <div className="col position-relative">
              <Select
                value={data.status}
                onChange={(e) => handleSelect(e, 'status')}
                options={options}
                className={'gender'}
                name="status"
                id="status"
              />
              <>
                <label className="label">
                  <div className="text">
                    Veteran and Australian Defence Force Status
                    <span className="icon-style">*</span>
                  </div>
                </label>
              </>
            </div>
          </div>
          <div className="row custom-top-margin">
            <div className="col position-relative">
              <Select
                value={data.country}
                onChange={(e) => handleSelect(e, 'country')}
                options={options}
                className={'gender'}
                name="country"
                placeholder="Select"
                id="country"
              />
              <>
                <label className="label">
                  <div className="text">
                    Country of Birth
                    <span className="icon-style">*</span>
                  </div>
                </label>
              </>
            </div>
            <div className="col position-relative">
              <FormInput
                type="text"
                value={data.religion ?? ''}
                name="religion"
                onChange={(e) => handleChange(e)}
                className="input-style"
                label="Religion "
                noLabel={false}
                id="religion"
              />
            </div>
            <div className="col position-relative">
              <Select
                value={data.maritalStatus}
                onChange={(e) => handleSelect(e, 'maritalStatus')}
                options={options}
                className={'gender'}
                name="maritalStatus"
                placeholder="Select"
                id="maritalStatus"
              />
              <>
                <label className="label">
                  <div className="text">
                    Marital status
                    <span className="icon-style">*</span>
                  </div>
                </label>
              </>
            </div>
          </div>

          <div className="row custom-top-margin">
            <div className="col-md-4 position-relative">
              <Select
                value={data.language}
                onChange={(e) => handleSelect(e, 'language')}
                options={options}
                className={'gender'}
                name="language"
                placeholder="Select"
                id="language"
              />
              <>
                <label className="label">
                  <div className="text">
                    Language
                    <span className="icon-style">*</span>
                  </div>
                </label>
              </>
            </div>
            <div className="col-md-4 position-relative">
              <Select
                value={data.interpreter}
                onChange={(e) => handleSelect(e, 'interpreter')}
                options={options}
                className={'gender'}
                name="interpreter"
                placeholder="Select"
                id="interpreter"
              />
              <>
                <label className="label">
                  <div className="text">
                    Interpreter Required
                    <span className="icon-style">*</span>
                  </div>
                </label>
              </>
            </div>
          </div>
          <div className="row custom-top-margin">
            <div className="col position-relative">
              <TextArea
                type="text"
                value={data.socialHistory ?? ''}
                name="socialHistory"
                onChange={(e) => handleChange(e)}
                className={`large-input-style no-scroll ${
                  data.socialHistory && 'large-input-style-valid no-scroll'
                }`}
                label="Social History "
                noLabel={false}
                id="socialHistory"
              />
            </div>
          </div>

          <div className="row custom-top-margin">
            <div className="col position-relative">
              <TextArea
                type="text"
                value={data.familyHistory ?? ''}
                name="familyHistory"
                onChange={(e) => handleChange(e)}
                className={`large-input-style no-scroll ${
                  data.familyHistory && 'large-input-style-valid no-scroll'
                }`}
                label="Family History "
                noLabel={false}
                id="familyHistory"
              />
            </div>
          </div>
        </div>
      </FieldSet>
    </div>
  );
};

export default Demographics;
