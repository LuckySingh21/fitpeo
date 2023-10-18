import BarChart from "./Components/Charts/BarChart"
import './App.css';
import DonutChart from "./Components/Charts/DonutChart";
import Earnings from "./Components/Cards/Earnings";
import Orders from "./Components/Cards/Orders";
import Balance from "./Components/Cards/Balance";
import Sales from "./Components/Cards/Sales";
import Sidebar from "./Components/Sidebar";
import WavingHandRoundedIcon from '@mui/icons-material/WavingHandRounded';

function App() {
  return (
    <div className="App">
      <div className="left">
        <Sidebar/>
      </div>
      <div className="right">
        <div className="right-upper">
          <div>
            <h3>Hello Shahrukh<span className="hand-sign"><WavingHandRoundedIcon/></span></h3>
          </div>
          <div>
            <input type="text" placeholder="Search"></input>
          </div>
        </div>
        <div className="right-cards">
          <Earnings title={'Earnings'} value={198} percentage={37.8} change={'+'}/>
          <Orders title={'Orders'} value={2.4} percentage={2} change={'-'}/>
          <Balance title={'Balance'} value={2.4} percentage={2} change={'-'}/>
          <Sales title={'Total Sales'} value={89} percentage={11} change={'+'}/>
        </div>
        <div className="charts">
          <div className="bar-chart-container">
            <BarChart/>
          </div>
          <div className="donut-chart-container">
            <div>
              <p className="cutsomers">Customers</p>
              <p className="customers-comment">Customers that buy products</p>
            </div>
            <div>
            <DonutChart/>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
