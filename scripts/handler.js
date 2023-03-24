// Data
let data = new Object;

data.titleName = "DerzeTT's Portfolio";

data.descriptions = {

    'info':`Information regarding my experience and other things you might need to know about me.`,
    'contact':`Shows various platforms you can contact me on.`,
    'mywork':`List of my work, including abilities, movesets, etc.`

};

// Functions
let btnEvents = new Object();

btnEvents.mouseover = (btn) => {

    const main = document.getElementById('central');

    const btnDesc = document.getElementById('btn-desc');
    const desc = btnDesc.cloneNode();
    main.appendChild(desc);

    desc.style['z-index'] = '-1';

    let descType = btn.classList[1];

    desc.style.opacity = '0';
    desc.innerText = data.descriptions[descType];

    desc.style.top = `${btn.offsetTop - 10}px`;
    desc.style.left = `${btn.offsetLeft + (btn.offsetWidth / 2) - (desc.offsetWidth / 2)}px`;

    desc.style.filter = 'blur(0)';

    let movedOut = false;

    btn.addEventListener('mouseout', () => {
        
        movedOut = true;

        desc.style.opacity = '0';
        desc.style.top = `${btn.offsetTop}px`;
        desc.style.filter = 'blur(20px)';

    });

    setTimeout(() => {

        if(movedOut){return};

        desc.style.opacity = '1';
        desc.style.top = `${btn.offsetTop + btn.offsetHeight + 10}px`;

    }, 50);

};

btnEvents.onclick = (btn) => {

    console.log(btn, "clicked");

};

function updateWebsite(){

    // Top Elements
    const main = document.getElementById('central');

    // Update Titles
    const title = document.getElementById('title');
    title.innerText = data.titleName;

    document.title = data.titleName;

    // Handle Buttons
    const buttons = document.getElementsByClassName('references');
    
    for (const btn of buttons){

        Object.entries(btnEvents).forEach(([eventName, event], _) => {
            
            console.log(eventName, event);

            btn.addEventListener(eventName, () => {

                event(btn);
                
            });

        });

    };

};

// Listeners

window.addEventListener('load', updateWebsite);