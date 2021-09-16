import React from 'react';

import Card from './Cards';

import Sdata from "./Sdata";



const App = ()=>(
    <>

        <h1 className='heading_style'> List of top favourite songs of Nizam and Sarmin</h1>

        {Sdata.map((val) =>{
            return(
                <Card
                    key={val.id}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    sanme={val.sanme}
                    link={val.link}
                />
            );
        })}

    </>
    
);

export default App;