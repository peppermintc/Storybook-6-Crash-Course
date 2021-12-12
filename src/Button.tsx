import React, { HTMLAttributes, ReactNode } from 'react';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  /** Provide a text of button */
  children: ReactNode;

  /** Which variant would you like to use */
  variant: 'primary' | 'secondary';
}

/** This is a special button */
export const Button = ({ children, variant = 'primary', ...props }: Props) => {
  return (
    <button
      style={{
        backgroundColor: variant === 'primary' ? 'blue' : '#595959',
        color: 'white',
        border: 'none',
        borderRadius: 100,
        padding: 10,
        cursor: 'pointer',
      }}
      {...props}
    >
      {children}
    </button>
  );
};
