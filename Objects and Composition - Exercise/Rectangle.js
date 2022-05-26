function solve(width, height, color) {
    let rect = {
        width,
        height,
        color: color[0].toUpperCase() + color.slice(1),
        calcArea() {
            return width * height;
        }
    };

    return rect;
}
