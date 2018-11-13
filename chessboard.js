/* Chessboard
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.
    Passing this string to console.log should show something like this:
# # # #
 # # # #
# # # #
 # # # #
When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid
of the given width and height.
*/

/*
let size = 8, chessboard = '', black = '# ', white = ' #';
for (let whiteLine = white; whiteLine.length <= size; whiteLine += white) {
    if (whiteLine.length >= size){
        whiteLine = whiteLine + '\n';
        // console.log(whiteLine);
    }
    for (let blackLine = black; blackLine.length <= size; blackLine += black) {
        if (blackLine.length >= size){
            blackLine = blackLine + '\n';
           // console.log(blackLine);
        }
        for (let length = 0; length <= size; length++) {
            chessboard = whiteLine + blackLine;
            console.log(chessboard);
        }
    }
}
*/

/*
let size = 8, chessboard = '', black = '# ', white = ' #';
for (let whiteLine = white; whiteLine.length <= size; whiteLine += white) {
    if (whiteLine.length >= size) {
        return whiteLine = whiteLine + '\n';
    }
}

for (let blackLine = black; blackLine.length <= size; blackLine += black) {
    if (blackLine.length >= size) {
        return blackLine = blackLine + '\n';
    }
}

for (let length = 0; length <= size; length++) {
    chessboard = whiteLine + blackLine;
    console.log(chessboard);
}
*/

// Solution: I could not figure this out at all.
let chessboard = '', size = 8;
for (var y = 0; y < size; y++) {
    for (var x = 0; x < size; x++){
        if ((x + y) % 2 == 0)
            chessboard += '#';
        else
            chessboard += ' ';
    }
    chessboard +='\n';
}
console.log(chessboard);
