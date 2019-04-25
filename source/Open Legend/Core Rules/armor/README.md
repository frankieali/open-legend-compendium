# Armor

Armor items are described as follows:
```
{
  "name": {string} - The name of this entry (should match file name)
  "content": {string} - An HTML desciption of this entry including special properties
  "data": { {Object} - An object containing all the other datails for this entry
    "Source": {string} - The source book where this entry originates from. e.g.: "Open Legend: Core Rules"
    "Category": {string: "Armor"} - The category this entry falls into
    "data-description": {string} - A detailed description of this item
    "Type": {string} - The type/weight of this armor
    "Wealth Level": {int or "n/a"} - The wealth score required to purchase this item
    "Required Fortitude": {int} - The fortitude score required to equip this armor
    "Defense Bonus": {int} - The bonus to your guard defense
    "Speed Penalty": {int} - The reduction in speed due to the armor's bulk or weight
    "Properties": {string} - Properties this armor posesses
    "Special": {string} - Special and/or unique properties of this item (without description)
    "data-special": {string } | Array.<Object>} - Special properties that an Extrodinary or Legendary piece of equipment may possess and it's description
    "Similar": {string} - Items that have very similar stats but designed for a different time period, genre or environment. Re-skined versions
  }
}
```

## TODO
*  Descriptions needed
*  Images (url's) would be nice

## Notes
*  `data-special` can be a plain string containing a general description or an array of objects with named special properties and descriptions