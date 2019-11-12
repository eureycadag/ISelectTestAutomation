module.exports = {
    tags: ['bat_sp_650_ac7', 'bat_sp_650', 'sp_650','bat_energysales_sp_650_ac7', 'bat_energysales_sp_650', 'energysales_sp_650'],

    'Log in as Energy Consultant QA': async function(browser) 
    {
        login
            .userLogin(data.energy.bat.energysalesConsultant.username, data.energy.bat.energysalesConsultant.password);
    },
    
    'GIVEN that the results page is displayed': function(browser) 
    {
        search
            .waitForElementPresent('@searchField', 10000, function(result) 
        {
            if (result.value)
            {
                search
                    .setValue('@searchField', energy.search_field.last_name.sample1 );
                browser
                    .keys(browser.Keys.ENTER)
                    .pause(5000);
            }
                else
                {
                    browser
                        .refresh();
                    search
                        .verify.elementPresent('@searchField', 'Search Field is Present after Refresh?')
                        .setValue('@searchField', energy.search_field.last_name.sample1 )
                        .pause(3000);
                    browser
                        .Keys.ENTER()
                        .pause(5000); 
                }

        })
    },
    
    'WHEN I select the "View More" button on any of the displayed section ': function (browser) 
    {
        search
            .waitForElementPresent('@viewMore', 15000, function (result)
            {
                if (result.value)
                {
                    search
                        .verify.elementPresent('@viewMore', '"View more" hyperlink is Visible')
                        .click_viewMore();
                }
                    else
                    {
                        console.log('Refreshing the Page...')
                        browser
                            .refresh()
                            .pause(2000);
                        search
                            .verify.elementPresent('@viewMore', '"View more" hyperlink is Visible')
                            .click_viewMore();   
                    }
            })
    },
   

    'THEN the list of matched record of the selected object is displayed': function (browser) 
    {   //Verify matched record of the searched object is displayed
        search
            .waitForElementPresent('@pageResult', 30000, function (result)
            {
                if (result.value)
                {
                    search
                        .verify.containsText('@pageResult', energy.search_field.last_name.sample1, 'The Page contains matching results ?');
                    browser
                        .saveScreenshot('reports/bat_env/verticals/energy/energysales_consultant/a_person_accountAndopportunity_tests/sp_650_global_search/ac7_ability to display_all_matched_records.png')            
                        .end(); 
                }
                    else
                    {
                        console.log('Refreshing the Page')
                        browser
                            .refresh()
                            .pause(2000)
                        search
                            .verify.containsText('@pageResult', energy.search_field.last_name.sample1, 'The Page contains matching results ?')
                        browser
                            .saveScreenshot('reports/bat_env/verticals/energy/energysales_consultant/a_person_accountAndopportunity_tests/sp_650_global_search/ac7_ability to display_all_matched_records.png')
                            .end(); 
                    }
            })
    }
};
