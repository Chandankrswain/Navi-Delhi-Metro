import InnerCard from "../Innercard/InnerCard";
import {
  UpperBox,
  LowerBox,
  MainContainerDiv,
  LowerCircle,
} from "./TicketCard.styles";

const TicketCard = () => {
  return (
    <MainContainerDiv>
      <UpperBox>
        <InnerCard />
      </UpperBox>
      <LowerBox>
        <img src="" />
        <LowerCircle></LowerCircle>
      </LowerBox>
    </MainContainerDiv>
  );
};

export default TicketCard;
