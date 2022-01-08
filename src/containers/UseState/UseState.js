import React from "react";

const UseState = ({ name }) => {
  const [error, setError] = React.useState(true);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    console.log("Empezando el efecto");
    if (loading) {
      setTimeout(() => {
        console.log("Haciendo la validación");
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
      <input type="text" placeholder="código de seguridad" />
      <button onClick={() => setLoading(!loading)}>Comprobar</button>
    </>
  );
};
export { UseState };
