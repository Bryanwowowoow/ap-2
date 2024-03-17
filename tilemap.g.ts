// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100004040404040404030404040404040404030303040303030304040303040404040404030404040404040404030303030404030303030303040303040403040304040304040404040404030404030403040403040403030403040304030304030403030404030404030403040303040303040404040304040304030304030404040404030403030403040403040304040404030303040304040404030403030404040304030403030403040304040304040403040304040304030404040303030404030403040404040303030404040404040404040404040404030404040404040304040303040404040303030303030401040404030303030303020404040404`, img`
. . . . . . . 2 . . . . . . . . 
2 2 2 . 2 2 2 2 . . 2 2 . . . . 
. . 2 . . . . . . . . 2 2 2 2 . 
. 2 2 2 2 2 2 . 2 2 . . 2 . 2 . 
. 2 . . . . . . . 2 . . 2 . 2 . 
. 2 . . 2 2 . 2 . 2 . . 2 . 2 . 
2 2 . . 2 . . 2 . 2 . . 2 . 2 2 
. . . . 2 . . 2 . 2 2 . 2 . . . 
. . 2 . 2 2 . 2 . . 2 . 2 . . . 
. 2 2 2 . 2 . . . . 2 . 2 2 . . 
. 2 . 2 . 2 2 . 2 . 2 . . 2 . . 
. 2 . 2 . . 2 . 2 . . . 2 2 2 . 
. 2 . 2 . . . . 2 2 2 . . . . . 
. . . . . . . . . 2 . . . . . . 
2 . . 2 2 . . . . 2 2 2 2 2 2 . 
2 . . . 2 2 2 2 2 2 . . . . . . 
`, [myTiles.transparency16,sprites.builtin.brick,sprites.dungeon.chestClosed,sprites.builtin.oceanDepths4,sprites.builtin.oceanDepths1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
