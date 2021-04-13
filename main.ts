namespace SpriteKind {
    export const e = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.x = 60
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.x = 30
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.x = 130
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy(effects.warmRadial, 500)
})
sprites.onOverlap(SpriteKind.e, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeScoreBy(-1)
    otherSprite.destroy(effects.warmRadial, 500)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.x = 100
})
let projectile: Sprite = null
let drop_spot = 0
let mySprite: Sprite = null
info.startCountdown(15)
mySprite = sprites.create(img`
    . . . . . . 5 5 5 5 . . . . . . 
    . . . . . . d d d 5 . . . . . . 
    . . . . . d d f d 5 . . . . . . 
    . . . . . . 1 d d . . . . a . . 
    . . . . . . 6 d 6 . . . b a . . 
    . . . d d 6 2 2 2 6 d b a . . . 
    . . . d . 6 2 2 2 6 b a d . . . 
    . . . d d d d a b a d . d . . . 
    . . . . . a d d a 6 . d . . . . 
    . . . . a a b a a 6 . . . . . . 
    . . . . a b a 8 8 6 . . . . . . 
    . . . . . . a . 8 . . . . . . . 
    . . . . . . 8 . 8 8 . . . . . . 
    . . . . . . 8 . . 8 . c . . . . 
    . . . . . . 8 . . 8 8 c . . . . 
    . . . . . c c . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(80, 100)
let fat_head = sprites.create(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `, SpriteKind.e)
fat_head.setPosition(92, 125)
scene.setBackgroundImage(img`
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddd111111111111111ddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddd111111111111111ddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddbddd11111111111111dddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddbbbbd111111111111dddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddbbbbbbd111111111ddbbbbddddddddd1dbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddbbbbbbbbd111111ddbbbbbbbd11ddd111dbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddbbbbbbbbbbd111ddbbbbbbbbbdd1111111dbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddbbbbbbbbbbd1ddbbbbbbbbbbbbbd111111dbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbd11ddddddddddbbbbbbbbbbbddbbbbbbbbbbbbbbbbd11111dbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbd111ddddddddbbbbbbbbbbdddbbbbbbbbbbbbbbbbbd11111dbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbd111111dddbbbbbbbbbbbdddddbbbbbbbbbbbbbbbbd11111dbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbd1111111dbbbbbbbbbbddddddddbbbbbbbbbbbbbbd111111dbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbd11111111dbbbbbbbbddddddddddbbbbbbbbbbbbd1111111dbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbd11111111ddbbbbbbdddddddddddbbbbbbbbbbbd11111111dbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbd111111111dbbbbbddddddddddddbbbbbbbbbdd111111111dbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbd1111ddddddbbbbddddddddddddddddddddddddd1111111dbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddbbdddddddddddddddbbbbdddddddddd11111dbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddddddddbbbbddddddddddddd111dbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddd1111111111ddddbbbbbbddddddddddddd11dbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddd11111111111ddbbbbbbbddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddd1111111111dbbbbbbbbbddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddd1111111111dbbbbbbbbbdddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddd1111111111dbbbbbbbbbddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddd1111111111dbbbbbbbbbddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddd1111111111dbbbbbbbbd1ddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddd1111111111dbbbbbbbbbd1ddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddd11111111111dbbbbbbbbd111ddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdd1111111111111dbbbbbbbd111ddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdd111111111111dbbbbbbbd11111dddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdd11111111111dbbbbbbd11111111dddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddd111111111dbbbbbbd111111dddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddd1111111dbbbbbbd1111dddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddd1111dbbbbbbd1ddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbcbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbdddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbccbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbcccccccbbbccbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbcbccccbbbcccbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbccccbbbbbbbbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbcccccccbbbccbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbccccbccbbcccbbbbbbbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbccccccbbbcccbbbbbbbbbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbccbcccccbbccccbbbbbbbcccccbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccbbbbbbcccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccbbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbcbbbbbbbbbbcccccccccccccccccccccbbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbcccbbbbbbbbbbbcccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbccbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbccbbbbbbbbbbccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbccbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbcccbbbbbbbbbccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbcccbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbcccccbbbbbbcccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbccccbcccccbbbbbbbbbbbbbbbb
    bbbbbbbbbbbcccbbbbbccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbccccbbccbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbcccbbbccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbccbbccccccbbbbbbbbbbbbbbb
    bbbbbbbbbbccccbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccbbbbbbccbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbcccccccccbbbbbbbbbcbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbcccbbbbccccccbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbccccbbbccbbbbbbbbcbbbbbbbb
    bbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbccccbbbbbccccbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbcccccbbcbbbbbbbbccccbbbbbb
    bbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbcccbbbbcccccbbcccbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbcccccccccccccbcbbbbbbbbbcbbbbbbbb
    bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbccccccbccccccccbccccbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccbbbbccccbbbbbbb
    bbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbccccccbccccccccccbccbbbbbbbbbbbbcccbbbbbbbbbbbbbcbbbbbcccccbbcccccccccccccbbbcccbbbbbbb
    bbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbccccccbbccccbbbbcccbbbbbbbbbbcccccbbbbbbbbbbbbcbbbbccccccccccccccccccccccbbcccccbbbbb
    bbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbccccccbbccccccbbcccbbbbbbbbbbcccccccbbbbbbbbbbbccbbbbbccccccccccccccccccccccccccbbbbbb
    bbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbcccccccccccccccccccccccbbbbbbbcbccccbbbbbbbbbbbbccbbbbccccccccccccccccccccccccccbbbbbbb
    bbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbcccccccccccccccccccccccbbbbbcccccbbbbbbbbbbbcccbbbbccccccccccccccccccccccccccbbbbbbb
    bbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbccccccccccccccccccccccccccbbcccccccbbbbbbbbbbbcbbbbccccccccccccccccccccccccccccbbbbbb
    bbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbccccccccccccccccccccccccccccccbccccbcbbbbbbbbbbccccbbccccccccccccccccccccccccccccccbbbb
    bccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbcccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbccbbcccccccccccccccccccccccccccccccccbb
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbcccccccccccccccccccccccccccccccccccccccbbbbbbbbbccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbcccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc
    cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc
    cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc
    cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc
    cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc
    cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc
    cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc
    cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc
    cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc
    cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc
    cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc
    `)
