import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Sizedropdown({ data, handleSize }) {
  const classes = useStyles();
  const [size, setSize] = useState(data[0].price);

  const handleChange = (event) => {
    setSize(event.target.value);
    handleSize(event.target.value);
  };

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel htmlFor="outlined-size-selector">Size</InputLabel>
      <Select
        native
        value={size}
        onChange={handleChange}
        label="Size"
        inputProps={{
          name: "size",
          id: "outlined-size-selector",
        }}
      >
        {data.map((ctx) => {
          return (
            <option name={ctx.price} value={ctx.price} key={ctx.size}>
              {ctx.size}
            </option>
          );
        })}
      </Select>
    </FormControl>
  );
}
