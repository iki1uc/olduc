async function loadYML(path) {
  const res = await fetch(path);
  const text = await res.text();
  return jsyaml.load(text);
}

async function iki1uc_measure() {
  try {
    // Master-YML laden
    const master = await loadYML("system/iki1uc.yml");

    const results = [];

    // Alle Kandidaten laden
    for (const name of master.collect) {
      const yml = await loadYML(`candidates/${name}/${name}.yml`);
      results.push({
        name: yml.respo,
        base: yml.base,
        line: yml.line,
        instance: yml.instance,
        axis: yml.axis
      });
    }

    iki1uc_output(results);

  } catch (err) {
    console.error("Fehler in iki1uc_measure:", err);
    document.getElementById("iki1uc-output").innerHTML =
      "<p style='color:red;'>Fehler beim Laden der Daten.</p>";
  }
}

function iki1uc_output(data) {
  const el = document.getElementById("iki1uc-output");
  let html = "<table border='1' cellpadding='6'><tr><th>Name</th><th>Base</th><th>Line</th><th>Instance</th><th>Axis</th></tr>";

  for (const row of data) {
    html += `<tr>
      <td>${row.name}</td>
      <td>${row.base}</td>
      <td>${row.line}</td>
      <td>${row.instance}</td>
      <td>${row.axis}</td>
    </tr>`;
  }

  html += "</table>";
  el.innerHTML = html;
}

window.addEventListener("DOMContentLoaded", iki1uc_measure);
