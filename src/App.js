import logo from './logo.svg';
import './App.css';
import './Custom.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Dashboard from './components/Admin/Dashboard';
import HeroBanner from './components/Admin/HeroBanner';
//import Index from './components/Admin/Index';
//import SearchFilter from './components/DoctorsConsultation/SearchFilter';
import Appointments from './components/Admin/Appointments';
import MeetingData from './components/Admin/MeetingData';
import Details from './components/Admin/Details';
//import DataTablePage from './pages/DataTable/index';


function App(props) {
  return (
    <div className="App">
      <Router>

        <Route
          exact
          strict
          component={Appointments}
          path="/"
          history={props.history}
          />

          <Route
          exact
          strict
          component={MeetingData}
          path="/MeetingData/:id/:name"
          history={props.history}
          /> 
          
          {/* <Route
          exact
          strict
          component={DataTablePage}
          path="/DataTablePage"
          history={props.history}
          /> */}
         
          {/* <Route
          exact
          strict
          component={Dashboard}
          path="/"
          history={props.history}
          />

          <Route
          exact
          strict
          component={HeroBanner}
          path="/HeroBanner"
          history={props.history}
          />
          

          <Route
          exact
          strict
          component={Index}
          path="/Index"
          history={props.history}
          />

          <Route
          exact
          strict
          component={SearchFilter}
          path="/SearchFilter"
          history={props.history}
          />

        

        <Route
          exact
          strict
          component={MeetingData}
          path="/MeetingData/:id/:name"
          history={props.history}
          />  

        <Route
          exact
          strict
          component={Details}
          path="/Details"
          history={props.history}
          /> */}
          
      </Router>

    </div>
  );
}

export default App;
