import React from 'react';

function rn(from, to) {
    return ~~(Math.random() * (to - from + 1)) + from;
}

function rs() {
    return arguments[rn(1, arguments.length) - 1];
}

function boxShadows(max) {
    let ret = [];
    for (let i = 0; i < max; ++i) {
        ret.push(`
      ${ rn(1, 100) }vw ${ rn(1, 100) }vh ${ rn(10, 40) }vmin ${ rn(1, 20) }vmin
      ${ rs('#ffffff', '#ffffff', '#ffffff', '#ffffff') }
    `)
    }
    return ret.join(',');
}


const Clouds = ({cloudClassName}) => {
    return (
        <div className="absolute">
            <div className={cloudClassName} style={{boxShadow : boxShadows(100)}} > </div>

            <svg xmlns="http://www.w3.org/2000/svg" width="0" >
                <filter id="filter">
                    <feTurbulence type="fractalNoise"
                                  baseFrequency=".01" numOctaves="10" />
                    <feDisplacementMap
                        in="SourceGraphic" scale="240" />
                </filter>
            </svg>
        </div>
    );
}


export default Clouds;