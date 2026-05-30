// --- cube_loader.js ---
// Minimaler Loader für dein Cube-System

// Projekt registrieren
window.SEEU_REGISTER_PROJECT = function(id, data){
  window.SEEU_PROJECTS[id] = data;
  console.log("Projekt registriert:", id);
};

// Projekt laden (WICHTIG!)
window.SEEU_LOAD_PROJECT = function(id){
  // Falls Projekt nicht registriert wurde → Standard erzeugen
  if(!window.SEEU_PROJECTS[id]){
    window.SEEU_PROJECTS[id] = {
      id,
      seed: Math.random().toString(36).slice(2),
      chunksBase: "default",
      version: "1.0"
    };
  }

  return window.SEEU_PROJECTS[id];
};
