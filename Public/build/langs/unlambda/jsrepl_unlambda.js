(function(){self.JSREPLEngine=function(){function d(b,a,c,d,e,f){this.input=b;this.output=a;this.result=c;this.error=d;this.sandbox=e;this.Unlambda=this.sandbox.Unlambda;this.result=function(a){return function(c){return result(a.Unlambda.unparse(c))}}(this);f()}d.prototype.Eval=function(b){var a;try{a=this.Unlambda.parse(b)}catch(c){this.error(c);return}return this.Unlambda.eval(a,this.result,this.input,this.output,this.error)};d.prototype.EvalSync=function(b){var a;a=null;this.Unlambda.eval(this.Unlambda.parse(b),
function(c){return a=c},function(a){return a()},this.output,function(a){throw a;});return a};d.prototype.GetNextLineIndent=function(b){if(/`$/.test(b))return 0;try{return this.Unlambda.parse(b),false}catch(a){return 0}};return d}()}).call(this);