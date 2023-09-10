import React, { useRef } from "react";
import styled from "styled-components";

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
const Forms = ({ onEdit }) => {
    const ref = useRef();

    return (
        <FormsContainer ref={ref}>
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
                <Input name="data_inicial" type="date" />
            </InputArea>
            <InputArea>
                <Label>Data de final</Label>
                <Input name="data_final" type="date" />
            </InputArea>

            <Button type="submit">Salvar</Button>
        </FormsContainer>
    );
};
export default Forms;