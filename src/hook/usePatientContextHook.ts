/* eslint-disable complexity */
import React, { useRef, useState } from 'react';
import {
  Admission,
  AidsData,
  AllergyData,
  AllergyRowData,
  ClinicalNotes,
  Diagnosis,
  Discharge,
  LabTestAndReportData,
  Observation,
  CareRow,
  MedicalSummaryData,
  MedicationAdminRecordData,
  MedicationPRNRecordData,
  MedicationRecordData,
  NextOfKin,
  PatientBasic,
  PatientCareNav,
  PatientDemographics,
  SurgicalSummaryData,
  PatientDetailsAndAdmissionData,
  WardData,
  RowData,
  SurgicalRowData,
  CareData,
  AidsRow,
  ClinicalNotesData,
  DiagnosisRowData,
  ObservationRowData,
  SelectInter,
} from '../interface/patientCareDetails.interface';
import { initialState, successStatus } from '../config/constant';
import SimpleReactValidator from 'simple-react-validator';
import {
  calculateAge,
  getKeyValuePair,
  handleYesOrNo,
} from '../context/PatientContextHelper';
import { SingleValue } from 'react-select';
import { removeAllergy } from '../service/PatientService';
import { toast } from 'react-toastify';
import { removeAids, removeCare } from '../service/AdmissionService';
import {
  deleteMedicalSummary,
  deleteSurgicalSummary,
} from '../service/MedicalSummaryService';
import { removeClinicalNote } from '../service/ClinicalNotesService';
import { uploadFileInS3 } from '../service/LabTestAndReport';
import {
  removeAdminRecord,
  removeMedicationRecord,
} from '../service/MedicationRecordService';

