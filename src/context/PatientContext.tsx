/* eslint-disable complexity */
import React, { createContext } from 'react';
import {
  ChildrenType,
  PatientContextType,
} from '../interface/patientCareDetails.interface';
import { initialState } from '../config/constant';
import {
  createAllergy,
  createPatient,
  updateAllergy,
  updatePatient,
} from '../service/PatientService';
import { toast } from 'react-toastify';
import usePatientContext from '../hook/usePatientContextHook';
import { createAdmission, updateAdmission } from '../service/AdmissionService';
import {
  createMedicalSummary,
  updateMedicalSummary,
} from '../service/MedicalSummaryService';
import {
  createLabTestAndReport,
  updateLabTestAndReport,
} from '../service/LabTestAndReport';
import {
  createMedicationRecord,
  updateMedicationRecord,
} from '../service/MedicationRecordService';
import {
  CreateAllergyData,
  PatientCreateBodyData,
  PatientEditBodyData,
} from '../interface/service/patientServiceInterface';
import { MedicalSummaryReqData } from '../interface/service/medicalSummaryInterface';
import { SurgicalDataCreateReq } from '../interface/surgialSummaryInterface';
import { AdmissionCreateBodyData } from '../interface/service/admissionServiceInterface';
import {
  createClinicalNotes,
  updateClinicalNotes,
} from '../service/ClinicalNotesService';
import { CreateClinicalNotesData } from '../interface/service/clinicalNotesServiceInterface';
import { CreateDischargeData } from '../interface/service/dischargeServiceInterface';
import { createDischarge } from '../service/DischargeService';
import { useNavigate } from 'react-router-dom';
import {
  CreateDiagnosisAndObservationData,
  UpdateDiagnosisAndObservationData,
} from '../interface/service/diagnosisAndObservationServiceInterface';
import {
  createDiagnosisAndObservation,
  updateDiagnosisAndObservation,
} from '../service/DiagnosisAndObservationService';
import { CreateLabTestAndReportData } from '../interface/service/labTestAndReportInterface';
import {
  MedicationRecordCreateBody,
  medRecord,
} from '../interface/service/medicationRecordInterface';

export const PatientContext = createContext({} as PatientContextType);

