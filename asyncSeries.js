/**
 * Created by kavuri on 3/11/2017.
 */
var async = require('async');
var stack = [fn1,fn2,fn3];
function fn1(cb){
    setTimeout(function(){
        cb(null,'one');
    },1000);
}
function fn2(cb){
    setTimeout(function(){
        cb(null,'two');
    },1000);
}
function fn3(cb){
    setTimeout(function(){
        cb(null,'three');
    },1000);
}
async.series(stack,function(err,result){
    if(err){
        console.log(err);
    }else{
        console.log("final results : ");
        console.log(result);
    }
});