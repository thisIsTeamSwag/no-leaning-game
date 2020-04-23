class Faller extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame); //sends data given into Phaser.GameObjects.Sprite, which is a js file
        //describe the class' variables when constructed
        scene.add.existing(this); //add to existing scene, displayList, updateList

        this.isIncSpeed = false;
        this.isDecSpeed = false;

    }

    create() {

    }

    update() {
       
        //Controls
        if (keyLEFT.isDown && this.x > stageLeftBound) {
            this.x -= 5 * resistance_keyLEFT;
        }
        if (keyRIGHT.isDown && this.x < stageRightBound) {
            this.x += 5 * resistance_keyRIGHT;
        }
        if (keyUP.isDown && this.y > stageUpperBound) {
            this.y -= 5 * resistance_keyUP;
        }
        if (keyDOWN.isDown && this.y < stageLowerBound) {
            this.y += 5 * resistance_keyDOWN;
        }
    }

    reset() {

    }
}