/**
 * Created by kavuri on 3/11/2017.
 */
var stack = [1,2,3,4,5];
var async = require('async');
async.each(stack,square,function(err){
    if(err){
        console.log(err);
    }else{
        console.log("finished");
    }
});
function square(item,cb){
    setTimeout(function(){
        console.log(item*item);
        cb(null);
    },1000);
}