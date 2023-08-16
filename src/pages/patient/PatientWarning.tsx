import exclamatoryIcon from '../../assets/ExclamationCircle.png';
import closeIcon from '../../assets/close.png';

const PatientWarning = (props: { closeModal: () => void }) => {
  return (
    <>
      <div className="modalheader">
        {' '}
        <img
          className="close-icon d-block ms-auto cursor-pointer"
          src={closeIcon}
          alt="close_icon"
          onClick={() => props.closeModal()}
        />
      </div>
      <div className="modalbody">
        <img
          className="d-block mx-auto mt-4"
          src={exclamatoryIcon}
          alt="close_icon"
        />
        <p className="text-center mt-4">
          The entered patient details already exist in the system
        </p>
      </div>
      <div className="modalfooter d-flex justify-content-center">
        <div className="p-4">
          <button
            className="create-button rounded"
            onClick={() => props.closeModal()}
          >
            + Add New Patient
          </button>
        </div>
        <div className="p-4">
          <button className="cancel-button rounded">+ Add Admission</button>
        </div>
      </div>
    </>
  );
};

export default PatientWarning;
