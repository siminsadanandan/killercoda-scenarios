import { chromium } from 'k6/x/browser';
import { check, sleep } from 'k6';

export default function () {
  const browser = chromium.launch({ headless: true});
  const context = browser.newContext({screen: {width: 1920,height: 1080},viewport: {width: 1920,height: 1080},});
  const page = browser.newPage();

//  page.goto ('https://portal-qa.connect.cloud.precisely.services/', { waitUntil: 'networkidle' });
//  page.waitForLoadState('networkidle');
//  //page.waitForNavigation();
//  page.waitForNavigation({waitUntil: 'load'});
//  page.screenshot({ path: 'screenshot1.png' });
//  page.waitForSelector('#idp-discovery-username'); 
//  page.screenshot({ path: 'screenshot2.png' });
//  page.close();
//  browser.close();
//
   page
   .goto('https://portal-qa.connect.cloud.precisely.services/', { waitUntil: 'networkidle' })
     .then(() => {
       page.waitForLoadState('networkidle');
       //not working
       //page.waitForNavigation();
       page.waitForNavigation({waitUntil: 'load'});
       //sleep (10);
       //not working
       //page.waitForLoadState({ waitUntil: 'domcontentloaded' });
       page.screenshot({ path: 'screenshot1.png' });
       page.waitForSelector('#idp-discovery-username',{state:'attached'}); 
       page.$('#idp-discovery-username').type('petnt103-designer1@precisely.testinator.com');
       page.screenshot({ path: 'screenshot2.png' });
     })
     .finally(() => {
       page.close();
       browser.close();
     });
}
