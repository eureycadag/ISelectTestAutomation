module.exports = {
    tags: ['bat_sp_650_ac6', 'bat_sp_650', 'sp_650','bat_hncconsultant_sp_650_ac1', 'bat_hncconsultant_sp_650', 'hncconsultant_sp_650'],

    'Login Bat Credentials': function() 
    {
        console.log('Go to Salesforce Login Test URL and Enter Bat Credentials');
        login
            .navigate()
            .maximizeWindow()
            .setValue('@username', data.salesforce.bat.username)
            .setValue('@password', data.salesforce.bat.password)
            .click_loginbtn();
    },

    'Log in as Energy Consultant QA': function(browser) {
        console.log('Log in as Energy Consultant QA');
        
        browser
            .url(data.energy.bat.hncsalesConsultant.loginTest);

    },
    
    'GIVEN that the results page is displayed': function(browser) 
    {
        search
            .waitForElementVisible('@searchField', 10000 , function(result)
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
                            .keys(browser.Keys.ENTER)
                            .pause(8000);
                        }
            })
    },
    
    'WHEN I select any one of the records on the results page that has a hyperlink': function (browser) 
    {
        search
            .waitForElementVisible('@hyperlinkText', 20000, function(result)
            {
                if (result.value)
                {
                    search
                        .verify.elementPresent('@hyperlinkText', 'Records/Hyperlinks are interactable ?')
                        .click_hyperlinkText();
                }
                    else
                        {
                        console.log('Refreshing the Page...')
                            browser
                                .refresh()
                            search
                                .waitForElementVisible('@hyperlinkText', 10000)
                                .click_hyperlinkText();
                        }
            })
    },
   

    'THEN the selected record page is displayed in a new tab': function (browser) 
    {   //Verify top results page is displayed
        search
            .waitForElementVisible('@profileWrap', 25000 , function(result)
            {
                if (result.value)
                {
                    browser
                        .saveScreenshot('reports/bat_env/verticals/hnc/hnc_consultant/a_person_accountAndopportunity_tests/sp_650_global_search/ac6_ensure_each_matched_object_has_a_hyperlink.png')
                        .end();
                }
                    else
                        {
                            browser
                                .refresh()
                            search
                                .waitForElementVisible('@selectedTab', 15000)
                                .verify.containsText('@selectedTab', energy.search_field.last_name.sample1 , 'The hyperlink opens a new tab? ')
                             browser
                                .saveScreenshot('reports/bat_env/verticals/hnc/hnc_consultant/a_person_accountAndopportunity_tests/sp_650_global_search/ac6_ensure_each_matched_object_has_a_hyperlink.png')
                                .end(); 
                        }
            })
    }
};
