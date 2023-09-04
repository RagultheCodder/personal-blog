const initialState = {
  steppers: [
    {
      id: 1,
      name: 'Add Patient',
      active: false,
      header: true,
      headerTitle: 'Add Patient',
      enabled: true,
    },
    {
      id: 2,
      name: 'Basic Details',
      active: false,
      headerTitle: 'Add Patient',
      enabled: true,
    },
    {
      id: 3,
      name: 'Patient Demographics',
      active: false,
      headerTitle: 'Add Patient',
      enabled: false,
    },
    {
      id: 4,
      name: 'Medical Summary',
      active: false,
      headerTitle: 'Add Patient',
      enabled: false,
    },
    {
      id: 5,
      name: 'Allergies',
      active: false,
      headerTitle: 'Add Patient',
      enabled: false,
    },
    {
      id: 6,
      name: 'Admission',
      active: false,
      header: true,
      headerTitle: 'Admission',
      enabled: true,
    },
    {
      id: 7,
      name: 'Admission Ward',
      active: false,
      headerTitle: 'Admission',
      enabled: false,
    },
    {
      id: 8,
      name: 'Diagnosis & Observation',
      active: false,
      headerTitle: 'Admission',
      enabled: false,
    },
    {
      id: 9,
      name: 'Medication Record',
      active: false,
      headerTitle: 'Admission',
      enabled: false,
    },
    {
      id: 10,
      name: 'Fluids',
      active: false,
      headerTitle: 'Admission',
      enabled: false,
    },
    {
      id: 11,
      name: 'Clinical Notes',
      active: false,
      headerTitle: 'Admission',
      enabled: false,
    },
    {
      id: 12,
      name: 'Lab Test and Reports',
      active: false,
      headerTitle: 'Admission',
      enabled: false,
    },
    {
      id: 13,
      name: 'Discharge',
      active: false,
      headerTitle: 'Admission',
      enabled: false,
    },
  ],

  patientBasicDetails: {
    id: null,
    familyName: '',
    givenName: '',
    dob: new Date(),
    address: '',
    gender: { value: 0, label: 'sex *' },
    URN: '',
    age: '0',
  },

  patientDemographics: {
    contactNumber: '',
    emergencyContact: '',
    status: { value: '', label: 'select' },
    country: { value: '', label: 'select' },
    religion: '',
    maritalStatus: { value: '', label: 'select' },
    language: { value: '', label: 'select' },
    interpreter: { value: '', label: 'select' },
    socialHistory: '',
    familyHistory: '',
  },

  medicalSummary: [
    {
      id: 1,
      data: {
        medicationName: null,
        doseInformation: null,
        reason: null,
      },
    },
  ],

  surgicalSummary: [
    {
      id: 1,
      data: {
        surgeryName: null,
        surgeryDate: null,
        reason: null,
      },
    },
  ],

  allergy: [
    {
      id: 1,
      data: {
        id: null,
        substance: null,
        reaction: { value: 0, label: 'Select' },
        symptoms: null,
        severity: { value: 0, label: 'Select' },
      },
    },
  ],

  discharge: {
    treatingDoctor: '',
    modeOfDischarge: { label: 'Select', value: 0 },
    dischargeDateAndTime: new Date(),
    dischargeSummary: '',
    transferringFacility: '',
    babyAdmissionWeight: '',
    referralToFurtherCare: '',
    mentalHealthLegalStatusIndicator: '',
    consentToReleasePatientDetails: '',
    criteriaLedDischargeType: '',
    followUpAppointmentMade: { label: 'Select', value: 0 },
    followUpDateAndTime: new Date(),
    appointmentMadeNotes: '',
    transportConfirmed: { label: 'Select', value: 0 },
    transportNotes: '',
    valuablesReturned: { label: 'Select', value: 0 },
    valuablesNotes: '',
  },

  diagnosis: [
    {
      id: 1,
      data: {
        diagnosisDate: new Date(),
        diagnosisSuggested: '',
        suggestedBy: '',
        suggestedOn: new Date(),
        notes: '',
      },
    },
  ],

  observations: [
    {
      id: 1,
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
    },
  ],

  clinicalNotes: [
    {
      id: 1,
      data: {
        documentCapturedBy: '',
        dateAndTime: new Date(),
        note: '',
      },
    },
  ],

  labTestAndReport: [
    {
      id: 1,
      data: {
        diagnosisType: { label: 'Select', value: '' },
        reportUploadDateAndTime: new Date(),
        diagnosisReportReviewed: '',
        reportName: '',
        report: null,
        signatureName: '',
        signature: null,
      },
    },
  ],

  admissionCare: [
    {
      id: 1,
      data: {
        careStartDate: null,
        careType: null,
        careNotes: null,
      },
    },
  ],
  medicationRecord: [
    {
      id: 1,
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
        type: null,
      },
    },
  ],

  medicalPRNRecord: [
    {
      id: 1,
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
        type: null,
      },
    },
  ],

  medicalAdminRecord: [
    {
      id: 1,
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
    },
  ],

  admission: {
    id: null,
    admittingDoctor: '',
    admissionTime: new Date(),
    gp: '',
    medicareNo: '',
    membershipNo: '',
    height: '',
    admissionProcedure: '',
    phoneNumber: '',
    treatingDoctor: '',
    cardNo: '',
    weight: '',
    reasonForAdmission: '',
    insurance: '',
  },

  nextOfKin: {
    id: null,
    name: '',
    kinPhone: '',
    relationship: '',
    address: '',
  },

  orientationToWard: {
    wardNumber: '',
    wardName: '',
    orientationToWard: { value: 0, label: 'Select' },
  },

  aidsAndProsthetics: [
    {
      id: 1,
      data: {
        aidsType: { value: 0, label: 'Select' },
        aidsReason: '',
      },
    },
  ],

  medicationRecordType: [{ value: 0, label: 'select' }],
};

