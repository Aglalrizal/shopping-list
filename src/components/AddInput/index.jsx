import styles from "./AddInput.module.css";
import PropTypes from "prop-types";

const AddInput = (props) => {
  return (
    <form className={styles.form} onSubmit={props.onSubmit}>
      <input
        type="text"
        className={styles.input}
        placeholder="List"
        onInput={props.onInput}
        value={props.value}
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
