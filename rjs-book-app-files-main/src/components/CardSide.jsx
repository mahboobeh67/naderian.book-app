import styles from "./CardSide.module.css";

function CardSide({ data: { image, title } }) {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <p>{title}</p>
    </div>
  );
}

export default CardSide;
