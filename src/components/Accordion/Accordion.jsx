/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import MinusImg from "assets/images/icon-minus.svg"
import PlusImg from "assets/images/icon-plus.svg"
import { useState } from "react"

const Accordion = (props) => {
    const {title, handleClick, children, isOpen} = props

    return ( 
        <div className="accordion__group">
            <div className="accordion__header" onClick={handleClick}>
                <span className="accordion__title">{title}</span>
                <img src={(isOpen) ? PlusImg : MinusImg } alt="" />
            </div>
            {isOpen && 
                <div className="accordion__content">
                    <p>{children}</p>
                </div>
            }
            
        </div>
     );
}
 
export default Accordion;