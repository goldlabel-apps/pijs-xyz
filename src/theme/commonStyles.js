import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  // shell: {
  //   background: theme.palette.background.default,
  //   border: '1px solid red',
  //   height: '100vh',
  //   width: '100vw',
  //   flexGrow: 1,
  // },
  commonSKHD: {
    border: '2px solid orange'
  },
  appInner: {
    margin: theme.spacing(),
    color: theme.palette.text.main,
  },
  btn: {
    margin: theme.spacing()
  },
  fingerprint: {
    margin: theme.spacing()
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  flex: {
    display: "flex"
  },
  grow: {
    flexGrow: 1
  }
}));
