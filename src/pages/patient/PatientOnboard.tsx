import React, { useEffect, useRef, useState } from 'react';
import '../../scss/patientOnboard.scss';
import Select, { SingleValue } from 'react-select';
import CustomModal from '../../components/common/CustomModal';
import PatientWarning from './PatientWarning';
import FieldSet from '../../components/common/FieldSet';
import SimpleReactValidator from 'simple-react-validator';
import FormInput from '../../components/common/FormInput';
import TextArea from '../../components/common/TextArea';
import '../../scss/fieldset.scss';
import DatePicker from 'react-datepicker';
import usePatientData from '../../hook/usePatientData';

const PatientOnboard = () => {
  const { patientBasicDetails, handleInput } = usePatientData();

  const createValidator = useRef(
    new SimpleReactValidator({
      className: 'text-danger small',
    }),
  );
  const [, forceUpdate] = useState<number>();
  const [selectOption, setSelectOption] = useState({
    value: '0',
    label: 'sex *',
  });
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { value: '1', label: 'Male' },
    { value: '2', label: 'Female' },
    { value: '3', label: 'Others' },
  ];

  // useEffect(() => {
  //   if (!isOpen) {
  //     const randomDigits = Math.floor(Math.random() * 1000000000);
  //     const randomId = '0' + randomDigits.toString().padStart(9, '0');
  //     setData({
  //       ...data,
  //       URN: Number(randomId),
  //     });
  //   }
  // }, [isOpen]);

  // const handleInput = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  // ) => {
  //   setData({
  //     ...data,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const setDoBDate = (selectedDate: Date) => {
  //   if (selectedDate instanceof Date) {
  //     const today = new Date();
  //     const birthDate = new Date(selectedDate);
  //     const ageData = today.getFullYear() - birthDate.getFullYear();
  //     setData({
  //       ...data,
  //       dob: selectedDate,
  //       age: Number(ageData),
  //     });
  //   }
  // };

  // const handleChange = (
  //   option: SingleValue<{ value: string; label: string }>,
  // ) => {
  //   if (!option) {
  //     return;
  //   }
  //   const { label, value } = option;
  //   setSelectOption({ value, label });
  //   setData({
  //     ...data,
  //     gender: value,
  //   });
  // };

  // const closeModal = () => {
  //   setIsOpen(!isOpen);
  //   setData({
  //     familyName: '',
  //     givenName: '',
  //     dob: new Date(),
  //     address: '',
  //     gender: '',
  //     URN: '',
  //     age: '',
  //   });
  //   const formValid = createValidator.current.allValid();
  //   if (!formValid) {
  //     createValidator.current.showMessages();
  //     forceUpdate(1);
  //     return;
  //   }
  // };

  const customStyles = {
    content: {
      width: '35%',
      top: '45%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '8px',
    },
  };

  return (
    <React.Fragment>
      {isOpen && <div className="backgroundStyles"></div>}
      <CustomModal
        isOpen={isOpen}
        style={customStyles}
        shouldCloseOnOverlayClick={false}
        ariaHideApp={false}
      >
        {/* <PatientWarning closeModal={closeModal} /> */}
      </CustomModal>
      <div className="">
        <FieldSet title="Patient Basic Details">
          <div className="patient-onboard-form">
            <div className="row ms-4 mb-5">
              <div className="col-md-4 position-relative">
                <FormInput
                  className={`input-style w-75 ${
                    patientBasicDetails.URN && 'input-style-valid'
                  }`}
                  type="text"
                  name="URN"
                  id="urn"
                  value={patientBasicDetails.URN ?? undefined}
                  error={createValidator.current.message(
                    'URN',
                    patientBasicDetails.URN,
                    'required',
                  )}
                  label="URN "
                  noLabel={false}
                />
              </div>
              <div className="col-md-4 position-relative">
                <FormInput
                  className={`input-style w-75${
                    patientBasicDetails.familyName && 'input-style-valid'
                  }`}
                  type="text"
                  name="familyName"
                  id="familyName"
                  value={patientBasicDetails.familyName ?? ''}
                  label="Family Name "
                  noLabel={false}
                  onChange={(e) => handleInput('patientBasicDetails', e)}
                />
              </div>
              <div className="col-md-4 position-relative">
                <FormInput
                  className={`input-style w-75 ${
                    patientBasicDetails.givenName && 'input-style-valid'
                  }`}
                  type="text"
                  name="givenName"
                  id="givenName"
                  value={patientBasicDetails.givenName ?? ''}
                  label="Given Name "
                  noLabel={false}
                  onChange={(e) => handleInput('patientBasicDetails', e)}
                />
                {createValidator.current.message(
                  'givenName',
                  patientBasicDetails.givenName,
                  'required',
                )}
              </div>
            </div>

            <div className="row ms-4 mb-5 ">
              <div className="col-md-4 position-relative">
                <DatePicker
                  selected={patientBasicDetails.dob}
                  // onChange={(e) => setDoBDate(e as Date)}
                  onChange={(e) => console.log(e)}
                  maxDate={new Date()}
                  name="dob"
                  className={'input-style'}
                />
                <>
                  <label className="label">
                    Date of Birth <span className="icon-style">*</span>
                  </label>
                </>
                {createValidator.current.message(
                  'dob',
                  patientBasicDetails.dob,
                  'required',
                )}
              </div>
              <div className="col-md-4 position-relative">
                <FormInput
                  className={`input-style w-75 ${
                    patientBasicDetails.age && 'input-style-valid'
                  }`}
                  type="text"
                  name="age"
                  id="age"
                  value={patientBasicDetails.age ?? 2}
                  readOnly
                  label="age "
                  noLabel={false}
                />
              </div>
              {createValidator.current.message(
                'age',
                patientBasicDetails.age,
                'required',
              )}

              <div className="col-md-4 position-relative ">
                <Select
                  value={selectOption}
                  // onChange={(e) => handleChange(e)}
                  options={options}
                  className={'gender w-75'}
                  name="gender"
                />
                <>
                  <label className="label">
                    Sex <span className="icon-style">*</span>
                  </label>
                </>
                {createValidator.current.message(
                  'gender',
                  patientBasicDetails.gender,
                  'required',
                )}
              </div>
            </div>
            <div className="row ms-4 mb-4">
              <div className="col-md-4 position-relative">
                <TextArea
                  className={`input-group-textarea w-75 ${
                    patientBasicDetails.address && 'input-group-textarea-valid'
                  }`}
                  name="address"
                  id="address"
                  value={patientBasicDetails.address ?? ''}
                  rows={5}
                  label="Residential Address"
                  noLabel={false}
                  onChange={(e) => handleInput('patientBasicDetails', e)}
                />
                {createValidator.current.message(
                  'address',
                  patientBasicDetails.address,
                  'required',
                )}
              </div>
            </div>
          </div>
        </FieldSet>
      </div>
    </React.Fragment>
  );
};

export default PatientOnboard;
