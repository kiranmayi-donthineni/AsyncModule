/**
 * Created by kavuri on 3/11/2017.
 */
function firstFn(cb){
    setTimeout(function(){
        cb(null,5,6);
    },1000);
}
function secFn(arg1,arg2,cb) {
    setTimeout(function () {
        cb(null, arg1 + arg2, 7);
    }, 1000);
}
    function thirdFn(arg1,arg2,cb){
        cb(null,arg1+arg2);
    }
    var stack = [firstFn,secFn,thirdFn];
    var async = require('async');
    async.waterfalls(stack,function(err,result){
        if(err) console.log(err);
        else console.log("final result is : "+result);
    });
