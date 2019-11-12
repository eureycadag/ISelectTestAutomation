var commands = {
    populate_OpportunityName: function(){
      return this
      .waitForElementVisible('@InputBoxOpportunityName',10000)
      .click('@InputBoxOpportunityName')
      .setValue('@InputBoxOpportunityName', 'Eu Rey Cadag');
    }
};

let sections = {
    OpportunityName:{
      selector: '//*[contains(@class,\' input\')]//*[contains(text(),\'Opportunity Name\')]//following::input[1]',
      locateStrategy: 'xpath'
    }
  }


module.exports = {
//url: 'https://iselect--bat.lightning.force.com/lightning/page/home',
elements: {
    InputBoxOpportunityName: {
        selector: '//*[contains(@class,\' input\')]//*[contains(text(),\'Opportunity Name\')]//following::input[1]',
        locateStrategy: 'xpath'
    }  
},

sections: sections,

commands: [commands]

};