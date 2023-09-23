import styles from "./TableBox.module.css";
import { Div, Table } from "../../styles/tags"

const TableBox = ({ children }) => {
  return (
    <Div className={styles.containerTable}>
      <Div className={styles.tableBox}>
        <Table>{children}</Table>
      </Div>
    </Div>
  )
}

export default TableBox
