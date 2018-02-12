var tableNames = [
  "Colosus",
  "Dragon Hunter",
  "Stand Down",
  "Sauron",
  "Beer",
  "Happyhour",
  "End",
  "Titan",
  "Leviathin",
  "The Wildcats",
  "The Mildcats",
  "The Flying Dutchman",
  "Table Awesome",
  "Undefined",
  "The Grove Street Families",
  "Tableham Lincoln",
  "Desker's Laboratory",
  "Counter Terrorism",
  "Couldn't Chairless"
];


function generate() {
  return alert(tableNames[Math.floor(Math.random() * tableNames.length)] + " Table!");
}
