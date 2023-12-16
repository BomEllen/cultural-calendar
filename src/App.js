import './components/global.css'
import MyCalendar from './components/calendar/MyCalendar';
import SideNav from './components/SideNav';
import 'bootstrap/dist/css/bootstrap.min.css'; // 부트스트랩 import

// Container (레이아웃)용 import
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
// 여기까지


function App() {

  return (
    
    <Layout>
      <Container fluid>
        <Innerlayout>
            <ColStyle xs={3}>{<SideNav />}</ColStyle>
            <Col>{<MyCalendar />}</Col>
        </Innerlayout>
        </Container>
    </Layout>
    
  );
}

const Layout = styled.div`
  text-align: center;
`;
const Innerlayout = styled(Row)`  // 상속해서 라이브러리 스타일 바꾸기 
  height: 100vh;
`;
const ColStyle = styled(Col)`     // 사이드바
  background-color: #832447;
`;

export default App;


