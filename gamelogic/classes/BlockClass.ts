class BlockClass {
    size: number;
    initialX: number;
    initialY: number;
    positionX: number;
    positionY: number;
    id: number;
    isFixed: boolean;
    shape: string;
    blockState: [];
    constructor(size: number, initialX: number, initialY: number, id: number, shape: string) {
        this.size = size,
        this.initialX = initialX,
        this.initialY = initialY,
        this.positionX = initialX,
        this.positionY = initialY,
        this.id = id,
        this.isFixed = false,
        this.shape = shape
    }
    returnAll() {
        return {
            size: this.size,
            initialX: this.initialX,
            initialY: this.initialY,
            positionX: this.positionX,
            positionY: this.positionY,
            id: this.id,
            isFixed: this.isFixed,
            shape: this.shape
        }
    }
}

export default BlockClass;