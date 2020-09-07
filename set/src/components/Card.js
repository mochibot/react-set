import React from 'react';
import { color_map, shape_map, shading_map } from '../utility/map';

const Card = (props) => {
  const {id, number, color, shape, shading, toggled, bits} = props.info

  return (
    <div className='card' onClick={() => props.toggleCard(props.info)}>
      <img src={require(`../images/${color_map[color]}_${shape_map[shape]}_${shading_map[shading]}.png`)} />
    </div>
  )
}

export default Card;
