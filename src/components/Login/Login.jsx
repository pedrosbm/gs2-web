import { useState } from "react"
import { Link } from "react-router-dom";

export default function Login() {

    const request = async (patient) => {
        try {
            const response = await fetch('https://api-medico-wbg2ngsbaq-uc.a.run.app/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(patient),
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data);
            } else {
                console.error('Erro na requisição:', response.status, response.statusText);
                throw new Error('Erro na requisição.');
            }
        } catch (error) {
            console.error('Erro ao logar:', error);
        }
    };
    
    const handleSubmit = async e => {
        e.preventDefault();
        try {
            await request(patient)
        } catch(error){
            console.log("Erro ao logar - ", error)
        }
    }
    
    const handleChange = e => {
        setPatient({ ...patient, [e.target.name]: e.target.value })
    }

    const [patient, setPatient] = useState({
        type: "patient"
    });

    return (
        <>
            <section className="wrapper">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>

                    <label htmlFor="">Email:</label><br />
                    <input name='email' type="text" onChange={handleChange} /><br />

                    <label htmlFor="">Senha:</label><br />
                    <input name='password' type="password" onChange={handleChange} /><br />

                    <button type="submit" className="button">Logar</button>
                </form>
                <Link to='/Cadastro' >Não tenho conta</Link>
            </section>
        </>
    )
}