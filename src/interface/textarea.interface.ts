import React, { CSSProperties } from 'react';

export interface TextAreaProps {
  id?: string;
  name?: string;
  type?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
  value?: string | number | readonly string[];
  info?: string;
  error?: string;
  readOnly?: boolean;
  label?: string;
  maxlength?: number;
  defaultValue?: string;
  noLabel?: boolean;
  rows?: number;
  style?: CSSProperties;
}
