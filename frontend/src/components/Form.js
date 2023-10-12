import React, { useEffect, useRef} from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import axios from "axios";

const FormsContainer = styled.form`
    display: flex;
    align-items: flex-end;
    gap: 10px;
    flex-wrap: wrap;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
`;
const InputArea = styled.div`
    display: flex;
    flex-direction: column;    
`;
const Input = styled.input`
    width: 120px;
    padding: 0 10px;
    border: 1px solid #bbb;
    border-radius: 5px;
    height:40px;
`;
const Label = styled.label``;

const Button = styled.button`
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    background-color: #2c73d2;
    color: white;
    height: 42px;
`;
const Forms = ({ getTask, onEdit, setOnEdit }) => {
    const ref = useRef();

    useEffect(() => {
        if (onEdit) {
            const task = ref.current;

            task.Task.value = onEdit.Task;
            task.Description.value = onEdit.Description;
            task.data_incial.value = onEdit.data_incial;
            task.date_final.value = onEdit.date_final;
        }
    }, [onEdit]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const task = ref.current;
        if (!task.Task.value ||
            !task.Description.value ||
            !task.data_incial.value ||
            !task.date_final.value) {

            return toast.warn("Preencha todos os campos!")
        }

        if (onEdit) {
            await axios.put("http://localhost:8800/" + onEdit.id, {
                    Task: task.Task.value,
                    Description: task.Description.value,
                    data_incial: task.data_incial.value,
                    date_final: task.date_final.value,
                })
                .then(({ data }) => toast.success(data))
                .catch(({ data }) => toast.error(data));
        } else {
            await axios
                .post("http://localhost:8800", {
                    Task: task.Task.value,
                    Description: task.Description.value,
                    data_incial: task.data_incial.value,
                    date_final: task.date_final.value,
                })
                .then(({ data }) => toast.success(data))
                .catch(({ data }) => toast.error(data));
        }
        task.Task.value = ""
        task.Description.value = ""
        task.data_incial.value = ""
        task.date_final.value = ""

        setOnEdit(null);
        getTask();
    };

    return (
        <FormsContainer ref={ref} onSubmit={handleSubmit}>
            <InputArea>
                <Label>Task</Label>
                <Input name="Task" />
            </InputArea>
            <InputArea>
                <Label>Descrição</Label>
                <Input name="Description" />
            </InputArea>
            <InputArea>
                <Label>Data de inicio</Label>
                <Input name="data_incial" type="date" />
            </InputArea>
            <InputArea>
                <Label>Data de final</Label>
                <Input name="date_final" type="date" />
            </InputArea>

            <Button type="submit">Salvar</Button>
        </FormsContainer>
    );
};
export default Forms;