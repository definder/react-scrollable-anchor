function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { debounce } from './utils/func';
import { getBestAnchorGivenScrollLocation, getScrollTop } from './utils/scroll';
import { getHash, updateHash, removeHash } from './utils/hash';

var jump = require('jump.js')["default"];

var defaultConfig = {
  offset: 0,
  scrollDuration: 400,
  keepLastAnchorHash: false,
  scrollUrlHashUpdate: true
};

var Manager = function Manager() {
  var _this = this;

  _classCallCheck(this, Manager);

  _defineProperty(this, "addListeners", function () {
    window.addEventListener('scroll', _this.scrollHandler, false);
    window.addEventListener('hashchange', _this.handleHashChange);
  });

  _defineProperty(this, "removeListeners", function () {
    window.removeEventListener('scroll', _this.scrollHandler, false);
    window.removeEventListener('hashchange', _this.handleHashChange);
  });

  _defineProperty(this, "configure", function () {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _this.config = _objectSpread({}, defaultConfig, {}, config);
  });

  _defineProperty(this, "goToTop", function () {
    if (getScrollTop() === 0) return;
    _this.forcedHash = true;
    window.scroll(0, 0);
  });

  _defineProperty(this, "addAnchor", function (id, component) {
    // if this is the first anchor, set up listeners
    if (Object.keys(_this.anchors).length === 0) {
      _this.addListeners();
    }

    _this.forceHashUpdate();

    _this.anchors[id] = component;
  });

  _defineProperty(this, "removeAnchor", function (id) {
    delete _this.anchors[id]; // if this is the last anchor, remove listeners

    if (Object.keys(_this.anchors).length === 0) {
      _this.removeListeners();
    }
  });

  _defineProperty(this, "handleScroll", function () {
    var _this$config = _this.config,
        offset = _this$config.offset,
        keepLastAnchorHash = _this$config.keepLastAnchorHash,
        scrollUrlHashUpdate = _this$config.scrollUrlHashUpdate;

    if (!!scrollUrlHashUpdate) {
      var bestAnchorId = getBestAnchorGivenScrollLocation(_this.anchors, offset);

      if (bestAnchorId && getHash() !== bestAnchorId) {
        _this.forcedHash = true;
        updateHash(bestAnchorId, false);
      } else if (!bestAnchorId && !keepLastAnchorHash) {
        removeHash();
      }
    }
  });

  _defineProperty(this, "handleHashChange", function () {
    if (_this.forcedHash) {
      _this.forcedHash = false;
    } else {
      _this.goToSection(getHash());
    }
  });

  _defineProperty(this, "goToSection", function (id) {
    var element = _this.anchors[id];

    if (element) {
      jump(element, {
        duration: _this.config.scrollDuration,
        offset: _this.config.offset
      });
    } else {
      // make sure that standard hash anchors don't break.
      // simply jump to them.
      element = document.getElementById(id);

      if (element) {
        jump(element, {
          duration: 0,
          offset: _this.config.offset
        });
      }
    }
  });

  this.anchors = {};
  this.forcedHash = false;
  this.config = defaultConfig;
  this.scrollHandler = debounce(this.handleScroll, 100);
  this.forceHashUpdate = debounce(this.handleHashChange, 1);
};

export default new Manager();