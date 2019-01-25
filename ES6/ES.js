import {sum} from './math';

export function updateSum () {
          document.getElementById('sum').innerHTML =  sum (  
            parseInt(document.getElementById('text1').value), 
            parseInt(document.getElementById('text2').value)) ;
};