effects.confetti.startScreenEffect()
game.onUpdateInterval(500, function () {
    drop_spot = randint(0, 3)
    if (drop_spot == 0) {
        projectile = sprites.createProjectileFromSide(img`
            . . . . 3 3 3 3 3 3 3 3 . . . . 
            . . . 3 3 3 3 1 1 3 3 3 3 . . . 
            . . 3 3 3 3 3 1 1 3 3 3 3 3 . . 
            . 3 3 3 3 3 3 1 1 3 3 3 3 3 3 . 
            3 3 3 3 3 3 3 1 1 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 1 1 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 1 1 3 3 3 3 3 3 3 
            3 3 3 1 3 3 3 1 1 3 3 3 1 3 3 3 
            3 3 3 3 1 3 3 1 1 3 3 1 3 3 3 3 
            3 3 3 3 3 1 3 1 1 3 1 3 3 3 3 3 
            3 3 3 3 3 3 1 1 1 1 3 3 3 3 3 3 
            3 3 3 3 3 3 3 1 1 3 3 3 3 3 3 3 
            . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
            . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
            . . . 3 3 3 3 3 3 3 3 3 3 . . . 
            . . . . 3 3 3 3 3 3 3 3 . . . . 
            `, 0, 100)
        projectile.x = 100
    } else if (drop_spot == 1) {
        projectile = sprites.createProjectileFromSide(img`
            . . . . 3 3 3 3 3 3 3 3 . . . . 
            . . . 3 3 3 3 3 3 3 3 3 3 . . . 
            . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
            . 3 3 3 3 3 3 1 1 3 3 3 3 3 3 . 
            3 3 3 3 3 3 1 1 1 1 3 3 3 3 3 3 
            3 3 3 3 3 1 3 1 1 3 1 3 3 3 3 3 
            3 3 3 3 1 3 3 1 1 3 3 1 3 3 3 3 
            3 3 3 1 3 3 3 1 1 3 3 3 1 3 3 3 
            3 3 3 3 3 3 3 1 1 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 1 1 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 1 1 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 1 1 3 3 3 3 3 3 3 
            . 3 3 3 3 3 3 1 1 3 3 3 3 3 3 . 
            . . 3 3 3 3 3 1 1 3 3 3 3 3 . . 
            . . . 3 3 3 3 1 1 3 3 3 3 . . . 
            . . . . 3 3 3 3 3 3 3 3 . . . . 
            `, 0, 100)
        projectile.x = 60
    } else if (drop_spot == 2) {
        projectile = sprites.createProjectileFromSide(img`
            . . . . 3 3 3 3 3 3 3 3 . . . . 
            . . . 3 3 3 3 3 3 3 3 3 3 . . . 
            . . 3 3 3 3 3 3 1 3 3 3 3 3 . . 
            . 3 3 3 3 3 3 3 3 1 3 3 3 3 3 . 
            3 3 3 3 3 3 3 3 3 3 1 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 1 3 3 3 3 
            3 3 1 1 1 1 1 1 1 1 1 1 1 3 3 3 
            3 3 1 1 1 1 1 1 1 1 1 1 1 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 1 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 1 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 1 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 1 3 3 3 3 3 3 3 
            . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
            . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
            . . . 3 3 3 3 3 3 3 3 3 3 . . . 
            . . . . 3 3 3 3 3 3 3 3 . . . . 
            `, 0, 100)
        projectile.x = 130
    } else if (drop_spot == 3) {
        projectile = sprites.createProjectileFromSide(img`
            . . . . 3 3 3 3 3 3 3 3 . . . . 
            . . . 3 3 3 3 3 3 3 3 3 3 . . . 
            . . 3 3 3 3 3 3 1 3 3 3 3 3 . . 
            . 3 3 3 3 3 3 1 3 3 3 3 3 3 3 . 
            3 3 3 3 3 3 1 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 1 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 1 1 1 1 1 1 1 1 1 1 3 3 
            3 3 3 3 1 1 1 1 1 1 1 1 1 1 3 3 
            3 3 3 3 3 1 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 1 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 1 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 1 3 3 3 3 3 3 3 
            . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
            . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
            . . . 3 3 3 3 3 3 3 3 3 3 . . . 
            . . . . 3 3 3 3 3 3 3 3 . . . . 
            `, 0, 100)
        projectile.x = 30
    }
})
