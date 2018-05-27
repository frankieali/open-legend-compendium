# Boons

Boons are described as follows:
```
{
  "name": {string} - The name of this entry (should match file name)
  "content": {string} - An HTML desciption of this entry including special properties
  "data": {  {Object} - An object containing all the other datails 
    "Source": {string} - The source book where this entry originates from. e.g.: "Open Legend: Core Rules"
    "Category": {string: "Boons"} - The category this entry falls into
    "description": {string} - A general idea of what the boon could look like in the story
    "effect": {string} - The mechanical effects of the boon
    "special": {string} - A unique property or mechanic explained in detail
    "powerLevelEffect": {Object} - The keys in this object are mapped to "power" levels.
      "{powerLevel}": {string} - The effect this boon has at various tiers of power. 
    "compoundingEffect": {Object: [optional]} - If this boon is applied multiple times then the effect is compounded.
      "{level}": {string} - The additional effect of this boon as it stacks up
    "tags": {Array.<string>} - Words or phrases that describe this entry. Additional metadata
    "power": {Array.<int>} - The attribute score required to inflict the boon at the indexed tier
    "attribute": {Array.<string>} - A list of attributes that can be used to invoke this boon
    "invocationTime": {string} - The time requires to activate the boon
    "duration": {string} - How long the boon remains in effect
  }
}
```

## Notes
*  Currently there are no boons that have `compoundingEffect` properties
*  Boons do not have an `attack` property like banes do