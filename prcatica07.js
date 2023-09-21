const app = document.getElementById("app")
const Campos = (parametro) =>{
    
    return `
    <fieldset>
    <legend>${parametro.field}</legend>
    <label for="${parametro.label1}">${parametro.label1}:</label>
    <input type="text" id="${parametro.label1}" name="${parametro.label1}">
    <label for="${parametro.label2}">${parametro.label2}:</label>
    <input type="text" id="${parametro.label2}" name="${parametro.label2}">
    </fieldset>
    `
}
app.innerHTML=Campos({field:"Informacion Personal", label1:"Nombre", label2:"Correo Electronico"})
app.innerHTML+=Campos({field:"Informacion de Direccion", label1:"Direccion", label2:"Ciudad"})
