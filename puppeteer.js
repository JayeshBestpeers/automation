const puppeteer = require('puppeteer')
const moment = require('moment')
let count = 1;
const autoMateScript = async ({ email, pass, date, text }) => {
    try {
        // Launch a headless browser
        const browser = await puppeteer.launch({
            headless: false
        });

        // Open a new page
        const page = await browser.newPage();

        // Navigate to the URL of the form
        await page.goto('https://portal.bestpeers.com/daily_status_updates/new?date=' + date);

        // Fill out the login form
        await page.type('#employee_email', email);
        await page.type('#employee_password', pass);
        await page.click("#new_employee > div.text-center > input");

        // wait for new status page
        await page.waitForNavigation();
        // fill status details 

        await page.waitForSelector('#daily_status_update_form > div:nth-child(3) > div:nth-child(1) > div > ul > li.tagit-new > input');
        await page.type("#daily_status_update_form > div:nth-child(3) > div:nth-child(1) > div > ul > li.tagit-new > input", "ketan@bestpeers.com");
        await page.type("#daily_status_update_project_updates_attributes_0_billing_hour", "08:00");
        await page.select("#daily_status_update_task_updates_attributes_0_project_id", "232");
        await page.type("#daily_status_update_task_updates_attributes_0_working_hour", "08:00");
        await page.select("#daily_status_update_task_updates_attributes_0_status", "Done");
        await page.type("#daily_status_update_task_updates_attributes_0_task", text);

        // await page.click("#daily_status_update_form > div:nth-child(5) > div.form-group.text-center.footer > input.add-daily-status-btn");
        // You can optionally take a screenshot after form submission
        await page.screenshot({ path: `form_filled_${count}.png` });
        count++
        // Close the browser
        await browser.close();
    } catch (error) {
        console.log("Error"+error)
    }
};

exports.autoMateScript = autoMateScript