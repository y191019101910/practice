//question- Add Two Numbers
//Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
//Output: 7 -> 0 -> 8
//Explanation: 342 + 465 = 807.

var a = [2,4,3];
var b = [5,6,4];
var reversed = a.reverse();
var reversed = b.reverse();
var c= [a[0]+b[0],a[1]+b[1],a[2]+b[2]];
if (Math.ceil(c[1])){
    c[0]=c[0]+1;
    c[1]=c[1]%10;
    c.reverse();
}

console.log(a);
console.log(b);
console.log(c);