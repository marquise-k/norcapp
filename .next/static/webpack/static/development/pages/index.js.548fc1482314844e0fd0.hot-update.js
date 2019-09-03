webpackHotUpdate("static/development/pages/index.js",{

/***/ "./lib/database.js":
/*!*************************!*\
  !*** ./lib/database.js ***!
  \*************************/
/*! exports provided: loadFirebase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadFirebase", function() { return loadFirebase; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");

 // eslint-disable-next-line import/prefer-default-export

function loadFirebase() {
  // Initialize Firebase
  try {
    const config = {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.FIREBASE_DATA_URL,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID
    };
    firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(config);
    return firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a;
  } catch (error) {
    if (!/already exists/.text(error.message)) {
      console.log("Firebase didn't initialize correctly: ".concat(error.message));
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ })

})
//# sourceMappingURL=index.js.548fc1482314844e0fd0.hot-update.js.map