import {Container, Box, Heading} from "@chakra-ui/react"
import { useContext, useEffect } from "react"
import Task from "./Task"

function Tasks({TasksList, setTasks}){
    return(
        <>
            <Box w="100%">
                {TasksList.filter((task)=>{return !task.completed}).map((task)=>{
                    return(
                        <div key={task.id}>
                            <Task setTasks={setTasks} TasksList={TasksList} task={task}/>
                        </div>
                    )
                })}
            </Box>
            <Box w="100%" mt={4}>
                <Heading fontSize="sm">COMPLETED</Heading>
                {TasksList.filter((task)=>{return task.completed}).map((task)=>{
                    return(
                        <div key={task.id}>
                            <Task setTasks={setTasks} TasksList={TasksList} task={task}/>
                        </div>
                    )
                })}
            </Box>
        </>
    )
}
export default Tasks