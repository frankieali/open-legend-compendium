# Banes

Banes are described as follows:
```
{
  "name": {string} - The name of this entry (should match file name)
  "content": {string} - An HTML desciption of this entry including special properties
  "data": {  {Object} - An object containing all the other datails 
    "Source": {string} - The source book where this entry originates from. e.g.: "Open Legend: Core Rules"
    "Category": {string: "Banes"} - The category this entry falls into
    "description": {string} - A general idea of what the bane could look like in the story
    "effect": {string} - The mechanical effects of the bane
    "special": {string} - A unique property or mechanic explained in detail
    "powerLevelEffect": {Object: [optional]} - The keys in this object are mapped to "power" levels.
      "{powerLevel}": {string} - The effect this boon has at various tiers of power. 
    "compoundingEffect": {Object: [optional]} - If this bane is applied multiple times then the effect is compounded.
      "{level}": {string} - The additional effect of this bane as it stacks up
    "tags": {Array.<string>} - Words or phrases that describe this entry. Additional metadata
    "power": {Array.<int>} - The attribute score required to inflict the bane at the indexed tier
    "attribute": {Array.<string>} - A list of attributes that can be used to invoke this bane
    "attack": {Array.<string>) - The type of attack roll to make when inflicting the bane,
    "invocationTime": {string} - The time requires to activate the bane
    "duration": {string} - How long the bane remains in effect
  }
}
```

## Notes
*  `powerLevelEffect` is an object with key values that map to the array values in `power`. However, JSON objects require that all keys be strings so the numbers must be wrapped in quotes.
*  Perhaps `power` and `powerLevelEffect` should be consolidated into one object? The only time a powerLevelEffect does not exist is when there is only one power level, such as `Immobile` or `Fear`.
*  `Fatigued` seems like a one-off case where there's one power level and the effects escalate with each application of the bane. For this type of mechanic, the tiers are considered `compoundingEffect`