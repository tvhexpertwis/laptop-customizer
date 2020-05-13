import React from 'react';

function OptionComponent(props){

    return (
        <div key={props.itemHash} className="feature__item">
            <input
                type="radio"
                id={props.itemHash}
                className="feature__option"
                name={props.slugify(props.feature)}
                checked={props.item.name === props.selected}
                onChange={e => props.updateFeatureFunction(props.feature, props.item)}
            />
            <label htmlFor={props.itemHash} className="feature__label">
                {props.item.name} ({props.currency.format(props.item.cost)})
            </label>
        </div>
    )
}
export default OptionComponent;