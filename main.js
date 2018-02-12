var tableNames = ["Colosus", "Dragon Hunter", "Stand Down", "Sauron", "Beer", "Happyhour", "End","Titan","Leviathin","The Wildcats","The Mildcats","The Flying Dutchman","Table Awesome","Undefined","The Grove Street Families"];


function generate() {
  return alert(tableNames[Math.floor(Math.random() * tableNames.length)] + " Table!");
}
