![Open Legend RPG Logo](http://www.openlegendrpg.com/assets/img/open_legend_lg_logo.png)

# Open Legend Core Rules Compendium
This project is focused on bringing the core rules of Open Lengend to [Roll20.net](https://www.roll20.net). A [compendium](https://wiki.roll20.net/Compendium) in Roll20 is a series of indexed and categorized webpages that can be browsed outside the VTT (Virtual Table Top), but can also be used within your games for quick rule searches and populating fields on your character sheets like equipment and feats via drag and drop capability. This project is following the [compendium guidelines](https://wiki.roll20.net/Building_Compendiums) posted by Roll20.

## Changelog

#### May 26th 2018
-  Initial alpha release of core rules
-  Sections included
    -  Armor
    -  Banes
    -  Boons
    -  Feats
    -  Items
    -  Mounts and Vehicles
    -  Perks
    -  Flaws
    -  Properties
    -  Weapons

-  `api` folder includes consolodated files of all the entries in each section. This is for quickly loading the data into a NoSQL database such as MongoDB. These files will have to be updated as other entries in the compendium are updated.

## Status
As of today, the Roll20 team has notified me that they are currntly not onboarding new compendium creators. I'm hoping to get this compendium as close to their requirements as possible so when they are ready to accepted community generated compediums we'll be all ready to upload.

## TODOs
1. Double check all data before beta release
2. Write a script that can auto generate the api files
3. Add additional sections
    1. archetypes
    2. attributes
    3. core rules content pages