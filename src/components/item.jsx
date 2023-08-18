import React from "react";

const styles = {
  Principal :{
    displey: "flex",
    backgroundColor: "lightGrey",
    fontSize: 16,
    fontFamily: 'Aleo , serif',
    alignItems: "center",
    textAlign: "center",
},
  Secundario :{
    height: 200,
    width: 350,
  },
  x:{
    fontSize: 14,
    paddingLeft:500,
    paddingRight:500
  }
};


export default function Item({ elem }) {
  return (
    <div style={styles.Principal}>
      <div>
      <h1>{elem.nombre}</h1>
      </div>
      <img style={styles.Secundario} src={elem.url} />
      <h2>{elem.precio}</h2>
      <h3 style={styles.x}>{elem.description}</h3>
    </div>
  );
}