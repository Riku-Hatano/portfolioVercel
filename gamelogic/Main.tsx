import { useRef, useEffect } from "react";
import { blockSetting, fieldSetting, speedSetting } from "./setting";
import BlockClass from "./classes/BlockClass";
import FieldClass from "./classes/FieldClass";
import GameStatus from "./status";
import KeyHandler from "./utils/KeyHandler";

let canvas: any; //to export 

const Main = () => {
    const ref = useRef<HTMLCanvasElement>(null);
    const block = new BlockClass(blockSetting.size, blockSetting.initialX, blockSetting.initialY, GameStatus.blockCounter);
    const field = new FieldClass(fieldSetting.width, fieldSetting.height);
    GameStatus.block = block.returnAll();
    GameStatus.field = field.returnAll();
    
    useEffect(() => {
        const tetris = ref.current;
        const ctx: CanvasRenderingContext2D = tetris.getContext("2d");
        canvas = ctx; //to export the refference of canvas created at this file.
        ctx.fillRect(block.positionX, block.positionY, block.size, block.size);
        document.addEventListener("keydown", KeyHandler);
    }, []);
    return (
        <>
            <canvas id="tetris" width={fieldSetting.width} height={fieldSetting.height} ref={ref} style={{backgroundColor: "gainsboro"}}></canvas>
        </>
    )
}

export { canvas }
export default Main;