process.stdin.resume();
process.stdin.setEncoding("ascii");
var input = "";
var i = 0;
process.stdin.on("data", function (chunk) {
    input += chunk;
});
process.stdin.on("end", function () {
    // now we can read/parse input
    var interval = setInterval(function() {
        process.stdout.write(input.charAt(i++));
        if (i == input.length) {
            clearInterval(interval);
        }
    }, 1000);
});
