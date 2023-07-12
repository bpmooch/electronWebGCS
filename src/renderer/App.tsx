import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import ArmButton from './components/armButton';
import DisarmButton from './components/disarmButton';
import TakeoffButton from './components/takeoffButton';
import LandButton from './components/landButton';
import GpsCoords from './components/gpsCoords';
import Indicators from './components/indicators';
import NavBar from './components/navBar';
import BatteryBar from './components/batteryBar';
import RTLButton from './components/rtlButton';
import CheckList from './components/checkList';
import Gamepad from './components/gamepad';
import MissionButton from './components/missionButton';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import './App.css';

function FlightView() {
  return (
    <div>
      <div className="FlightView">
        <NavBar />
        <BatteryBar />
        <GpsCoords />
        <ButtonGroup vertical id="buttons">
          <CheckList />
          <ArmButton />
          <DisarmButton />
          <TakeoffButton />
          <LandButton />
          <RTLButton />
          <Gamepad />
          <MissionButton />
        </ButtonGroup>

        <Indicators />
        {/* <Hud/> */}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FlightView />} />
      </Routes>
    </Router>
  );
}
