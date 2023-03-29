import { useState } from "react";
import styled from "styled-components"
import banner01 from "../assets/images/banner-example.png"
import banner02 from "../assets/images/banner-example2.png"
import banner03 from "../assets/images/banner-exemplo03.png"
import Carousel from "./Carrosel";

export default function BannerSession(){

    const bannerArray = [banner01, banner02,banner03]

    return (
        <>
            <Container>
                <Carousel images={bannerArray} />
                <div>oiodiasdisa</div>
            </Container>
        </>
    )
}

const Container = styled.div`
    margin-top: 7vh; 
    width: 100%;
    height: 564px;

    display: flex;
    align-items: center;
    flex-direction: column;

`
const Button = styled.div`
    width:100px;
    height: 100px;
    background-color: black;
`
const BannerIconRight = styled.div`
    width: 40px;
    height: 40px;
    background-color: black;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 0;
`

const BannerIconLeft = styled.div`
    width: 40px;
    height: 40px;
    background-color: black;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 0;
`