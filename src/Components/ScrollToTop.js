import React, { useEffect, useState } from 'react'
import "../assets/scss/main.scss";

export default function ScrollToTop(props) {

    const [isVisible, setIsVisible] = useState(false);
    const [isComponentMounted, setIsComponentMounted] = useState(true);

    useEffect(() => {

        // setIsComponentMounted(true);

        if(isComponentMounted) {
            document.addEventListener("scroll", () => {
                if(window.pageYOffset > 1000) {
                    setIsVisible(true);
                }else {
                    setIsVisible(false);
                }
            });
        }
       
        
        return () => {
            setIsComponentMounted(false);
        }
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior : 'smooth',
        });
    }

    return (
        <>
            { isVisible && 
                <div className="scroll" onClick={() => {
                    scrollToTop();
                }}>
                    <i className="fa fa-angle-double-up scroll--item"></i>    
                </div>
            }
        </>
        
    )
}
