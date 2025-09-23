import { profileArray } from "../utility/data"
import ResponsiveCard from "../components/ResponsiveCard";

const profile = () => {
  return (
    <>
      <ResponsiveCard
        data={profileArray}
        width={700}
        margin={"10px auto"}
        cardTextAlignment={"left"}
        padding={"10px"}
      ></ResponsiveCard>
    </>
  );
};

export default profile;