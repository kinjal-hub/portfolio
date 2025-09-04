
import './App.css';
import ResponsiveSection from './components/ResponsiveSection';

function App() {
  const Students = [
    {id:1, name:'Archie', Grade:'A'},
    {id:2, name:'Nayan', Grade:'B'},
    {id:3, name:'Eva', Grade:'A'},
    {id:4, name:'Erica', Grade:'A'},
    {id:5, name:'Evanshi', Grade:'B'},
    {id:6, name:'Sruti', Grade:'B'},
    {id:7, name:'Naira', Grade:'B'},
    {id:8, name:'Nyasa', Grade:'B'},
  ];
  
  return (
    <div className="App">
      <ResponsiveSection Students={Students}/>
    </div>
  );
}

export default App;
