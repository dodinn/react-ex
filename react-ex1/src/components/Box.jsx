import React from "react";

function Box({ num, name, image }) {
  //구조분해
  // let num = props.num;
  // let name = props.name;
  // let image = props.image;
  // let { num, name, image } = props;
  console.log(num);

  return (
    <div className="box">
      Box{num}
      <p>{name}</p>
      <div className="photo">
        <img src={image} alt="" />
      </div>
    </div>
  );
}

export default Box;
