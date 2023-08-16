import { TextAreaProps } from '../../interface/textarea.interface';
import '../../scss/formInput.scss';
const TextArea = ({
  id,
  name,
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
  rows,
  ...props
}: TextAreaProps) => {
  return (
    <>
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value ?? value}
        defaultValue={defaultValue}
        maxLength={maxlength}
        readOnly={readOnly}
        className={`${className} ${error && 'border border-danger'}`}
        rows={rows}
        {...props}
      />
      {!noLabel && (
        <>
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
export default TextArea;
