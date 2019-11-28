import styled from 'styled-components'
import defaultImmg from '../images/room-1.jpeg'

// const oragnge = '#15025'

// const SimpleButton = styled.button`
// color : ${oragnge};
// background: green;
// font-size: 3rem;
// `;

const StyledHero = styled.header`
    min-height: 60vh;
    background: url(${props=> props.img? props.img:defaultImmg}) center/cover no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
`

export default StyledHero;