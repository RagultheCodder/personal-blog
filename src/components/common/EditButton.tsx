import { AddAdmission, Discharge, TableEdit, View } from '../../assets/svg';

const CustomTableButton = (props: { name: string }) => {
  return (
    <div
      className={`custom-button-wrapper d-flex align-items-baseline ${
        (props.name === 'Discharge' || props.name === 'Add New Admission') &&
        'ms-2'
      }`}
    >
      {props.name === 'Edit' ? (
        <TableEdit className="align-baseline w-100 " />
      ) : props.name === 'Discharge' ? (
        <Discharge className="align-baseline w-100 " />
      ) : props.name === 'View' ? (
        <View className="align-baseline w-100" />
      ) : (
        <AddAdmission className="align-baseline" />
      )}

      <p className="my-0 ms-1">{props.name}</p>
    </div>
  );
};

export default CustomTableButton;
