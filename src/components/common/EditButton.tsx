import { ReactComponent as Edit } from '../../assets/tableEdit.svg';
import { ReactComponent as Discharge } from '../../assets/discharge.svg';

const CustomTableButton = (props: { name: string }) => {
  return (
    <div
      className={`custom-button-wrapper d-flex align-items-baseline ${
        props.name === 'Discharge' && 'ms-2'
      }`}
    >
      {props.name === 'Edit' ? (
        <Edit className="align-baseline w-100" />
      ) : (
        <Discharge className="align-baseline w-100" />
      )}

      <p className="my-0 ms-1">{props.name}</p>
    </div>
  );
};

export default CustomTableButton;
