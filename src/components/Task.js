import {Box, Checkbox, Text} from "@chakra-ui/react"
import {useState} from "react"

function Task({setTasks, TasksList, task}){
    let color = "white"
    if(task.completed){
        color = "grey";
    }
    function handleCheck(e){
        let temp = [...TasksList];
        let tempTask = {...TasksList[task.id]};
        tempTask.completed = e.target.checked;
        temp[task.id] = tempTask;
        setTasks(temp);
    }

    return(
        <Box display="flex" gap={4} p={4} alignItems="center" borderBottom="1px solid rgba(255,255,255,0.1)" _hover={{"background": "whiteAlpha.100"}}>
            <Checkbox colorScheme="gray" defaultChecked={task.completed} onChange={(e)=>handleCheck(e)}/>
            <Text color={color}>{task.body}</Text>
        </Box>
    )
}
export default Task