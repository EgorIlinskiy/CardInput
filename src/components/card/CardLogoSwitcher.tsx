import React from 'react';
import VisaLogo from "../../assets/VisaLogo";
import MasterCardLogo from "../../assets/MasterCardLogo";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {selectCardType} from "../../store/selectors/cardSelectors";
import {CardTypes} from "../../types/cardTypes";
import {LogoContainer} from "./CardStyledComponents";

const CardLogoSwitcher = () => {
    let type = useTypedSelector(selectCardType)

    function logoRender(){
        if(type === CardTypes.VISA){
            return <VisaLogo/>
        } else if (type === CardTypes.MASTERCARD){
            return <MasterCardLogo/>
        }
    }

    return (
        <LogoContainer>
            {logoRender()}
        </LogoContainer>
    );
};

export default CardLogoSwitcher;