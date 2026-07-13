import Button from "./Button";

interface CardProps {
  type: string;
  title: string;
  description: string;
  time: string;
  diff: string;
  category: string;
  image: string;
}

const Card = (props: CardProps) => {
  const { type, title, description, time, diff, category, image } = props;
  return (
    <div className={type + "__card"}>
      <img
        src={image}
        alt="recipe-card"
        className={type + "__card-image"}
        loading="lazy"
      />
      <div className={type + "__card-content"}>
        <h3 className={type + "__card-content-header"}>{title}</h3>
        <span className={type + "__card-content-description"}>
          {description}
        </span>
        <div className={type + "__card-footer"}>
          <ul className={type + "__card-footer-list"}>
            <li className={type + "__card-footer-item"}>{time}</li>
            <li className={type + "__card-footer-item"}>{diff}</li>
            <li className={type + "__card-footer-item"}>{category}</li>
          </ul>
          <Button
            className={type + "__card-footer-button"}
            title="view recipe"
            type="recipe"
            onClick={() => console.log("View")}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
