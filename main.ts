let Blob = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . a a a a a . . . . . 
    . . . . a a a a a a a a a . . . 
    . . . a a a f a a a f a a . . . 
    . . a a a a f a a a f a a a . . 
    . a a a a a a a a a a a a a . . 
    a a a a a a a a a a a a a a a . 
    `, SpriteKind.Player)
controller.moveSprite(Blob)
