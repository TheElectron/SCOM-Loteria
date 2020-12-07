import React from "react";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import "./style.css";

export default function MegaSena() {
  const [gambles, setGambles] = React.useState(0);
  const [selectedValues, setSelectedValues] = React.useState({
    checked1: false, checked2: false, checked3: false, checked4: false, checked5: false,
    checked6: false, checked7: false, checked8: false, checked9: false, checked10: false,
    checked11: false, checked12: false, checked13: false, checked14: false, checked15: false,
    checked16: false, checked17: false, checked18: false, checked19: false, checked20: false,
  });

  const handleChange = (event) => {
    setSelectedValues({
      ...selectedValues,
      [event.target.name]: event.target.checked,
    });

    if (!event.target.checked && gambles > 0) {
      setGambles(gambles - 1);
    } else {
      setGambles(gambles + 1);
    }
  };

  return (
    <div className="mega-container">
      <div className="title-container">
        <h1>MegaSena</h1>
        <p>A loteria que paga milhões para você!</p>
      </div>

      <table className="numbers-container">
        <tbody>
          <tr>
            <td>
              <FormControl>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      name={`checked1`}
                      checked={selectedValues.checked1}
                      onChange={handleChange}
                    />
                  }
                  label="1"
                  labelPlacement="end"
                />
              </FormControl>
            </td>
            <td>
              <FormControl>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      name={`checked2`}
                      checked={selectedValues.checked2}
                      onChange={handleChange}
                    />
                  }
                  label="2"
                  labelPlacement="end"
                />
              </FormControl>
            </td>
            <td>
              <FormControl>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      name={`checked3`}
                      checked={selectedValues.checked3}
                      onChange={handleChange}
                    />
                  }
                  label="3"
                  labelPlacement="end"
                />
              </FormControl>
            </td>
            <td>
              <FormControl>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      name={`checked4`}
                      checked={selectedValues.checked4}
                      onChange={handleChange}
                    />
                  }
                  label="4"
                  labelPlacement="end"
                />
              </FormControl>
            </td>
            <td>
              <FormControl>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      name={`checked5`}
                      checked={selectedValues.checked5}
                      onChange={handleChange}
                    />
                  }
                  label="5"
                  labelPlacement="end"
                />
              </FormControl>
            </td>
          </tr>
          <tr>
            <td>
              <FormControl>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      name={`checked6`}
                      checked={selectedValues.checked6}
                      onChange={handleChange}
                    />
                  }
                  label="6"
                  labelPlacement="end"
                />
              </FormControl>
            </td>
            <td>
              <FormControl>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      name={`checked7`}
                      checked={selectedValues.checked7}
                      onChange={handleChange}
                    />
                  }
                  label="7"
                  labelPlacement="end"
                />
              </FormControl>
            </td>
            <td>
              <FormControl>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      name={`checked8`}
                      checked={selectedValues.checked8}
                      onChange={handleChange}
                    />
                  }
                  label="8"
                  labelPlacement="end"
                />
              </FormControl>
            </td>
            <td>
              <FormControl>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      name={`checked9`}
                      checked={selectedValues.checked9}
                      onChange={handleChange}
                    />
                  }
                  label="9"
                  labelPlacement="end"
                />
              </FormControl>
            </td>
            <td>
              <FormControl>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      name={`checked10`}
                      checked={selectedValues.checked10}
                      onChange={handleChange}
                    />
                  }
                  label="10"
                  labelPlacement="end"
                />
              </FormControl>
            </td>
          </tr>
          <tr>
            <td>
              <FormControl>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      name={`checked11`}
                      checked={selectedValues.checked11}
                      onChange={handleChange}
                    />
                  }
                  label="11"
                  labelPlacement="end"
                />
              </FormControl>
            </td>
            <td>
              <FormControl>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      name={`checked12`}
                      checked={selectedValues.checked12}
                      onChange={handleChange}
                    />
                  }
                  label="12"
                  labelPlacement="end"
                />
              </FormControl>
            </td>
            <td>
              <FormControl>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      name={`checked13`}
                      checked={selectedValues.checked13}
                      onChange={handleChange}
                    />
                  }
                  label="13"
                  labelPlacement="end"
                />
              </FormControl>
            </td>
            <td>
              <FormControl>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      name={`checked14`}
                      checked={selectedValues.checked14}
                      onChange={handleChange}
                    />
                  }
                  label="14"
                  labelPlacement="end"
                />
              </FormControl>
            </td>
            <td>
              <FormControl>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      name={`checked15`}
                      checked={selectedValues.checked15}
                      onChange={handleChange}
                    />
                  }
                  label="15"
                  labelPlacement="end"
                />
              </FormControl>
            </td>
          </tr>
          <tr>
            <td>
              <FormControl>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      name={`checked16`}
                      checked={selectedValues.checked16}
                      onChange={handleChange}
                    />
                  }
                  label="16"
                  labelPlacement="end"
                />
              </FormControl>
            </td>
            <td>
              <FormControl>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      name={`checked17`}
                      checked={selectedValues.checked17}
                      onChange={handleChange}
                    />
                  }
                  label="17"
                  labelPlacement="end"
                />
              </FormControl>
            </td>
            <td>
              <FormControl>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      name={`checked18`}
                      checked={selectedValues.checked18}
                      onChange={handleChange}
                    />
                  }
                  label="18"
                  labelPlacement="end"
                />
              </FormControl>
            </td>
            <td>
              <FormControl>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      name={`checked19`}
                      checked={selectedValues.checked19}
                      onChange={handleChange}
                    />
                  }
                  label="19"
                  labelPlacement="end"
                />
              </FormControl>
            </td>
            <td>
              <FormControl>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      name={`checked20`}
                      checked={selectedValues.checked20}
                      onChange={handleChange}
                    />
                  }
                  label="20"
                  labelPlacement="end"
                />
              </FormControl>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="footer-container">
        <TextField
          id="gamble-number"
          label="Selecione o valor da aposta"
          type="number"
          InputLabelProps={{shrink: true}}
        />
        <Button
          color="primary"
          onClick={() => {
            console.log(selectedValues);
            console.log(gambles);
          }}>
          Jogar na MegaSena
        </Button>
      </div>
    </div>
  );
}
