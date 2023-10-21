function convertToAdjList(matrix) {
    var adjList = [];

    for(var row = 0; row < matrix.length; row++) { //The outer for loop iterates through the rows of the matrix
        var tmpRow = []; //Create a temporary list that we can use to add connections in the matrix to
        for(var column = 0; column < matrix.length; column++) { //The inner for loop iterates through the columns of the matrix
            if(matrix[row][column] > 0) { //If there is a connection add the current column to the tmpRow
                tmpRow.push(column);
            }
        }
        adjList[row] = tmpRow; //Add the full tmpRow to the adjList;
    }
    return adjList
}