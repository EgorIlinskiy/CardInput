import styled,{createGlobalStyle} from 'styled-components'
import Select from 'react-select'
import {ICustomSelect} from "../../types/cardTypes";

interface ICustomInput{
    error: string;
}
interface ICustomText{
    error:string;
}

export const GlobalStyles = createGlobalStyle`
  body{
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background: #2e69b0;
    font-size: 20px; 
  }
`


export const PaymentsContainer = styled.div`
  background: #fff;
  border-radius: 5px;
  padding: 30px;
  margin: 10% auto;
  max-width: 600px;
  -webkit-box-shadow: 12px 8px 20px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 12px 8px 20px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 12px 8px 20px 0px rgba(34, 60, 80, 0.2);
`

export const PaymentsHeader = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-bottom: 50px;
  padding-left: 3px;
`
export const PaymentsHeaderMain = styled.div`
  font-size: 3rem;
  width: 100%;
  margin-bottom: 10px;
`

export const PaymentsHeaderSecondary = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const PaymentsHeaderSecondaryText = styled.span`
  font-size: 1.8rem;
`

export const PaymentsBody = styled.div`
`

export const PaymentsCardInputText = styled.span<ICustomText>`
  padding-left: 3px;
  color: ${props => props.error ? 'rgb(255, 26, 26)' : '#000'};

`

export const PaymentsCardInput = styled.input<ICustomInput>`
  margin-top: 7px;
  padding: 10px;
  width: 96%;
  font-size: 1.4rem;
  border-radius: 5px;
  font-family: 'Open Sans', sans-serif;
  border: ${props => props.error ? '1px solid rgb(255, 26, 26,0.5)': '1px solid rgb(137, 137, 137,0.5)'};
`
export const PaymentsCardExpiration = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-top: 20px;
`

export const PaymentsCardExpirationText = styled.div<ICustomText>`
  width: 100%;
  margin-bottom: 8px;
  padding-left: 3px;
  color: ${props => props.error !== '' ? 'rgb(255, 26, 26)' : '#000'};
`
export const PaymentsCardExpirationSelect = styled.div`
  margin-bottom: 20px;
  width: 45%;
`

export const PaymentsCardCvvContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`
export const PaymentsInputContainer = styled.div`
display: flex;
flex-direction: column;
  align-items: start;
  justify-content: start;
`


export const PaymentsInputCVVText = styled.div`
  width: auto;
  
  color:rgb(137, 137, 137,0.8);
  padding-top:5%;
  padding-right:13%;
`

export const PaymentsCardSubmit = styled.button`

  color:white;
  background: #488bdb;
  border:none;
  width: 80%;
  height: 60px;
  border-radius: 5px;
  margin: 0 auto;
  text-align: center;
  display: block;
  font-size: 1.2rem;
  &:hover{
    background: #4c92e7;
  }
  &:disabled{
    background: #3566a1;
  }
`

export const PaymentsCardLine = styled.div`
  height: 20px;
  border-bottom: 1px solid #4c92e7;
`
export const PaymentsSettings = styled.div`
  height: 30px;
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  user-select:none;
`
export const PaymentsSettingLabel = styled.label`
  cursor: pointer 
`

export const PaymentsSettingsSelect = styled.div`
  cursor: pointer;
  color: #2e69b0;
`

export const PaymentsCardsSaved = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding: 40px 0;
`

export const PaymentsCardsSavedContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end ;
  align-items: end;
  border: 1px solid #8b2734;
  border-radius: 10px;
  padding: 20px 10px;
  font-size: 1.7rem;
  background: #e3d24a;
  color: white;
  cursor: pointer;
`

export const PaymentsCardsSavedRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

export const StyledReactSelect = styled(Select)<ICustomSelect>`
  border-color:${props => props.error && props.touched  ? 'red': 'rgb(137, 137, 137,0.5)'};
`

export const LogoContainer = styled.div`
    max-width: 100px;
    height: 40px;
`