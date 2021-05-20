// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010101010101010101010101010101010203030303030304010101010101010108010101010101050101010101010101080101010101010501010101010101010801010101010105010101010101010108010101010101050101010101010101080101010101010501010101010101090a01010101010105010101010101010101010101010101050101010101010101010101010101010501010101010101010101010101010105010101010101010606060606060606070909090909090906060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606060606`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . 2 2 2 2 2 2 2 
2 . 2 2 2 2 2 2 . 2 2 2 2 2 2 2 
2 . 2 2 2 2 2 2 . 2 2 2 2 2 2 2 
2 . 2 2 2 2 2 2 . 2 2 2 2 2 2 2 
2 . 2 2 2 2 2 2 . 2 2 2 2 2 2 2 
2 . 2 2 2 2 2 2 . 2 2 2 2 2 2 2 
. . 2 2 2 2 2 2 . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tilePath1,sprites.castle.tilePath2,sprites.castle.tilePath3,sprites.castle.tilePath6,sprites.castle.tileDarkGrass2,sprites.castle.tilePath7,sprites.castle.tilePath4,sprites.castle.tilePath8,sprites.castle.tilePath9], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
