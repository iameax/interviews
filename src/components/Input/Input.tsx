import * as React from 'react';

import s from './input.scss';

interface InputProps {
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const Input = ({value, onChange, placeholder}: InputProps) => {
  return (
    <input 
      className={s.input}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      type="text"
     />
  );
}
