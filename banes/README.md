# Banes

Banes are described as follows:
```
{
  "name": {string} - The name of this entry (should match file name)
  "content": {string} - An HTML desciption of this entry including special properties
  "data": {  {Object} - An object containing all the other datails 
    "Source": {string} - The source book where this entry originates from. e.g.: "Open Legend: Core Rules"
    "Category": {string: "Banes"} - The category this entry falls into
    "data-description": {string} - A general idea of what the bane could look like in the story
    "data-effect": {string} - The mechanical effects of the bane
    "data-special": {string} - A unique property or mechanic explained in detail
    "Tags": {string} - Words or phrases that describe this entry. Additional metadata
    "Power Level": {string} - The attribute score required to access the next tier of power.
    "Power Level Effect (#)": {string} - The effect this bane has at specific tiers of power.
    "Compounding Effect (#)": {string} - The additional (compounding) effect of this bane each time it is applied.
    "Attribute": {string} - A list of attributes that can be used to invoke this bane
    "data-attack": {Array.<Object> as string) - All the types of attack rolls available for inflicting the bane,
    "Attack #": {string} - The type of attack roll necessary for inflicting the bane.
    "Invocation Time": {string} - The time requires to activate the bane
    "Duration": {string} - How long the bane remains in effect
  }
}
```

## Notes
*  Keys with `#` or `(#)` are placeholders for Power Level number, Tier number, or for simple incremention 
*  `Fatigued` seems like a one-off case where there's one power level and the effects escalate with each application of the bane. For this type of mechanic, the tiers are considered `compoundingEffect`