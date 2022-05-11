import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = ({ card, handleClick }) => {
  return (
    <div className={"card"}>
      <div className="img-container" onClick={() => handleClick(card)}>
        <FontAwesomeIcon icon={card.iconName} size="4x" />
      </div>
      <p className="label">{card.iconLabel}</p>
    </div>
  );
};

export default Card;
