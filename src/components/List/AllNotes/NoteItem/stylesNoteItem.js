import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    paperClosed: {
        border: "1px solid lightGray",
        borderShadow: "none",
        borderRadius: "11px",
        padding: "15px",
        marginBottom: "10px",
        maxHeight: "400px",
        overflow: "hidden",
        backgroundColor: "#f28b82"
    },
    paperOpenned: {
        border: "1px solid lightGray",
        borderShadow: "none",
        borderRadius: "11px",
        padding: "15px",
        backgroundColor: "#f28b82"
    },
    title: {
        fontWeight: "500",
        marginBottom: "10px"
    },
    menuBtn: {
        textTransform: "unset !important"   
    },
    bottomPaper: {
        border: "none",
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#f28b82"
    }
}))

export default useStyles