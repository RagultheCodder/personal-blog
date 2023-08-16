import { CSSProperties } from 'react';

export interface FormInputProps {
  id?: string;
  name: string;
  type?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  value: string | number | readonly string[] | undefined;
  info?: string;
  error?: string;
  readOnly?: boolean;
  label?: string;
  maxlength?: number;
  defaultValue?: string;
  noLabel?: boolean;
  rows?: number;
  style?: CSSProperties;
  min?: string;
  max?: string;
  step?: string;
}
