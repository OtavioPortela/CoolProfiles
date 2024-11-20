import React, { useState, useEffect } from "react";
import axios from "axios";

function ProfileList() {
    const [profiles, setProfiles] = useState([]);

    // Busca os perfis na API ao carregar o componente
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/profiles/")
            .then((response) => {
                setProfiles(response.data); // Atualiza o estado com os perfis
            })
            .catch((error) => {
                console.error("Erro ao buscar perfis:", error);
            });
    }, []);

    return (
        <div>
            <h2>Lista de Perfis</h2>
            <ul>
                {profiles.map((profile) => (
                    <li key={profile.id}>
                        {profile.name} ({profile.nickname}) - {profile.age} anos
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProfileList;
