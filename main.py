@namespace
class SpriteKind:
    points = SpriteKind.create()
numInteger = 1
numString = "1"
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
game.show_long_text("One day, " + name2 + " decided to draw a " + noun2 + ". Everyone in the " + place2 + " was surprised when it turned into a " + animal2 + "!",
    DialogLayout.CENTER)
princess = sprites.create(img("""
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
        """),
    SpriteKind.player)
princess.set_position(0, 60)
princess.set_velocity(50, 0)
princess.start_effect(effects.spray)