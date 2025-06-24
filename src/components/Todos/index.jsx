import styles from "./Todos.module.css";
import plusIcon from "../../assets/plus-icon.svg";
import minusIcon from "../../assets/minus-icon.svg";
import PropTypes from "prop-types";

const Todos = ({ todos, onAddition, onSubstraction }) => {
  return (
    <div className={styles.todos}>
      {todos.map((todo, index) => {
        return (
          <div
            key={index}
            className={[styles.todo, styles.todoDivider].join(" ")}
          >
            {todo.title}
            <div className={styles.todoIconWrapper}>
              <button
                className={styles.todoActionButton}
                onClick={() => onSubstraction(index)}
              >
                <img src={minusIcon} alt="minus-icon" />
              </button>
              <div className={styles.todoCount}>{todo.count}</div>
              <button
                className={styles.todoActionButton}
                onClick={() => onAddition(index)}
              >
                <img src={plusIcon} alt="plus-icon" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

Todos.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
    })
  ),
  onSubstraction: PropTypes.func.isRequired,
  onAddition: PropTypes.func.isRequired,
};

export default Todos;
