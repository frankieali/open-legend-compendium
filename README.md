![Open Legend RPG Logo](https://openlegendrpg.com/assets/img/open_legend_lg_logo.png)

# Open Legend Core Rules Compendium
This project is focused on bringing the core rules of Open Lengend to [Roll20.net](https://www.roll20.net). A [compendium](https://wiki.roll20.net/Compendium) in Roll20 is a series of indexed and categorized webpages that can be browsed outside the VTT (Virtual Table Top), but can also be used within your games for quick rule searches and populating fields on your character sheets like equipment and feats via drag and drop capability. This project is following the [compendium guidelines](https://wiki.roll20.net/Building_Compendiums) posted by Roll20.

## How to build compendium JSON files

1. Clone this repository
2. Path into your repo directory from terminal/command prompt
3. `npm install` to set up modules
4. `npm install -g ./` to install the app from local source code
5. Use `OLC b` (OLC = Open Legend Compendium) (b = build) to kick off the build prompts
    1. Select your category to build
    2. Select your source material to include
    3. Files will be saved to `./dist/` directory
 
## Changelog

#### April 25th 2019
- Implemented CLI build system using Node and [Commander](https://github.com/tj/commander.js)
- Can build one category or the entire compendium 
- Added ability to support multiple source books/folders (Testing with one Amaurea's Dawn item)
- api folder removed now that files can be built


#### April 19th 2019
- Updating some of the object key names for consistency
- Fixed markup inside string objects that are parsed using `JSON.parse()`
- Renamed `Mounts & Vehicles` to `Transportation` for simplicity

#### May 30th 2018
- Big refactor of data to better align with Roll20 examples
- Renamed many keys after discovering that keys withing the `data` object are used as labels in the Attribute block
- Prefixed other keys that should remain hidden from the Attribute block with `data-*`
- Formatted data within `data-*` values so they will be parsed properly by Roll20's `compendium.js` script
- Converted a lot of arrays to comma seperated values in order to flatten out data
- Converted a lot of objects to unique key entries in order to flatten out data

#### May 26th 2018
-  Initial alpha release of core rules
-  Sections included
    -  Armor
    -  Banes
    -  Boons
    -  Feats
    -  Items
    -  Transportation
    -  Perks
    -  Flaws
    -  Properties
    -  Weapons

-  `api` folder includes consolodated files of all the entries in each section. This is for quickly loading the data into a NoSQL database such as MongoDB. These files will have to be updated as other entries in the compendium are updated.

## Status
As of today, (May 30th 2018) the Roll20 team has notified me that they are currntly not onboarding new compendium creators. I'm hoping to get this compendium as close to their requirements as possible so when they are ready to accepted community generated compediums we'll be all ready to upload.

## TODOs
1. ~~Double check all data before beta release~~
2. ~~Write a script that can auto generate the api files~~
3. Add additional sections
    1. archetypes
    2. attributes
    3. core rules content pages
4. Sort data by name when multiple sources selected