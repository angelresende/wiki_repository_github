import styled from "styled-components";
import {material, octicons} from 'styled-icons';
import { Trash } from 'styled-icons/octicons';

export const ItemContainer = styled.div`
    width: 80%;

    h3 {
        font-size: 32px;
        color: #FAFAFA;
    }

    p {
        font-size:16px;
        color: #FAFAFA60;
        margin-bottom:20px;
    }

    a.visualizar {
        background-color: #fff;
        color: #0000EE;
        position: relative;
        display: inline-block;
        padding: 7px 20px;
        font-size: 14px;
        font-weight:900;
        line-height: 20px;
        cursor: pointer;
        border: 1px solid;
        border-radius: 6px;
    }

    a.remover {
        background-color: #fff;
        color: #FF0000;
        position: relative;
        display: inline-block;
        padding: 7px 20px;
        font-size: 14px;
        font-weight:900;
        line-height: 20px;
        cursor: pointer;
        border: 1px solid;
        border-radius: 6px;
        top:10px;
        
    }
    
    hr {
        color: #FAFAFA60;
        margin: 20px 0;
    }
`

