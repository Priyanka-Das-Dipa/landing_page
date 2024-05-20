$(document).ready(function() {
    let counter = 0;
    const target = 20;
    const interval = 100; 

    function updateCounter() {
        if (counter < target) {
            counter++;
            $('#counter').text(counter);
            setTimeout(updateCounter, interval);
        }
    }

    updateCounter(); 
});
