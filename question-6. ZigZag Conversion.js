/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {

    var n= 2*numRows-2;
    var arr=[];
    for(j=0;j<numRows;j++){
        arr.push("");
    }
    for (i=0;i<s.length;i++){
        if(s == null) return "";
        if(numRows == 1)  return s;
        if (i < numRows){
            arr[i%n]+=s[i];
        }else if(i >= numRows){
            if (i%n<numRows) {
                arr[i%n]+=s[i];
            }else{
                arr[2*numRows-i%n-2]+=s[i];
            }
        }
    }
    return arr.join('');
};
s="PAYPALISHIRING";
numRows = 3;
convert(s,numRows);
