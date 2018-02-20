function tombGen(w, h, char) {
    let matrix = [[]];
    for (i = 0; i < w; i++) {
        matrix[i] = [];
        for (j = 0; j < h; j++) {
            matrix[i][j] = char;
        }
    }
    return matrix;
}

function change(tomb, i, j, char) {
    tomb[i][j] = char
}

function print(tomb) {
    for (i = 0; i<tomb.length; i++) {
        var row = ""
        for (j = 0; j<tomb[i].length; j++) {
            row += tomb[i][j]+"  "
        }
        console.log(row)
    }
}

var tomb = tombGen(8, 8, " ")
change(tomb, 7, 5, "1")
change(tomb, 6, 5, "1")
change(tomb, 5, 5, "1")
change(tomb, 4, 5, "1")
change(tomb, 3, 5, "1")
change(tomb, 2, 5, "1")
change(tomb, 2, 4, "1")
change(tomb, 2, 3, "1")
change(tomb, 2, 2, "1")
change(tomb, 3, 2, "1")
change(tomb, 4, 2, "O")
change(tomb, 5, 2, "|")
change(tomb, 5, 1, "-")
change(tomb, 5, 3, "-")
change(tomb, 6, 2, "/")
change(tomb, 7, 1, "/")
change(tomb, 6, 3, "\\")
change(tomb, 7, 4, "\\")
print(tomb)