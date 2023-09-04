import { useContext } from 'react';
import FieldSet from '../../components/common/FieldSet';
import Select from 'react-select';
import { PatientContext } from '../../context/PatientContext';
import { diagnosisTypes } from '../../config/constant';
import DatePicker from 'react-datepicker';
import FormInput from '../../components/common/FormInput';
import { AddAsset, RemoveAsset } from '../../assets/svg';

const LabTestAndReport = () => {
  const patientContext = useContext(PatientContext);

  return (
    <FieldSet title="Lab Test And Reports">
      <>
        {patientContext.labTestAndReport.map((ele) => (
          <div key={ele.id} className="mb-5">
            <div className="row mb-4">
              <div className="col-4 position-relative">
                <Select
                  value={ele.data.diagnosisType}
                  onChange={(e) =>
                    patientContext.handleDropDown(
                      'labTestAndReport',
                      'diagnosisType',
                      e,
                      ele.id,
                    )
                  }
                  options={diagnosisTypes}
                  className="gender"
                  name="diagnosisType"
                  id="diagnosisType"
                />
                <>
                  <label className="label">
                    <div className="text">
                      Diagnosis Type
                      <span className="icon-style">*</span>
                    </div>
                  </label>
                </>
              </div>
              <div className="col-4 position-relative">
                <DatePicker
                  selected={ele.data.reportUploadDateAndTime}
                  onChange={(e) =>
                    patientContext.handleDate(
                      'labTestAndReport',
                      'reportUploadDateAndTime',
                      e as Date,
                      ele.id,
                    )
                  }
                  maxDate={new Date()}
                  showTimeSelect
                  dateFormat={'MMM d, yyyy h:mm aa'}
                  name="reportUploadDateAndTime"
                  className="input-style"
                />
              </div>
              <div className="col-4 position-relative">
                <FormInput
                  value={ele.data.diagnosisReportReviewed}
                  onChange={(e) =>
                    patientContext.handleInput('labTestAndReport', e, ele.id)
                  }
                  className={`input-style  ${
                    ele.data.diagnosisReportReviewed && 'input-style-valid'
                  }`}
                  name="diagnosisReportReviewed"
                  id="diagnosisReportReviewed"
                  label="Diagnosis Report Reviewed"
                  noLabel={false}
                  error={patientContext.validator.current.message(
                    'diagnosisReportReviewed',
                    ele.data.diagnosisReportReviewed,
                    'required',
                  )}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-4 position-relative">
                <div className="input-group position-relative">
                  <FormInput
                    type="file"
                    onChange={(e) =>
                      patientContext.handleFile(
                        'labTestAndReport',
                        'report',
                        e,
                        ele.id as number,
                      )
                    }
                    name="report"
                    id={`report-${ele.id}`}
                    noLabel={true}
                    className={`file-input-transparent input-style ${
                      ele.data.reportName && 'input-style-valid'
                    }`}
                    style={{ width: '59%' }}
                  />

                  {ele.data.reportName ? (
                    <label className="fixed-file">Upload Report</label>
                  ) : (
                    ''
                  )}

                  <label id="file-input-label" htmlFor="report">
                    {ele.data.reportName
                      ? ele.data.reportName
                      : 'Upload Report'}
                  </label>
                  <label
                    className="bg-primary text-white border-0 input-group-text"
                    htmlFor={`report-${ele.id}`}
                  >
                    Browse
                  </label>
                </div>
              </div>
              <div className="col-4 position-relative">
                <div className="input-group position-relative">
                  <FormInput
                    type="file"
                    onChange={(e) =>
                      patientContext.handleFile(
                        'labTestAndReport',
                        'signature',
                        e,
                        ele.id,
                      )
                    }
                    name="signature"
                    id={`signature-${ele.id}`}
                    noLabel={true}
                    className={` file-input-transparent input-style ${
                      ele.data.signatureName && 'input-style-valid'
                    }`}
                    style={{ width: '59%' }}
                  />

                  {ele.data.signatureName ? (
                    <label className="fixed-file">Upload Signature</label>
                  ) : (
                    ''
                  )}

                  <label id="file-input-label" htmlFor="signature">
                    {ele.data.signatureName
                      ? ele.data.signatureName
                      : 'Upload Signature'}
                  </label>
                  <label
                    className="bg-primary text-white border-0 input-group-text"
                    htmlFor={`signature-${ele.id}`}
                  >
                    Browse
                  </label>
                </div>
              </div>
              <div className="col-4 position-relative">
                {ele.id === 1 ? (
                  <span
                    onClick={() => patientContext.addRow('labTestAndReport')}
                    className="cursor-pointer"
                  >
                    <AddAsset />
                  </span>
                ) : (
                  <div>
                    <span
                      onClick={() => patientContext.addRow('labTestAndReport')}
                      className="cursor-pointer pe-5"
                    >
                      <AddAsset />
                    </span>

                    <span
                      onClick={() =>
                        patientContext.deleteRow('labTestAndReport', ele.id)
                      }
                      className="cursor-pointer"
                    >
                      <RemoveAsset />
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

export default LabTestAndReport;
