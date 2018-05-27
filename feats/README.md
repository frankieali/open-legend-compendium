# Feats

Feats are described as follows:
```
{
  "name": {string} - The name of this entry (should match file name)
  "content": {string} - An HTML desciption of this item including special properties
  "data": {  {Object} - An object containing all the other datails 
    "Source": {string} - The source book where this entry originates from. e.g.: "Open Legend: Core Rules"
    "Category": {string: "Feats"} - The category this entry falls into
    "description": {string} - A general idea of what the feat could look like in the story
    "effect": {string} - The mechanical effects of the feat
    "special": {string} - A unique property or mechanic explained in detail
    "tiers": {Object} - Some feats contain multiple tiers
      "{tier}": {Object} - The key for this object is the number of the tier
        "effect": {string} - The effect this feat has at the current tier
        "prerequisites": {Object} - The specific requirements to purchase this feat
          "any": {Object: optional} - An optional grouping to indicate only one of specified prerequisites must be met. If there is no `any` object then all listed prerequisites must be met. (`or` operator vs. `and` operator)
            "Attribute": {Object} - The attribute scores required to purchase this feat
            "Feat": {Array.<string>} - The feats required to purchase this feat
            "Other": {Array.<string>} - Special requirements to purchase this feat
    "tags": {Array.<string>} - Words or phrases that describe this entry. Additional metadata
    "cost": {int | Array.<int>} - Number of feat points required to purchase the feat
  }
}
```

## Notes
*  Not sure of the optional `any` object in the prerequisites, but logically it works.
