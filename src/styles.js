import { makeStyles } from "@mui/styles";

import theme from "./theme";
const useStyles = makeStyles(() => ({
  container: {
    padding: theme.spacing(10,12,12),

  },
  icon: {
    marginRight: theme.spacing(10,12,12),
  },
  buttons: {
    marginTop: theme.spacing(10,12,12),
  },
  cardGrid: {
    paddingTop: theme.spacing(10,12,12),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%",
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    background: "yellow",
    padding: theme.spacing(10),
  },
}));

export default useStyles;
