let countdown;
let totalSeconds = 0;

self.onmessage = function (event) {
    if (event.data === 'start') {
        countdown = setInterval(function () {
            postMessage('tick');
        }, 1000);
    } else if (event.data === 'stop') {
        clearInterval(countdown);
    }
};
