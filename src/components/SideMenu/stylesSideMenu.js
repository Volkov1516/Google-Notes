import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    menuItem: {
        color: "black",
        borderRadius: '0px 35px 35px 0px',
        paddingLeft: '10px'
    },
    menuItemShort: {
        paddingLeft: '10px',
        '&:hover': {
            backgroundColor: 'white'
        }
    },
    longMenuItem: {
        marginRight: '10px',
        '&:hover': {
            backgroundColor: 'transparent'
        }
    }
}))

export default useStyles