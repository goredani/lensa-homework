import styles from "./style/promotionCard.module.css";
import PropTypes from "prop-types";
import Bell from "./img/small_pictogram.svg";
import Puzzle from "./img/small_puzzle.svg";
import Rocket from "./img/small_rocket.svg";
import { Button } from "../UI/Button/Button";
import { computeHeadingLevel } from "@testing-library/react";

export const PromotionCard = ({
  image,
  h2Visible,
  h2Text,
  position_location,
  company_general,
  position,
  location,
  bodyCopyVisible,
  bodyCopySize,
  bodyCopyText,
  buttonVisible,
  buttonText,
  linkVisible,
  linkText,
}) => {
  const Image = () => {
    if (image === "Bell") {
      return <img src={Bell} />;
    } else if (image === "Puzzle") {
      return <img src={Puzzle} />;
    } else {
      return <img src={Rocket} />;
    }
  };

  const BodyCopy = () => {
    if (bodyCopySize === "Regular") {
      return <p className={styles.regularParagraph}>{bodyCopyText}</p>;
    } else {
      return <p>{bodyCopyText}</p>;
    }
  };

  console.log(position_location);
  console.log(company_general);

  return (
    <div className={styles.promotionCard}>
      <div className={styles.content}>
        <div className={styles.title}>
          {h2Visible && <h2>{h2Text}</h2>}
          {position_location ? (
            <>
              <h1>
                {position}
                <span className={styles.regularWeight}> jobs in </span>
                {location}
              </h1>
            </>
          ) : (
            <h1>{company_general}</h1>
          )}
        </div>
        {bodyCopyVisible && <BodyCopy />}
        <div className={styles.footer}>
          {buttonVisible && <Button buttonText={buttonText} />}
          {linkVisible && <a href="#">{linkText}</a>}
        </div>
      </div>
      <Image />
    </div>
  );
};

PromotionCard.propTypes = {
  image: PropTypes.string,
  position_location: PropTypes.bool,
  position: PropTypes.string,
  location: PropTypes.string,
  company_general: PropTypes.string,
  h2Text: PropTypes.string,
  bodyCopyVisible: PropTypes.bool,
  bodyCopySize: PropTypes.string,
  bodyCopyText: PropTypes.string,
  buttonVisible: PropTypes.bool,
  buttonText: PropTypes.string,
  linkVisible: PropTypes.bool,
  linkText: PropTypes.string,
};
