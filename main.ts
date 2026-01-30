namespace SpriteKind {
    export const points = SpriteKind.create()
}
let numInteger = 1
let numString = "1"
let name1 = "Benny"
let name2 = "Ziggy"
let name3 = "Penny"
let animal1 = "tiger"
let animal2 = "horse"
let animal3 = "bird"
let noun1 = "apple"
let noun2 = "rope"
let noun3 = "flashlight"
let place1 = "street"
let place2 = "tree"
let place3 = "dark"
game.showLongText("One day, " + name2 + " decided to draw a " + noun2 + ". Everyone in the " + place2 + " was surprised when it turned into a " + animal2 + "!", DialogLayout.Center)
let princess = sprites.create(img`
    . . . . . . 5 . 5 . . . . . . . 
    . . . . . f 5 5 5 f f . . . . . 
    . . . . f 1 5 2 5 1 6 f . . . . 
    . . . f 1 6 6 6 6 6 1 6 f . . . 
    . . . f 6 6 f f f f 6 1 f . . . 
    . . . f 6 f f d d f f 6 f . . . 
    . . f 6 f d f d d f d f 6 f . . 
    . . f 6 f d 3 d d 3 d f 6 f . . 
    . . f 6 6 f d d d d f 6 6 f . . 
    . f 6 6 f 3 f f f f 3 f 6 6 f . 
    . . f f d 3 5 3 3 5 3 d f f . . 
    . . f d d f 3 5 5 3 f d d f . . 
    . . . f f 3 3 3 3 3 3 f f . . . 
    . . . f 3 3 5 3 3 5 3 3 f . . . 
    . . . f f f f f f f f f f . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
princess.setPosition(0, 60)
princess.setVelocity(50, 0)
princess.startEffect(effects.spray)
