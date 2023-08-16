import { ChangeEvent, useState } from 'react';
import { ReactComponent as Plus } from '../assets/add.svg';
import { ReactComponent as Minus } from '../assets/remove.svg';
import { Row } from '../interface/patientCareDetails.interface';
import '../scss/customRows.scss';
import FieldSet from './common/FieldSet';

const PatientMedicalSummary = () => {
  const [rows, setRows] = useState<Row[]>([
    {
      id: 1,
      data: {
        medicationName: null,
        doseInformation: null,
        reason: null,
      },
    },
  ]);

  const addRow = () => {
    const newData = {
      id: rows.length + 1,
      data: {
        medicationName: null,
        doseInformation: null,
        reason: null,
      },
    };

    setRows((prevRows) => [...prevRows, newData]);
  };

  const deleteRow = (id: number) => {
    const removedData = rows.filter((x) => x.id !== id);
    setRows(() => removedData);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>, id: number) => {
    const selectedRow = rows.find((x) => x.id === id);

    if (!selectedRow) {
      return;
    }

    selectedRow.data[e.target.name] = e.target.value;

    setRows(() => [...rows]);
  };

  return (
    <FieldSet title="Medical Summary">
      <>
        <div className="form-check form-switch align-items-center toggle-text-style pb-4">
          <input
            className="form-check-input toggle-style mt-0"
            type="checkbox"
            role="switch"
          />
          <label className="form-check-label ms-2">
            If you have medical summary fill the below other wise ignore
          </label>
        </div>
        <div className="row table-border-style">
          <div className="col py-2 font-style">
            Medication Name
            <span className="mandatory-style"> *</span>
          </div>
          <div className="col py-2 font-style">
            Dose Information
            <span className="mandatory-style"> *</span>
          </div>
          <div className="col-4 py-2 font-style">
            Reason For Taking The Medication
            <span className="mandatory-style"> *</span>
          </div>
          <div className="col"></div>
        </div>

        {rows.map((ele) => (
          <div key={ele.id}>
            <div
              className={`row mt-3 align-items-center ${
                rows.length > 1 && 'line-style'
              }`}
            >
              <div className="col">
                <input
                  type="text"
                  value={ele.data.medicationName ?? ''}
                  name="medicationName"
                  placeholder="Medication Name"
                  onChange={(e) => handleChange(e, ele.id)}
                  className="first-box-style"
                />
              </div>
              <div className="col">
                <input
                  value={ele.data.doseInformation ?? ''}
                  placeholder="Dose Information"
                  name="doseInformation"
                  onChange={(e) => handleChange(e, ele.id)}
                  className="first-box-style"
                />
              </div>
              <div className="col-4">
                <input
                  value={ele.data.reason ?? ''}
                  placeholder="Reason For Taking The Medication"
                  name="reason"
                  onChange={(e) => handleChange(e, ele.id)}
                  className="second-box-style"
                />
              </div>
              <div className="col">
                {ele.id === 1 ? (
                  <span onClick={() => addRow()} className="cursor-pointer">
                    <Plus />
                  </span>
                ) : (
                  <div>
                    <span
                      onClick={() => addRow()}
                      className="cursor-pointer pe-5"
                    >
                      <Plus />
                    </span>

                    <span
                      onClick={() => deleteRow(ele.id)}
                      className="cursor-pointer"
                    >
                      <Minus />
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
