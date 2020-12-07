import React from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";

function StartScreen() {
  let history = useHistory();
  return (
    <div className="start-container">
      <div className="main-title">
        <h1>Bem Vindo as Loterias SCOM!</h1>
        <p>Selecione o seu jogo</p>
      </div>
      <div className="main-buttons">
        <Button
          color="primary"
          onClick={() => {
            history.push("/mega");
          }}
        >
          Jogar na MegaSena
        </Button>
        <Button
          color="secondary"
          onClick={() => {
            history.push("/dupla");
          }}
        >
          Jogar na DuplaSena
        </Button>
      </div>
    </div>
  );
}

export default StartScreen;
