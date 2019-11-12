module.exports = {
    tags: ['spqa_sp_652_ac4', 'spqa_sp_652', 'sp_652', 'spqa_lifeadviser_sp_652_ac4', 'spqa_lifeadviser_sp_652', 'lifeadviser_sp_652'],
      
    'Login spqa Credentials': function(browser) 
    {
        console.log('Go to Salesforce Login Test URL and Enter spqa Credentials');
        login
            .navigate()
            .maximizeWindow()
            .setValue('@username', data.salesforce.spqa.username)
            .setValue('@password', data.salesforce.spqa.password)
            .click_loginbtn();
    },

    'Log in as Energy Consultant QA': function(browser) 
    {
        console.log('Log in as Energy Consultant QA');
        
        browser
            .url(data.energy.spqa.lifeAdviser.loginTest)
            .url(data.energy.spqa.account.url);
    },
    
    'GIVEN I have entered the relevant details to create a new person account as per AC1 and AC2': function(browser) 
    {
        account
            .waitForElementVisible('@newAccount', 20000, function(result)
            {
                if (result.value)
                {
                    account
                        .click_newAccount();
                }
                    else
                    {
                        console.log('Refreshing the Page')
                        account
                            .waitForElementVisible('@newAccount', 20000)
                            .click_newAccount();
                    }
            })      
    },
    
    'WHEN the person account page is displayed': function (browser) 
    {
        account
            .waitForElementVisible('@salutationDropdown', 20000, function(result)
            {
                if (result.value)
                {
                    account
                        .click_salutationDropdown()
                        .click_salutationMr()
                        .verify.elementPresent('@firstName', 'First Name Field is Present?')
                        .setValue('@firstName', energy.lifeadviser.account_info.first_name )
                        .verify.elementPresent('@lastName', 'Last Name Field is Present?')
                        .setValue('@lastName', energy.lifeadviser.account_info.last_name)
                        .verify.elementPresent('@contactMethod', 'Preferred Contact Method field Present?')
                        .click_contactMethod()
                        .waitForElementVisible('@emailPreferred', 15000)
                        .click_emailPreferred()
                        .setValue('@homePhone', energy.lifeadviser.account_info.home_phone )
                        .verify.elementPresent('@email', 'Email Field is Present?')
                        .setValue('@email', energy.lifeadviser.account_info.email)
                        .click_save()
                        .pause(5000);
                }
                    else
                    {
                        console.log('Refreshing the Page')
                        browser
                            .refresh()
                        account
                            .click_salutationDropdown()
                            .click_salutationMr()
                            .verify.elementPresent('@firstName', 'First Name Field is Present?')
                            .setValue('@firstName', energy.lifeadviser.account_info.first_name )
                            .verify.elementPresent('@lastName', 'Last Name Field is Present?')
                            .setValue('@lastName', energy.lifeadviser.account_info.last_name)
                            .verify.elementPresent('@contactMethod', 'Preferred Contact Method field Present?')
                            .click_contactMethod()
                            .waitForElementVisible('@emailPreferred', 15000)
                            .click_emailPreferred()
                            .setValue('@homePhone', energy.lifeadviser.account_info.home_phone )
                            .verify.elementPresent('@email', 'Email Field is Present?')
                            .setValue('@email', energy.lifeadviser.account_info.email)
                            .click_save()
                            .pause(5000);
                    }
            })
    },

    'THEN I shall be able to view the page layout': function (browser) 
    {
       account
            .waitForElementVisible('@selectedTab', 30000, function(result)
            {
                if (result.value)
                {
                    account
                        .verify.elementPresent('@personaccountName', 'Person Account Name is Displayed ?')
                        .verify.containsText('@personaccountName',energy.lifeadviser.account_info.account_name, 'Person account name is displayed correctly ?')
                        .verify.elementPresent('@relatedlistTab', 'Related list tab is present ?')
                        .verify.elementPresent('@sidebarSearch', 'Sidebar search is Present ?')
                        .verify.elementPresent('@detailstabRight', 'Details tab is displayed by default ?')
                        .verify.elementPresent('@activityTab', 'Activity tab is Present ?')
                        .verify.elementPresent('@relatedOpportunities', 'Opportunity related list is Present ?')
                        .verify.elementPresent('@relatedQuotes', 'Quotes related list is Present ?')
                        .verify.elementPresent('@relatedOrders', 'Orders related list is Present ?')
                        .verify.elementPresent('@relatedProducts', 'Products related list is Present ?')
                        .verify.elementPresent('@relatedDevices', 'Devices related list is Present ?')
                        .verify.elementPresent('@relatedEnquiries', 'Enquiries related list is Present ?')
                        .verify.elementPresent('@relatedNotes', 'Notes related list is Present ?')
                        .verify.elementPresent('@relatednotesAttachments', 'Notes and Attachments related list is Present ?')
                    browser
                        .saveScreenshot('reports/spqa_env/verticals/life/life_adviser/a_person_accountAndopportunity_tests/sp_652_create_person_account/ac4a_ensure_person_account_page_layout_displayed_correctly.png')
                    account
                        .click_activityTab()
                        .waitForElementVisible('@activitynewEvent', 30000)
                        .verify.elementPresent('@activitynewEvent', 'Activity New Event is Present ?')
                        .verify.elementPresent('@activitylogaCall', 'Activity Log a Call is Present ?')
                    browser
                        .saveScreenshot('reports/spqa_env/verticals/life/life_adviser/a_person_accountAndopportunity_tests/sp_652_create_person_account/ac4b_ensure_person_account_page_layout_displayed_correctly.png')
                    account
                        .click_closeTab();
                }
                    else
                    {
                        console.log('Refreshing the browser')
                        browser
                            .refresh
                        account
                            .waitForElementVisible('@selectedTab', 20000)
                            .verify.elementPresent('@personaccountName', 'Person Account Name is Displayed ?')
                            .verify.containsText('@personaccountName',energy.lifeadviser.account_info.account_name, 'Person account name is displayed correctly ?')
                            .verify.elementPresent('@relatedlistTab', 'Related list tab is present ?')
                            .verify.elementPresent('@sidebarSearch', 'Sidebar search is Present ?')
                            .verify.elementPresent('@detailstabRight', 'Details tab is displayed by default ?')
                            .verify.elementPresent('@activityTab', 'Activity tab is Present ?')
                            .verify.elementPresent('@relatedOpportunities', 'Opportunity related list is Present ?')
                            .verify.elementPresent('@relatedQuotes', 'Quotes related list is Present ?')
                            .verify.elementPresent('@relatedOrders', 'Orders related list is Present ?')
                            .verify.elementPresent('@relatedProducts', 'Products related list is Present ?')
                            .verify.elementPresent('@relatedDevices', 'Devices related list is Present ?')
                            .verify.elementPresent('@relatedEnquiries', 'Enquiries related list is Present ?')
                            .verify.elementPresent('@relatedNotes', 'Notes related list is Present ?')
                            .verify.elementPresent('@relatednotesAttachments', 'Notes and Attachments related list is Present ?')
                        browser
                            .saveScreenshot('reports/spqa_env/verticals/life/life_advisera_person_accountAndopportunity_tests/sp_652_create_person_account/ac4a_ensure_person_account_page_layout_displayed_correctly.png')
                        account
                            .click_activityTab()
                            .waitForElementVisible('@activitynewEvent', 30000)
                            .verify.elementPresent('@activitynewEvent', 'Activity New Event is Present ?')
                            .verify.elementPresent('@activitylogaCall', 'Activity Log a Call is Present ?')
                        browser
                            .saveScreenshot('reports/spqa_env/verticals/life/life_adviser/a_person_accountAndopportunity_tests/sp_652_create_person_account/ac4b_ensure_person_account_page_layout_displayed_correctly.png')
                        account
                            .click_closeTab();
                    }
            })

    }
};