export const PatientContextProvider = ({ children }: ChildrenType) => {
  const {
    care,
    value,
    mode,
    sideNav,
    allergy,
    discharge,
    diagnosis,
    validator,
    observation,
    clinicalNotes,
    nextOfKinData,
    headerText,
    wardData,
    aidsData,
    medicalSummary,
    surgicalSummary,
    prnRecord,
    medicationType,
    medicationRecord,
    medicalAdminRecord,
    admissionDetails,
    showNext,
    allergyCheckBox,
    labTestAndReport,
    selectedComponent,
    patientDemographics,
    patientBasicDetails,
    medicalSummaryCheckBox,
    surgicalSummaryCheckBox,

    addRow,
    setValue,
    deleteRow,
    updateMode,
    handleDate,
    handleBack,
    handleFile,
    handleInput,
    frameReqData,
    handleDropDown,
    handleCheckBox,
    handleResponse,
    updateHeaderText,
    selectComponent,
    enableNext,
    updateValidator,
    forwardComponent,
    handlePhoneNumber,
    backwardComponent,
    checkAndUpdateValue,
    updatePatientDetails,
    setPatientBasicDetails,
    setAdmissionDetails,
  } = usePatientContext();

  const navigate = useNavigate();

  const createBasicDetails = (data: PatientCreateBodyData, id: number) => {
    createPatient(data)
      .then((resp) => {
        handleResponse(
          resp.status,
          id,
          'Patient created successfully!',
          'Failed to create patient',
        );
        if (resp.status === 201) {
          setPatientBasicDetails({
            ...patientBasicDetails,
            URN: resp.data.message.URN,
            id: resp.data.message.id,
          });
          enableNext(true);
          forwardComponent(id);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error('Error while creating patient');
      });
  };

  const updateBasicDetails = (data: PatientEditBodyData, id: number) => {
    updatePatient(patientBasicDetails.id, data)
      .then((resp) => {
        handleResponse(
          resp.status,
          id,
          'Patient update successfully!',
          'Failed to Update Patient Details',
        );
        forwardComponent(id);
      })
      .catch((err) => {
        console.log(err);
        toast.error('Error while update patient');
      });
  };

  const createOrUpdatePatientDemography = (
    data: PatientEditBodyData,
    id: number,
  ) => {
    updatePatient(patientBasicDetails.id, data)
      .then((resp) => {
        handleResponse(
          resp.status,
          id,
          'Patient Demographics created successfully!',
          'Failed to create patient demographics',
        );
        if (mode === 'create') {
          enableNext(true);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error('Error while creating patient demographics');
      });
  };

  const createMedicalSummaryRequest = (
    medicalData: MedicalSummaryReqData[],
    surgicalData: SurgicalDataCreateReq[],
    id: number,
  ) => {
    createMedicalSummary({
      patientId: patientBasicDetails.id,
      summaryData: {
        medicalData,
        surgicalData,
      },
    })
      .then((resp) => {
        handleResponse(
          resp.status,
          id,
          'Medical Summary created successfully!',
          'Failed to create Medical Summary',
        );
        enableNext(true);
      })
      .catch((err) => {
        console.log(err);
        toast.error('Error while creating patient');
      });
  };

  const updateMedicalSummaryReq = (
    medicalData: MedicalSummaryReqData[],
    surgicalData: SurgicalDataCreateReq[],
    id: number,
  ) => {
    updateMedicalSummary({
      patientId: patientBasicDetails.id,
      summaryData: {
        medicalData,
        surgicalData,
      },
    })
      .then((resp) => {
        handleResponse(
          resp.status,
          id,
          'Medical Summary updated successfully!',
          'Failed to update Medical Summary',
        );
        forwardComponent(id);
      })
      .catch((err) => {
        console.log(err);
        toast.error('Error while update patient');
      });
  };

  const createAllergyReq = (data: CreateAllergyData[], id: number) => {
    const reqData = {
      allergy: data,
      patientId: patientBasicDetails.id,
    };

    createAllergy(reqData)
      .then((resp) => {
        handleResponse(
          resp.status,
          id,
          'Allergy Created Successfully',
          'Failed to Create Allergy',
        );
        enableNext(true);
      })
      .catch((err) => {
        console.log(err);
        toast.error('Error while Creating Allergy');
      });
  };

  const updateAllergyReq = (data: CreateAllergyData[], id: number) => {
    const reqData = {
      allergy: data,
      patientId: patientBasicDetails.id,
    };

    updateAllergy(reqData)
      .then((resp) => {
        handleResponse(
          resp.status,
          id,
          'Allergy Updated Successfully',
          'Failed to Update Allergy',
        );
      })
      .catch((err) => {
        console.log(err);
        toast.error('Error While Update Allergy');
      });
  };

  const createAdmissionReq = (data: AdmissionCreateBodyData, id: number) => {
    createAdmission(data)
      .then((resp) => {
        handleResponse(
          resp.status,
          id,
          'Admission created successfully!',
          'Failed to create Admission',
        );
        if (resp.status === 201) {
          setAdmissionDetails({
            ...admissionDetails,
            id: resp.data?.message,
          });
          enableNext(true);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error('Error while creating admission');
      });
  };

  const updateAdmissionReq = (data: AdmissionCreateBodyData, id: number) => {
    updateAdmission(data)
      .then((resp) => {
        handleResponse(
          resp.status,
          id,
          'Admission Updated Successfully',
          'Failed to Update Admission',
        );
      })
      .catch((err) => {
        console.log(err);
        toast.error('Error While Update Admission');
      });
  };

  const createClinicalNotesReq = (
    data: CreateClinicalNotesData[],
    id: number,
  ) => {
    if (!admissionDetails.id) return;
    const reqData = {
      notes: data,
      admissionId: admissionDetails.id,
    };
    createClinicalNotes(reqData)
      .then((resp) => {
        handleResponse(
          resp.status,
          id,
          'Clinical Notes Created Successfully',
          'Failed to create Clinical Notes',
        );
      })
      .catch((err) => {
        console.log(err);
        toast.error('Error While Create Clinical Notes');
      });
  };
  const createMedicationRecordReq = (
    data: MedicationRecordCreateBody,
    id: number,
  ) => {
    createMedicationRecord(data)
      .then((resp) => {
        handleResponse(
          resp.status,
          id,
          'Medication Record Created Successfully',
          'Failed to Create Medication Record',
        );
      })
      .catch((err) => {
        console.log(err);
        toast.error('Error While Create Clinical Notes');
      });
  };

  const updateClinicalNotesReq = (
    data: CreateClinicalNotesData[],
    id: number,
  ) => {
    updateClinicalNotes(data)
      .then((resp) => {
        handleResponse(
          resp.status,
          id,
          'Clinical Notes Created Successfully',
          'Failed to Create Clinical Notes',
        );
      })
      .catch((err) => {
        console.log(err);
        toast.error('Error while updating Medication Record');
      });
  };

  const updateMedicationRecordReq = (
    data: MedicationRecordCreateBody,
    id: number,
  ) => {
    updateMedicationRecord(data)
      .then((resp) => {
        handleResponse(
          resp.status,
          id,
          'Medication Record Updated Successfully',
          'Failed to Update Medication Record',
        );
      })
      .catch((err) => {
        console.log(err);
        toast.error('Error While Update Clinical Notes');
      });
  };

  const createDischargeReq = (data: CreateDischargeData, id: number) => {
    createDischarge(data)
      .then((resp) => {
        handleResponse(
          resp.status,
          id,
          'Discharge Successfully',
          'Failed to Discharge',
        );
        if (resp.status === 201) {
          navigate('/patients');
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error('Error While Create Discharge');
      });
  };

  const createDiagnosisAndObservationReq = (
    data: CreateDiagnosisAndObservationData,
    id: number,
  ) => {
    createDiagnosisAndObservation(data).then((resp) => {
      handleResponse(
        resp.status,
        id,
        'Diagnosis and Observation Created Successfully',
        'Failed to create Observation and Diagnosis',
      );
    });
  };

  const updateDiagnosisAndObservationReq = (
    data: UpdateDiagnosisAndObservationData,
    id: number,
  ) => {
    updateDiagnosisAndObservation(data).then((resp) => {
      handleResponse(
        resp.status,
        id,
        'Diagnosis and Observation Update Successfully',
        'Failed to Update Observation and Diagnosis',
      );
    });
  };

  const createLabTestAndReportReq = (
    data: CreateLabTestAndReportData[],
    id: number,
  ) => {
    const reqData = {
      data: data,
      admission_id: admissionDetails.id!,
    };

    createLabTestAndReport(reqData).then((resp) => {
      handleResponse(
        resp.status,
        id,
        'Lab Test and Report are Created Successfully',
        'Failed to create Lab Test and Report',
      );
    });
  };

  const updateLabTestAndReportReq = (
    data: CreateLabTestAndReportData[],
    id: number,
  ) => {
    updateLabTestAndReport(data).then((resp) => {
      handleResponse(
        resp.status,
        id,
        'Lab Test and Report are Created Successfully',
        'Failed to create Lab Test and Report',
      );
    });
  };

  const validateDataAndCallAPI = (id: number, component: string) => {
    switch (component) {
      case 'Basic Details':
        {
          const reqData = frameReqData('Basic Details');
          if (validator.current.allValid()) {
            if (mode === 'create')
              createBasicDetails(reqData as PatientCreateBodyData, id);
            if (mode === 'edit')
              updateBasicDetails(reqData as PatientEditBodyData, id);
          } else {
            validator.current.showMessages();
            updateValidator(1);
          }
        }
        break;
      case 'Medical Summary':
        {
          const reqMedicalData = frameReqData('Medical Summary');
          const reqSurgicalData = frameReqData('Surgical Summary');
          if (mode === 'create') {
            createMedicalSummaryRequest(
              reqMedicalData as MedicalSummaryReqData[],
              reqSurgicalData as SurgicalDataCreateReq[],
              id,
            );
          }

          if (mode === 'edit') {
            updateMedicalSummaryReq(
              reqMedicalData as MedicalSummaryReqData[],
              reqSurgicalData as SurgicalDataCreateReq[],
              id,
            );
          }
        }
        break;
      case 'Patient Demographics':
        {
          const reqData = frameReqData('Patient Demographics');
          if (mode === 'create' || mode === 'edit') {
            createOrUpdatePatientDemography(reqData as PatientEditBodyData, id);
          }
        }
        break;

      case 'Allergies':
        {
          const reqData = frameReqData('Allergies');
          if (mode === 'create')
            createAllergyReq(reqData as CreateAllergyData[], id);
          if (mode === 'edit')
            updateAllergyReq(reqData as CreateAllergyData[], id);
        }
        return;
      case 'Admission Ward':
        {
          const reqData = frameReqData('Admission');
          const aidsReqData = frameReqData('Aids');
          const careReqData = frameReqData('Care');

          if (mode === 'create')
            createAdmissionReq(
              {
                admissionData: reqData,
                aidsAndProsthetics: aidsReqData,
                careType: careReqData,
              } as AdmissionCreateBodyData,
              id,
            );

          if (mode === 'edit') {
            updateAdmissionReq(
              {
                admissionData: reqData,
                aidsAndProsthetics: aidsReqData,
                careType: careReqData,
              } as AdmissionCreateBodyData,
              id,
            );
          }
        }
        break;
      case 'Diagnosis & Observation':
        {
          const diagnosisAndObservationReqData = frameReqData(
            'diagnosisAndObservation',
          );

          if (mode === 'create') {
            createDiagnosisAndObservationReq(
              diagnosisAndObservationReqData as CreateDiagnosisAndObservationData,
              id,
            );
          }

          if (mode === 'edit') {
            updateDiagnosisAndObservationReq(
              diagnosisAndObservationReqData as UpdateDiagnosisAndObservationData,
              id,
            );
          }
        }
        break;
      case 'Clinical Notes':
        {
          const clinicalReqData = frameReqData('Clinical Notes');

          if (mode === 'create') {
            createClinicalNotesReq(
              clinicalReqData as CreateClinicalNotesData[],
              id,
            );
          }

          if (mode === 'edit') {
            updateClinicalNotesReq(
              clinicalReqData as CreateClinicalNotesData[],
              id,
            );
          }
        }
        break;
      case 'Lab Test and Reports':
        {
          const labTestAndReportReqData = frameReqData('Lab Test And Reports');

          if (mode === 'create') {
            createLabTestAndReportReq(
              labTestAndReportReqData as CreateLabTestAndReportData[],
              id,
            );
          }

          if (mode === 'edit') {
            updateLabTestAndReportReq(
              labTestAndReportReqData as CreateLabTestAndReportData[],
              id,
            );
          }
        }
        break;
      case 'Discharge':
        {
          const dischargeReqData = frameReqData('Discharge');

          if (mode === 'create' || mode === 'edit') {
            createDischargeReq(dischargeReqData as CreateDischargeData, id);
          }
        }
        break;
      case 'Medication Record': {
        const reqData = frameReqData('medicationRecord');
        const reqPRNData = frameReqData('medicationPRNRecord');
        const reqMedAdminData = frameReqData('medicationAdminRecord');
        const recordData = {
          medRecordData: [
            ...(reqData as medRecord[]),
            ...(reqPRNData as medRecord[]),
          ],
          medAdminData: reqMedAdminData,
        };
        if (mode === 'create') {
          createMedicationRecordReq(
            {
              admission_id: admissionDetails.id,
              recordData,
            } as MedicationRecordCreateBody,
            id,
          );
        }

        if (mode === 'edit') {
          updateMedicationRecordReq(
            {
              admission_id: admissionDetails.id,
              recordData,
            } as MedicationRecordCreateBody,
            id,
          );
        }
        return;
      }
      default:
        return;
    }
  };

  const handleSave = (
    id: number,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void => {
    if (id > sideNav.length) return;
    e.preventDefault();

    const name = initialState.steppers.find((x) => x.id === id)?.name;
    if (!name) return;

    switch (name) {
      case 'Basic Details':
        validateDataAndCallAPI(id, 'Basic Details');
        break;
      case 'Patient Demographics':
        validateDataAndCallAPI(id, 'Patient Demographics');
        break;
      case 'Medical Summary':
        validateDataAndCallAPI(id, 'Medical Summary');
        break;
      case 'Allergies':
        validateDataAndCallAPI(id, 'Allergies');
        break;
      case 'Admission Ward':
        validateDataAndCallAPI(id, 'Admission Ward');
        break;
      case 'Diagnosis & Observation':
        validateDataAndCallAPI(id, 'Diagnosis & Observation');
        break;
      case 'Clinical Notes':
        validateDataAndCallAPI(id, 'Clinical Notes');
        break;
      case 'Lab Test and Reports':
        validateDataAndCallAPI(id, 'Lab Test and Reports');
        break;
      case 'Discharge':
        validateDataAndCallAPI(id, 'Discharge');
        break;
      case 'Medication Record':
        validateDataAndCallAPI(id, 'Medication Record');
        break;
      default:
        break;
    }
  };

  return (
    <PatientContext.Provider
      value={{
        care,
        value,
        mode,
        sideNav,
        allergy,
        validator,
        discharge,
        diagnosis,
        observation,
        headerText,
        clinicalNotes,
        nextOfKinData,
        wardData,
        aidsData,
        showNext,
        medicalSummary,
        surgicalSummary,
        medicationRecord,
        prnRecord,
        medicationType,
        medicalAdminRecord,
        admissionDetails,
        allergyCheckBox,
        labTestAndReport,
        selectedComponent,
        patientBasicDetails,
        patientDemographics,
        medicalSummaryCheckBox,
        surgicalSummaryCheckBox,

        addRow,
        setValue,
        deleteRow,
        updateMode,
        handleDate,
        handleSave,
        handleFile,
        handleBack,
        handleInput,
        updateHeaderText,
        handleDropDown,
        handleCheckBox,
        selectComponent,
        enableNext,
        updateValidator,
        forwardComponent,
        handlePhoneNumber,
        backwardComponent,
        checkAndUpdateValue,
        updatePatientDetails,
      }}
    >
      {children}
    </PatientContext.Provider>
  );
};
