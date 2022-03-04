import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaughBeam,
  faSadCry,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";

function Emote(props) {
  console.log(props.emotion);
  return props.emotion === "HAPPY" ? (
    <FontAwesomeIcon icon={faLaughBeam} />
  ) : props.emotion === "SAD" ? (
    <FontAwesomeIcon icon={faSadCry} />
  ) : (
    <FontAwesomeIcon icon={faExclamationTriangle} />
  );
}

export default Emote;
