
import { AllCatagories } from './Components/Filter/AllCatagories';
import { Header } from './Components/Heading/Header';
import { Offers } from './Components/Sale/Offers';
import { Flowers } from './FLowersComponents/FLowers';


function App() {
  return (
    <div>
      <Offers/>
      <Header/>
      <AllCatagories/>
      <Flowers/>
    </div>
  );
}

export default App;
