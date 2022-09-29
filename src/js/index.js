//import react & components
import React from "react";
import ReactDOM from "react-dom";
import Counter from "./component/counter.jsx";


// include styles into the webpack bundle
import "../styles/index.css";

let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;
let count6 = 0;


const timer = setInterval(() => {
    console.log('seg:', count1);

        if(count1 >= 10){
            count1=0
            count2++;
        }
        if(count2 >= 10)
        {
            count2=0
            count3++;
        }
        
        if(count3 >= 10)
        {
            count3=0
            count4++;
        }
        
        if(count4 >= 10)
        {
            count4=0
            count5++;
        }
        
        if(count5 >= 10)
        {
            count5=0
            count6++;
        }

        ReactDOM.render(<Counter time1={count1} time2={count2} time3={count3} time4={count4} time5={count5} time6={count6} pause={timer} tiem={timer} />, document.querySelector("#app"));
        count1++;
}, 100);


//render your react application
//ReactDOM.render(<Home />, document.querySelector("#app"));
