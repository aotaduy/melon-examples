import PlayScreen from "./js/stage/play";
import {state} from "melonjs";
import RotatingStage from "./js/stage/rotation/rotation";
import TweenEasingStage from "./js/stage/tween/tween-easing-stage";

export const levels = [
    {
        name: 'play',
        class: PlayScreen
    },
    {
        name: 'Rotation',
        class: RotatingStage
    },
    {
        name: 'Tween Easing',
        class: TweenEasingStage
    }
] .map((each, index) => ({...each, index, state: state.USER + index}))
