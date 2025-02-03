
import { useState } from 'react';
import React from "react";


const Task = ({ name, isComplete, isDelete }) => {
    const [complete, setComplete] = useState(-1);

	const handleChange = (event) => {
		if (event.target.checked){
            setComplete(complete + 1)
        } else {
            setComplete(complete - 1)
        }
        isComplete = complete
        console.log(isComplete)        
	};

	return (
		<>
			<input type="checkbox" id={name} onChange={handleChange} />
            {complete === 0 ? (
                <del>
                    {name}
                </del>
            ) : (
                name
            )}
			<br></br>
		</>
	);
};

export default Task;
