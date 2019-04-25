exports.categories = [
  {name:'Boons', value:'boons'},
  {name:'Banes', value:'banes'},
  {name:'Feats', value:'feats'},
  {name:'Perks', value:'perks'},
  {name:'Flaws', value:'flaws'},
  {name:'Weapons', value:'weapons'},
  {name:'Armor', value:'armor'},
  {name:'Items', value:'items'},
  {name:'Mounts & Vehicles', value:'transportation'},
  {name:'Properties', value:'properties'},
  {name:'The Whole Schmagoygle', value:'all'},
];

exports.categoriesPlain = exports.categories.map((cat) => {
  return cat.name
});

exports.sources = [
  {name:"Core Rules", value:"core", path:"Open Legend/Core Rules"},
  {name:"Amaurea's Dawn", value:"amaureas_dawn", path:"Open Legend/Amaurea's Dawn"},
];

exports.sourcesPlain = exports.sources.map((source) => {
  return source.name
});