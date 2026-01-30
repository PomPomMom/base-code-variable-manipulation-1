namespace SpriteKind {
    export const points = SpriteKind.create()
}
function _6_Interacting_with_background () {
    _5_Events()
    tiles.setCurrentTilemap(tilemap`level0`)
}
function _2_Variable_Integers () {
    num1 = 0
    numStr = "0"
    num2 = 1
    num3 = 2
    num4 = 10
    num5 = 60
    num6 = 80
    buffet = sprites.create(assets.image`Buffet`, SpriteKind.Player)
    buffet.setPosition(num1, num1)
    buffet.setVelocity(num4, num4)
}
function _4_Changing_Properties_and_Values () {
    _2_Variable_Integers()
    buffet.setVelocity(num1, 0)
    buffet.setPosition(80, 60)
    buffet.setScale(num4, ScaleAnchor.Top)
    buffet.startEffect(effects.spray)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.points, function (sprite, otherSprite) {
    info.changeScoreBy(1)
})
function _1_Variable_Madlibs () {
    name1 = "Benny"
    name2 = "Ziggy"
    name3 = "Penny"
    animal1 = "tiger"
    animal2 = "horse"
    animal3 = "bird"
    noun1 = "apple"
    noun2 = "rope"
    noun3 = "flashlight"
    place1 = "street"
    place2 = "tree"
    place3 = "dark"
    game.showLongText("One day, " + name2 + " decided to draw a " + noun2 + ". Everyone in the " + place2 + " was surprised when it turned into a " + animal2 + "!", DialogLayout.Center)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    speed = game.askForNumber("Between 10 and 150, how fast should I go?")
    controller.moveSprite(goodGuy, speed, speed)
    goodGuy.setPosition(80, 60)
})
function _3_Motion_Properties () {
    _2_Variable_Integers()
    buffet.setPosition(num6, num5)
    buffet.x += num4
    buffet.y += num1
    buffet.vx = num1
    buffet.vy = num1
    buffet.ax = num1
    buffet.ay = num1
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`transparency16`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`sky and ground`)
})
function _5_Events () {
    scene.setBackgroundImage(assets.image`Desert`)
    goodGuy = sprites.create(assets.image`bird`, SpriteKind.Player)
    scene.cameraFollowSprite(goodGuy)
    controller.moveSprite(goodGuy)
    info.setScore(0)
    badGuy = sprites.create(assets.image`tiger`, SpriteKind.Enemy)
    badGuy.setPosition(100, 50)
    regGuy = sprites.create(assets.image`Beardo`, SpriteKind.Food)
    regGuy.setPosition(100, 100)
    notAGuy = sprites.create(assets.image`pointstar`, SpriteKind.points)
    notAGuy.setPosition(100, 5)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    goodGuy.sayText(animal1, 2000, true)
})
let notAGuy: Sprite = null
let regGuy: Sprite = null
let badGuy: Sprite = null
let goodGuy: Sprite = null
let speed = 0
let place3 = ""
let place2 = ""
let place1 = ""
let noun3 = ""
let noun2 = ""
let noun1 = ""
let animal3 = ""
let animal2 = ""
let animal1 = ""
let name3 = ""
let name2 = ""
let name1 = ""
let buffet: Sprite = null
let num6 = 0
let num5 = 0
let num4 = 0
let num3 = 0
let num2 = 0
let numStr = ""
let num1 = 0
_1_Variable_Madlibs()
