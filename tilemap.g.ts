// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level0":
            case "level1":return tiles.createTilemap(hex`0a0008000202020202020202020202030101010101010102020101010101010101020201010101010101010202010101010101010102020101010101010101020204010101010101010202020202020202020202`, img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tileDarkGrass1,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.collectibleInsignia], TileScale.Sixteen);
            case "sky and ground":
            case "level3":return tiles.createTilemap(hex`1000100001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101030101010101010101010101010101030101010101010101010101010101030101010101010106010101010101010101010101010103030301010101030303010101010503030303030101010101010101010103030303030303010101010101010103030303030303030303030303030303030303`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . 2 . . . . 
. . . . . . . . . . 2 . . . . . 
. . . . . . . . . 2 . . . . . . 
. . . . . . . . . . . . . . . . 
2 2 2 . . . . 2 2 2 . . . . . 2 
2 2 2 2 . . . . . . . . . . 2 2 
2 2 2 2 2 . . . . . . . . 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,sprites.castle.tileGrass1,myTiles.tile3,sprites.builtin.forestTiles0,sprites.builtin.forestTiles8], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "sky":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
