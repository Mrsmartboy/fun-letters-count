import styled from 'styled-components'

export const Container=styled.div`
 display:flex;
 flex-direction:row;
 justify-content:center;
 align-items:center;
 min-height:100vh;
 background-image:linear-gradient(to right,#1d976c,#93f9b9);
 padding:20px;
 @media screen and (max-width:576px){
    flex-direction:column;
 }
`

export const Container1=styled.div`
   width:50%;
   padding:10px;
   @media screen and (max-width:576px){
    order:1;
    

   }
`
export const Header=styled.h1`
color:#ffffff;
font-size:30px;
font-weight:bold;
@media screen and (max-width:576px){
    text-align:center;
   }
`
export const Label=styled.label`
   color:#e4e7eb;
   font-size:12px;
   font-weight:bold;
   margin-bottom:10px;
   @media screen and (max-width:576px){
   text-align:center;
   width:100%
   align-self:flex-start;
   }
`

export const InputElement=styled.input`
   border:2px solid #e4e7eb;
   outline:none;
   border-radius:8px;
   background-color:transparent;
   width:50%;
   padding:10px;
   color:#ffffff;
   font-size:20px;
   font-weight:400;
   border-radius:10px;
   margin-top:5px;
   @media screen and (max-width:576px){
   text-align:center;
   width:100%
   }
`

export const Para =styled.p`
  color:#219a6f;
  font-size:20px;
  font-weight:bold;
  width:40%;
  background-color:#ffffff;
  text-align:center;
  border-radius:10px;
  padding:10px;
  @media screen and (max-width:576px){
    text-align:center;
    width:100%

   }
`

export const Container2=styled.div`
   width:50%;
   @media screen and (max-width:576px){
    width:100%;
    order:0;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
   }
`

export const Image =styled.img`
   width:100%;
   @media screen and (max-width:576px){
    width:100%;
    text-align:center;
   }
`



