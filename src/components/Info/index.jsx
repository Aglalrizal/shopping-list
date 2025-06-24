import styles from "./Info.module.css";
import PropTypes from "prop-types";

const Info = ({ total, totalCount, onClick }) => {
  return (
    <div className={styles.info}>
      <div className={styles.infoTotal}>
        <p>
          Total Item: <span>{total}</span>
        </p>
      </div>
      <div className={styles.infoTotal}>
        <p>
          Total Count: <span>{totalCount}</span>
        </p>
      </div>
      <button className={styles.deleteAllButton} onClick={onClick}>
        Hapus semua
      </button>
    </div>
  );
};

Info.propTypes = {
  total: PropTypes.number.isRequired,
  totalCount: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Info;
