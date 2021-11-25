import React , {useState} from 'react';

const Practice  = () => {
    const [myName, setName] = useState('bharti');
    
    return(
        <>
        <div>
            <h1>{myName}</h1>
        </div>
        </>
    )


}
export default Practice;