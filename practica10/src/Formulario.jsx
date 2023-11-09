import {Button, Box, TextField} from "@mui/material";
import { useState } from "react";
import axios from "axios"

function Formulario(props) {
    const [Cargando, setCargando] = useState (false)
    const [datosFormulario, setDatosFormulario] = useState({nombre:'', password:''})

    const hacerPeticion = async () => {
        try {
            const response = await axios.get('http://localhost:4567/tipo-usuario')
            return response.data
        } catch (error) {
            throw error
        }
    }

    const cambiosFormulario = (evento) =>{
        const {name, value} =evento.target
        setDatosFormulario({
            ...datosFormulario,
            [name]: value
        })
    }


    const procesarFormulario = async (evento) => {
            evento.preventDefault()
            console.log("datos recuperados del form:", datosFormulario)
           setCargando(true)
           try {
            const response =await hacerPeticion()
            console.log("procesarFormulario", response)
            setCargando(false)
            if (datosFormulario.nombre == response.tipo-usuario) {
                console.log("El usuario es correcto")
            } else {
                console.log("El usuario es incorrecto")
            }
           } catch (error) {
                console.log(error)
                setCargando(false)
           }
    }

    return(
        <>
            <h1>Inicio de Sesion</h1>
            <form onSubmit={ procesarFormulario }>
                <Box m={5}>
                    <TextField label="Nombre:" variant="outlined" fullWidth onChange={cambiosFormulario} name="nombre" value={datosFormulario.nombre}></TextField>
                </Box>
                <Box m={5}>
                    <TextField label="Contraseña:" variant="outlined" fullWidth onChange={cambiosFormulario} name="password" value={datosFormulario.password}></TextField>
                </Box>
                <Box m={5}>
                    <Button variant="contained" type="submit" color="primary" fullWidth disabled={Cargando}>Iniciar Sesion</Button>
                </Box>
            </form>
        </>
    )
}

export default Formulario