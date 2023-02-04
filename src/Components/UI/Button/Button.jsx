import styles from "./style/button.module.css";

export const Button = ({ buttonText }) => {
  return <button className={styles.button}>{buttonText}</button>;
};
