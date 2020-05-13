import React from 'react';
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';
import OptionComponent from './OptionComponent';

function Customize(props) {

  const features = Object.keys(props.features).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    const options = props.features[feature].map(option => {
      const itemHash = slugify(JSON.stringify(option));
      return (
        <OptionComponent 
          itemHash={itemHash} 
          slugify={slugify} 
          feature={feature} 
          item={option} 
          selected={props.selected[feature].name} 
          currency={props.currency} 
          updateFeatureFunction={props.updateFeature}
        />
      );
    });

    return (
      <fieldset className="feature" key={featureHash}>
        <legend className="feature__name">
          <h3>{feature}</h3>
        </legend>
        {options}
      </fieldset>
    );
  });

  return (
    <form className="main__form">
      <h2>Customize your laptop</h2>
      {features}
    </form>
  )
}

export default Customize;