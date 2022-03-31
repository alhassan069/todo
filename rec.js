function runProgram(input) {
    input = input.trim().split("\n");
    let arr = [];
    for (var t = 0; t < input.length - 1; t++) {
        (arr.push(+input[t]))
    }
    for (var i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
    // var arr = input[].trim().split(' ').map(Number);
}


if (process.env.USERNAME === "alhas") {
    runProgram(`1
  2
  3
  4
  -1`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function(input) {
        read += input;
    });
    process.stdin.on("end", function() {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function() {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}