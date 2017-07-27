const postcss = require('postcss');

module.exports = function(css, incomingSelector){

  // sent back to the user
  const response = [];

  // used internally -- in the crawl
  const selectors = [];

  if( Array.isArray( incomingSelector ) ) {
    /* transport array items */
    incomingSelector.forEach(selector => selectors.push(selector));
  }else{
    /* it is a side of beef */
    selectors.push(incomingSelector)
  }

  // parse the css directly (this is not a post css plugin)
  postcss.parse(css).walkRules(function (rule) {
    // for each of the user specified selectors
    selectors.forEach(selector => {
      // if this rule matches one of the user specifed selectors -- user is interested in the contents
      if( rule.selector == selector ){
        // put the rule nodes in response array that will be sent to the user
        rule.nodes.forEach(node => {
          // walk each of the rule nodes, and transport out the prop/value
          const out = {prop:node.prop, value:node.value};
          if (node.important) out.important = true;
          response.push(out)
        })
      }
    })
  });

  // k, bye;
  return response;

}
