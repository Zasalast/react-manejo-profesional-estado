import React, { Component } from 'react'
class ClassState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
        }
    }
    render
        () {
            return <> <h2>Eliminar { this.props.name}</h2>
        <p>Por favor, escriba el código de seguridad.</p> {this.state.error && ( 
            <p> Error: el código es incorrecto</p>
        )}
                <input type='text' placeholder='código de seguridad' />
                <button onClick={() => this.setState(prevState=>({ error:!prevState.error }))}>
                Comprobar</button>
        </>}
}
export {ClassState}