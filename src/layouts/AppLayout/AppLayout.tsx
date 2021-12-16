import React from "react";
import classnames from "classnames/bind";
import styles from "./app-layout.module.scss";

const cn = classnames.bind(styles);

export const AppLayout: React.FC = ({ children }) => {
  return <main className={cn("app")}>{children}</main>;
};

// AppLayout.Form = ({children}) => {
//   return (
//     <form className={cn('form')}>
//       {children}
//     </form>
//     )
// }
