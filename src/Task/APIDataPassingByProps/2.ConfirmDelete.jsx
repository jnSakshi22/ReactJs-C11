import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const ConfirmDelete = ({
  //   confirmDelete,
  //   cancelDelete,
  //   title,
  isDialogOpen,
}) => {
  const [open, setOpen] = useState(false);

  //   const handleClickOpen = () => {
  //     setOpen(true);
  //   };

  const handleClose = () => {
    // confirmDelete();
    setOpen(false);
  };
  return (
    <React.Fragment>
      <Dialog
        open={isDialogOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirm Box"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do You Want to Delete
            {/* Do You Want to Delete <strong>{title}</strong>? */}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={cancelDelete}>Disagree</Button> */}
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default ConfirmDelete;



const DialogView = ({ visible, onClose, onConfirm, title, description }) => {
  return (
    <Dialog
      open={visible}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {description}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>No</Button>
        <Button onClick={onConfirm} autoFocus>
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default DialogView;
