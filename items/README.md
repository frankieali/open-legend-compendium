# Items

Items are described as follows:
```
{
  "name": {string} - The name of this item (should match file name)
  "content": {string} - An HTML desciption of this item including special properties
  "data": { {Object} - An object containing all the other datails for this item
    "Source": {string} - The source book where this entry originates from. e.g.: "Open Legend: Core Rules"
    "Category": {string: "Items"} - The category this item falls into
    "type": {string} - The type/classification of this item
    "description": {string} - A detailed description of this item
    "wealthLevel": {int} - The _Wealth_ score required to purchase this item
    "attributes": {Array.<string>} - Indicates which attributes, if any, the item can make use of
    "banes": {Array.<string>} - The banes this item grants access to
    "boons": {Array.<string>} - The boons this item grants access to
    "properties": {Array.<string>} - descriptors that make each item unique and translate into specific game mechanics
    "special": {Array.<Object>: [optional]} - List of special properties that an item may possess
  }
}
```

## TODO
*  Tags would also be useful for items
*  Images (url's) would be nice

## Notes
