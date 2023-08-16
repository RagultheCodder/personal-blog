import { ChangeEvent, useState } from 'react';
import { ReactComponent as Plus } from '../assets/add.svg';
import { ReactComponent as Minus } from '../assets/remove.svg';
import '../scss/customRows.scss';
import FieldSet from './common/FieldSet';
import DatePicker from 'react-datepicker';
import { SurgicalRow } from '../interface/patientCareDetails.interface';

const SurgicalSummary = () => {
  const [rows, setRows] = useState<SurgicalRow[]>([
    {
      id: 1,
      data: {
        surgeryName: null,
        surgeryDate: null,
        reason: null,
      },
    },
  ]);

  const addRow = () => {
    const newData = {
      id: rows.length + 1,
      data: {
        surgeryName: null,
        surgeryDate: null,
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

  const handleDate = (selectedDate: Date, id: number) => {
    const selectedRow = rows.find((x) => x.id === id);

    if (!selectedRow) {
      return;
    }
    selectedRow.data['surgeryDate'] = selectedDate;
    setRows(() => [...rows]);
  };

  return (
    <FieldSet title="Surgical Summary">
      <>
        <div className="form-check form-switch align-items-center toggle-text-style pb-4">
          <input
            className="form-check-input toggle-style mt-0"
            type="checkbox"
            role="switch"
          />
          <label className="form-check-label ms-2">
            If you have surgical summary fill the below other wise ignore
          </label>
        </div>
        <div className="row table-border-style">
          <div className="col py-2 font-style">
            Surgery Performed/Procedure name
            <span className="mandatory-style"> *</span>
          </div>
          <div className="col py-2 font-style">
            Surgery Date
            <span className="mandatory-style"> *</span>
          </div>
          <div className="col-4 py-2 font-style">
            Reason For the Surgery
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
                  value={ele.data.surgeryName ?? ''}
                  name="surgeryName"
                  placeholder="Surgery Name"
                  onChange={(e) => handleChange(e, ele.id)}
                  className="first-box-style"
                />
              </div>
              <div className="col">
                <div className="col-md-4">
                  <DatePicker
                    selected={ele.data.surgeryDate}
                    onChange={(e) => handleDate(e as Date, ele.id)}
                    maxDate={new Date()}
                    name="surgeryDate"
                    className="first-box-style"
                    placeholderText="Surgery Date"
                  />
                </div>
              </div>
              <div className="col-4">
                <input
                  value={ele.data.reason ?? ''}
                  placeholder="Reason For Surgery"
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

export default SurgicalSummary;
