window.addEventListener ("load", myMain, false);

function myMain (evt) {
    // Beckhoff uses frames that are created and destoryed when new pages are loaded.  This interval calls the code every second to ensure it has run even after a frame udpate
    var intervalId = window.setInterval(removeId, 1000);
}

function removeId(){
    if(true){
        try {

            // Add stylesheet that removes Beckhoff styles
            var style = window.frames['main'].document.createElement('link');
            style.rel = 'stylesheet';
            style.type = 'text/css';
            style.href = chrome.extension.getURL('fix.css');
            (window.frames['main'].document.head||window.frames['main'].document.documentElement).appendChild(style);

            // Prevent Beckhoff from moving page scroll container by removing its id 
            var element = window.frames['main'].document.getElementById('mCSB_1_container');
            console.log(element);
            element.id = '';

        } catch (error) {
            console.log(error)
            // The frame which holds the elements we want to control has not been loaded yet.
            console.log('no mCSB_1_container element currently on page')
        }
    }
}
