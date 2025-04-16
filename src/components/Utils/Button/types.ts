import React from 'react';

export interface ButtonProps {
  children?: React.ReactNode;
  name?: string | React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
  icon?: string;
  disable?: boolean;
  iconSize?: string;
  iconPosition?: 'left' | 'right';
  type?: 'submit' | 'reset' | 'button';
}
