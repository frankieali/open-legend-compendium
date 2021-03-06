# Weapons

Weapons are described as follows:
```
{
  "name": {string} - The name of this entry (should match file name)
  "content": {string} - An HTML desciption of this entry including special properties
  "data": {  {Object} - An object containing all the other datails for this entry
    "Source": {string} - The source book where this entry originates from. e.g.: "Open Legend: Core Rules"
    "Category": {string: "Weapons"} - The category this entry falls into
    "Type": {string} - The type/classification of this weapon
    "Description": {string} - A detailed description of this weapon
    "Wealth Level": {int} - The _Wealth_ score required to purchase this weapon
    "Attributes": {string} - Indicates which attributes, if any, the weapon can make use of
    "Banes": {string} - The banes this weapon grants access to
    "Properties": {string} - descriptors that make each weapon unique and translate into specific game mechanics
    "Special": {string} - Special and/or unique properties of this item (without description)
    "Special Description": {string} - Special properties that an Extrodinary or Legendary piece of equipment may possess and it's description
    "Similar": {string} - Items that have very similar stats but designed for a different time period, genre or environment. Re-skined versions
  }
}
```

## TODO
\n*  Descriptions needed
\n*  Tags would also be useful for weapons
\n*  Images (url's) would be nice

## Notes
\n*  Weapons do not have boons
\n*  `Special` can be a plain string containing a general description or an array of objects with named special properties and descriptions
