import { cardData } from "../utility/data";
import ResponsiveCard from "../components/ResponsiveCard";

const CardsPage = () => {
  return (
    <>
      <ResponsiveCard
        data={cardData}
        // width={300}
        // height={200}
        // margin={"10px 10px"}
        // padding={"10px"}
        // direction={"row"}
      ></ResponsiveCard>
    </>
  );
};

export default CardsPage;