import { Edit, User } from '../../assets/svg';
import '../../scss/patientHeader.scss';
import { useContext } from 'react';
import { PatientContext } from '../../context/PatientContext';
import moment from 'moment';

const PatientHeader = () => {
  const patientContext = useContext(PatientContext);
  return (
    <div className="patient-header p-3">
      <div className="row align-items-center">
        <div className="col-lg-12">
          <div className="row align-items-center">
            <div className="col">
              <User className="d-block mx-auto" />
            </div>
            <div className="col">
              <p className="title">URN</p>
              <p className="content">
                {patientContext?.patientBasicDetails?.URN ?? 1011010101}
              </p>
            </div>
            <div className="col">
              <p className="title">Family Name</p>
              <p className="content">
                {patientContext.patientBasicDetails.familyName ?? ''}
              </p>
            </div>
            <div className="col">
              <p className="title">Given Name</p>
              <p className="content">
                {patientContext.patientBasicDetails.givenName}
              </p>
            </div>
            <div className="col">
              <p className="title">Gender</p>
              <p className="content">
                {patientContext.patientBasicDetails.gender.label}
              </p>
            </div>
            <div className="col">
              <p className="title">DOB</p>
              <p className="content">
                {moment(
                  new Date(patientContext.patientBasicDetails.dob),
                ).format('DD/MM/YYYY')}
              </p>
            </div>
            <div className="col">
              <div className="d-flex edit-style align-items-baseline">
                <Edit />
                <p className="ps-1">Edit</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientHeader;
