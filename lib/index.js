import Manager from './Manager';
export var goToTop = Manager.goToTop;
export var configureAnchors = Manager.configure;
export var changeHash = Manager.handleHashChange;
export { updateHash as goToAnchor, removeHash } from './utils/hash';
export { default } from './ScrollableAnchor';