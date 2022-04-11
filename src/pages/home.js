import {Container, Box} from "@chakra-ui/react"
import CreateTask from "../components/CreateTask";
import Tasks from "../components/Tasks";

function Home({TasksList, setTasks}) {
    return(
        <Container display="flex" flexDir="column" minW={{md: "container.sm"}}>
            <CreateTask TasksList={TasksList} setTasks={setTasks}/>
            <Tasks TasksList={TasksList} setTasks={setTasks}/>
        </Container>
    )
}
export default Home;