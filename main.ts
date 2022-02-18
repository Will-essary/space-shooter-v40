controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 2 2 2 . 2 . 2 
        . . . . . . . 2 2 2 2 2 2 . 2 . 
        . . . . . . . 2 2 2 2 2 . 2 . 2 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 50, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    projectile.destroy()
    otherSprite.destroy()
    info.changeScoreBy(100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.fire, 500)
    scene.cameraShake(100, 500)
    music.bigCrash.play()
})
let enemy_ship: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
effects.starField.startScreenEffect()
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . 8 8 8 2 
    . . . . . . . . . . 8 8 8 8 8 2 
    . 6 . . . . . . 8 8 8 8 8 8 8 2 
    . 6 . . . 8 8 8 8 8 8 8 8 8 8 2 
    . 6 . 8 8 7 7 8 8 8 8 8 8 8 8 2 
    . 6 8 8 8 8 7 7 8 8 8 8 8 8 8 . 
    . 6 6 6 8 8 8 7 7 8 8 8 8 8 8 2 
    . 6 6 6 8 8 8 8 7 7 8 8 8 8 8 2 
    . 6 6 6 8 8 8 8 8 8 7 7 7 8 8 2 
    . 6 8 8 8 8 8 8 8 8 8 8 7 7 8 2 
    . 6 8 8 8 8 8 8 8 8 8 8 8 8 7 2 
    . 6 . . . . . . . . . . . . . . 
    . 6 . . . . . . . . . . . . . . 
    . 6 . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
info.setLife(3)
game.onUpdateInterval(2000, function () {
    enemy_ship = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . 2 2 2 2 2 6 . 
        . . . . . . . . 2 2 2 2 2 2 6 8 
        . . . . . . . 2 2 2 2 2 2 2 6 8 
        . . . . . . 2 2 2 2 2 2 2 2 2 8 
        . . . . . . 2 2 2 2 2 2 2 2 2 8 
        . . . . . . 2 2 2 2 2 2 2 2 2 8 
        . . . . . . 2 2 2 2 2 2 2 2 2 8 
        . . . . . . 2 2 2 2 2 2 2 2 2 8 
        . . . . . . . 2 2 2 2 2 2 2 6 8 
        . . . . . . . . 2 2 2 2 2 2 6 . 
        . . . . . . . . . 2 2 2 2 2 6 . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    enemy_ship.x = scene.screenWidth()
    enemy_ship.vx = -20
    enemy_ship.y = randint(10, scene.screenHeight() - 0)
})
