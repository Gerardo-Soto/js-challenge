
const principalVideos = Array.from({length: 39}, (_, i) => i + 1);
const celVideos = [];

const startNumVideos = Array.from({length: 10}, (_, i) => i + 1);
const startVideos = [];

const selectTagTitlesCel = [
    'dance',
    'priv-1',
    'priv-2',
    'OF',
    'tk-bkn',
    'tk-dance',
    'model-1',
];

renderButtons();
renderSelectTitlesCel();

document.getElementById("list").disabled = true;

//console.log(principalVideos);

function renderButtons(){
    const htmlButtons = principalVideos.map(video => {
        return `
<button class="buttonVideo" type="submit" id="button-video" data-id="${video}"><img width="200" height="100" src="../v/${video < 10 ? "0" : ""}${video}.JPG" /></button>
        `
    });

    const block = document.querySelector('#form-video');
    block.innerHTML = htmlButtons.join('');

    const myButton = document.querySelectorAll('#button-video');
    myButton.forEach(button => {
        button.addEventListener("click", (e) => {
            renderDiv();// get video cel selected

            const id = parseInt(button.getAttribute("data-id"));
            renderCelVideo(id);// render both videos

            renderTitle(id);
        });
    });


    /*
    Section Start video
    */
    const htmlButtonsStartVideos = startNumVideos.map(video => {
        return `
    <button class="buttonVideo" type="submit" id="button-startVideo" data-id="${video}"><img width="200" height="100" src="../spe/spe_${video < 10 ? "0" : ""}${video}.JPG" /></button>
        `
    });

    const sectionStartVideo = document.querySelector('#form-start');
    // add this list htmlButtonsStartVideo to this form-start
    sectionStartVideo.innerHTML = htmlButtonsStartVideos.join('');

    const newButton = document.querySelectorAll('#button-startVideo');
    newButton.forEach(button => {
        button.addEventListener("click", e => {
            renderDiv();// get video cel selected

            const id = parseInt(button.getAttribute("data-id"));
            renderCelVideo2(id);//////////////////////////////////////////    <- Fix this

            renderTitle(id);
        });
    });
}

function renderDiv(){
    // Get the cel video
    const select = document.querySelector('#videos-cel').value;
    
    const htmlVideos = `
    <p>valor: ${select}</p>
    `;

    //render 
    const container = document.querySelector('#render');
    container.innerHTML = htmlVideos;
}

function renderCelVideo(id){
    const celVideo = document.querySelector('#celVideo');

    const celVideoValue = document.querySelector('#videos-cel').value;

    const celVideoSelected = `
    <source src="../c/spe_${celVideoValue < 10 ? "0" : ""}${celVideoValue}.mp4" type="video/mp4" />
    `

    //render
    celVideo.innerHTML = celVideoSelected;


    // principal video
    const principalVideo = document.querySelector('#principalVideo');

    const htmlPrincipalVideo = `
    <source src="../v/${id < 10 ? "0" : ""}${id}.mp4" type="video/mp4" />
    `

    principalVideo.innerHTML = htmlPrincipalVideo;
}

function renderCelVideo2(id){
    const celVideo = document.querySelector('#celVideo');

    const celVideoValue = document.querySelector('#videos-cel').value;

    const celVideoSelected = `
    <source src="../c/spe_${celVideoValue < 10 ? "0" : ""}${celVideoValue}.mp4" type="video/mp4" />
    `

    //render
    celVideo.innerHTML = celVideoSelected;


    // principal video
    const principalVideo = document.querySelector('#principalVideo');

    const htmlPrincipalVideo = `
    <source src="../spe/spe_${id < 10 ? "0" : ""}${id}.mp4" type="video/mp4" />
    `

    principalVideo.innerHTML = htmlPrincipalVideo;
}

//
function renderSelectTitlesCel(){
    const htmlSelect = document.querySelector('#videos-cel');
    let options = ``;
    let count = 1;

    selectTagTitlesCel.forEach(title => {
        options = options + `<option value="${count}">"${title}"</option>`;
        count++;
    });

    htmlSelect.innerHTML = options;
}


function renderTitle(id){
    const htmlTitle = document.querySelector('#played');
    const celVideoValue = document.querySelector('#videos-cel').value;
    const newTitle = `principal: ${id}, cel: ${celVideoValue}`;

    htmlTitle.textContent = newTitle;

}