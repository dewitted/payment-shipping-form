import React, { useState } from 'react';
import './Select.scss'


const Select = ({ options, label }) => {

    const [selectValue, setSelectValue] = useState("Select")
    const [isSelected, setIsSelected] = useState(false)

    const [isOpened, setIsOpened] = useState(false)
    const [isRotated, setIsRotated] = useState(false)

    const onClickHandler = () => {
        setIsOpened(!isOpened)
        setIsRotated(!isRotated)
    }

    const optionClickHandler = (item) => {
        setSelectValue(item.label)
        setIsSelected(!isSelected)
        setIsOpened(!isOpened)
        setIsRotated(!isRotated)
    }

    const list = options.map((item, index) => {
        return <div className="optionsContainer__options" key={index} onClick={()=>optionClickHandler(item)}>
            <h1>{item.label}</h1>
        </div>
    })

    return <>
        <div className='wrapper'>
            <div className='selectContainer' onClick={() => onClickHandler()}>
                <span className='selectContainer__label'><h3>{label}</h3></span>
                <span className={isRotated ? 'selectContainer__arrow rotated' : 'selectContainer__arrow'}></span>
                <h1>{selectValue}</h1>
            </div>
            <div className={isOpened ? 'optionsContainer' : 'optionsContainer hidden'}>
                {list}
            </div>
        </div>

    </>

};

export default Select;
