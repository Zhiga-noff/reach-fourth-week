import { useState } from 'react';
import style from './App.module.css';

export const Select = () => {

    const [selectedProduct, setSelectedProduct] = useState('tv')
    const [selectedColors, setSelectedColors] = useState(['black', 'silver'])

    const onSelectedProductChange =({target}) => setSelectedProduct(target.value)

    const onSelectedColorsChange =({target}) => {
        const newSelectedColors = [...target.selectedOptions]
            .map(selectedTarget => selectedTarget.value)

        setSelectedColors(newSelectedColors);
    }

    return (
        <div className={style.app}>
            <select  value={selectedProduct} onChange={onSelectedProductChange}>
                <option value='tv'>Телевизор</option>
                <option value='smartphone'>Смартфон</option>
                <option value='laptop'>Ноутбук</option>
            </select>
            <select multiple={true} value={selectedColors} onChange={onSelectedColorsChange}>
                <option value='black'>Черный</option>
                <option value='silver'>Серебристый</option>
                <option value='white'>Белый</option>
            </select>
        </div>
    );
};
