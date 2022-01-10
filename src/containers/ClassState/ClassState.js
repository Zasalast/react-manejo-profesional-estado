import React, { Component } from 'react'
import {Loading} from './Loading'
const SECURITY_CODE = "paradigma";
class ClassState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value:'',
            error: false,
            loading:false
        }
    }

    componentDidUpdate(){
        console.log('update')
        if (this.state.loading) {
            setTimeout(() => {
                console.log("Haciendo la validación");

                if (this.state.value !== SECURITY_CODE) {
                    this.setState({error:true,loading:!this.state.loading});
                     
                  }else{
                    this.setState({error:false,loading:!this.state.loading});
                  }
                  
                
                console.log("fin la validación");
              }, 3000);
        }
    }
    render
        () {
            return <> <h2>Eliminar { this.props.name}</h2>
        <p>Por favor, escriba el código de seguridad.</p>
        {(this.state.error && !this.state.loading) && ( 
            <p> Error: el código es incorrecto</p>
        )}
        
         {this.state.loading && ( 
            <Loading/>
        )}
                <input type='text'
                 placeholder='código de seguridad'
                  value={this.state.value}
                  onChange={(event)=>{this.setState({value:event.target.value})}}
                  />
                <button onClick={() => this.setState(prevState=>({ loading:!prevState.loading }))}>
                Comprobar</button>
        </>}
}
export {ClassState}