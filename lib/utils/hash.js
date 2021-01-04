export var getHash = function getHash() {
  return decodeURI(window.location.hash.slice(1));
};
export var updateHash = function updateHash(hash, affectHistory) {
  if (affectHistory) {
    window.location.hash = hash;
  } else {
    window.location.replace("#".concat(hash));
  }
}; // remove hash in url without affecting history or forcing reload

export var removeHash = function removeHash() {
  history.replaceState("", document.title, window.location.pathname + window.location.search);
};