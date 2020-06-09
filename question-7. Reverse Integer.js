/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var arr='';
    var arr2 = '';
    var a =x.toString();
    for( i=0; i<a.length ;i++){
        if(x>0){
            arr2 =a[i]+arr2;
            arr=parseInt(arr2);
        }else if (x<0){
            a=a.substr(0);
            arr2 =a[i]+arr2;
            arr =parseInt(arr2)*(-1);
        }
        if(arr== 0 || arr>=2147483647|| arr<=-2147483647 ){
            return 0;
        }

    }
    return arr;
};