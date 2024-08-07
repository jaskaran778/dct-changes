"use client";
import React from "react";
import './css/Carousel.css';
import useCarousel from "./JS/main.js";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export default function Carousel() {
    useCarousel();
    return (
        <div className="container">
            <div className="slider-wrapper">
                <div className="image-list">
                    <div className="image-item-container">
                        <img src="/images/servicesimg1.jpg" alt="" className="image-item" />
                        <div className="text-overlay">AI In Health</div>
                        <div className="text-overlay2">Revolutionizing Health with AI</div>
                    </div>
                    <div className="image-item-container">
                        <img src="/images/servicesimg2.jpg" alt="" className="image-item" />
                        <div className="text-overlay">Fintech</div>
                        <div className="text-overlay2">Innovating Finance with Technology </div>
                    </div>
                    <div className="image-item-container">
                        <img src="/images/servicesimg3.jpg" alt="" className="image-item" />
                        <div className="text-overlay">Digital Marketing</div>
                        <div className="text-overlay2"> Transforming Brand Through Targeted Marketing</div>
                    </div>
                    <div className="image-item-container">
                        <img src="/images/servicesimg4.jpg" alt="" className="image-item" />
                        <div className="text-overlay">AI & MLOps</div>
                        <div className="text-overlay2">Optimizing Operations with AI </div>
                    </div>
                    <div className="image-item-container">
                        <img src="/images/servicesimg5.jpg" alt="" className="image-item" />
                        <div className="text-overlay"> Data Science</div>
                        <div className="text-overlay2"> Transforming Data into Insights</div>
                    </div>
                    <div className="image-item-container">
                        <img src="/images/servicesimg6.jpg" alt="" className="image-item" />
                        <div className="text-overlay">Frontend Development6</div>
                        <div className="text-overlay2">Crafting Engaging User Experiences </div>
                    </div>
                </div>
            </div>
            <div className="slide-btns">
                <div className="left-right-cont">
                    <div className="next-btn3">
                        <button type="button" className="btn btn-outline-dark control-btn img-slider-btn" id="left">
                            <ArrowLeftIcon />
                        </button>
                    </div>
                    <div className="prev-btn3">
                        <button type="button" className="btn btn-outline-dark control-btn img-slider-btn" id="right">
                            <ArrowRightIcon />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
