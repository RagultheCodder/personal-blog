import { useState } from 'react';
import FieldSet from './common/FieldSet';
import DatePicker from 'react-datepicker';
import FormInput from './common/FormInput';
import TextArea from './common/TextArea';

const PatientDiagnosis = () => {
  const [data, setData] = useState({
    diagnosisSuggested: null,
    suggestedBy: null,
    suggestedOn: new Date(),
    notes: null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleDate = (selectedDate: Date) => {
    if (!selectedDate) {
      return;
    }
    setData({
      ...data,
      ['suggestedOn']: selectedDate,
    });
  };

  return (
    <FieldSet title="Diagnosis">
      <div className="row">
        <div className="col position-relative">
          <FormInput
            className={`input-style ${
              data.diagnosisSuggested && 'input-style-valid'
            }`}
            type="text"
            value={data.diagnosisSuggested ?? ''}
            name="diagnosisSuggested"
            id="diagnosisSuggested"
            label="Diagnosis Suggested "
            noLabel={false}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="col position-relative">
          <FormInput
            value={data.suggestedBy ?? ''}
            name="suggestedBy"
            onChange={(e) => handleChange(e)}
            className={`input-style ${data.suggestedBy && 'input-style-valid'}`}
            label="Suggested By "
            noLabel={false}
            id="suggestedBy"
          />
        </div>
        <div className="col-md-4 position-relative">
          <DatePicker
            selected={data.suggestedOn}
            onChange={(e) => handleDate(e as Date)}
            maxDate={new Date()}
            name="suggestedOn"
            className={`input-style ${data.suggestedOn && 'input-style-valid'}`}
            id="suggestedOn"
          />
          <>
            <label className="label">
              Suggested On<span className="icon-style">*</span>
            </label>
          </>
        </div>

        <div className="row custom-top-margin">
          <div className="col position-relative">
            <TextArea
              type="text"
              value={data.notes ?? ''}
              name="notes"
              onChange={(e) => handleChange(e)}
              className={`large-input-style no-scroll ${
                data.notes && 'large-input-style-valid no-scroll'
              }`}
              label="Notes and Comments "
              noLabel={false}
              style={{ width: '91%' }}
              id="notes"
            />
          </div>
        </div>
      </div>
    </FieldSet>
  );
};

export default PatientDiagnosis;
