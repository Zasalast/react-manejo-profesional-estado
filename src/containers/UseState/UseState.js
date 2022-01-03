import React from 'react'

const UseState = ({ name }) => {
const [error,setError]=React.useState(false)
    return <> 
 
        <h2>Eliminar { name}</h2>
        <p>Por favor, escriba el código de seguridad.</p>
        {error && ( 
            <p> Error: el código es incorrecto</p>
        )}
      <input type='text' placeholder='código de seguridad'/>
      <button onClick={()=>setError(!error)}>Comprobar</button>
     
  </>
}
export {UseState}