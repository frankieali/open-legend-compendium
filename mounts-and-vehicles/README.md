# Mounts & Vehicles

Mounts & Vehicles are described as follows:
```
{
  "name": {string} - The name of this item (should match file name)
  "content": {string} - An HTML desciption of this item including special properties
  "data": { {Object} - An object containing all the other datails for this item
    "Source": {string} - The source book where this entry originates from. e.g.: "Open Legend: Core Rules"
    "Category": {string: "Mounts & Vehicles"} - The category this item falls into
    "Type": {string} - The type/classification of this entry (Mount or Vehicle)
    "data-description": {string} - A detailed description of this item
    "Wealth Level": {int} - The _Wealth_ score required to purchase this item
    "Speed": {string} - Number of feet the mount or vehicles moves with a single move action
    "Properties": {string} - descriptors that make each mount or vehicle unique and translate into specific game mechanics
    "Attributes": {string} - Notable attributes of the mount or vehicle
    "Feats": {string} - These feats only apply to actions taken by the mount, not the rider
    "HP": {int} - Hit Points
    "DT": {int} - Damage Threshold
    "Guard": {int} - Protection from physical attack
    "Toughness": {int} - Protection from attacks that target endurance, bodily health, sturdiness, and survivability
    "Resolve": {int | string} - Ability to resist mental domination, and stand brave in the face of danger
    "Tags": {string} - Words or phrases that describe this entry. Additional metadata
  }
}
```

## TODO
*  Need descriptions
*  Images (url's) would be nice

## Notes
