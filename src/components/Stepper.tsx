import { PatientCareNav } from '../interface/patientCareDetails.interface';

const Stepper = (props: {
  data: PatientCareNav[];
  selectComponent: (id: number) => void;
}) => {
  return (
    <ol className="stepper m-0">
      {props.data.map((ele) => (
        <li
          className={`cursor-pointer 
          stepper-item d-flex align-items-center position-relative  ${
            !ele.header && 'ms-2'
          } ${ele.active && 'active'} ${
            ele.header ? 'stepper-header' : 'stepper-child'
          }`}
          style={
            ele.header
              ? ({
                  '--circle-size': '33px',
                } as React.CSSProperties)
              : ({
                  '--circle-size': '18px',
                } as React.CSSProperties)
          }
          key={ele.id}
        >
          <p
            className="stepper-title m-0"
            onClick={() => props.selectComponent(ele.id as number)}
          >
            {ele.name}
          </p>
        </li>
      ))}
    </ol>
  );
};

export default Stepper;
