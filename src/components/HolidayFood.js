import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

function HolidayFood() {
  // 카드에 표시될 데이터 배열
    const cardData = [
        {
        title: '떡국',
        text: '떡을 물에 넣고 끓여 내는 국으로 새해 첫날과 설날을 대표하는 한국 요리.',
        image: '이미지1 URL',
        },
        {
        title: '음식 2',
        text: '이것은 음식 2에 대한 설명입니다.',
        image: '이미지2 URL',
        },
    ];

    return (
        <Row xs={1} md={3} className="g-4">
        {cardData.map((data, idx) => (
            <Col key={idx}>
            <Card style={{ borderWidth: '3px', borderColor: '#9EC396' }}>
                {/* 이미지 부분 */}
                {data.image && <Card.Img variant="top" src={data.image} />}
                <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                <Card.Text>{data.text}</Card.Text>
                </Card.Body>
            </Card>
            </Col>
        ))}
        </Row>
    );
}

export default HolidayFood;
