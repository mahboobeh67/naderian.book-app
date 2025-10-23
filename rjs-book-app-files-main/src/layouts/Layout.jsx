import styles from "./Layout.module.css";
function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Book App</h1>

        <p>
          <a href="https://github.com/mahboobeh67?tab=repositories">
            MahboobehNaderian{" "}
          </a>{" "}
          | React.js full Course
        </p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed by Mahboobeh with 💚 </p>
      </footer>
    </>
  );
}

export default Layout;
