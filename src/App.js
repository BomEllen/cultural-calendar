import './App.css';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import React, {Component} from 'react';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <FullCalendar
        defaultView='dayGridMonth'
        plugins={[ dayGridPlugin ]}
      />
      </div>
    );
  }
}

export default App;
