var tableNames = ["Colosus", "Dragon Hunter", "Stand Down", "Sauron", "Beer", "Happyhour", "End"];


function generate() {
  return alert(tableNames[Math.floor(Math.random() * tableNames.length)] + " Table!");
}
