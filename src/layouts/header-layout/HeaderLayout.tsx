import React from 'react';
import classnames from 'classnames/bind';
import styles from './header-layout.module.scss';

const cn = classnames.bind(styles);

export const HeaderLayout: React.FC = ({children}) => {
  return (
  <header className={cn('header')}>
    {children}
  </header>
  )
}