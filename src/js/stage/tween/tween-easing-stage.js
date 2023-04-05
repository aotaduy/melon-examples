import {Stage, game, Tween, Container, BitmapText, UITextButton} from 'melonjs';
import RotatingCar from "../rotation/rotatingCar";

class TweenEasingStage extends Stage {
    /**
     *  action to perform on state change
     */
    createdTweens = []
    cars = []
    onResetEvent() {
        game.world.addChild(this.addControlButton('start', 50, () => this.startTweens()))
        game.world.addChild(this.addControlButton('stop', 100, () => this.stopTweens()))
        this.tweenEasings().forEach((tweenType, index) => {
            game.world.addChild(this.createContainer(tweenType, index))
        })
    }

    addControlButton(text, y , action) {
        const button = new UITextButton(0, y, {
            font: "PressStart2P", text: text,
            size: 1.0,
            borderWidth: 120
        });
        button.onClick = action
        return button;
    }

    tweenEasings() {
        const answer = [];

        Object.keys(Tween.Easing)
            .map(each => ({name: each, easing: Tween.Easing[each]}))
            .forEach(tweenType =>
                Object.keys(tweenType.easing)
                    .map(each => ({name: tweenType.name + each, tween: tweenType.easing[each]}))
                    .forEach(tween => answer.push(tween))
            );
        return answer
    }

    createContainer(tweenType, index) {
        const columns = 8;
        const rowHeight = 200;
        const columnWidth = 150;
        const container = new Container(
            150 + columnWidth * (index % columns) ,
            Math.floor(index / columns)  * rowHeight + 50,
            columnWidth - 10,
            rowHeight - 10)
        const text = new BitmapText(0,0,{
            text: tweenType.name, font: "DogicaPixel",
            size: 0.8,
            fillStyle: '#FF0'
        })
        const car = new RotatingCar(50, 100);
        container.addChild(text)
        container.addChild(car)
        this.cars.push({car, tweenType})
        car.isKinematic = true
        container.isKinematic = true
        text.isKinematic = true
        return container
    }

    addTween(car, tweenType) {
        car.currentAngle = 0;
        const tween = new Tween(car).to({
            currentAngle: 3.14
        }, {duration: 3000, easing: tweenType.tween});
        this.createdTweens.push(tween)
        tween.start()
        return tween
    }
    startTweens() {
        this.createdTweens = this.cars.map(({car, tweenType}) => this.addTween(car, tweenType))
    }
    stopTweens() {
        this.createdTweens.forEach(each => each.stop())
    }

};

export default TweenEasingStage;
