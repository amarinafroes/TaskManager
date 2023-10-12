import GlobalStyle from "./styles/global";
import styled from "styled-components"
import Form from "./components/Form.js"
import Grid from "./components/Grid"
import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";



const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top:20px;
  display:flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h2``;

function App() {
  const [tasks, setTask] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getTask = async() => {
    try{
      const res = await axios.get("http://localhost:8800");
      setTask(res.data.sort((a, b) => (a.task > b.task ? 1 : -1)));
    }catch(error){
      toast.error(error);
    }
  };
  useEffect(() => {
    getTask();
  },[setTask]);

  return (
    <>
      <Container>
        <Title>Tarefas</Title>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getTask={getTask}/>
        <Grid tasks = {tasks} setTask={setTask} setOnEdit={setOnEdit}  />
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
      <GlobalStyle />
    </>

  );
}

export default App;
