import FieldSet from './common/FieldSet';
import { ChangeEvent, useState } from 'react';
import '../scss/formInput.scss';
import TextArea from './common/TextArea';

interface ObservationData {
  temperature: number;
  bloodPressure: number;
  heartRate: number;
  notes: string;
  range: number;
}

const PatientObservation = () => {
  const [data, setData] = useState<ObservationData>({
    temperature: 0,
    bloodPressure: 0,
    heartRate: 0,
    notes: '',
    range: 0,
  });

  const handleChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    if (!e) return;
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <FieldSet title="Observation">
      <>
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
              style={{ width: '90%' }}
              id="notes"
            />
          </div>
        </div>
        <div className="row custom-top-margin">
          <div className="col-md-4 d-flex">
            <input
              type="range"
              className="form-range"
              min="0"
              max="10"
              step="1"
              id="customRange3"
              name="range"
              onChange={(e) => handleChange(e)}
              value={data.range}
            />
            <span className="ms-4 border border-primary py-1 px-2">
              {data.range}
            </span>
          </div>
          <div className="col-md-4"></div>
        </div>
      </>
    </FieldSet>
  );
};

export default PatientObservation;
