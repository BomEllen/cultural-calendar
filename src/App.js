import './App.css';
// import Layout from './components/Layout';
import MyCalendar from './components/MyCalendar';
import SideNav from './components/SideNav';
import 'bootstrap/dist/css/bootstrap.min.css'; // 부트스트랩 import

// Container (레이아웃)용 import
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// 여기까지


function App() {
  return (
    <div className="App">
      <Container>
        <Row>
            <Col>{<SideNav />}</Col>
            <Col>{<MyCalendar />}</Col>
        </Row>
        </Container>
    </div>
    
  );
}

export default App;
