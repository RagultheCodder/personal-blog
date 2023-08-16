import { FormInputProps } from '../../interface/formInput.interface';
import '../../scss/formInput.scss';

const FormInput = ({
  id,
  name,
  type,
  placeholder,
  onChange,
  className,
  value,
  error,
  readOnly,
  label,
  maxlength,
  defaultValue,
  noLabel,
  min,
  max,
  step,
  ...props
}: FormInputProps) => {
  return (
    <>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value?.toString() ?? value}
        defaultValue={defaultValue}
        maxLength={maxlength}
        readOnly={readOnly}
        className={`${className} ${error && 'border border-danger'}`}
        min={min}
        max={max}
        step={step}
        {...props}
      />
      {!noLabel && (
        <>
          {' '}
          <label className="input-group-label" htmlFor={id}>
            {label}
            <span className="icon-style">*</span>
          </label>
        </>
      )}
      {error && <div>{error}</div>}{' '}
    </>
  );
};

export default FormInput;
