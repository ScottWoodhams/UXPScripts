// this is going to be executed when script is loaded
(function () {
  console.log("Remote script loaded");
  require('photoshop').core.showAlert('Hello world!')
}());