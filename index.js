const postcss = require('postcss');
module.exports = function(css, selector){
  let response = "";
  postcss.parse(css).walkRules(function (rule) {
    if(rule.selector ===  selector){
        response += rule.nodes.map(i=>i.prop +': '+ i.value+';').join('\n')
    }
  });
  return response;
}
