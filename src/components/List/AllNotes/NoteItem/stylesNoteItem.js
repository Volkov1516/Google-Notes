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
        textOverflow: 'ellipsis !important'
    },
    paperOpenned: {
        border: "1px solid lightGray",
        borderShadow: "none",
        borderRadius: "11px",
        padding: "15px",
        position: 'fixed',
        zIndex: "1000",
        bottom: '40px',
        top: '40px',
        width: '600px'
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
        position: 'absolute',
        bottom: '10px'
    },
    closeBtn: {
        position: 'absolute',
        left: '500px'
    }
}))

export default useStyles