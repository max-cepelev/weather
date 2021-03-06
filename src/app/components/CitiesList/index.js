import React from 'react';
import './list.css';
import CityItem from './CityItem';

const CitiesList = ({cities, currentCity, onSelect}) => {
    return (
        <ul className='list'>
            {cities.map(city => {
                return (
                    <CityItem 
                        key={city.id}
                        isSelected={currentCity.name === city.name} 
                        city={city}
                        onSelect={onSelect}
                    />
                );
            })}
        </ul>
    );
}

export default CitiesList;