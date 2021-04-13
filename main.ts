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
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdaaaaaaaaaaaaaad666666666666666dd7777777777777dbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdaaaaaaaaaaaaaaddd666666666666666d777777777777dbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddaaaaaaaaaaaaaad7ddd66666666666666d77777777777dbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdaaaaaaaaaaaaaaad7777d666666666666ddddd77777777ddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdaaaaaaaaaaaaaad777777d666666666ddaaaadddd777dd9dbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdaaaaaaaaaaaaad77777777d666666ddaaaaaaad99ddd999dbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddaaaaaaaaaaad7777777777d666ddaaaaaaaaadd9999999dbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddaaaaaaaaad7777777777d6ddaaaaaaaaaaaaad999999dbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbd99dddaaaaaad77777777777ddaaaaaaaaaaaaaaaad99999dbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbd999dddaaadd7777777777dddaaaaaaaaaaaaaaaaad99999dbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbd999999ddd77777777777d66ddaaaaaaaaaaaaaaaad99999dbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbd9999999d7777777777dd66666daaaaaaaaaaaaaad999999dbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbd99999999d77777777d66666666daaaaaaaaaaaad9999999dbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbd99999999dd777777d666666666daaaaaaaaaaad99999999dbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbd999999999d77777d6666666666daaaaaaaaadd999999999dbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbd9999dddddd7777d66666666666dddddddddd66d9999999dbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddd77777d77dd666666666666d9999d6666666dd99999dbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdd77777777dddddddddddd6d66d9999dd666666666dd999dbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbd777777777daaaaaaaaaadddd999999d6666666666dd99dbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdd77777777daaaaaaaaaaadd9999999d66666666666ddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbd77777777daaaaaaaaaad999999999d666666666666dddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdd7777777daaaaaaaaaad999999999d666666666666ddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbd7777777daaaaaaaaaad999999999d666666666666dbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdd777777daaaaaaaaaad999999999d66666666666ddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdd77777daaaaaaaaaad99999999dad66666666dddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdd777daaaaaaaaaad999999999dad66666666dbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdd7daaaaaaaaaaad99999999daaad666666dbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddaaaaaaaaaaaaad9999999daaadd6666ddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddaaaaaaaaaaaad9999999daaaaadd6ddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddaaaaaaaaaaad999999daaaaaaaadddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddaaaaaaaaad999999daaaaaadddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddaaaaaaad999999daaaadddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddaaaad999999daddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
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
