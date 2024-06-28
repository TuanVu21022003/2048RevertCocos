// // Learn TypeScript:
// //  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
// //  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
// //  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
// //  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, Component, Label, Size, UITransform, Vec2 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Cell')
export class Cell extends Component {
//    // LIFE-CYCLE CALLBACKS:
//    // onLoad () {}
    @property(Label)
    label: Label
    start() {
        this.getComponent(UITransform).setContentSize(new Size(80, 80))
        // this.label.string = ''
        // this.node.color = cc.color(237, 224, 200, 1)
    }
//    // update (dt) {}
}


/**
 * Note: The original script has been commented out, due to the large number of changes in the script, there may be missing in the conversion, you need to convert it manually
 */
// // Learn TypeScript:
// //  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
// //  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
// //  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
// //  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
// 
// const { ccclass, property } = cc._decorator;
// 
// @ccclass
// export default class NewClass extends cc.Component {
// 
//     // LIFE-CYCLE CALLBACKS:
// 
//     // onLoad () {}
//     @property(cc.Label)
//     label: cc.Label
// 
//     start() {
//         this.node.width = 80
//         this.node.height = 80
//         // this.label.string = ''
//         // this.node.color = cc.color(237, 224, 200, 1)
//     }
// 
//     // update (dt) {}
// }
