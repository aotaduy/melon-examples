import { state, UITextButton} from 'melonjs';

class MenuButton extends UITextButton {

    /**
     * constructor
     */
    state
    constructor(x, y, settings) {
        // call the parent constructor
        const defaultSettings = {
            font : "DogicaPixel",
            size : 1.0,
            borderWidth: 300
        }
        super(x, y, {...defaultSettings, ...settings});
        this.state = settings.state
    }

    onClick(){
        state.change(this.state);
    }


};

export default MenuButton;
