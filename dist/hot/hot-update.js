webpackHotUpdate("main",{

/***/ "./src/index.jsx":
/*!***********************!*\
  !*** ./src/index.jsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _socket = __webpack_require__(/*! ./socket */ \"./src/socket.jsx\");\n\nvar _socket2 = _interopRequireDefault(_socket);\n\nvar _waitingScreen = __webpack_require__(/*! ./screens/waitingScreen */ \"./src/screens/waitingScreen.jsx\");\n\nvar _waitingScreen2 = _interopRequireDefault(_waitingScreen);\n\nvar _GameScreen = __webpack_require__(/*! ./screens/GameScreen/GameScreen */ \"./src/screens/GameScreen/GameScreen.jsx\");\n\nvar _GameScreen2 = _interopRequireDefault(_GameScreen);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar ScreenManager = function (_React$Component) {\n  _inherits(ScreenManager, _React$Component);\n\n  function ScreenManager(props) {\n    _classCallCheck(this, ScreenManager);\n\n    var _this = _possibleConstructorReturn(this, (ScreenManager.__proto__ || Object.getPrototypeOf(ScreenManager)).call(this, props));\n\n    _socket2.default.on(\"gameStart\", function (data) {\n      console.log(\"game is start\");\n      return _this.changeSreenToGame();\n    });\n    _socket2.default.on(\"incorrectId\", function (data) {\n      return _this.notification(data.content);\n    });\n\n    _this.state = {\n      screen: \"wait\"\n    };\n    _this.changeSreenToGame = _this.changeSreenToGame.bind(_this);\n    return _this;\n  }\n\n  _createClass(ScreenManager, [{\n    key: 'componentWillMount',\n    value: function componentWillMount() {\n      this.isThisAnInvitedPerson();\n    }\n  }, {\n    key: 'notification',\n    value: function notification(data) {\n      alert(data);\n    }\n  }, {\n    key: 'dispWaitScreen',\n    value: function dispWaitScreen() {\n      return _react2.default.createElement(_waitingScreen2.default, null);\n    }\n  }, {\n    key: 'dispGameScreen',\n    value: function dispGameScreen() {\n      return _react2.default.createElement(_GameScreen2.default, null);\n    }\n  }, {\n    key: 'press',\n    value: function press(info) {\n      this.setState({\n        screen: \"game\"\n      });\n    }\n  }, {\n    key: 'changeSreenToGame',\n    value: function changeSreenToGame() {\n      this.setState({\n        screen: \"game\"\n      });\n    }\n  }, {\n    key: 'isThisAnInvitedPerson',\n    value: function isThisAnInvitedPerson() {\n      var str = document.location.href.substr(document.location.href.lastIndexOf(\"/\") + 1);\n      if (str !== \"\") {\n        _socket2.default.emit(\"addMeInPair\", { opponenturl: str.substr(1) });\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n\n      if (this.state.screen == \"wait\") {\n        return this.dispWaitScreen();\n      } else {\n        return this.dispGameScreen();\n      }\n    }\n  }]);\n\n  return ScreenManager;\n}(_react2.default.Component);\n\n// console.log(document.location.href)\n\n\n_reactDom2.default.render(_react2.default.createElement(ScreenManager, null), document.getElementById(\"root\"));\n\nconsole.log('My Minimal 01322dddddddddddooooooo');\nmodule.hot.accept();\n\n//# sourceURL=webpack:///./src/index.jsx?");

/***/ })

})