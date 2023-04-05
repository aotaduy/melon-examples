import {Stage, game, ColorLayer, BitmapText, Tween, Vector2d, input} from 'melonjs';
import RotatingCar from "./rotatingCar";

class RotatingStage extends Stage {
    /**
     *  action to perform on state change
     */car
    onResetEvent() {
        // add a gray background to the default Stage
        this.car = new RotatingCar(300,300);
        game.world.addChild(this.car);

    }
    update(dt) {
        this.car.currentAngle = this.car.angleTo(new Vector2d(input.pointer.gameX, input.pointer.gameY) ) + 3.14 / 2
        return super.update(dt)
    }
};

export default RotatingStage;
