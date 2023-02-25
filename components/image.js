import React from "react";

const MyImage = () => {
  return (
    <div className="flex justify-center  pt-6 ">
      {/* use your own image 
          suggestion : use a circular image(looks better). Try https://crop-circle.imageonline.co/
       */}
      <img className="h-52 w-52 " src="your_pic.png"></img>
    </div>
  );
};

export default MyImage;
