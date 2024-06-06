import InnerCard from "../Innercard/InnerCard";
import barcode from "src/img/barcode.svg";

import {
  UpperBox,
  LowerBox,
  MainContainerDiv,
  LowerCircle,
  Image,
} from "./TicketCard.styles";

const TicketCard = () => {
  return (
    <MainContainerDiv>
      <UpperBox>
        <InnerCard />
      </UpperBox>
      <LowerBox>
        <LowerCircle></LowerCircle>
      </LowerBox>
    </MainContainerDiv>
  );
};

export default TicketCard;
