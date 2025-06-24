import styles from "./AddInput.module.css";
import PropTypes from "prop-types";

const AddInput = ({ onSubmit, onInput, value }) => {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <input
        type="text"
        className={styles.input}
        placeholder="List"
        onInput={onInput}
        value={value}
        required
      />
      <button className={styles.addButton} type="submit">
        Add
      </button>
    </form>
  );
};

AddInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onInput: PropTypes.func.isRequired,
};

export default AddInput;
