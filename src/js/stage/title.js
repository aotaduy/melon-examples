import {BitmapText, game, Stage} from 'melonjs';
import MenuButton from "../renderables/MenuButton";
import {levels} from "../../levels";

class TitleScreen extends Stage {
    /**
     *  action to perform on state change
     */
    onResetEvent() {
        game.world.addChild(new BitmapText(game.viewport.width / 2 - 100, 10, {
            text: 'EXAMPLES', font: "PressStart2P",
            size: 0.8,
        }))
        levels.forEach(level => this.addLevel(level))

    }

    /**
     *  action to perform when leaving this screen (state change)
     */
    onDestroyEvent() {
        ; // TODO
    }

    addLevel(level) {
        game.world.addChild(new MenuButton(game.viewport.width / 2 - 100, 50 * (level.index + 1), {
            text: level.name,
            state: level.state
        }))
    }
};

export default TitleScreen;