const usePatientContext = () => {
  const [headerText, setHeaderText] = useState<string>('Student Dashboard');
  const [sideNav] = useState<PatientCareNav[]>(initialState.steppers);
  const [selectedComponent, setSelectedComponent] = useState<number>(2);
  const [mode, setMode] = useState<string>('');
  const [medicalSummaryCheckBox, setMedicalSummaryCheckBox] =
    useState<boolean>(false);
  const [surgicalSummaryCheckBox, setSurgicalSummaryCheckBox] =
    useState<boolean>(false);
  const [allergyCheckBox, setAllergyCheckBox] = useState<boolean>(false);
  const [, forceUpdate] = useState<number>();
  const validator = useRef(
    new SimpleReactValidator({ className: 'text-danger small' }),
  );
  const [value, setValue] = useState<number>(0);

  const [patientBasicDetails, setPatientBasicDetails] = useState<PatientBasic>(
    initialState.patientBasicDetails,
  );

  const [patientDemographics, setPatientDemographics] =
    useState<PatientDemographics>(initialState.patientDemographics);

  const [medicalSummary, setMedicalSummary] = useState<MedicalSummaryData[]>(
    initialState.medicalSummary,
  );

  const [surgicalSummary, setSurgicalSummary] = useState<SurgicalSummaryData[]>(
    initialState.surgicalSummary,
  );

  const [allergy, setAllergy] = useState<AllergyData[]>(initialState.allergy);

  const [diagnosis, setDiagnosis] = useState<Diagnosis[]>(
    initialState.diagnosis,
  );

  const [observation, setObservation] = useState<Observation[]>(
    initialState.observations,
  );

  const [clinicalNotes, setClinicalNotes] = useState<ClinicalNotes[]>(
    initialState.clinicalNotes,
  );

  const [labTestAndReport, setLabTestAndReport] = useState<
    LabTestAndReportData[]
  >(initialState.labTestAndReport);

  const [discharge, setDischarge] = useState<Discharge>(initialState.discharge);

  const [care, setCare] = useState<CareRow[]>(initialState.admissionCare);

  const [medicationRecord, setMedicationRecord] = useState<
    MedicationRecordData[]
  >(initialState.medicationRecord);

  const [prnRecord, setPrnRecord] = useState<MedicationPRNRecordData[]>(
    initialState.medicalPRNRecord,
  );

  const [medicalAdminRecord, setMedicalAdminRecord] = useState<
    MedicationAdminRecordData[]
  >(initialState.medicalAdminRecord);

  const [admissionDetails, setAdmissionDetails] = useState<Admission>(
    initialState.admission,
  );

  const [nextOfKinData, setNextOfKinData] = useState<NextOfKin>(
    initialState.nextOfKin,
  );

  const [wardData, setWardData] = useState<WardData>(
    initialState.orientationToWard,
  );

  const [aidsData, setAidsData] = useState<AidsData[]>(
    initialState.aidsAndProsthetics,
  );

  const [showNext, setShowNext] = useState<boolean>(false);
  const [medicationType, setMedicationType] = useState<SelectInter[]>(
    initialState.medicationRecordType,
  );

  const updateMode = (mode: string) => {
    setMode(mode);
  };

  const forwardComponent = (id: number) => {
    let num = 1;
    if (id === 5) num = 2;
    enableNext(false);
    setSelectedComponent(id + num);
  };

  const backwardComponent = (id: number) => {
    let num = 1;

    if (id === 7) num = 2;
    setSelectedComponent(id - num);
  };

  const updateHeaderText = (text: string) => {
    setHeaderText(text);
  };

  const updateValidator = (value: number) => {
    forceUpdate(value);
  };

  const handleBack = (id: number) => {
    validator.current.purgeFields();
    let num = 1;
    if (id === 7) num = 2;
    setSelectedComponent(id - num);
  };

  const selectComponent = (id: number): void => {
    setSelectedComponent(id);
  };

  const enableNext = (val: boolean): void => {
    setShowNext(val);
  };

  const handleResponse = (
    status: number,
    id: number,
    successText: string,
    failureText: string,
  ) => {
    if (successStatus.includes(status)) {
      toast.success(successText);
      validator.current.hideMessages();
      updateValidator(id);
      sideNav[id - 1].active = true;
    } else {
      toast.error(failureText);
    }
  };

  const updateStepperActive = (checkArray: boolean[] | [], id: number) => {
    const result = checkArray.every((isTrue) => isTrue);
    if (!result) return false;
    initialState.steppers[id].active = true;
  };

  const checkValue = (
    obj:
      | PatientBasic
      | PatientDemographics
      | MedicalSummaryData
      | SurgicalSummaryData
      | AllergyRowData
      | RowData
      | SurgicalRowData
      | Admission
      | CareData
      | NextOfKin
      | WardData
      | AidsRow
      | ClinicalNotesData
      | DiagnosisRowData
      | ObservationRowData,
  ) => {
    const result = [];
    for (const [key, value] of Object.entries(obj)) {
      if (key === 'id') continue;
      switch (typeof value) {
        case 'string':
          if (!value) {
            result.push(false);
            continue;
          }
          result.push(true);
          continue;
        case 'number':
          if (!value) {
            result.push(false);
            continue;
          }
          result.push(true);
          continue;
        case 'object': {
          if (!value?.value) {
            continue;
          }
          if (!value) {
            result.push(false);
            continue;
          }
          result.push(true);
        }
      }
    }
    return result;
  };

  const updateHeaderActive = () => {
    const patientDetailsIsFiled = initialState.steppers
      .filter((x) => x.headerTitle === 'Add Patient' && x.id !== 1)
      .map((y) => y.active)
      .every((isTrue) => isTrue);

    if (patientDetailsIsFiled) initialState.steppers[0].active = true;

    const admissionDetailsIsFiled = initialState.steppers
      .filter((x) => x.headerTitle === 'Admission' && x.id !== 6 && x.id !== 13)
      .map((y) => y.active)
      .every((isTrue) => isTrue);

    if (admissionDetailsIsFiled) initialState.steppers[5].active = true;
  };

  const checkAndUpdateValue = () => {
    for (const data of initialState.steppers.filter((x) => !x.header)) {
      switch (data.name) {
        case 'Basic Details':
          {
            const result = checkValue(patientBasicDetails);
            if (!result.length) continue;
            updateStepperActive(result, 1);
          }
          continue;
        case 'Patient Demographics':
          {
            const result = checkValue(patientDemographics);
            if (!result.length) continue;
            updateStepperActive(result, 2);
          }
          continue;
        case 'Medical Summary':
          {
            const combinedMedicalAndSummary: boolean[] = [];
            medicalSummary.forEach((ms) => {
              const result = checkValue(ms.data);
              combinedMedicalAndSummary.push(...result);
            });
            surgicalSummary.forEach((ss) => {
              const result = checkValue(ss.data);
              combinedMedicalAndSummary.push(...result);
            });
            if (!combinedMedicalAndSummary.length) continue;
            updateStepperActive(combinedMedicalAndSummary, 3);
          }
          continue;
        case 'Allergies':
          {
            const combinedAllergyData: boolean[] = [];
            allergy.forEach((ele) => {
              const result = checkValue(ele.data);
              combinedAllergyData.push(...result);
            });
            if (!combinedAllergyData.length) continue;
            updateStepperActive(combinedAllergyData, 4);
          }
          continue;
        case 'Admission Ward':
          {
            const combinedAdmissionData: boolean[] = [];
            const admissionDetailsIsFilled = checkValue(admissionDetails);
            const nextOfKindIsFille = checkValue(nextOfKinData);
            const orientationToWardIsFilled = checkValue(wardData);
            combinedAdmissionData.push(
              ...admissionDetailsIsFilled,
              ...nextOfKindIsFille,
              ...orientationToWardIsFilled,
            );

            care.forEach((ele) => {
              const result = checkValue(ele.data);
              combinedAdmissionData.push(...result);
            });

            aidsData.forEach((ad) => {
              const result = checkValue(ad.data);
              combinedAdmissionData.push(...result);
            });

            if (!combinedAdmissionData.length) continue;
            updateStepperActive(combinedAdmissionData, 6);
          }
          continue;
        case 'Clinical Notes':
          {
            const combinedClinicalNoteData: boolean[] = [];
            clinicalNotes.forEach((cn) => {
              const result = checkValue(cn.data);
              combinedClinicalNoteData.push(...result);
            });
            if (!combinedClinicalNoteData.length) continue;
            updateStepperActive(combinedClinicalNoteData, 10);
          }
          continue;
        case 'Diagnosis & Observation': {
          const combinedDiagnosisAndObservation: boolean[] = [];
          diagnosis.forEach((d) => {
            const result = checkValue(d.data);
            combinedDiagnosisAndObservation.push(...result);
          });
          observation.forEach((ob) => {
            const result = checkValue(ob.data);
            combinedDiagnosisAndObservation.push(...result);
          });

          if (combinedDiagnosisAndObservation.length)
            updateStepperActive(combinedDiagnosisAndObservation, 7);
        }
      }
    }

    updateHeaderActive();
  };

  const updatePatientDetails = (data: PatientDetailsAndAdmissionData) => {
    setPatientBasicDetails({
      id: data?.id,
      familyName: data?.family_name,
      givenName: data?.given_name,
      dob: data.dob ? new Date(data.dob) : new Date(),
      address: data.address,
      gender: { value: data?.gender_id, label: data?.gender },
      URN: data?.URN,
      age: calculateAge(data.dob ? new Date(data.dob) : new Date()).toString(),
    });

    const medicationRecord: MedicationRecordData[] = [];
    let medicationDataRowId = 1;
    const medData = data.admissionPatient.admissionMedicationRecord.filter(
      (x) => x.record_type === 1,
    );
    for (let i = 0; i < medData.length; i++) {
      medicationRecord.push({
        id: medicationDataRowId,
        data: {
          id: medData[i].id,
          name: medData[i].medication_name,
          date_ordered: new Date(medData[i].date_ordered),
          dose: medData[i].dose,
          route_of_administration: medData[i].route_of_admin,
          frequency: medData[i].frequency,
          indication: medData[i].indication,
          prescriber: medData[i].prescriber,
          status: getKeyValuePair(medData[i].status, 'status'),
          admission_id: medData[i].admission_id,
          type: medData[i].record_type,
        },
      });

      medicationDataRowId += 1;
    }
    if (medicationRecord.length)
      setMedicationRecord(() => [...medicationRecord]);

    const prnRecord: MedicationPRNRecordData[] = [];
    const prnData = data.admissionPatient.admissionMedicationRecord.filter(
      (x) => x.record_type === 2,
    );
    let medicationPrnRowId = 1;
    for (let i = 0; i < prnData?.length; i++) {
      prnRecord.push({
        id: medicationPrnRowId,
        data: {
          id: prnData[i].id,
          name: prnData[i].medication_name,
          date_ordered: new Date(prnData[i].date_ordered),
          dose: prnData[i].dose,
          route_of_administration: prnData[i].route_of_admin,
          frequency: prnData[i].frequency,
          indication: prnData[i].indication,
          prescriber: prnData[i].prescriber,
          status: getKeyValuePair(prnData[i].status, 'status'),
          admission_id: prnData[i].admission_id,
          type: prnData[i].record_type,
        },
      });
      medicationPrnRowId += 1;
    }

    if (prnRecord.length) setPrnRecord(() => [...prnRecord]);

    const medicalAdminRecord: MedicationAdminRecordData[] = [];
    let medicationAdminRowId = 1;
    for (
      let i = 0;
      i < data?.admissionPatient?.admissionMedicationAdminRecord?.length;
      i++
    ) {
      medicalAdminRecord.push({
        id: medicationAdminRowId,
        data: {
          admin_id: data.admissionPatient.admissionMedicationAdminRecord[i].id,
          admin_name: {
            label: data.admissionPatient.admissionMedicationAdminRecord[i].name,
            value: data.admissionPatient.admissionMedicationAdminRecord[i].name,
          },
          admin_date: new Date(
            data.admissionPatient.admissionMedicationAdminRecord[i].date,
          ),
          admin_route_of_administration:
            data.admissionPatient.admissionMedicationAdminRecord[i]
              .route_of_admin,
          admin_time:
            data.admissionPatient.admissionMedicationAdminRecord[i].time,
          admin_action:
            data.admissionPatient.admissionMedicationAdminRecord[i].action,
          admin_dose:
            data.admissionPatient.admissionMedicationAdminRecord[i].dose,
          admin_signature:
            data.admissionPatient.admissionMedicationAdminRecord[i].signature,
          admission_id:
            data.admissionPatient.admissionMedicationAdminRecord[i]
              .admission_id,
        },
      });
      medicationAdminRowId += 1;
    }
    if (medicalAdminRecord.length)
      setMedicalAdminRecord(() => [...medicalAdminRecord]);

    setPatientDemographics({
      contactNumber: data?.contact_number,
      emergencyContact: data?.emergency_contact_number,
      status: handleYesOrNo(Boolean(data?.veteran_status)),
      country: { value: data?.country, label: data?.country },
      religion: data?.religion,
      maritalStatus: {
        value: data?.marital_status,
        label: data?.marital_status,
      },
      language: { value: data?.language, label: data?.language },
      interpreter: handleYesOrNo(Boolean(data?.interpreter_required)),
      socialHistory: data?.social_history,
      familyHistory: data?.family_history,
    });

    const medicationData: MedicalSummaryData[] = [];
    let medicalSummaryRowId = 1;
    for (
      let medical = 0;
      medical < data?.medicationPatient?.length;
      medical++
    ) {
      medicationData.push({
        id: medicalSummaryRowId,
        data: {
          id: data.medicationPatient[medical].id,
          medicationName: data.medicationPatient[medical].medication_name,
          doseInformation: data.medicationPatient[medical].dose_information,
          reason: data.medicationPatient[medical].reason,
        },
      });
      medicalSummaryRowId += 1;
    }

    if (medicationData.length) {
      setMedicalSummaryCheckBox(true);
      setMedicalSummary(medicationData);
    }

    const surgeryData: SurgicalSummaryData[] = [];
    let surgerySummaryRowId = 1;
    for (let surgery = 0; surgery < data?.surgeryPatient?.length; surgery++) {
      surgeryData.push({
        id: surgerySummaryRowId,
        data: {
          id: data.surgeryPatient[surgery].id,
          surgeryName: data.surgeryPatient[surgery].surgery_name,
          surgeryDate: new Date(data.surgeryPatient[surgery].surgery_date),
          reason: data.surgeryPatient[surgery].reason,
        },
      });
      surgerySummaryRowId += 1;
    }

    if (surgeryData.length) {
      setSurgicalSummaryCheckBox(true);
      setSurgicalSummary(surgeryData);
    }

    const allergyData: AllergyData[] = [];
    let allergyRowId = 1;
    for (let allergy = 0; allergy < data?.patientAllergy?.length; allergy++) {
      allergyData.push({
        id: allergyRowId,
        data: {
          id: data.patientAllergy[allergy].id,
          substance: data.patientAllergy[allergy].substance,
          reaction: getKeyValuePair(
            data.patientAllergy[allergy].reaction,
            'allergyReaction',
          ),
          symptoms: data.patientAllergy[allergy].symptoms,
          severity: getKeyValuePair(
            data.patientAllergy[allergy].severity,
            'allergySeverity',
          ),
        },
      });
      allergyRowId += 1;
    }

    if (allergyData.length) {
      setAllergyCheckBox(true);
      setAllergy(() => [...allergyData]);
    }

    setAdmissionDetails({
      id: data?.admissionPatient?.id,
      admittingDoctor: data?.admissionPatient?.admitting_doctor,
      admissionTime: data?.admissionPatient?.admitting_date
        ? new Date(data.admissionPatient.admitting_date)
        : new Date(),
      gp: data?.admissionPatient?.gp,
      medicareNo: data?.admissionPatient?.medicare_no,
      membershipNo: data?.admissionPatient?.membership_no,
      height: data?.admissionPatient?.patient_height,
      admissionProcedure: data?.admissionPatient?.admission_procedure,
      phoneNumber: data?.admissionPatient?.phone_number,
      treatingDoctor: data?.admissionPatient?.treating_doctor_at_admission,
      cardNo: data?.admissionPatient?.card_ref_no,
      weight: data?.admissionPatient?.patient_weight,
      reasonForAdmission: data?.admissionPatient?.reason_for_admission,
      insurance: data?.admissionPatient?.health_insurance_no,
    });

    setWardData({
      wardNumber: data?.admissionPatient?.ward_number,
      wardName: data?.admissionPatient?.ward_name,
      orientationToWard: {
        value: data?.admissionPatient?.orientation_to_ward,
        label: data?.admissionPatient?.orientation_to_ward,
      },
    });

    setNextOfKinData({
      name: data?.admissionPatient?.kin_name,
      relationship: data?.admissionPatient?.kin_relationship,
      kinPhone: data?.admissionPatient?.kin_phone_number,
      address: data?.admissionPatient?.kin_address,
    });

    const aidsData: AidsData[] = [];
    let aidsRowId = 1;
    for (let i = 0; i < data?.admissionPatient?.admissionAids?.length; i++) {
      aidsData.push({
        id: aidsRowId,
        data: {
          id: data.admissionPatient.admissionAids[i].id,
          aidsType: getKeyValuePair(
            data.admissionPatient.admissionAids[i].aids_name,
            'aidsType',
          ),
          aidsReason: data.admissionPatient.admissionAids[i].aids_reason,
        },
      });
      aidsRowId += 1;
    }

    if (aidsData.length) setAidsData(() => [...aidsData]);

    const careData: CareRow[] = [];
    let careRowId = 1;
    for (let i = 0; i < data?.admissionPatient?.admissionCare?.length; i++) {
      careData.push({
        id: careRowId,
        data: {
          id: data.admissionPatient.admissionCare[i].id,
          careStartDate: new Date(
            data.admissionPatient.admissionCare[i].care_start_date,
          ),
          careType: data.admissionPatient.admissionCare[i].care_type,
          careNotes: data.admissionPatient.admissionCare[i].care_notes,
        },
      });
      careRowId += 1;
    }

    if (careData.length) setCare(() => [...careData]);

    const clinicalNotesData: ClinicalNotes[] = [];
    let clinicalRowId = 1;
    for (
      let clinical = 0;
      clinical < data?.admissionPatient?.admissionClinicalNotes?.length;
      clinical++
    ) {
      clinicalNotesData.push({
        id: clinicalRowId,
        data: {
          id: data.admissionPatient.admissionClinicalNotes[clinical].id,
          documentCapturedBy:
            data.admissionPatient.admissionClinicalNotes[clinical]
              .document_captured_by,
          dateAndTime: new Date(
            data.admissionPatient.admissionClinicalNotes[
              clinical
            ].date_and_time,
          ),
          note: data.admissionPatient.admissionClinicalNotes[clinical].note,
        },
      });
      clinicalRowId += 1;
    }

    if (clinicalNotesData.length)
      setClinicalNotes(() => [...clinicalNotesData]);

    const diagnosisData: Diagnosis[] = [];
    let diagnosisRowId = 1;
    for (
      let diagnosis = 0;
      diagnosis < data?.admissionPatient?.admissionDiagnosis?.length;
      diagnosis++
    ) {
      diagnosisData.push({
        id: diagnosisRowId,
        data: {
          id: data.admissionPatient.admissionDiagnosis[diagnosis].id,
          diagnosisDate: new Date(
            data.admissionPatient.admissionDiagnosis[diagnosis].createdAt,
          ),
          diagnosisSuggested:
            data.admissionPatient.admissionDiagnosis[diagnosis]
              .diagnosis_suggested,
          suggestedBy:
            data.admissionPatient.admissionDiagnosis[diagnosis].suggested_by,
          suggestedOn: new Date(
            data.admissionPatient.admissionDiagnosis[diagnosis].suggested_on,
          ),
          notes: data.admissionPatient.admissionDiagnosis[diagnosis].notes,
        },
      });
      diagnosisRowId += 1;
    }

    if (diagnosisData.length) setDiagnosis(() => [...diagnosisData]);

    const observationData: Observation[] = [];
    let observationRowId = 1;
    for (
      let observation = 0;
      observation < data?.admissionPatient?.admissionObservation?.length;
      observation++
    ) {
      observationData.push({
        id: observationRowId,
        data: {
          id: data.admissionPatient.admissionObservation[observation].id,
          observationDate: new Date(
            data.admissionPatient.admissionObservation[observation].createdAt,
          ),
          temperature:
            data.admissionPatient.admissionObservation[observation].temperature,
          bloodPressure:
            data.admissionPatient.admissionObservation[observation]
              .blood_pressure,
          heartRate:
            data.admissionPatient.admissionObservation[observation].heart_rate,
          spo: data.admissionPatient.admissionObservation[observation].spo2,
          oxygen:
            data.admissionPatient.admissionObservation[observation]
              .oxygen_flow_rate,
          exercise:
            data.admissionPatient.admissionObservation[observation]
              .recording_of_exercise,
          notes: data.admissionPatient.admissionObservation[observation].note,
          painLevel:
            data.admissionPatient.admissionObservation[observation].pain_level,
          painLevelNotes:
            data.admissionPatient.admissionObservation[observation]
              .pain_level_note,
        },
      });

      observationRowId += 1;
    }
    if (observationData.length) setObservation(() => [...observationData]);

    const medicationValue = data.admissionPatient.admissionMedicationRecord.map(
      (y) => ({
        label: y.medication_name,
        value: y.medication_name,
      }),
    );

    setMedicationType(medicationValue);
    setValue((pv) => pv + 1);
  };

  const handleArrayOfInput = (
    state: string,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    id: number | undefined,
  ) => {
    switch (state) {
      case 'medicalSummary':
        {
          const selectedRow = medicalSummary.find((x) => x.id === id);
          if (!selectedRow) return;

          selectedRow.data[e.target.name] = e.target.value;
          setMedicalSummary(() => [...medicalSummary]);
        }
        break;
      case 'surgicalSummary':
        {
          const selectedRow = surgicalSummary.find((x) => x.id === id);
          if (!selectedRow) return;

          selectedRow.data[e.target.name] = e.target.value;
          setSurgicalSummary(() => [...surgicalSummary]);
        }
        break;
      case 'allergy':
        {
          const selectedRow = allergy.find((x) => x.id === id);
          if (!selectedRow) return;

          selectedRow.data[e.target.name] = e.target.value;
          setAllergy(() => [...allergy]);
        }
        break;
      case 'care':
        {
          const selectedRow = care.find((x) => x.id === id);
          if (!selectedRow) return;

          selectedRow.data[e.target.name] = e.target.value;
          setAllergy(() => [...allergy]);
        }
        break;
      case 'diagnosis':
        {
          const selectedRow = diagnosis.find((x) => x.id === id);
          if (!selectedRow) return;

          selectedRow.data[e.target.name] = e.target.value;
          setDiagnosis(() => [...diagnosis]);
        }
        return;
      case 'observation':
        {
          const selectedRow = observation.find((x) => x.id === id);
          if (!selectedRow) return;

          selectedRow.data[e.target.name] = e.target.value;
          setObservation(() => [...observation]);
        }
        break;
      case 'clinicalNotes':
        {
          const selectedRow = clinicalNotes.find((x) => x.id === id);
          if (!selectedRow) return;

          selectedRow.data[e.target.name] = e.target.value;
          setClinicalNotes(() => [...clinicalNotes]);
        }
        break;
      case 'labTestAndReport':
        {
          const selectedRow = labTestAndReport.find((x) => x.id === id);
          if (!selectedRow) return;
          selectedRow.data[e.target.name] = e.target.value;
          setLabTestAndReport(() => [...labTestAndReport]);
        }
        break;
      case 'aidsData':
        {
          const selectedRow = aidsData.find((x) => x.id === id);
          if (!selectedRow) {
            return;
          }
          selectedRow.data[e.target.name] = e.target.value;
          setAidsData(() => [...aidsData]);
        }
        break;
      case 'prnRecord':
        {
          const selectedRow = prnRecord.find((x) => x.id === id);
          if (!selectedRow) {
            return;
          }
          selectedRow.data[e.target.name] = e.target.value;
          setPrnRecord(() => [...prnRecord]);
        }
        break;
      case 'medicationAdminRecord':
        {
          const selectedRow = medicalAdminRecord.find((x) => x.id === id);
          if (!selectedRow) {
            return;
          }
          selectedRow.data[e.target.name] = e.target.value;
          setMedicalAdminRecord(() => [...medicalAdminRecord]);
        }
        break;
      case 'medicationRecord':
        {
          const selectedRow = medicationRecord.find((x) => x.id === id);
          if (!selectedRow) {
            return;
          }
          selectedRow.data[e.target.name] = e.target.value;
          setMedicationRecord(() => [...medicationRecord]);
          handleMedicationType();
        }
        break;
      default:
        break;
    }
  };

  const handleMedicationType = () => {
    const data = [];

    for (const med of medicationRecord) {
      if (!med.data.name) continue;
      data.push({
        label: med.data.name,
        value: med.data.name,
      });
    }
    setMedicationType(data);
  };

  const handleInput = (
    state: string,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    id?: number | undefined,
  ) => {
    if (id) {
      handleArrayOfInput(state, e, id);
    }
    switch (state) {
      case 'patientBasicDetails':
        setPatientBasicDetails({
          ...patientBasicDetails,
          [e.target.name]: e.target.value,
        });
        break;
      case 'patientDemographics':
        setPatientDemographics({
          ...patientDemographics,
          [e.target.name]: e.target.value,
        });
        break;
      case 'discharge':
        setDischarge({
          ...discharge,
          [e.target.name]: e.target.value,
        });
        break;
      case 'admissionDetails':
        {
          setAdmissionDetails({
            ...admissionDetails,
            [e.target.name]: e.target.value,
          });
        }
        break;
      case 'wardData':
        {
          setWardData({
            ...wardData,
            [e.target.name]: e.target.value,
          });
        }
        break;
      case 'nextOfKinData':
        setNextOfKinData({
          ...nextOfKinData,
          [e.target.name]: e.target.value,
        });
        break;
      default:
        break;
    }
  };

  const handleDropDown = (
    state: string,
    name: string,
    option: SingleValue<{
      value: string | number | undefined;
      label: string | undefined;
    }>,
    id?: number,
  ) => {
    if (!option) {
      return;
    }

    const { label, value } = option;

    switch (state) {
      case 'patientBasicDetails':
        setPatientBasicDetails({
          ...patientBasicDetails,
          [name]: { value, label },
        });
        break;
      case 'patientDemographics':
        setPatientDemographics({
          ...patientDemographics,
          [name]: { value, label },
        });
        break;
      case 'allergy':
        {
          const selectedRow = allergy.find((x) => x.id === id);
          if (!selectedRow) {
            return;
          }
          selectedRow.data[name] = { value, label };
          setAllergy(() => [...allergy]);
        }
        break;
      case 'medicationRecord':
        {
          const selectedRow = medicationRecord.find((x) => x.id === id);
          if (!selectedRow) {
            return;
          }
          selectedRow.data[name] = { value, label };
          setMedicationRecord(() => [...medicationRecord]);
        }
        break;
      case 'discharge':
        setDischarge({
          ...discharge,
          [name]: { value, label },
        });
        break;
      case 'labTestAndReport':
        {
          const selectedRow = labTestAndReport.find((x) => x.id === id);
          if (!selectedRow) return;

          selectedRow.data[name] = { value, label };
          setLabTestAndReport(() => [...labTestAndReport]);
        }
        break;
      case 'wardData':
        setWardData({
          ...wardData,
          [name]: { value, label },
        });
        break;
      case 'aidsData':
        {
          const selectedRow = aidsData.find((x) => x.id === id);
          if (!selectedRow) {
            return;
          }
          selectedRow.data[name] = { value, label };
          setAidsData(() => [...aidsData]);
        }

        break;
      case 'prnRecord':
        {
          const selectedRow = prnRecord.find((x) => x.id === id);
          if (!selectedRow) {
            return;
          }
          selectedRow.data[name] = { value, label };
          setPrnRecord(() => [...prnRecord]);
        }
        break;
      case 'medicationAdminRecord':
        {
          const selectedRow = medicalAdminRecord.find((x) => x.id === id);
          if (!selectedRow) {
            return;
          }
          selectedRow.data[name] = { value, label };
          const prnData = prnRecord.find((x) => x.data.name === label);
          const adminData = medicationRecord.find((x) => x.data.name === label);
          selectedRow.data.admin_route_of_administration = adminData
            ? adminData?.data.route_of_administration
            : prnData?.data.route_of_administration;
          selectedRow.data.admin_dose = adminData
            ? adminData?.data.dose
            : prnData?.data.dose;
          setMedicalAdminRecord(() => [...medicalAdminRecord]);
        }
        break;
      default:
        break;
    }
  };

  const handleDate = (state: string, name: string, date: Date, id?: number) => {
    switch (state) {
      case 'patientBasicDetails':
        setPatientBasicDetails({
          ...patientBasicDetails,
          [name]: date,
          age: calculateAge(date),
        });
        break;
      case 'surgicalSummary':
        {
          const selectedRow = surgicalSummary.find((x) => x.id === id);
          if (!selectedRow) return;

          selectedRow.data[name] = date;
          setSurgicalSummary(() => [...surgicalSummary]);
        }
        break;
      case 'diagnosis':
        {
          const selectedRow = diagnosis.find((x) => x.id === id);
          if (!selectedRow) return;

          selectedRow.data[name] = date;
          setDiagnosis(() => [...diagnosis]);
        }
        break;
      case 'discharge':
        setDischarge({
          ...discharge,
          [name]: date,
        });
        break;
      case 'clinicalNotes':
        {
          const selectedRow = clinicalNotes.find((x) => x.id === id);
          if (!selectedRow) return;

          selectedRow.data[name] = date;
          setClinicalNotes(() => [...clinicalNotes]);
        }
        break;
      case 'care':
        {
          const selectedRow = care.find((x) => x.id === id);

          if (!selectedRow) return;

          selectedRow.data[name] = date;
          setCare(() => [...care]);
        }
        break;
      case 'labTestAndReport':
        {
          const selectedRow = labTestAndReport.find((x) => x.id === id);
          if (!selectedRow) return;

          selectedRow.data[name] = date;
          setLabTestAndReport(() => [...labTestAndReport]);
        }
        break;
      case 'medicationRecord':
        {
          const selectedRow = medicationRecord.find((x) => x.id === id);

          if (!selectedRow) {
            return;
          }
          selectedRow.data[name] = date;
          setMedicationRecord(() => [...medicationRecord]);
        }
        break;
      case 'prnRecord':
        {
          const selectedRow = prnRecord.find((x) => x.id === id);

          if (!selectedRow) {
            return;
          }
          selectedRow.data[name] = date;
          setPrnRecord(() => [...prnRecord]);
        }
        break;
      case 'admissionDetails':
        setAdmissionDetails({
          ...admissionDetails,
          [name]: date,
        });
        break;
      case 'medicationAdminRecord':
        {
          const selectedRow = medicalAdminRecord.find((x) => x.id === id);

          if (!selectedRow) {
            return;
          }
          selectedRow.data[name] = date;
          setMedicalAdminRecord(() => [...medicalAdminRecord]);
        }
        break;
      default:
        break;
    }
  };

  const handleCheckBox = (state: string) => {
    switch (state) {
      case 'medicalSummary':
        setMedicalSummaryCheckBox(!medicalSummaryCheckBox);
        return;
      case 'surgicalSummary':
        setSurgicalSummaryCheckBox(!surgicalSummaryCheckBox);
        return;
      case 'allergy':
        setAllergyCheckBox(!allergyCheckBox);
        return;
      default:
        return;
    }
  };

  const handlePhoneNumber = (
    state: string,
    name: string,
    contactNUmber: string,
  ) => {
    switch (state) {
      case 'patientDemographics': {
        setPatientDemographics({
          ...patientDemographics,
          [name]: contactNUmber,
        });
      }
    }
  };

  const handleFile = (
    state: string,
    name: string,
    e: React.ChangeEvent<HTMLInputElement>,
    id?: number,
  ) => {
    switch (state) {
      case 'labTestAndReport':
        {
          const selectedRow = labTestAndReport.find((x) => x.id === id);
          if (!selectedRow) return;

          const file = e.target.files ? e.target.files[0] : null;
          if (!file) return;

          const fileName = file.name;
          if (name === 'report') {
            const upload = toast.loading('Uploading...');
            const formData = new FormData();
            formData.append('report', file);
            uploadFileInS3(formData, 'report').then((resp) => {
              if (resp.status === 200) {
                toast.update(upload, {
                  render: 'Upload Successfully',
                  type: 'success',
                  isLoading: false,
                  autoClose: 3000,
                  closeButton: true,
                });

                selectedRow.data.reportName = fileName;
                selectedRow.data[name] = 'report/' + resp.data.message;
                setLabTestAndReport(() => [...labTestAndReport]);
              } else
                toast.update(upload, {
                  render: resp.data.message,
                  type: 'error',
                  isLoading: false,
                  autoClose: 3000,
                  closeButton: true,
                });
            });
          }

          if (name === 'signature') {
            const upload = toast.loading('Uploading...');
            const formData = new FormData();
            formData.append('signature', file);

            uploadFileInS3(formData, 'signature').then((resp) => {
              if (resp.status === 200) {
                toast.update(upload, {
                  render: 'Upload Successfully',
                  type: 'success',
                  isLoading: false,
                  autoClose: 3000,
                  closeButton: true,
                });
                selectedRow.data.signatureName = fileName;
                selectedRow.data[name] = 'signature/' + resp.data.message;
                setLabTestAndReport(() => [...labTestAndReport]);
              } else
                toast.update(upload, {
                  render: resp.data.message,
                  type: 'error',
                  isLoading: false,
                  autoClose: 3000,
                  closeButton: true,
                });
            });
          }
        }
        break;
      default:
        break;
    }
  };

  const addRow = (state: string) => {
    switch (state) {
      case 'medicalSummary':
        {
          const newData = {
            id: medicalSummary.length + 1,
            data: {
              medicationName: null,
              doseInformation: null,
              reason: null,
            },
          };
          setMedicalSummary((prevRows) => [...prevRows, newData]);
        }
        break;
      case 'surgicalSummary':
        {
          const newData = {
            id: surgicalSummary.length + 1,
            data: {
              surgeryName: null,
              surgeryDate: null,
              reason: null,
            },
          };

          setSurgicalSummary((prevRows) => [...prevRows, newData]);
        }
        break;
      case 'allergy':
        {
          const newData = {
            id: allergy.length + 1,
            data: {
              substance: null,
              reaction: { value: 0, label: 'select' },
              symptoms: null,
              severity: { value: 0, label: 'select' },
            },
          };

          setAllergy((prevRows) => [...prevRows, newData]);
        }
        break;
      case 'medicationRecord':
        {
          const newData = {
            id: medicationRecord.length + 1,
            data: {
              id: null,
              name: null,
              date_ordered: null,
              dose: null,
              route_of_administration: null,
              frequency: null,
              indication: null,
              prescriber: null,
              status: { value: 0, label: 'Select' },
            },
          };
          setMedicationRecord((prevRows) => [...prevRows, newData]);
        }
        break;
      case 'prnRecord':
        {
          const newData = {
            id: prnRecord.length + 1,
            data: {
              id: null,
              name: null,
              date_ordered: null,
              dose: null,
              route_of_administration: null,
              frequency: null,
              indication: null,
              prescriber: null,
              status: { value: 0, label: 'Select' },
            },
          };
          setPrnRecord((prevRows) => [...prevRows, newData]);
        }
        break;
      case 'medicationAdminRecord':
        {
          const newData = {
            id: medicalAdminRecord.length + 1,
            data: {
              admin_id: null,
              admin_name: { value: 0, label: 'Select' },
              admin_date: null,
              admin_dose: null,
              admin_route_of_administration: null,
              admin_time: null,
              admin_action: null,
              admin_signature: null,
            },
          };
          setMedicalAdminRecord((prevRows) => [...prevRows, newData]);
        }
        break;
      case 'diagnosis':
        {
          const newData = {
            id: diagnosis.length + 1,
            data: {
              diagnosisDate: new Date(),
              diagnosisSuggested: '',
              suggestedBy: '',
              suggestedOn: new Date(),
              notes: '',
            },
          };

          setDiagnosis((previousRow) => [...previousRow, newData]);
        }
        break;
      case 'observation':
        {
          const newData = {
            id: observation.length + 1,
            data: {
              observationDate: new Date(),
              temperature: '',
              bloodPressure: '',
              heartRate: '',
              spo: '',
              oxygen: '',
              exercise: '',
              notes: '',
              painLevelNotes: '',
              painLevel: 0,
            },
          };
          setObservation((previousRow) => [...previousRow, newData]);
        }
        break;
      case 'clinicalNotes':
        {
          const newDate = {
            id: clinicalNotes.length + 1,
            data: {
              documentCapturedBy: '',
              dateAndTime: new Date(),
              note: '',
            },
          };

          setClinicalNotes((pv) => [...pv, newDate]);
        }
        break;
      case 'aidsData':
        {
          const newData = {
            id: aidsData.length + 1,
            data: {
              aidsType: { value: 0, label: 'select' },
              aidsReason: '',
            },
          };

          setAidsData((prevRows) => [...prevRows, newData]);
        }
        break;
      case 'care':
        {
          const newData = {
            id: care.length + 1,
            data: {
              careStartDate: null,
              careType: '',
              careNotes: '',
            },
          };

          setCare((prevRows) => [...prevRows, newData]);
        }
        break;
      case 'labTestAndReport':
        {
          const newData = {
            id: labTestAndReport.length + 1,
            data: {
              diagnosisType: { label: 'Select', value: '' },
              reportUploadDateAndTime: new Date(),
              diagnosisReportReviewed: '',
              reportName: '',
              report: null,
              signatureName: '',
              signature: null,
            },
          };

          setLabTestAndReport((pr) => [...pr, newData]);
        }
        break;
      default:
        break;
    }
  };

  const removeRow = (state: string, id: number) => {
    switch (state) {
      case 'medicalSummary':
        {
          const removedData = medicalSummary.filter((x) => x.id !== id);
          const data: MedicalSummaryData[] = [];
          let newId = 1;
          for (let i = 0; i < removedData.length; i++) {
            data.push({
              id: newId,
              data: removedData[i].data,
            });
            newId += 1;
          }
          setMedicalSummary(() => [...data]);
        }
        break;
      case 'surgicalSummary':
        {
          const removedData = surgicalSummary.filter((x) => x.id !== id);
          const data: SurgicalSummaryData[] = [];
          let newId = 1;
          for (let i = 0; i < removedData.length; i++) {
            data.push({
              id: newId,
              data: removedData[i].data,
            });
            newId += 1;
          }
          setSurgicalSummary(() => [...data]);
        }
        break;
      case 'allergy':
        {
          const removedData = allergy.filter((x) => x.id !== id);
          const data: AllergyData[] = [];
          let newId = 1;
          for (let i = 0; i < removedData.length; i++) {
            data.push({
              id: newId,
              data: removedData[i].data,
            });
            newId += 1;
          }
          setAllergy(() => [...data]);
        }
        break;
      case 'medicationRecord':
        {
          const removedData = medicationRecord.filter((x) => x.id !== id);
          const data: MedicationRecordData[] = [];
          let newId = 1;
          for (let i = 0; i < removedData.length; i++) {
            data.push({
              id: newId,
              data: removedData[i].data,
            });
            newId += 1;
            setMedicationRecord(() => [...data]);
          }
        }
        break;

      case 'aidsData':
        {
          const removedData = aidsData.filter((x) => x.id !== id);
          const data: AidsData[] = [];
          let newId = 1;
          for (let i = 0; i < removedData.length; i++) {
            data.push({
              id: newId,
              data: removedData[i].data,
            });
            newId += 1;
          }
          setAidsData(() => [...data]);
        }
        break;
      case 'labTestAndReport':
        {
          const removedData = labTestAndReport.filter((x) => x.id !== id);
          const data: LabTestAndReportData[] = [];
          let newId = 1;
          for (let i = 0; i < removedData.length; i++) {
            data.push({
              id: newId,
              data: removedData[i].data,
            });
            newId += 1;
          }
          setLabTestAndReport(() => [...data]);
        }
        break;

      case 'prnRecord':
        {
          const removedData = prnRecord.filter((x) => x.id !== id);
          const data: MedicationPRNRecordData[] = [];
          let newId = 1;
          for (let i = 0; i < removedData.length; i++) {
            data.push({
              id: newId,
              data: removedData[i].data,
            });
            newId += 1;
          }

          setPrnRecord(() => [...data]);
        }
        break;
      case 'care':
        {
          const removedData = care.filter((x) => x.id !== id);
          const data: CareRow[] = [];
          let newId = 1;
          for (let i = 0; i < removedData.length; i++) {
            data.push({
              id: newId,
              data: removedData[i].data,
            });
            newId += 1;
          }
          setCare(() => [...data]);
        }
        break;
      case 'clinicalNotes':
        {
          const removedData = clinicalNotes.filter((x) => x.id !== id);
          const data: ClinicalNotes[] = [];
          let newId = 1;
          for (let cn = 0; cn < removedData.length; cn++) {
            data.push({
              id: newId,
              data: removedData[cn].data,
            });
            newId += 1;
          }
          setClinicalNotes(() => [...data]);
        }
        break;
      case 'medicationAdminRecord':
        {
          const removedData = medicalAdminRecord.filter((x) => x.id !== id);
          const data: MedicationAdminRecordData[] = [];
          let newId = 1;
          for (let i = 0; i < removedData.length; i++) {
            data.push({
              id: newId,
              data: removedData[i].data,
            });
            newId += 1;
          }
          setMedicalAdminRecord(() => [...data]);
        }
        break;
      default:
        break;
    }
  };

  const deleteRow = (state: string, id: number) => {
    switch (state) {
      case 'medicalSummary': {
        if (mode === 'create') {
          removeRow('medicalSummary', id);
        } else {
          const medicalId = medicalSummary.find((x) => x.id === id)?.data.id;
          deleteMedicalSummary(medicalId)
            .then((resp) => {
              if (resp.status === 201) {
                toast.success('Medical summary deleted successfully');
                removeRow('medicalSummary', id);
              }
            })
            .catch((err) => {
              console.log(err);
              toast.error('Error while deleting medical summary');
            });
        }
        return;
      }
      case 'surgicalSummary': {
        if (mode === 'create') {
          removeRow('surgicalSummary', id);
        } else {
          const surgicalId = surgicalSummary.find((x) => x.id === id)?.data.id;
          deleteSurgicalSummary(surgicalId)
            .then((resp) => {
              if (resp.status === 201) {
                toast.success('Surgical summary deleted successfully');
                removeRow('surgicalSummary', id);
              }
            })
            .catch((err) => {
              console.log(err);
              toast.error('Error while deleting medical summary');
            });
        }
        return;
      }

      case 'allergy':
        {
          if (mode === 'create') {
            removeRow('allergy', id);
          } else {
            const allergyRowId = allergy.find((x) => x.id === id)?.data.id;
            console.log(allergyRowId);
            if (!allergyRowId) return;
            removeAllergy(allergyRowId)
              .then((resp) => {
                if (resp.status === 201) {
                  toast.success('Allergy deleted successfully');
                  removeRow('allergy', id);
                }
              })
              .catch((err) => {
                console.log(err);
                toast.error('Error while delete Allergy');
              });
          }
        }
        return;

      case 'medicationRecord':
        {
          if (mode === 'create') {
            removeRow('medicationRecord', id);
          }
          if (mode === 'edit') {
            const medicationRowId = medicationRecord.find((x) => x.id === id)
              ?.data.id;
            if (!medicationRowId) {
              removeRow('medicationRecord', id);
              return;
            }
            removeMedicationRecord(medicationRowId)
              .then((resp) => {
                if (resp.status === 201) {
                  toast.success('Medication deleted successfully');
                  removeRow('medicationRecord', id);
                } else {
                  toast.error('Failed to Delete Medication');
                }
              })
              .catch((err) => {
                console.log(err);
                toast.error('Error while deleting Medication');
              });
          }
        }
        return;

      case 'clinicalNotes':
        {
          if (mode === 'create') {
            removeRow('clinicalNotes', id);
          }

          if (mode === 'edit') {
            const clinicalNoteRowId = clinicalNotes.find((x) => x.id === id)
              ?.data.id;
            if (!clinicalNoteRowId) return;
            removeClinicalNote(clinicalNoteRowId)
              .then((resp) => {
                if (resp.status === 200) {
                  toast.success('Allergy deleted successfully');
                  removeRow('clinicalNotes', id);
                }
              })
              .catch((err) => {
                console.log(err);
                toast.error('Error while delete Clinical Notes');
              });
          }
        }
        return;
      case 'aidsData':
        {
          if (mode === 'create') {
            removeRow('aidsData', id);
          }
          if (mode === 'edit') {
            const aidsRowId = aidsData.find((x) => x.id === id)?.data.id;

            if (!aidsRowId) {
              removeRow('aidsData', id);
              return;
            }

            removeAids(aidsRowId)
              .then((resp) => {
                if (resp.status === 201) {
                  toast.success('Aids Removed');
                  removeRow('aidsData', id);
                } else {
                  toast.error('Failed to Delete Aids');
                }
              })
              .catch((err) => {
                console.log(err);
                toast.error('Error while deleting PRN Medication');
              });
          }
        }
        return;

      case 'prnRecord':
        {
          if (mode === 'create') {
            removeRow('prnRecord', id);
          }
          if (mode === 'edit') {
            const prnRowId = prnRecord.find((x) => x.id === id)?.data.id;
            if (!prnRowId) {
              removeRow('prnRecord', id);
              return;
            }
            removeMedicationRecord(prnRowId)
              .then((resp) => {
                if (resp.status === 201) {
                  toast.success('PRN Medication deleted successfully');
                  removeRow('prnRecord', id);
                } else {
                  toast.error('Failed to Delete PRN Medication');
                }
              })
              .catch((err) => {
                console.log(err);
                toast.error('Error while deleting PRN Medication');
              });
          }
        }
        return;
      case 'care':
        {
          if (mode === 'create') {
            removeRow('care', id);
          }
          if (mode === 'edit') {
            const careRowId = care.find((x) => x.id === id)?.data.id;

            if (!careRowId) {
              removeRow('care', id);
              return;
            }

            removeCare(careRowId)
              .then((resp) => {
                if (resp.status === 201) {
                  toast.success('Care deleted successfully');
                  removeRow('care', id);
                } else {
                  toast.error('Failed to Delete Care');
                }
              })
              .catch((err) => {
                console.log(err);
                toast.error('Error while deleting Care');
              });
          }
        }
        break;
      case 'labTestAndReport':
        {
          if (mode === 'create') {
            removeRow('labTestAndReport', id);
          }
          if (mode === 'edit') {
            removeRow('labTestAndReport', id);
          }
        }
        break;

      case 'medicationAdminRecord':
        {
          if (mode === 'create') {
            removeRow('medicationAdminRecord', id);
          }
          if (mode === 'edit') {
            const adminRowId = medicalAdminRecord.find((x) => x.id === id)?.data
              .admin_id;
            if (!adminRowId) {
              removeRow('medicationAdminRecord', id);
              return;
            }
            removeAdminRecord(adminRowId) // need to add API and edit functionality
              .then((resp) => {
                if (resp.status === 201) {
                  toast.success('Medication Admin Record deleted successfully');
                  removeRow('medicationAdminRecord', id);
                } else {
                  toast.error('Failed to Delete Medication Admin Record');
                }
              })
              .catch((err) => {
                console.log(err);
                toast.error('Error while deleting Medication Admin Record');
              });
          }
        }
        return;
      default:
        break;
    }
  };

  const frameReqData = (state: string) => {
    switch (state) {
      case 'Basic Details': {
        return {
          family_name: patientBasicDetails.familyName,
          given_name: patientBasicDetails.givenName,
          dob: patientBasicDetails.dob,
          user_course_id: 1,
          gender_id: Number(patientBasicDetails.gender.value),
          address: patientBasicDetails.address,
        };
      }
      case 'Patient Demographics': {
        return {
          contact_number: patientDemographics.contactNumber,
          emergency_contact_number: patientDemographics.emergencyContact,
          veteran_status: patientDemographics.status.value,
          country: patientDemographics.country.label,
          religion: patientDemographics.religion,
          marital_status: patientDemographics.maritalStatus.label,
          language: patientDemographics.language.label,
          interpreter_required: patientDemographics.interpreter.label,
          social_history: patientDemographics.socialHistory,
          family_history: patientDemographics.familyHistory,
        };
      }
      case 'Medical Summary': {
        return medicalSummary.map((x) => ({
          id: x.data.id,
          medication_name: x.data.medicationName,
          dose_information: x.data.doseInformation,
          reason: x.data.reason,
          patient_id: patientBasicDetails.id,
        }));
      }
      case 'Surgical Summary': {
        return surgicalSummary.map((x) => ({
          id: x.data.id,
          surgery_name: x.data.surgeryName,
          surgery_date: x.data.surgeryDate,
          reason: x.data.reason,
          patient_id: patientBasicDetails.id,
        }));
      }
      case 'Allergies': {
        return allergy.map((x) => ({
          id: x.data.id,
          substance: x.data.substance,
          patient_id: patientBasicDetails.id,
          reaction: x.data.reaction.value,
          symptoms: x.data.symptoms,
          severity: x.data.severity.value,
        }));
      }
      case 'Admission': {
        return {
          id: admissionDetails.id,
          admitting_doctor: admissionDetails.admittingDoctor,
          admitting_date: admissionDetails.admissionTime,
          gp: admissionDetails.gp,
          medicare_no: admissionDetails.medicareNo,
          membership_no: admissionDetails.medicareNo,
          patient_height: admissionDetails.height,
          admission_procedure: admissionDetails.admissionProcedure,
          phone_number: admissionDetails.phoneNumber,
          treating_doctor_at_admission: admissionDetails.treatingDoctor,
          card_ref_no: admissionDetails.cardNo,
          patient_weight: admissionDetails.weight,
          reason_for_admission: admissionDetails.reasonForAdmission,
          health_insurance_no: admissionDetails.insurance,
          ward_number: wardData.wardNumber,
          ward_name: wardData.wardName,
          orientation_to_ward: wardData.orientationToWard.label,
          kin_name: nextOfKinData.name,
          kin_address: nextOfKinData.address,
          kin_relationship: nextOfKinData.relationship,
          kin_phone_number: nextOfKinData.kinPhone,
          patient_id: patientBasicDetails.id,
        };
      }
      case 'Aids': {
        return aidsData.map((x) => ({
          id: x.data.id,
          aids_name: x.data.aidsType.value,
          aids_reason: x.data.aidsReason,
          admission_id: admissionDetails.id,
        }));
      }
      case 'Care': {
        return care.map((x) => ({
          id: x.data.id,
          care_start_date: x.data.careStartDate,
          care_type: x.data.careType,
          care_notes: x.data.careNotes,
          admission_id: admissionDetails.id,
        }));
      }
      case 'diagnosisAndObservation':
        {
          return {
            data: {
              diagnosis: diagnosis.map((x) => ({
                id: x.data.id,
                admission_id: admissionDetails.id,
                diagnosis_suggested: x.data.diagnosisSuggested,
                suggested_by: x.data.suggestedBy,
                suggested_on: x.data.suggestedOn,
                notes: x.data.notes,
              })),

              observation: observation.map((x) => ({
                id: x.data.id,
                admission_id: admissionDetails.id,
                temperature: x.data.temperature,
                blood_pressure: x.data.bloodPressure,
                heart_rate: x.data.heartRate,
                spo2: x.data.spo,
                oxygen_flow_rate: x.data.oxygen,
                recording_of_exercise: x.data.exercise,
                pain_level: x.data.painLevel,
                pain_level_note: x.data.painLevelNotes,
                note: x.data.notes,
              })),
            },
            admission_id: admissionDetails.id,
          };
        }
        break;
      case 'Clinical Notes': {
        return clinicalNotes.map((cn) => ({
          id: cn.data.id,
          admission_id: admissionDetails.id,
          document_captured_by: cn.data.documentCapturedBy,
          date_and_time: cn.data.dateAndTime,
          note: cn.data.note,
        }));
      }
      case 'Lab Test And Reports': {
        return labTestAndReport.map((ele) => ({
          id: ele.data.id,
          diagnosis_type: ele.data.diagnosisType.value,
          report_upload_date: ele.data.reportUploadDateAndTime,
          diagnosis_report_reviewed: ele.data.diagnosisReportReviewed,
          admission_id: admissionDetails.id,
          report: ele.data.report,
          signature: ele.data.signature,
        }));
      }
      case 'Discharge': {
        return {
          admission_id: admissionDetails.id,
          treating_doctor_at_discharge: discharge.treatingDoctor,
          mode_of_discharge: discharge.modeOfDischarge.value,
          discharge_date_time: discharge.dischargeDateAndTime,
          discharge_summary_note: discharge.dischargeSummary,
          transferring_to_facility_member: discharge.transferringFacility,
          baby_admission_weight: discharge.babyAdmissionWeight,
          referral_to_further_care: discharge.referralToFurtherCare,
          mental_health_legal_status_indicator:
            discharge.mentalHealthLegalStatusIndicator,
          consent_to_release_patient_details:
            discharge.consentToReleasePatientDetails,
          criteria_led_discharge_type: discharge.criteriaLedDischargeType,
          followup_appointment: Boolean(
            discharge.followUpAppointmentMade.value,
          ),
          followup_date_time: discharge.dischargeDateAndTime,
          appointment_made_notes: discharge.appointmentMadeNotes,
          transport_confirmed: Boolean(discharge.transportConfirmed.value),
          transport_notes: discharge.transportNotes,
          valuables_returned: Boolean(discharge.valuablesReturned.value),
          valuables_notes: discharge.valuablesNotes,
        };
      }

      case 'medicationRecord': {
        return medicationRecord.map((x) => ({
          id: x.data.id,
          medication_name: x.data.name,
          date_ordered: x.data.date_ordered,
          dose: x.data.dose,
          route_of_admin: x.data.route_of_administration,
          frequency: x.data.frequency,
          indication: x.data.indication,
          prescriber: x.data.prescriber,
          status: x.data.status.value,
          admission_id: admissionDetails.id,
          record_type: 1,
        }));
      }

      case 'medicationPRNRecord': {
        return prnRecord.map((x) => ({
          id: x.data.id,
          medication_name: x.data.name,
          date_ordered: x.data.date_ordered,
          dose: x.data.dose,
          route_of_admin: x.data.route_of_administration,
          frequency: x.data.frequency,
          indication: x.data.indication,
          prescriber: x.data.prescriber,
          status: x.data.status.value,
          admission_id: admissionDetails.id,
          record_type: 2,
        }));
      }

      case 'medicationAdminRecord': {
        return medicalAdminRecord.map((x) => ({
          id: x.data.admin_id,
          name: x.data.admin_name?.value,
          date: x.data.admin_date,
          dose: x.data.admin_dose,
          route_of_admin: x.data.admin_route_of_administration,
          time: x.data.admin_time,
          action: x.data.admin_action,
          signature: x.data.admin_signature,
          admission_id: admissionDetails.id,
        }));
      }
    }
  };

  return {
    care,
    value,
    mode,
    sideNav,
    allergy,
    diagnosis,
    validator,
    discharge,
    observation,
    headerText,
    clinicalNotes,
    wardData,
    aidsData,
    showNext,
    nextOfKinData,
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
    handleDate,
    handleFile,
    updateMode,
    handleBack,
    handleInput,
    frameReqData,
    handleResponse,
    handleCheckBox,
    updateHeaderText,
    handleDropDown,
    selectComponent,
    enableNext,
    updateValidator,
    forwardComponent,
    handlePhoneNumber,
    backwardComponent,
    checkAndUpdateValue,
    updatePatientDetails,
    setPatientBasicDetails,
    setPatientDemographics,
    setAdmissionDetails,
  };
};

export default usePatientContext;
