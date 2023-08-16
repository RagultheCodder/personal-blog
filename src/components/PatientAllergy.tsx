import { ChangeEvent, useState } from 'react';
import { ReactComponent as Plus } from '../assets/add.svg';
import { ReactComponent as Minus } from '../assets/remove.svg';
import {
  AllergyRow,
  SelectInter,
} from '../interface/patientCareDetails.interface';
import '../scss/customRows.scss';
import Select from 'react-select';
import FieldSet from './common/FieldSet';
import { allergyOptions, serverityOptions } from '../config/constant';

const PatientAllergy = () => {
  const [rows, setRows] = useState<AllergyRow[]>([
    {
      id: 1,
      data: {
        substance: null,
        reaction: { value: 0, label: 'Select' },
        symptoms: null,
        severity: { value: 0, label: 'Select' },
      },
    },
  ]);

  const addRow = () => {
    const newData = {
      id: rows.length + 1,
      data: {
        substance: null,
        reaction: { value: 0, label: 'select' },
        symptoms: null,
        severity: { value: 0, label: 'select' },
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

  const handleSelect = (option: SelectInter, id: number, name: string) => {
    const { label, value } = option;
    const selectedRow = rows.find((x) => x.id === id);
    if (!selectedRow) {
      return;
    }
    selectedRow.data[name] = { label: label, value: value };
    setRows(() => [...rows]);
  };

  return (
    <FieldSet title="Allergies">
      <>
        <div className="form-check form-switch align-items-center toggle-text-style pb-4">
          <input
            className="form-check-input toggle-style mt-0"
            type="checkbox"
            role="switch"
          />
          <label className="form-check-label ms-2">Nil Known Allergies</label>
        </div>
        <div className="row table-border-style">
          <div className="col py-2 font-style">
            Substance
            <span className="mandatory-style"> *</span>
          </div>
          <div className="col py-2 font-style">
            Reaction
            <span className="mandatory-style"> *</span>
          </div>
          <div className="col py-2 font-style">
            Symptoms
            <span className="mandatory-style"> *</span>
          </div>
          <div className="col py-2 font-style">
            Severity
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
                {' '}
                <input
                  type="text"
                  value={ele.data.substance ?? ''}
                  name="substance"
                  placeholder="Substance"
                  onChange={(e) => handleChange(e, ele.id)}
                  className="first-box-style"
                />
              </div>
              <div className="col">
                <Select
                  value={ele.data.reaction}
                  onChange={(option) =>
                    handleSelect(option as SelectInter, ele.id, 'reaction')
                  }
                  options={allergyOptions}
                  className={'select-style'}
                  name="reaction"
                />
              </div>
              <div className="col">
                <input
                  value={ele.data.symptoms ?? ''}
                  placeholder="Symptoms"
                  name="symptoms"
                  onChange={(e) => handleChange(e, ele.id)}
                  className="first-box-style"
                />
              </div>
              <div className="col">
                <Select
                  value={ele.data.severity}
                  onChange={(option) =>
                    handleSelect(option as SelectInter, ele.id, 'severity')
                  }
                  options={serverityOptions}
                  className={'select-style'}
                  name="severity"
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

export default PatientAllergy;
