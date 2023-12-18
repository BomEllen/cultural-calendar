import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // react-router-dom에서 필요한 모듈들 import
import './components/global.css'
import MyCalendar from './components/calendar/MyCalendar';
import SideNav from './components/SideNav';
import HolidayFood from './components/HolidayFood';
import KoreaTips from './components/KoreaTips'; 
import VietnamTips from './components/VietnamTips'; 
import 'bootstrap/dist/css/bootstrap.min.css'; // 부트스트랩 import

// Container (레이아웃)용 import
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
// 여기까지


function App() {
  return (
    <Router>
      <Layout>
        <Container fluid>
          <Innerlayout>
            <ColStyle xs={3}>{<SideNav />}</ColStyle>
            <Col>
              <Routes>
                <Route path="/dashboard" element={<MyCalendar />} />
                <Route path="/management" element={<HolidayFood />} />
                <Route path="/tips-for-locals/korea" element={<KoreaTips />} />
                <Route path="/tips-for-locals/vietnam" element={<VietnamTips />} />
                <Route path="/" element={<MyCalendar />} />
              </Routes>
            </Col>
          </Innerlayout>
        </Container>
      </Layout>
    </Router>
  );
}

const Layout = styled.div`
  text-align: center;
`;
const Innerlayout = styled(Row)`  // 상속해서 라이브러리 스타일 바꾸기 
  height: 100vh;
  
`;
const ColStyle = styled(Col)`     // 사이드바
  background-color: #d9dda1;
  position: fixed;
  height: 100vh;
  z-index: 10;
`;

export default App;


