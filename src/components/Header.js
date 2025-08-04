import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={`${styles.heroHeader}`}>
      <div className="container text-center">
        <h1 className="display-1 fw-semibold">AIZA</h1>
        <h2>Neo Bistro</h2>
        <p className="lead mt-3">
          AIZA — союз греческой гастрономии <br /> и современного уюта
        </p>
        {/*Как только появиться возможность брони - добавить кнопку*/}
        {/* <button className="btn btn-primary btn-lg mt-4 rounded-pill">
          Забронировать стол
        </button> */}
      </div>а
    </header>
  );
};

export default Header;
