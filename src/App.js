import {Container} from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accord from './components/Accordion'
import Navb from './components/Nav';
import calendar from './images/calendar.png';
import clock from './images/clock.png';
import { BsArrowLeftCircle } from "react-icons/bs";


function App() {
  return (
    <div className="grad">
      <Navb/>
      <div className="background"></div>
      <div>
        <p className="back-arrow"><BsArrowLeftCircle size={35}/></p>
        <h5 className="claim">June 2021 Claim</h5>
        <p className="date"><img src={calendar} alt="date"/> 1 June 2020 {'>'} 30 June 2021</p>
        <p className="duration"><img src={clock} alt="clock"/> 1 Month, 14 Days, 11 Hours</p>
      </div>
      <Container className="accord-container">
        <Accord
          title="Add evidence"
          mins="5mins"
        />
        <Accord
          title="Add costs"
          array={["Payroll", "Subcontractors", "Other"]}
          mins="20 mins"
        />
        <Accord
          title="Add documents"
          array={["Company Accounts", "Tax Comps", "CT600"]}
          mins="5mins"
        />
        <div className="dotted-line"/>
      </Container>
    </div>
  );
}

export default App;
