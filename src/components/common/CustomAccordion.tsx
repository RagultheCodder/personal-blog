import moment from 'moment';
import { ReactNode } from 'react';
import '../../scss/customAccordion.scss';

const CustomAccordion = (props: {
  id: string;
  headerTitle: Date | string | number;
  children: ReactNode;
}) => {
  return (
    <div className="custom-accordion">
      <div className="accordion mb-4">
        <div className="accordion-item">
          <AccordionHeader
            id={props.id}
            headerTitle={props.headerTitle as Date}
          />
          <AccordionBody id={props.id}>{props.children}</AccordionBody>
        </div>
      </div>
    </div>
  );
};

const AccordionHeader = (props: { id: string; headerTitle: Date }) => {
  const formateDate = moment(props.headerTitle).format('YYYY-MM-DD');
  return (
    <div className="accordion-header">
      <button
        className="accordion-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target={`#${props.id}`}
        aria-expanded="true"
        aria-controls={props.id}
      >
        {formateDate}
      </button>
    </div>
  );
};

const AccordionBody = (props: { id: string; children: ReactNode }) => {
  return (
    <div
      id={props.id}
      className={'accordion-collapse collapse'}
      data-bs-parent="#customAccordion"
    >
      <div className="accordion-body">{props.children}</div>
    </div>
  );
};

export default CustomAccordion;
