import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [desempenho, setDesempenho] = useState({
        nomeAluno: '',
        acertosMatematica: 0,
        acertosLinguagens: 0,
        acertosHumanas: 0,
        acertosNatureza: 0,
    });

    const [resultados, setResultados] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDesempenho({ ...desempenho, [name]: Number(value) });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/desempenho/calcular', desempenho);
            setResultados(response.data);
        } catch (error) {
            console.error("Erro ao enviar dados:", error);
        }
    };

    return (
        <div>
            <h1>Enem Analyze</h1>
            <form onSubmit={handleSubmit}>
                <input name="nomeAluno" placeholder="Nome do Aluno" onChange={handleChange} />
                <input name="acertosMatematica" placeholder="Acertos Matemática" type="number" onChange={handleChange} />
                <input name="acertosLinguagens" placeholder="Acertos Linguagens" type="number" onChange={handleChange} />
                <input name="acertosHumanas" placeholder="Acertos Humanas" type="number" onChange={handleChange} />
                <input name="acertosNatureza" placeholder="Acertos Natureza" type="number" onChange={handleChange} />
                <button type="submit">Calcular Desempenho</button>
            </form>

            {resultados && (
                <div>
                    <h2>Resultados</h2>
                    <p>Matemática: {resultados.calcularNotaMatematica}</p>
                    <p>Linguagens: {resultados.calcularNotaLinguagens}</p>
                    <p>Humanas: {resultados.calcularNotaHumanas}</p>
                    <p>Natureza: {resultados.calcularNotaNatureza}</p>
                    <p>Média Total: {resultados.calcularMediaTotal}</p>
                </div>
            )}
        </div>
    );
}

export default App;
