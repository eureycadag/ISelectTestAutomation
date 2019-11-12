module.exports = {
    url: 'https://iselect--bat.lightning.force.com/lightning/page/home',
    elements:{
        navMenu:'button[title="Show Navigation Menu"]'
    },
    commands: [{
        click_navMenu() {
            return this
            .click('@navMenu');
        }
    }]
}