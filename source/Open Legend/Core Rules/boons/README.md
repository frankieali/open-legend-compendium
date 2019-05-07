# Boons

Boons are described as follows:
```
{
  "name": {string} - The name of this entry (should match file name)
  "content": {string} - An HTML desciption of this entry including special properties
  "data": {  {Object} - An object containing all the other datails 
    "Source": {string} - The source book where this entry originates from. e.g.: "Open Legend: Core Rules"
    "Category": {string: "Boons"} - The category this entry falls into
    "Description": {string} - A general idea of what the boon could look like in the story
    "Effect": {string} - The mechanical effects of the boon
    "Special": {string} - A unique property or mechanic explained in detail
    "Tags": {string} - Words or phrases that describe this entry. Additional metadata
    "Power Level": {string} - The attribute score required to access the next tier of power.
    "Power Level Effect (#)": {string} - The effect this boon has at this specific tiers of power.
    "Compounding Effect (#)": {string} - The additional (compounding) effect of this boon each time it is applied.
    "Attribute": {string} - A list of attributes that can be used to invoke this boon
    "Invocation Time": {string} - The time requires to activate the boon
    "Duration": {string} - How long the boon remains in effect
  }
}
```

## Notes
\n*  Keys with `#` or `(#)` are placeholders for Power Level number, Tier number, or for simple incremention 
\n*  Currently there are no boons that have `compoundingEffect` properties
\n*  Boons do not have an `attack` property like banes do
\n*  `Summon Creatures` has a unique attribute of `data-powerLevelTable` for rendering a data table. Not sure how this will be implemented yet.