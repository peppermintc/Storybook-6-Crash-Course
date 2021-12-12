import React, { HTMLAttributes, ReactNode } from 'react';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: 'primary' | 'secondary';
}

export const Button = ({ children, variant, ...props }: Props) => {
  return (
    <button
      style={{
        backgroundColor: variant === 'primary' ? 'blue' : 'gray',
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
