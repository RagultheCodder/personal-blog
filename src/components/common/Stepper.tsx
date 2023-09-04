import { useContext, useEffect } from 'react';
import { PatientContext } from '../../context/PatientContext';
import React from 'react';
import {
  admissionStepperIndex,
  initialState,
  patientStepperIndex,
} from '../../config/constant';

const Stepper = () => {
  const patientContext = useContext(PatientContext);
  const enabledTheFields = () => {
    if (patientContext.mode === 'create') {
      if (patientContext.patientBasicDetails.URN) {
        patientStepperIndex.map(
          (ele) => (initialState.steppers[ele].enabled = true),
        );
      }
      if (patientContext.admissionDetails.id) {
        admissionStepperIndex.map(
          (ele) => (initialState.steppers[ele].enabled = true),
        );
      }

      patientContext.updateValidator(Math.floor(Math.random() * 10));
    }
  };

  useEffect(() => {
    enabledTheFields();
  }, [
    patientContext.patientBasicDetails.URN,
    patientContext.admissionDetails.id,
  ]);

  return (
    <ol className="stepper m-0">
      {patientContext.sideNav.map((ele) => (
        <li
          className={`cursor-pointer 
          stepper-item d-flex align-items-center position-relative  ${
            !ele.header && 'ms-2'
          } ${ele.active && 'active'} ${
            ele.header ? 'stepper-header' : 'stepper-child'
          }`}
          style={
            ele.header
              ? ({
                  '--circle-size': '33px',
                } as React.CSSProperties)
              : ({
                  '--circle-size': '18px',
                } as React.CSSProperties)
          }
          key={ele.id}
        >
          <p
            className={`stepper-title m-0 ${!ele.enabled && 'opacity-25'}`}
            onClick={() => {
              if (ele.header) {
                return;
              }
              if (patientContext.mode === 'edit') {
                patientContext.selectComponent(ele.id as number);
              } else if (ele.enabled) {
                patientContext.selectComponent(ele.id as number);
              }
            }}
          >
            {ele.name}
          </p>
        </li>
      ))}
    </ol>
  );
};

export default Stepper;
