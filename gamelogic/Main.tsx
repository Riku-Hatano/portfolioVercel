import { useRef, useEffect } from "react";
import { blockSetting, fieldSetting, speedSetting } from "./setting";
import BlockClass from "./classes/BlockClass";
import FieldClass from "./classes/FieldClass";
import GameStatus from "./status";
import KeyHandler from "./utils/KeyHandler";

const Main = () => {
    const ref = useRef<HTMLCanvasElement>(null);
    const block = new BlockClass(blockSetting.size, blockSetting.initialX, blockSetting.initialY);
    const field = new FieldClass(fieldSetting.width, fieldSetting.height);
    GameStatus.block = block.returnAll();
    GameStatus.field = field.returnAll();
    
    useEffect(() => {
        const tetris = ref.current;
        const ctx: CanvasRenderingContext2D = tetris.getContext("2d");

        const drawRect = () => {
            ctx.clearRect(0, 0, field.width, field.height);
            ctx.fillRect(block.positionX, block.positionY, block.size, block.size);
        }
        drawRect();
        // document.addEventListener("keydown", ((e) => KeyHandler(e, ctx)));
        document.addEventListener("keydown", KeyHandler);
    }, []);
    return (
        <>
            <canvas id="tetris" width={fieldSetting.width} height={fieldSetting.height} ref={ref} style={{backgroundColor: "gainsboro"}}></canvas>
        </>
    )
}

export default Main;