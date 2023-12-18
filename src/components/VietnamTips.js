import React from 'react';
import styled from 'styled-components';

function VietnamTips() {
    return (
        <Container>
            <Header>
                <p>베트남 여행, 이것만 알면 OK!</p>
            </Header>
            <Content>
                <p> &emsp; 베트남은 동남아시아에 위치한 나라로, 매년 많은 외국인들이 방문하고 있습니다. 
                    베트남을 처음 방문하는 외국인들이라면, 베트남의 문화와 관습에 대해 미리 알아두면 
                    더욱 즐거운 여행을 할 수 있습니다. <br/><br/>
                </p>
                <h4>
                    ✅베트남에서 주의해야 할 점
                </h4>
                <p>
                    &emsp; 1. 베트남어로 기본적인 인사말과 몇 가지 예절을 익혀두면 더욱 친절한 인상을 줄 수 있습니다.<br/>
                    &emsp; 2. 베트남은 종교의 자유가 보장된 나라이지만, 사원같은 종교 시설에 방문할 때는 복장과 행동에 주의해야 합니다.<br/>
                    &emsp; 3. 일반적으로 안전한 국가로 간주되지만 인기 있는 관광지에서는 여행자들의 주의가 필요합니다.<br/>
                    &emsp; 4. 때때로 사기와 과도한 요금 청구가 발생할 수 있습니다. 공정한 거래를 위해 사전에 가격을 조사하세요.<br/>
                </p>
                <br/>
                <h4>
                    🚫베트남에서 하면 안되는 행동
                </h4>
                <p>
                    &emsp; 1. 일부 종교적 장소는 사진 촬영이 금지되어 있으니 잘 살펴보세요. <br/>
                    &emsp; 2. 호치민은 베트남의 국가적 영웅입니다. 무시하는 발언을 하지 않도록 주의하세요.<br/>
                    &emsp; 3. 길을 건널 때 무섭다고 뛰지 마세요. 운전자들이 알아서 비껴가기 때문에 예측가능하도록 천천히 이동해야 합니다.<br/>
                    &emsp; 4. 금액 사기를 피하기 위해, 무작위로 택시를 타는 것 보단 Grab과 같은 택시 예약 어플을 사용하는것을 권장합니다. <br/>
                </p>
                <br/>
                <h4>
                    🍽️베트남의 식문화
                </h4>
                <div style={{ textAlign: 'center' }}>
                    <img style={{width: '600px', height: 'auto', margin: '0 auto'}} src="https://i.ibb.co/ypQPLWx/VNFood.jpg" alt="Korean Food" />
                </div>
                <p>
                    &emsp; 베트남은 동남아시아에 위치한 나라로, 다양한 민족과 문화가 공존하는 나라입니다. 
                    이러한 문화적 다양성은 베트남의 식문화에도 영향을 미쳐, 다양한 종류의 음식이 발달했습니다.
                    <br/>
                    베트남 음식의 가장 큰 특징은 쌀을 주식으로 사용한다는 것입니다. 
                    베트남 사람들은 밥을 주식으로 하여, 다양한 반찬과 함께 먹습니다. 
                    베트남 음식의 반찬은 일반적으로 향신료가 강한 것이 특징입니다. 
                    마늘, 생강, 고추, 레몬그래스, 후추 등 다양한 향신료를 사용하여 음식의 풍미를 더합니다.
                </p>
                
            </Content>
        </Container>
    );
}


const backgroundImageUrl = "https://i.ibb.co/2t4XBWK/hoi-an.jpg";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 75%;
    position: absolute;
    right: 0;
    line-height: 40px;
`;

const Header = styled.div`
    flex: 1;
    background-image: url(${backgroundImageUrl});
    background-size: cover;
    background-position: center;
    color: #ffffff;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    background-attachment: fixed;
    position: absolute;
    width: 100%;
    height: 300px;
    font-size: 43px;
    text-shadow: 1px 1px 1px #464646;
`;

const Content = styled.div`
    flex: 2;
    padding: 20px;
    width: 90%;
    margin: 315px auto 0 auto;
    text-align: left;
    font-size: 17px;
`;


export default VietnamTips;
