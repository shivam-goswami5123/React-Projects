import React from "react";



function Button({bgColor}){

    function changeBG(){
        document.body.style.backgroundColor = {bgColor};
    } 

    return (
        <button onclick="changeBG()"
  type="button"
  class="rounded-full bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
>
  {bgColor}
</button>
    )
}

export default Button 