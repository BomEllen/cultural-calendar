import React from 'react';
import styled from 'styled-components';

function KoreaTips() {
    return (
        <Container>
            <Header>
                <p>한국 여행, 이것만 알고 떠나요✈️</p>
            </Header>
            <Content>
                <p> &emsp; 한국은 세계적인 관광지로, 매년 많은 외국인들이 방문하고 있습니다. 
                    한국을 처음 방문하는 외국인들이라면, 한국의 문화와 관습에 대해 미리 알아두면 더욱 
                    즐거운 여행을 할 수 있을 것 입니다. <br/><br/>
                </p>
                <h4>
                    ✅한국에서 주의해야 할 점
                </h4>
                <p>
                    &emsp; 1. 한국의 전기 플러그는 220v입니다. 여행 전에 전기 어댑터를 확인하세요.<br/>
                    &emsp; 2. 음식의 매운 맛이 강할 수 있습니다. 식사할 때 매운 정도를 물어보고 조절하세요.<br/>
                    &emsp; 3. 대중교통이 매우 잘 되어 있음으로 교통카드를 사용하면 편리합니다.<br/>
                    &emsp; 4. 한국은 4계절이 있습니다. 여행 계획을 세울 때 날씨를 고려하여 적절한 옷을 가져가세요.<br/>
                </p>
                <br/>
                <h4>
                    🚫한국에서 하면 안되는 행동
                </h4>
                <p>
                    &emsp; 1. 손가락으로 사람을 가리키는 것은 예의가 아닙니다.<br/>
                    &emsp; 2. 식사 중에 젓가락을 입에 넣은 채로 이야기하는 것은 예의가 아닙니다.<br/>
                    &emsp; 3. 집 안이나 일부 전통적인 장소에서는 신발을 벗어야 합니다.<br/>
                    &emsp; 4. 어른과 함께 식사를 한다면 어른이 먼저 음식을 먹은 후, 그 다음에 먹어야합니다.<br/>
                </p>
                <br/>
                <h4>
                    🍽️한국의 식문화
                </h4>
                <div style={{ textAlign: 'center' }}>
                    <img style={{width: '600px', height: 'auto', margin: '0 auto'}} src="https://i.ibb.co/9ZnDT5w/korea-Food.jpg" alt="Korean Food" />
                </div>
                <p>
                    &emsp; 한국 음식은 세계적으로도 유명합니다. 한국 음식을 맛있게 즐기기 위해서는 몇 가지 팁을 알아두면 좋습니다. 
                    한국 음식은 일반적으로 매운맛이 강하기 때문에, 매운 음식을 잘 먹지 못하는 사람은 미리 양념을 조절해달라고 
                    요청하는 것이 좋습니다. 또한, 한국 음식은 다양한 반찬과 함께 먹는 것이 일반적입니다. 
                    여러 가지 반찬을 맛있게 즐기기 위해서는 밥을 적게 먹는 것이 좋습니다.
                </p>
                
            </Content>
        </Container>
    );
}


const backgroundImageUrl = 'https://i.ibb.co/7ks37c5/korea.jpg';

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
    font-size: 53px;
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


export default KoreaTips;
