import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import styled from "styled-components";
import interactionPlugin from '@fullcalendar/interaction';
import { Modal, Button, Form } from 'react-bootstrap';


class MyCalendar extends Component {

    // 생성자에서 modalShow 초기화
    constructor(props) {
        super(props);
        this.state = {
            modalShow: false, // modal 열림/닫힘 상태관리
            selectedDate: null, //선택된 날짜 상태 저장
            newEventTitle: '',  // 사용자가 추가한 이벤트 추적 state
            events: [  // 이벤트는 여기에 저장
                {title: 'KR,VN_설날', date: '2023-01-01'},
                {title: 'KR,VN_크리스마스', date: '2023-12-25'},
                {title: 'VN_Tết절', date: '2023-12-23'},
                {title: 'VN_웅왕 탄일', date: '2023-03-10'},
                {title: 'VN_통일의 날', date: '2023-04-30'},
                {title: 'VN_노동절', date: '2023-05-01'},
                {title: 'VN_국경일', date: '2023-09-02'},
                {title: 'KR_삼일절', date: '2023-03-01'},
                {title: 'KR_어린이날', date: '2023-05-05'},
                {title: 'KR_부처님 오신날', date: '2023-05-27'},
                {title: 'KR_현충일', date: '2023-06-06'},
                {title: 'KR_광복절', date: '2023-08-15'},
                {title: 'KR_개천절', date: '2023-10-03'},
                {title: 'KR_한글날', date: '2023-10-09'},
            ],
        };
    }

    // 날짜 클릭했을 때의 이벤트 핸들러
    handleDateClick = (info) => {
        this.setState({
            modalShow: true,        // 모달 열기
            selectedDate: info.dateStr, // 선택된 날짜 저장
        });
    };  
     // 모달 닫는 함수
    closeModal = () => {
        this.setState({
            modalShow: false,  // 모달 닫기
        });
    };
    // 입력 필드 변경 핸들러
    handleInputChange = (event) => {
        this.setState({
            newEventTitle: event.target.value, // 입력 필드의 값으로 state 갱신
        });
    };
    // 이벤트 추가 함수
    addEvent = () => {
        const { selectedDate, newEventTitle } = this.state;

        // 새 이벤트를 이벤트 배열에 추가
        const newEvent = {
            title: newEventTitle,
            date: selectedDate,
        };
        // 기존 이벤트 배열에 새 이벤트를 추가하고, 모달 닫고 입력 필드 초기화
        this.setState((prevState) => ({
            events: [...prevState.events, newEvent],
            modalShow: false,
            newEventTitle: '', // 이벤트 추가 후 입력 필드 비우기
            }));
    };




    render() {
        return (
            <CalendarContainer>
                {/* FullCalendar 컴포넌트 */}
                <FullCalendar 
                    defaultView="dayGridMonth" // 풀캘린더 라이브러리 테마 타입 설정
                    plugins={[ dayGridPlugin, interactionPlugin  ]}  // 플러그인 넣어주기
                    events={this.state.events}  // state에서 이벤트 가져오기
                    dateClick={this.handleDateClick}
                />

                {/* 모달 컴포넌트 */}
                <Modal show={this.state.modalShow} onHide={this.closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.state.selectedDate}</Modal.Title> {/* 타이틀에 선택한 날짜 나오게함 */}
                    </Modal.Header>
                    <Modal.Body>
                        {/* 입력하는 모달창 */}
                        {this.state.selectedDate && (
                        <div>
                            <Form.Group controlId="formEventTitle">
                            <Form.Label>✅일정 추가✅</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="추가할 일정을 입력해주세요"
                                value={this.state.newEventTitle}
                                onChange={this.handleInputChange}
                            />
                            </Form.Group>
                        </div>
                        )}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.closeModal}>
                            닫기
                        </Button>
                        <Button style={{backgroundColor:"#d9dda1", color:"#2d2e27"}}variant="primary" onClick={this.addEvent}>
                            일정 추가
                        </Button>
                    </Modal.Footer>
                </Modal>

            </CalendarContainer>
        );
    }
}



const EventColors = {
    green: '#9EC396',
    red: '#fc6767',
    text: '#2F4858',
}; //색상 지정해둠

const CalendarContainer = styled.div`
    text-align: center;
    width: 70%;
    position: absolute;
    right: 3%;
    .fc-event {
        background-color: ${EventColors.green};
        border-color: ${EventColors.green};
    }

    .fc-event-title {
        color: ${EventColors.text}; // 일정 제목의 색상
        font-weight: bold;
    }
`;


export default MyCalendar;