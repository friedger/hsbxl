angular.module("hsbxl",["ngGrid"]).filter("orderObjectBy",function(){return function(e,t){if(!angular.isObject(e))return e;var n=[];for(var r in e)n.push(e[r]);n.sort(function(e,n){e=parseInt(e[t]);n=parseInt(n[t]);return e-n});return n}});$(document).ready(function(){$(".carousel").carousel({interval:4e3});$(".carousel").carousel("cycle")});