import React from "react";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import {
  Typography,
  Card,
  Cards,
  CardContent,
  CardMedia,
  Grid,
  Container,
} from "@mui/material";

import Button from "@mui/material/Button";
import useStyles from "../../styles";
const style = {
  top: "100%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  overflow: "scroll",
};
const Dialogs = () => {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button variant="contained" color="secondary" onClick={handleOpen}>
        Open
      </Button>

      <Dialog
        keepMounted
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box>
        <Typography
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
                  >
                      My Photos

          </Typography>
          <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://source.unsplash.com/random"
                      title="Image title"
                    />
                    <CardContent className={classes.cardMedia}>
                      <Typography gutterBottom variant="h5">
                        Heading
                      </Typography>
                      <Typography>
                        This is a media card.You can use this selection to
                        describe the content
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </Dialog>
    </div>
  );
};
export default Dialogs;
