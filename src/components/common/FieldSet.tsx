import { ReactElement } from 'react';
import '../../scss/fieldset.scss';

const FieldSet = (props: { title: string; children: ReactElement }) => {
  return (
    <fieldset className="fieldset-container">
      <legend className="fieldset-legend">{props.title}</legend>
      {props.children}
    </fieldset>
  );
};

export default FieldSet;
