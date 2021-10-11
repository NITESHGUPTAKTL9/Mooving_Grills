import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    padding: "20px",
  },
  checkoutTotal: {
    display: "flex",
    justifyContent: "center",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "20px",
  },
  "@media (max-width: 900px)": {
    grid: {
      display: "grid",
      gap: "15px",
    },
  },

  // total component styles
  card: {
    maxWidth: 349,
    minWidth: 311,
    margin: "20px 0",
    height: "fit-content",
  },
  text: {
    display: "flex",
    justifyContent: "space-between",
  },
  title: {
    display: "flex",
    alignItems: "center",
  },
  content: {
    width: "100%",
  },
});
