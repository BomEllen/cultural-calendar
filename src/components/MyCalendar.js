import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

class MyCalendar extends Component {
    render() {
        return (
            <div className="App">
                <FullCalendar 
                    defaultView="dayGridMonth" // 풀캘린더 라이브러리 테마 타입 설정
                    plugins={[ dayGridPlugin ]}  // 플러그인 넣어 주고
                    events = {[
                        {title: '추석', date: '2023-11-04'},
                        {title: '크리스마스', date: '2023-12-25'}   // 이벤트는 배열로 하드코딩
                    ]}
                />
            </div>
        );
    }
}
export default MyCalendar;