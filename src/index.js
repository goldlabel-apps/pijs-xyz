// import packageJSON from "../package.json";
// import React from "react";
// import ReactDOM from "react-dom";
// import initRedux from "./redux/initRedux";
// import { Provider } from "react-redux";
// import * as serviceWorker from "./serviceWorker";
// import MaterialView from "./MaterialView";
// import ClockWork from "./ClockWork";
// import { CssBaseline } from "@material-ui/core/";

// let debugOn = false;

// const urlParams = new URLSearchParams(window.location.search);
// if (urlParams.has("upgrade-from")) {
//   localStorage.clear();
//   window.location.assign(`/`);
// }

// console.log(
//   `${packageJSON.name} ${packageJSON.version} (${process.env.REACT_APP_ENV})`
// );

// const store = initRedux();

// const getStore = () => {
//   return store;
// };
// export { getStore };

// ReactDOM.render(
//   <Provider store={store}>
//     <React.Fragment>
//       <ClockWork />
//       <CssBaseline />
//       <MaterialView debugOn={debugOn} />
//     </React.Fragment>
//   </Provider>,
//   document.getElementById("pijs")
// );

// serviceWorker.register();
