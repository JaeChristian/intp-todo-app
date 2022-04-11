import { ChakraProvider, Box } from '@chakra-ui/react';
import {useEffect, useState} from "react";
import React from "react"
import theme from "./theme";
import './App.css';
import Home from "./pages/home";
import Navbar from "./components/navbar";

function App() {
  //Initialize Tasks state array
  const [Tasks, setTasks] = useState([{id: 0, completed: false, body: "DBAD Lab 8"},{id: 1, completed: false,body: "Blog Post 2"}]);

  /* 
    Whenever the component is initialized, the useEffect hook will run.
  */
  useEffect(()=>{
    const temp = Tasks.concat({id: 3, completed: false, body: "Capstone"});
    setTasks(temp);
    console.log(Tasks, "Current tasks");
  },[]);

  return (
    <ChakraProvider theme={theme}>
      <Navbar/>
        <Box mt={20}>
          <Home TasksList={Tasks} setTasks={setTasks}/>
        </Box>
    </ChakraProvider>
  );
}

export default App;
