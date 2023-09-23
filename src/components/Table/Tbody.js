import React from 'react'
import styles from "./Tbody.module.css";

const Tbody = ({ children }) => {
  return (
    <tbody className={styles.containerTbody}>
      { children }
    </tbody>
  )
}

export default Tbody