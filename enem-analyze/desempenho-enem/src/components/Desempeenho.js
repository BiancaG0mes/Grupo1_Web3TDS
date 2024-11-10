import React, { useEffect, useState } from "react";
import axios from "axios";

function Desempenho() {
    const [desempenho, setDesempenho] = useState(null);

    useEffect(() => {
        // Substitua o URL abaixo pelo endereço do seu back-end
        axios.get("http://localhost:8080/desempenho")
            .then((response) => {
                setDesempenho(response.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar desempenho", error);
            });
    }, []);

    return (
        <div>
            <h1>Desempenho do Aluno</h1>
            {desempenho ? (
                <pre>{JSON.stringify(desempenho, null, 2)}</pre>
            ) : (
                <p>Carregando...</p>
            )}
        </div>
    );
}

export default Desempenho;
