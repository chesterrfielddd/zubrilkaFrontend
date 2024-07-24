import { useState } from "react";
import classes from "./RegModal.module.css";

export default function RegModal({ isActive, setIsActive, children }) {
  return (
    <div
      className={
        isActive
          ? `${classes.modal} ${classes.modal_active}`
          : `${classes.modal}`
      }
      onClick={() => setIsActive(false)}
    >
      <div
        className={classes.modal__content}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
