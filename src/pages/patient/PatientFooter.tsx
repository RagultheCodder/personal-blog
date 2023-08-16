import { PatientCareDetails } from '../../interface/patientCareDetails.interface';
import '../../scss/app.scss';
import { ReactComponent as BackArrow } from '../../assets/beforearrow.svg';
import { ReactComponent as FrontArrow } from '../../assets/afterarrow.svg';

const PatientFooter = ({
  handleNext,
  selectedComponent,
  isPatientDetails,
}: PatientCareDetails) => {
  return (
    <div className="d-flex align-items-center justify-content-between p-4 top-border">
      <>
        {isPatientDetails ? (
          <button className="secondary-button">Cancel</button>
        ) : (
          <div>
            {' '}
            <button className="secondary-button">
              <div className="d-flex align-items-center justify-content-around">
                <BackArrow />
                Back
              </div>
            </button>{' '}
            <button className="secondary-button ms-4">Cancel</button>
          </div>
        )}
      </>
      <>
        {isPatientDetails ? (
          <button
            className="primary-button float-end"
            onClick={() => handleNext(selectedComponent + 1)}
          >
            Create
          </button>
        ) : (
          <>
            {' '}
            <div className="float-end">
              <button className="primary-button me-4">Save</button>{' '}
              <button
                className="primary-button"
                onClick={() => handleNext(selectedComponent + 1)}
              >
                <div className="d-flex align-items-center justify-content-around">
                  Next
                  <FrontArrow />
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
