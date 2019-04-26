# Items

Items are described as follows:
```
{
  "name": {string} - The name of this item (should match file name)
  "content": {string} - An HTML desciption of this item including special properties
  "data": {  {Object} - An object containing all the other datails for this item
    "Source": {string} - The source book where this entry originates from. e.g.: "Open Legend: Core Rules"
    "Category": {string: "Items"} - The category this item falls into
    "Description": {string} - A detailed description of this item
    "Type": {string} - The type/classification of this item
    "Wealth Level": {int} - The _Wealth_ score required to purchase this item
    "Attributes": {string} - Indicates which attributes, if any, the item can make use of
    "Banes": {string} - The banes this item grants access to
    "Boons": {string} - The boons this item grants access to
    "Properties": {string} - descriptors that make each item unique and translate into specific game mechanics
    "Special": {string} - Special and/or unique properties of this item (without description)
    "Special Description": {string } - Special properties that an Extrodinary or Legendary piece of equipment may possess and it's description
  }
}
```

## TODO
*  Tags would also be useful for items
*  Images (url's) would be nice

## Notes
*  `Special` can be a plain string containing a general description or an array of objects with named special properties and descriptions
*  If there are no special attributes on an item then an `<h2>Description</h2>` is not needed in the `content` attribute
