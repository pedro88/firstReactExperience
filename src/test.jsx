import { useEffect, useState } from "react";

function TaskList () {
const [task, setTask] = useState([]);
const [complete, setComplete] = useState(-1);

useEffect(() => {
	fetch("./public/task.json")
		.then((response) => response.json())
		.then((data) => setTask(data.task))
		.catch((error) => console.log(error));
}, []);

const handleChange = (event) => {
    if (event.target.checked){
        
        console.log("up")
    } else {
        setComplete(complete - 1)
        console.log("down")
    }       
};

function ListTask() {
	return task.map((element, index) => {
        		return (
			<>
            <li key= {index}>
                <input type="checkbox" id={element.name} onChange={handleChange}/>
				{element.name}
            </li>
			</>
		);
	});
}
return(
    
    <ListTask />
)

}

export default TaskList