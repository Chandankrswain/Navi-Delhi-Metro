import TicketCard from "./Components/TickectCard/TicketCard";
import { BodyText, NavigateDiv, TicketMapDiv } from "../src/App.styles";

function App() {
  return (
    <>
      <NavigateDiv>
        <BodyText>Navigate</BodyText>
      </NavigateDiv>
      <TicketMapDiv>
        <TicketCard />
      </TicketMapDiv>
    </>
  );
}

export default App;
