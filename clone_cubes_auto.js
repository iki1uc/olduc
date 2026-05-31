window.addEventListener("DOMContentLoaded", ()=>{
  const proj = window.SEEU_LOAD_PROJECT("test");
  window.SEEU_CREATE_CUBE({
    projectId: proj.id,
    seed: proj.seed,
    containerId: "cubeWrap_test",
    chunksBase: proj.chunksBase,
    version: proj.version
  });
});
