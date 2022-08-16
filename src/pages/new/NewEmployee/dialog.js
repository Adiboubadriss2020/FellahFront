import React from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

export interface DialogTitleProps  {
    id: string;
    children: React.ReactNode;
    onClose: () => void;
}

const DialogTitle = ((props: DialogTitleProps) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className="root" {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className="closeButton" onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme: Theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme: Theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

export default function CustomizedDialogs({ children, title }) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" color="green" onClick={handleClickOpen}>
                Nouveau Employee
            </Button>
            <Dialog aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    {title}
                </DialogTitle>
                <DialogContent dividers>
                    {children}
                </DialogContent>

            </Dialog>
        </div>
    );
}