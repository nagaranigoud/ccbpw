/* Write your CSS here */
import styled from 'styled-components/macro'

export const ProjectCardContainer = styled.div`
width:100%;
height:100%;
margin-top:7px;
margin-bottom:7px;
`

export const ProjectImage = styled.img`
width:100%;
height:100%;
`

export const ProjectTileAndDurationContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:flex-start;
@media screen and (min-width:768px){
    flex-direction:row;
    align-items:center;
}
`

export const DurationContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
`

export const ProjectDescription = styled.p`
color:#1e293b;
font-family:'Roboto';
font-size:12px;
line-height:1.5;
margin-top:0px;
@media screen and (min-width:768px){
    font-size:16px;
}
`

export const VisitLink = styled.a`
text-align:center;
color:#0967d2;
font-family:'Roboto';
font-size:14px;
line-height:1.2;
font-weight:600;
text-decoration:none;
margin-top:5px;
@media screen and (min-width:768px){
    font-size:18px;
}
`
