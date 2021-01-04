function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Manager from './Manager';

var ScrollableAnchor =
/*#__PURE__*/
function (_Component) {
  _inherits(ScrollableAnchor, _Component);

  function ScrollableAnchor(props) {
    var _this;

    _classCallCheck(this, ScrollableAnchor);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ScrollableAnchor).call(this, props));
    _this.id = props.id || props.children.ref;
    return _this;
  }

  _createClass(ScrollableAnchor, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var element = ReactDOM.findDOMNode(this.refs[Object.keys(this.refs)[0]]);
      Manager.addAnchor(this.id, element);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      Manager.removeAnchor(this.id);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          id = _this$props.id;
      return React.cloneElement(children, {
        ref: children.ref || id
      });
    }
  }]);

  return ScrollableAnchor;
}(Component);

_defineProperty(ScrollableAnchor, "propTypes", {
  children: PropTypes.node,
  id: PropTypes.string
});

export { ScrollableAnchor as default };