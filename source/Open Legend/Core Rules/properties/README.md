# Properties

Properties are described as follows:
```
{
  "name": {string} - The name of this property (should match file name)
  "content": {string} - An HTML desciption of this property
  "data": {  {Object} - An object containing all the other datails for this entry
    "Source": {string} - The source book where this entry originates from. e.g.: "Open Legend: Core Rules"
    "Category": {string: "Properties"} - The category this entry falls into
    "Type": {string} - The type/classification of this property (item, weapon, armor, vehicle)
    "Description": {string} - A detailed description of this property
    "Wealth Modifier": {int} - How this property will affect the wealth level of the item it is applied to
    "Tags": {string} - Words or phrases that describe this entry. Additional metadata
  }
}
```

## TODO
*  Images (url's) would be nice
*  Need `Wealth Modifier` for Mount and Vehicle specific properties

## Notes
