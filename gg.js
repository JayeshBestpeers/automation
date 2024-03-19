const puppeteer = require('puppeteer');

async function joinGoogleMeet(meetingLink) {
    const browser = await puppeteer.launch({
        headless: false, args: [
            '--use-fake-ui-for-media-stream',
            "--disable-notifications",
        ]
    }); // You can set headless to true if you don't want to see the browser
    const page = await browser.newPage();

    const session = await page.createCDPSession()
    const { windowId } = await session.send("Browser.getWindowForTarget")

    // await delay(1500) // Delay for illustrative purposes

    // Minimize
    await session.send("Browser.setWindowBounds", {
        windowId,
        bounds: { windowState: "minimized" },
    })



    await page.goto('https://accounts.google.com/');

    await page.waitForSelector('[aria-label="Email or phone"]');
    await page.type('[aria-label="Email or phone"]', "");
    await page.keyboard.press('Enter');
    await page.waitForNavigation({ waitUntil: 'networkidle0' });

    await page.waitForSelector('[aria-label="Enter your password"]');
    await page.type('[aria-label="Enter your password"]', "");
    await page.keyboard.press('Enter');
    await page.goto('https://meet.google.com/swu-jgro-zdm');

    await page.reload()

    //   document.querySelector("#yDmH0d > c-wiz > div > div > div:nth-child(25) > div.crqnQb > div > div.gAGjv > div.vgJExf > div > div > div.d7iDfe.NONs6c > div.shTJQe > div.jtn8y > div.XCoPyb > div:nth-child(1) > button > div.VfPpkd-RLmnJb")
    //   await page.waitForNetworkIdle()
    //   await page.waitForSelector('[aria-label="Your name"]');
    //   await page.type('[aria-label="Your name"]', "jachouhan");
    //   await page.keyboard.press('Enter');
    //   await page.waitForSelector("#yDmH0d > c-wiz > div > div > div:nth-child(25) > div.crqnQb > div > div.gAGjv > div.vgJExf > div > div > div.d7iDfe.NONs6c > div.shTJQe > div.jtn8y > div.XCoPyb > div:nth-child(1) > button");
    // console.log(ele)
    // await ele.focus()
    await new Promise((res) => setTimeout(() => res(), 3000))
    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')
    await page.keyboard.press('Enter')
    //   await page.click("#yDmH0d > c-wiz > div > div > div:nth-child(25) > div.crqnQb > div > div.gAGjv > div.vgJExf > div > div > div.d7iDfe.NONs6c > div.shTJQe > div.jtn8y > div.XCoPyb > div:nth-child(1) > button")
    //   page.on('dialog', async dialog => {   //on event listener trigger
    //     console.log(dialog.message());  //get alert message

    //     await dialog.accept();        //accept alert

    //  })


    // Wait for joining the meeting
    // await page.waitForTimeout(5000); // Adjust this timeout as necessary

    // If you need to allow camera and microphone access, you might need to click some buttons or allow permissions programmatically here

    // Click join meeting button
    //   await page.waitForSelector('[aria-label="Join now"]');
    //   await page.click('[aria-label="Join now"]');

    //   // Wait for meeting to join
    //   await page.waitForNavigation();

    //   // Close the browser when done
    //   await browser.close();
}

// Call the function with the Google Meet link
joinGoogleMeet();