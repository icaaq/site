import styles from "./Main.module.css";

interface MainProps {
  children: React.ReactNode;
  fullWidth?: boolean;
}

const Main = ({ children, fullWidth }: MainProps) => {
  return (
    <main
      id="main"
      className={`${fullWidth && styles.fullWidth} ${styles.main}`}
    >
      {children}
    </main>
  );
};

export default Main;
