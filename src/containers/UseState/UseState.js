import React from "react";
const SECURITY_CODE = "paradigma";

const UseState = ({ name }) => {
  const [state, setState] = React.useState({
    value: "",
    error: false,
    loading: false,
  });

  /* const [error, setError] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [loading, setLoading] = React.useState(false); */
  console.log(state);
  React.useEffect(() => {
    console.log("Empezando el efecto");
    if (state.loading) {
      setTimeout(() => {
        console.log("Haciendo la validación");

        if (state.value !==SECURITY_CODE) {
          setState({
            ...state,
            error:true,
            loading:false
          });
        }else{
        setState({
          ...state,
          loading:false,
        error:false})};

        console.log("fin la validación");
      }, 3000);
    }
    console.log("fin del efecto");
  }, [state.loading]);

  return (
    <>
      <h2>Eliminar {name}</h2>
      <p>Por favor, escriba el código de seguridad.</p>
      {(state.error && !state.loading ) && (<p> Error: el código es incorrecto</p>)}
      {state.loading && <p> Cargando...</p>}
      <input
        type="text"
        placeholder="código de seguridad"
        value={state.value}
        onChange={(event) => {
          setState({
            ...state,
            error:false});
          setState({
            ...state,
            value:event.target.value});
        }}
      />
      <button onClick={() => setState({
            ...state,
            loading:true})}>Comprobar</button>
    </>
  );
};
export { UseState };
