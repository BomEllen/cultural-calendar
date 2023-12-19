import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import styled from 'styled-components';

function HolidayFood() {
  // 카드에 표시될 데이터 배열
    const cardData = [
        {
        title: '떡국 (KOREA)',
        date: 'January 1st',
        text: '떡을 물에 넣고 끓여 내는 국으로 새해 첫날과 설날을 대표하는 한국 요리.',
        image: 'https://i.ibb.co/Tvjjn9N/tteokguk2.jpg',
        },
        {
            title: '송편 (KOREA)',
            date: 'August 15th',
            text: '한국 떡의 한 종류로 한국의 명절 추석을 대표하는 전통음식. 햇곡식으로 빚는다.',
            image: 'https://i.ibb.co/nbQfSfv/songpeon2.jpg',
        },
        {
            title: '팥죽 (KOREA)',
            date: 'December 22nd',
            text: '팥이 주재료인 죽. 동지날 액운을 쫓아내기 위해 팥죽을 먹는 풍속이 있다.',
            image: 'https://i.ibb.co/Dffq0QT/pat.jpg',
        },
        {
            title: 'Bánh tét (VIETNAM)',
            date: 'January 1st',
            text: '베트남의 설날인 뗏(Tết)절에 먹는 음식. 찹쌀밥과 돼지고기, 녹두가 들어있다.',
            image: 'https://i.ibb.co/d5mwWjX/B-nh-t-t.jpg',
        },
        {
            title: 'Bún chả chay (VIETNAM)',
            date: 'July 15th',
            text: '불교의 전통축제인 Vu Lan날 먹는 음식. 채식만 하기 때문에 비건분짜를 먹는다. ',
            image: 'https://i.ibb.co/8dmx2v5/buncha.jpg',
        },        {
            title: 'Bánh trung thu (VIETNAM)',
            date: 'August 15th',
            text: '베트남의 추석에 먹는 음식으로 다양한 재료가 있는 우리에게도 익숙한 월병이다.',
            image: 'https://i.ibb.co/qdDsZXM/wal.png',
        },
    ];

    return (
        <MyContainer>
            <Row xs={1} md={3} className="g-4">
                    {cardData.map((data, idx) => (
                        <Col key={idx}>
                        <MyCard style={{ borderWidth: '2px', borderColor: '#9EC396', backgroundColor: '#f0f5db'}}>
                            {/* 이미지 부분 */}
                        {data.image && (
                            <Card.Img
                                variant="top"
                                src={data.image}
                                style={{ width: '100%', height: '190px', objectFit: 'cover' }}
                            />
                        )}
                            <Card.Body>
                            <Card.Title style={{color: '#37662d', fontWeight: 'bold'}}>{data.title}</Card.Title>
                            <Card.Text style={{color: '#ee8989'}}>{data.date}</Card.Text>
                            <Card.Text>{data.text}</Card.Text>
                            </Card.Body>
                        </MyCard>
                        </Col>
                    ))}
            </Row>
        </MyContainer>
    );
}

const MyContainer = styled.div`
    width: 70%;
    position: absolute;
    right: 3%;
    margin: 30px 0 30px 0;
`;
const MyCard = styled(Card)`
    &:hover{
        transition: transform 0.1s linear;
        transform: translate(10px, 10px);
        }
`

export default HolidayFood;

