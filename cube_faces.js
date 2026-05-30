// minimal: immer die gleichen 6 Flächen
window.SEEU_BUILD_FACES = function(projectId){
  const labels = ["front","back","right","left","top","bottom"];
  return labels.map(name=>{
    const d = document.createElement("div");
    d.className = "face face-" + name;
    d.textContent = projectId + " / " + name;
    return d;
  });
};
