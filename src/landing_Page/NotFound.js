import React from 'react';

function NotFound() {
    return ( 
        <div className='container p-5 mb-5'>
        <div className='row text-center'>
           <h1 className='mt-5'>404 Not NotFound</h1>
          <p>Sorry this page you looking does not exit.</p>
          <button className='p-2 btn btn-primary mb-2' style={{width:"20%",margin:"0 auto"}}>Go Home</button>
         </div>

      </div>
     );
}

export default NotFound;