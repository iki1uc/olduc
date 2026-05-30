window.SEEU_PROJECTS = window.SEEU_PROJECTS || {};

window.SEEU_LOAD_PROJECT = function(id){
  if(!window.SEEU_PROJECTS[id]){
    window.SEEU_PROJECTS[id] = {
      id,
      seed: "test-seed",
      chunksBase: "default",
      version: "1.0"
    };
  }
  return window.SEEU_PROJECTS[id];
};
1
