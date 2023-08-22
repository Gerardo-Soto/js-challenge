const frames = [
    '/home/gerard/Downloads/marcos/ready_Horizon.png',
    '/home/gerard/Downloads/marcos/marco_plateado.png',
    '/home/gerard/Downloads/marcos/Cuadro_metal_ready.png',
    '/home/gerard/Downloads/marcos/cuadro_dorado_2.png',
    '/home/gerard/Downloads/marcos/cuadro_dorado.png',
    
];

function changeFrame(number) {
    console.log(`change frame ${number}`);
    const staticDiv = document.getElementById('static-div');

    staticDiv.style.backgroundImage = `url(${frames[number]})`;

};
