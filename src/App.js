import ResponsiveSection from "./components/ResponsiveSection";
import Profile from "./components/Profile";
import CardsPage from "./components/CardsPage";
import Tab from "./components/Tab"

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
      <ResponsiveSection content={<Tab/>} />
    </div>
  );
}

export default App;
