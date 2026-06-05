// error_display.js
(function(){
  const out = document.getElementById("out");

  window.SEEU_ERROR_HANDLER = function(err){
    const msg = String(err.message || err);
    if (window.SEEU_ERROR_VISUAL && out){
      window.SEEU_ERROR_VISUAL(msg, out);
    } else if (out){
      out.textContent = "Fehler:\n  " + msg;
    }
  };
})();

