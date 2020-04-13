import React from 'react';
import styles from './FormErrors.module.scss';
export const FormErrors = ({serverError, formErrors}) => {
  return (
    <div className={styles.form__errors}>
      {Object.keys(formErrors).map((fieldName, i) => {
        if(!formErrors[fieldName]){
          return (
            <p className={styles.error__text} key={i}>{fieldName} is invalid</p>
          )
        } else {
          return '';
        }
      })}
      { serverError && <p className={styles.error__text}>{serverError}</p> }
    </div>
  )
};

