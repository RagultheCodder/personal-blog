import '../../scss/patientHeader.scss';
import { ReactComponent as User } from '../../assets/user.svg';
import { ReactComponent as Edit } from '../../assets/edit.svg';
import usePatientData from '../../hook/usePatientData';

const PatientHeader = () => {
  const { patientBasicDetails } = usePatientData();

  console.log(patientBasicDetails);
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
              <p className="content">10123456789</p>
            </div>
            <div className="col">
              <p className="title">Family Name</p>
              <p className="content">Jones</p>
            </div>
            <div className="col">
              <p className="title">Given Name</p>
              <p className="content">Williams</p>
            </div>
            <div className="col">
              <p className="title">Gender</p>
              <p className="content">M</p>
            </div>
            <div className="col">
              <p className="title">DOB</p>
              <p className="content">01/01/1980</p>
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
