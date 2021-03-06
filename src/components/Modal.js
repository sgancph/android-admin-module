import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

const Modal = ({
  isOpen,
  handleToggle,
  title,
  text,
  yesLabel = "Yes",
  noLabel = "No",
}) => (
  <Dialog
    open={isOpen}
    onClose={handleToggle}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        {text}
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleToggle} color="primary">
        {yesLabel}
      </Button>
      <Button onClick={handleToggle} color="primary">
        {noLabel}
      </Button>
    </DialogActions>
  </Dialog>
);

export default Modal;
