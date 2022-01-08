import React from "react";
const SECURITY_CODE = "paradigma";

const UseState = ({ name }) => {
  const [error, setError] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  console.log(value);
  React.useEffect(() => {
    console.log("Empezando el efecto");
    if (loading) {
      setTimeout(() => {
        console.log("Haciendo la validación");

        if (value !== SECURITY_CODE) {
          setError(true);
        }
        setLoading(false);

        console.log("fin la validación");
      }, 3000);
    }
    console.log("fin del efecto");
  }, [loading]);

  return (
    <>
      <h2>Eliminar {name}</h2>
      <p>Por favor, escriba el código de seguridad.</p>
      {error && <p> Error: el código es incorrecto</p>}
      {loading && <p> Cargando...</p>}
      <input
        type="text"
        placeholder="código de seguridad"
        value={value}
        onChange={(event) => {
          setError(false);
          setValue(event.target.value);
        }}
      />
      <button onClick={() => setLoading(!loading)}>Comprobar</button>
    </>
  );
};
export { UseState };
