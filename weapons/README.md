# Weapons

Weapons are described as follows:
```
{
  "name": {string} - The name of this entry (should match file name)
  "content": {string} - An HTML desciption of this entry including special properties
  "data": { {Object} - An object containing all the other datails for this entry
    "Source": {string} - The source book where this entry originates from. e.g.: "Open Legend: Core Rules"
    "Category": {string: "Weapons"} - The category this entry falls into
    "type": {Array.<string>} - The type/classification of this weapon
    "description": {string} - A detailed description of this weapon
    "wealthLevel": {int} - The _Wealth_ score required to purchase this weapon
    "attributes": {Array.<string>} - Indicates which attributes, if any, the weapon can make use of
    "banes": {Array.<string>} - The banes this weapon grants access to
    "properties": {Array.<string>} - descriptors that make each weapon unique and translate into specific game mechanics
    "special": {Array.<Object>: [optional]} - List of special properties that an Extrodinary or Legendary piece of equipment may possess
    "similar": {Array.<string>} - Items that have very similar stats but designed for a different time period, genre or environment. Re-skined versions
  }
}
```

## TODO
*  Descriptions needed
*  Tags would also be useful for weapons
*  Images (url's) would be nice

## Notes
*  Weapons do not have boons
