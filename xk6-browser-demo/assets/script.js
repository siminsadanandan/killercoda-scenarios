import { chromium } from 'k6/x/browser';
import { check, sleep } from 'k6';

export default function () {
  const browser = chromium.launch({ headless: true});
  //context=browser.newContext({screen: {width: 1920,height: 1080},viewport: {width: 1920,height: 1080},});
  const page = browser.newPage();

  page
    .goto('https://test.k6.io/', { waitUntil: 'networkidle' })
    .then(() => {
      page.waitForLoadState('networkidle');
      //not working
      //page.waitForNavigation();
      //page.waitForNavigation({waitUntil: 'load'});
      //sleep (10);
      //not working
      //page.waitForLoadState({ waitUntil: 'domcontentloaded' });
      //page.screenshot({ path: 'screenshot1.png' });
      //page.waitForSelector('#idp-discovery-username'); 
      page.screenshot({ path: 'screenshot2.png' });
    })
    .finally(() => {
      page.close();
      browser.close();
    });
