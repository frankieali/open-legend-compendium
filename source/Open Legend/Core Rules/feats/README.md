# Feats

Feats are described as follows:
```
{
  "name": {string} - The name of this entry (should match file name)
  "content": {string} - An HTML desciption of this item including special properties
  "data": {  {Object} - An object containing all the other datails 
    "Source": {string} - The source book where this entry originates from. e.g.: "Open Legend: Core Rules"
    "Category": {string: "Feats"} - The category this entry falls into
    "Description": {string} - A general idea of what the feat could look like in the story
    "Effect": {string} - The mechanical effects of the feat
    "Special": {string} - A unique property or mechanic explained in detail
    "Tier Effect (#)": {string} - The effect this feat has at specific tiers of power.
    "Tier Prerequisite (#)": {string} - The specific requirements to purchase this feat at the specified tier
    "Tags": {string} - Words or phrases that describe this entry. Additional metadata
    "Cost": {string} - Number of feat points required to purchase the feat
    "data-cost": {int | Array as string} - Number of feat points required to purchase the feat as a number
  }
}
```

## Notes
\n*  Keys with `#` or `(#)` are placeholders for Power Level number, Tier number, or for simple incremention 
\n*  `data-tierEffect` and `data-prerequisites` will be used for **Formatted Attribute** blocks.
\n*  `Heightened Invocation (I - III)` may have broken the template with it's large `Tier Effect` descriptions
