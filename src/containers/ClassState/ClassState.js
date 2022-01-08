import React, { Component } from 'react'
import {Loading} from './Loading'
class ClassState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: true,
            loading:false
        }
    }

    componentDidUpdate(){
        console.log('update')
        if (this.state.loading) {
            setTimeout(() => {
                console.log("Haciendo la validación");
                this.setState({loading:!this.state.loading});
                console.log("fin la validación");
              }, 3000);
        }
    }
    render
        () {
            return <> <h2>Eliminar { this.props.name}</h2>
        <p>Por favor, escriba el código de seguridad.</p>
        {this.state.error && ( 
            <p> Error: el código es incorrecto</p>
        )}
         {this.state.loading && ( 
            <Loading/>
        )}
                <input type='text' placeholder='código de seguridad' />
                <button onClick={() => this.setState(prevState=>({ loading:!prevState.loading }))}>
                Comprobar</button>
        </>}
}
export {ClassState}