import Table from '../../components/Table';
import mData from '../../../MOCK_DATA.json';
import { ColumnDef } from '@tanstack/react-table';
import moment from 'moment';
import { useMemo } from 'react';
import {
  StudentTable,
  updateByWithDate,
} from '../../interface/patientCareDetails.interface';
import CustomTableButton from '../../components/common/EditButton';
import { useNavigate } from 'react-router-dom';

const Students = () => {
  const data = useMemo(() => mData, []);

  const navigate = useNavigate();

  const handleNavigate = (studentId: string) => {
    navigate(`/patient-onboard/${studentId}`);
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
          onClick={() => handleNavigate(info.getValue() as string)}
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
          {moment(
            new Date((info.getValue() as updateByWithDate).date as string),
          ).format('DD-MMM-YYYY LT')}
        </span>
      ),
    },
    {
      header: 'Action',
      cell: () => (
        <div className="cursor-pointer d-flex align-items-center">
          <CustomTableButton name="Edit" />{' '}
          <CustomTableButton name="Discharge" />
        </div>
      ),
      enableSorting: false,
      sortUndefined: false,
    },
  ];
  return <Table data={data} columns={columns} classnames="active-student" />;
};

export default Students;
