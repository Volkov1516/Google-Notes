import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    closedPaper: {
        padding: "6px 20px 6px 20px",
        margin: "30px 0px 30px 0px",
        borderRadius: "9px",
    },
    bottomPaper: {
        border: "none",
        display: "flex",
        justifyContent: "end"
    },
    closeBtn: {
        textTransform: "unset !important",
    }
}))

export default useStyles