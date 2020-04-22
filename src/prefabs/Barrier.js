class Barrier extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        //describe the class' variables when constructed
        
        // add object to existing scene
        scene.add.existing(this); //add to existing scene, displayList, updateList
    }
}