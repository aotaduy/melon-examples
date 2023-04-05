import {Entity, input, Vector2d} from 'melonjs';

const zero = new Vector2d(0,0)
class RotatingCar extends Entity {

    /**
     * constructor
     */
    currentAngle = 0;
    previuosAngle = 0;
    constructor(x, y, settings) {
        // call the parent constructor
        super(x, y , {image: 'car', width: 71, height: 131});
        this.body.ignoreGravity = true
    }

    /**
     * update the entity
     */
    update(dt) {
        // change body force based on inputs
        //....
        // call the parent method
        this.rotate( this.currentAngle - this.previuosAngle );
        this.renderable.rotate( this.currentAngle - this.previuosAngle);
        this.previuosAngle = this.currentAngle;
        super.update(dt)
        return true;
    }

   /**
     * colision handler
     * (called when colliding with other objects)
     */
    onCollision(response, other) {
        // Make all other objects solid
        return true;
    }
};

export default RotatingCar;
