import React from 'react'
import Card from './Card';
function Tours  ({tours , removeTour} ) {

  

    return (
        <div className='container'>
            <div>
                <h2 className='title'>Plan With Love</h2>
            </div>
            <div className='cards'>
                {
                    tours.map((tours) => {
                        return <Card key={tours.id} {...tours}  removeTour={removeTour} />;
                    })
                }
            </div>
        </div>
    )
}

export default Tours;