const allergyOptions = [
  { value: 'INTOLERANCE', label: 'Intolerance' },
  { value: 'SENSITIVITY', label: 'Sensitivity' },
  { value: 'ASTHMA', label: 'Asthma' },
];

const severityOptions = [
  { value: 'LOW', label: 'Low' },
  { value: 'MEDIUM', label: 'Medium' },
  { value: 'HIGH', label: 'High' },
];

const genders = [
  { value: 1, label: 'Male' },
  { value: 2, label: 'Female' },
  { value: 3, label: 'Others' },
];

const yesOrNo = [
  { value: 0, label: 'No' },
  { value: 1, label: 'Yes' },
];

const martialStatus = [
  { value: 'SEPARATED', label: 'Separated' },
  { value: 'DIVORCED', label: 'Divorced' },
  { value: 'DE_FACTO', label: 'De facto' },
  { value: 'MARRIED', label: 'Married' },
  { value: 'NOT_STATED', label: 'Not stated' },
  { value: 'NEVER_MARRIED', label: 'Never Married' },
  { value: 'WIDOWED', label: 'Widowed' },
];

const recordStatusOptions = [
  { value: 'SEPARATED', label: 'Separated' },
  { value: 'DIVORCED', label: 'Divorced' },
  { value: 'DE_FACTO', label: 'De facto' },
  { value: 'MARRIED', label: 'Married' },
  { value: 'NOT_STATED', label: 'Not stated' },
  { value: 'NEVER_MARRIED', label: 'Never Married' },
  { value: 'WIDOWED', label: 'Widowed' },
];

const modeOfDischarge = [
  { value: 'SUPERVISED', label: 'Supervised' },
  { value: 'DEFERRED', label: 'Deferred' },
];

const diagnosisTypes = [
  {
    value: 'MEDICAL_DIAGNOSIS',
    label: 'Medical Diagnosis',
  },
  {
    value: 'CLINICAL_DIAGNOSIS',
    label: 'Clinical Diagnosis',
  },
  {
    value: 'RADIOLOGICAL_DIAGNOSIS',
    label: 'Radiological Diagnosis',
  },
];

const wardOrientationStatus = [
  { value: 0, label: 'No' },
  { value: 1, label: 'Yes' },
];

const aidsTypes = [
  { value: 'GLASS', label: 'Glass' },
  { value: 'CONTACT_LENSES', label: 'Contact Lenses' },
  { value: 'DENTURES', label: 'Dentures' },
  { value: 'HEARING_AIDS', label: 'Hearing Aids' },
  { value: 'MOBILITY_AIDS', label: 'Mobility Aids' },
];

const successStatus = [200, 201];

const showDischarge = [12, 13];

const patientRoutes = ['create', 'edit'];

const patientStepperIndex = [2, 3, 4, 6];
const admissionStepperIndex = [7, 8, 9, 10, 11, 12];

export {
  initialState,
  allergyOptions,
  severityOptions,
  genders,
  successStatus,
  patientRoutes,
  yesOrNo,
  showDischarge,
  modeOfDischarge,
  martialStatus,
  diagnosisTypes,
  recordStatusOptions,
  wardOrientationStatus,
  aidsTypes,
  patientStepperIndex,
  admissionStepperIndex,
};
