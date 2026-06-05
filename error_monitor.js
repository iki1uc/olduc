// error_monitor.js
(function(){
  function forward(err){
    if (window.SEEU_ERROR_HANDLER) {
      window.SEEU_ERROR_HANDLER(err);
    }
  }

  window.addEventListener("error", e => {
    forward({ message: e.message, stack: e.error && e.error.stack });
  });

  window.addEventListener("unhandledrejection", e => {
    forward({ message: String(e.reason), stack: e.reason && e.reason.stack });
  });
})();

