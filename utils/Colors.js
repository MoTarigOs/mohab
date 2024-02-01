const colors = [
    ['Main', 'blue'],
    ['Secondary', 'blue'],
    ['Main', 'blue'],
    ['Main', 'blue'],
    ['Main', 'blue']
];

export const getColorName = (desired) => {

    let desiredColor= '';

    const searchColor = desired.toUpperCase().replaceAll('-', ' ');

    console.log("searchColor: ", searchColor);

    for (let i = 0; i < colors.length; i++) {
        if(colors[i][0].toUpperCase() === searchColor){
            desiredColor = colors[i][1];
            break;
        }
    }

    return desiredColor;

};