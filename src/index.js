import Manager from './Manager'
export const goToTop = Manager.goToTop
export const configureAnchors = Manager.configure
export const changeHash = Manager.handleHashChange

export { updateHash as goToAnchor, removeHash } from './utils/hash'
export { default } from './ScrollableAnchor'
