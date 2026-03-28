import ResponsiveTable from "./components/ResponsiveTable";
import ResponsiveSection from "./components/ResponsiveSection";
import Profile from "./components/Profile";
import CardsPage from "./components/CardsPage";
import Tab from "./components/Tab";
import { data2 } from "./utility/data";

function App() {

  return (
    <div className="App">
      <ResponsiveSection
        border="2px solid purple"
        title={"Kinjal"}
        content={<Profile/>}
      />
      <ResponsiveSection border="2px solid blue" />
      <ResponsiveSection content={<CardsPage />} />
      <ResponsiveSection
        border="1px solid red"
        backgroundColor={"text.secondary"}
        content={"This is Responsive Section 2"}
      />
      <ResponsiveSection border="1px solid blue" content={<Tab/>} />  
      <ResponsiveSection content={<ResponsiveTable data={data2} />} />
      
      </div>
  );
}

export default App;
