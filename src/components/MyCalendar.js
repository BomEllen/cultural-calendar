import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import styled from "styled-components";

class MyCalendar extends Component {
    render() {
        return (
            <Container>
                <FullCalendar 
                    defaultView="dayGridMonth" // 풀캘린더 라이브러리 테마 타입 설정
                    plugins={[ dayGridPlugin ]}  // 플러그인 넣어 주고
                    events = {[
                        {title: '다이어리 배송', date: '2023-11-04'},
                        {title: '크리스마스', date: '2023-12-25'},
                        {title: '7시 베트남 보고', date: '2023-11-20'}   // 이벤트는 배열로 하드코딩했음
                    ]}
                />
            </Container>
        );
    }
}

const Container = styled.div`
    text-align: center;
`


export default MyCalendar;