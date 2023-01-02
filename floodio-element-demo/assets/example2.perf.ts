import { step, TestSettings, By, beforeAll, afterAll, Until, ENV, TestData, Browser } from '@flood/element'
import * as assert from 'assert'
import { random, name, internet, address } from 'faker'


export const settings: TestSettings = {
	loopCount: 1,
        description: "DIS Connect E2E Load Test",
        screenshotOnFailure: true,
        disableCache: true,
        clearCache: true,
        clearCookies: true,
        actionDelay: 1.5,
        stepDelay: 2.5,
        ignoreHTTPSErrors: true,
        // Automatically wait for elements before trying to interact with them
        waitUntil: 'visible',
        stages: [
           { duration: '5m', target: 1 },
        ],
}

interface UserData {
  id: string,
  username: string,
  password: string
}

const url = 'https://portal-qa.connect.cloud.precisely.services/'
const ssoUrl = 'https://sso.precisely.services/'

const globalBrowserID = ENV.FLOOD_GRID_INDEX + '_' + ENV.FLOOD_GRID_NODE_SEQUENCE_ID + '_' + ENV.BROWSER_ID.toString()

//TestData.fromCSV<UserData>('users.csv').filter((line, index, browserID) => line.id === globalBrowserID)
TestData.fromCSV<UserData>("users.csv").shuffle().circular()
//TestData.fromCSV<UserData>("users.csv").shuffle(false).circular()
//TestData.fromCSV<UserData>("users.csv").peek()

export default () => {
	beforeAll(async browser => {
	// Run this hook before running the first step
	   await browser.wait('500ms')
	})

	afterAll(async browser => {
	// Run this hook after running the last step
	   await browser.wait('500ms')
	})

	// If you want to do some actions before/after every single step, use beforeEach/afterEach
	// beforeEach(async browser => {})
	// afterEach(async browser => {})

	step('Launch URL', async (browser: Browser, data: UserData) => {
	   // visit instructs the browser to launch, open a page, and navigate to the url
	   await browser.visit(url)
	   await browser.wait(Until.elementIsEnabled(By.id('idp-discovery-username')))
	   await browser.type(By.id('idp-discovery-username'), data.username)
	   //console.log(data.username)
	})

	step('Navigate to password page', async (browser: Browser) => {
	   await browser.click(By.id('idp-discovery-submit'))
	   await browser.wait(Until.elementIsEnabled(By.id('okta-signin-password')))
	})

	step('Login', async (browser: Browser, data: UserData) => {
	   await browser.type(By.id('okta-signin-password'), data.password)
	   await browser.click(By.id('okta-signin-submit'))
	   await browser.wait(Until.urlIs(`${url}data-integration/home/pipeline`))
	})
	
	step('Logout', async (browser: Browser) => {
	   await browser.click(By.attr('a','data-cy','user-account-image'))
	   await browser.takeScreenshot()
	   await browser.click(By.attr('a','data-cy','user-signout'))
	   await browser.wait(Until.urlIs(ssoUrl))
	})
}
