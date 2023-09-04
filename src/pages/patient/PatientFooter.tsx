import { AfterArrow, BeforeArrow } from '../../assets/svg';
import '../../scss/app.scss';
import { useContext } from 'react';
import { PatientContext } from '../../context/PatientContext';
import { showDischarge } from '../../config/constant';

const PatientFooter = () => {
  const patientContext = useContext(PatientContext);
  return (
    <div className="d-flex align-items-center justify-content-between p-4 top-border">
      <>
        {patientContext.selectedComponent === 2 ? (
          <button className="secondary-button">Cancel</button>
        ) : (
          <div>
            {' '}
            <button
              className="secondary-button"
              onClick={() =>
                patientContext.handleBack(patientContext.selectedComponent)
              }
            >
              <div className="d-flex align-items-center justify-content-around">
                <BeforeArrow />
                Back
              </div>
            </button>{' '}
            <button className="secondary-button ms-4">Cancel</button>
          </div>
        )}
      </>
      <>
        {patientContext.selectedComponent === 2 ? (
          <button
            className="primary-button float-end"
            onClick={(e) =>
              patientContext.handleSave(patientContext.selectedComponent, e)
            }
          >
            {patientContext.mode === 'create' ? 'Create' : 'Save'}
          </button>
        ) : patientContext.selectedComponent === 13 ? (
          <button
            className="primary-button float-end"
            onClick={(e) =>
              patientContext.handleSave(patientContext.selectedComponent, e)
            }
          >
            Discharge
          </button>
        ) : (
          <>
            {' '}
            <div className="float-end">
              <button
                className="primary-button me-4"
                onClick={(e) =>
                  patientContext.handleSave(patientContext.selectedComponent, e)
                }
              >
                Save
              </button>{' '}
              <button
                className={`${
                  patientContext.showNext ? 'primary-button' : 'disabled-button'
                }`}
                disabled={!patientContext.showNext}
                onClick={() =>
                  patientContext.forwardComponent(
                    patientContext.selectedComponent,
                  )
                }
              >
                <div className="d-flex align-items-center justify-content-around">
                  {showDischarge.includes(patientContext.selectedComponent)
                    ? 'Discharge'
                    : 'Next'}
                  <AfterArrow />
                </div>
              </button>
            </div>
          </>
        )}
      </>
    </div>
  );
};

export default PatientFooter;
