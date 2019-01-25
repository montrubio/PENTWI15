import {es} from './ES' ;

export function WireFunctionWithEvent () {
    //if amd() then this does not get called everytime i click 
    document.getElementById('mybutton').addEventListener('click', updateSum);
    return;
};

WireFunctionWithEvent();


