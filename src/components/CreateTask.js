import {Box, Textarea, useEditable} from "@chakra-ui/react"
import { useEffect, useState, useContext } from "react";

function CreateTask({TasksList, setTasks}){
    const [TaskText, setTaskText] = useState("");

    function submit(e){
        e.preventDefault();
        let temp = TasksList.concat({id: TasksList.length, completed: false, body: TaskText});
        setTasks(temp);
        setTaskText("");
    }

    return(
        <Box w="100%" mb={2}>
            <form onSubmit={submit}>
                <input 
                    type="text" 
                    className="create-task" 
                    placeholder="+ Add a task, press Enter to save."
                    value={TaskText}
                    onChange={(e)=>setTaskText(e.target.value)}
                    required
                />
            </form>
        </Box>
    )
}
export default CreateTask;