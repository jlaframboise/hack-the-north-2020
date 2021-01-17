export const arrayMean = (arr) => {
    let sum = 0;
    arr.forEach( o => sum += o );
    return sum / arr.length;
}

// note, coords are from the top right
export const getHandCenter = (handData) => {
    let left = handData.multiHandLandmarks[0];
    let right = handData.multiHandLandmarks[1];

    let left_x_avg, left_y_avg;
    if (left){
        left_x_avg = arrayMean(left.map( (o) => o.x ));
        left_y_avg = arrayMean(left.map( (o) => o.y ));
    } else {
        left_x_avg = null;
        left_y_avg = null;
    }
    let right_x_avg, right_y_avg;
    if (right){
        right_x_avg = arrayMean(right.map( (o) => o.x )); 
        right_y_avg = arrayMean(right.map( (o) => o.y )); 
    } else {
        right_x_avg = null;
        right_y_avg = null;
    }

    return [[left_x_avg, left_y_avg], [right_x_avg, right_y_avg]]
}

export const camRatioToScreenPixels = (x, y) => {
    let xNew = 1.2*window.innerWidth - x * window.innerWidth*1.2;
    let yNew = 1.3*window.innerHeight * y   - 100;

    return [xNew, yNew];
}
