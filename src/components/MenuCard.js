import logo from '../assets/icons/favicon.svg'; //? путь к SVG
import styles from './MenuCard.module.css'; //? стили ниже

const MenuCard = () => {
  return (
    <section className="py-5">
      <div className="card border-0 shadow rounded-4 p-4 p-md-5 text-center">
        
        {/* ЛОГО */}
        <img
          src={logo}
          alt="Логотип AIZA"
          className={`mb-2 d-block mx-auto ${styles.brandLogo}`}
          width={72}
          height={72}
        />

        {/* ЗАГОЛОВКИ */}
        <h1 className={`mb-1 fw-semibold lh-1 ${styles.brandWordmark}`}>
          AIZA
        </h1>
        <div className={`fs-4 fw-normal mb-3 ${styles.textNavy}`}>Neo Bistro</div>

        {/* ОПИСАНИЕ */}
        <p className="lead text-body-secondary mb-4">
          AIZA — это союз греческой гастрономии и современного уюта.
        </p>

        {/* КНОПКА */}
        <div className="d-grid d-sm-inline-block mb-4">
          <button
            type="button"
            className={`btn rounded-pill px-4 py-2 ${styles.btnOcean}`}
          >
            Забронировать стол
          </button>
        </div>

        {/* О РЕСТОРАНЕ */}
        <h3 className={styles.textNavy}>О ресторане</h3>
        <p>
          AIZA — это место, где греческие вкусы встречаются с авторским
          подходом. Мы вдохновляемся солнцем и морем Средиземноморья, создавая
          блюда, которые наполняют теплом и лёгкостью.
        </p>

        {/* ЗАГОЛОВОК СЛЕДУЮЩЕГО БЛОКА */}
        <h3 className={`fs-2 fw-semibold mb-0 ${styles.textNavy}`}>Избранные блюда</h3>
        {/* (контент блюд добавишь ниже, когда понадобится) */}
      </div>
    </section>
  );
};

export default MenuCard;
