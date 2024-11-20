import React, { useState } from "react";
import axios from "axios";

function ProfileForm() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [nickname, setNickname] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("http://127.0.0.1:8000/api/profiles/", {
            name,
            age,
            nickname,
        })
        .then((response) => {
            alert("Perfil cadastrado com sucesso!");
            setName("");
            setAge("");
            setNickname("");
        })
        .catch((error) => {
            console.error("Erro ao cadastrar perfil:", error);
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Cadastrar Novo Perfil</h2>
            <div>
                <label>Nome:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Idade:</label>
                <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Apelido:</label>
                <input
                    type="text"
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Cadastrar</button>
        </form>
    );
}

export default ProfileForm;
