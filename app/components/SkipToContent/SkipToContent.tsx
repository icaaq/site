import styles from "./SkipToContent.module.css";

const SkipToContent = () => {
  return (
    <div>
      <a className={styles["skip-to-content__link"]} href="#main">
        Skip to main content
      </a>
    </div>
  );
};

export default SkipToContent;
