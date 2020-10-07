module.exports = function towelSort (matrix) {
    array = new Array();
    if (matrix === undefined) {
        return array;
    }
    for (i=0; i<matrix.length; i++){
        if(i % 2 === 0){
            for(j=0; j<matrix[i].length; j++){
                array.push(matrix[i][j]);
            }
        } else {
            for(j=matrix[i].length; j>0; j--){
                array.push(matrix[i][j-1]);
            }
        }
    }
    return array;
}
