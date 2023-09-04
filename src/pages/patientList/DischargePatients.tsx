import Table from '../../components/common/Table';
import { ColumnDef } from '@tanstack/react-table';
import moment from 'moment';
import { useMemo, useState } from 'react';
import {
  StudentData,
  StudentTable,
} from '../../interface/patientCareDetails.interface';
import CustomTableButton from '../../components/common/EditButton';
import { useNavigate } from 'react-router-dom';
import { getAllPatientByUserCourseId } from '../../service/PatientService';

const DischargePatients = () => {
  const [dischargePatients, setDischargePatients] = useState([]);

  useMemo(() => {
    getAllPatientByUserCourseId(1)
      .then((resp) =>
        setDischargePatients(
          resp.data
            .filter((x: StudentData) => x?.admissionPatient?.admissionDischarge)
            .map((student: StudentData) => ({
              id: student.id,
              urn: student.URN,
              givenName: student.given_name,
              familyName: student.family_name,
              sex: student.gender,
              admittedDate: student.createdAt,
              updateBy: student.createdAt,
            })),
        ),
      )
      .catch((err) => console.log(err));
  }, []);

  const navigate = useNavigate();

  const handleNavigate = (studentId: number) => {
    navigate(`/patient/edit/${studentId}`);
  };

  const columns: ColumnDef<StudentTable>[] = [
    {
      header: 'URN Number',
      accessorKey: 'urn',
      enableSorting: false,
      sortUndefined: false,
      cell: (info) => (
        <span
          className="cursor-pointer"
          onClick={() => handleNavigate(info.row.original.id)}
        >
          <u>{info.getValue() as string}</u>
        </span>
      ),
    },
    {
      header: 'Given Name',
      accessorKey: 'givenName',
    },
    {
      header: 'Family Name',
      accessorKey: 'familyName',
    },
    {
      header: 'Sex',
      accessorKey: 'sex',
      enableSorting: false,
      sortUndefined: false,
    },
    {
      header: 'Admitted Date',
      accessorKey: 'admittedDate',
      cell: (info) => (
        <span>
          {moment(new Date(info.getValue() as string)).format('DD-MMM-YYYY LT')}{' '}
        </span>
      ),
    },
    {
      header: 'Updated On',
      accessorKey: 'updateBy',
      enableSorting: false,
      sortUndefined: false,
      cell: (info) => (
        <span>
          {moment(new Date(info.getValue() as string)).format('DD-MMM-YYYY LT')}
        </span>
      ),
    },
    {
      header: 'Action',
      cell: () => (
        <div className="cursor-pointer d-flex align-items-center">
          <CustomTableButton name="View" />{' '}
          <CustomTableButton name="Add New Admission" />
        </div>
      ),
      enableSorting: false,
      sortUndefined: false,
    },
  ];
  return (
    <Table
      data={dischargePatients}
      columns={columns}
      title="Discharge Patients"
      classnames="discharge-patients"
    />
  );
};

export default DischargePatients;
