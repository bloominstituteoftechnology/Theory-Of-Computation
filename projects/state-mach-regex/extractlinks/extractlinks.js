const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
  console.error('usage: extractlinks inputfile');
  process.exit(1);
}

const filename = args[0];

// !!!! IMPLEMENT ME

// Read file
fs.readFile(filename, 'utf8', (err, data) => {
  if (err) console.log(err);
  else findMatch(data);
});

// Set up regex
const parseLinks = /([w]{3}\.|https:\/\/|http:\/\/)[\w]+\.[^\s'"]+/gi;

// Find matches
function findMatch(data) {
  let links = data.match(parseLinks).slice(1);

  // Print all matches
  links.forEach(each => {
    console.log(each);
  });
}

/*
Prints:
https://cdn.sstatic.net/Sites/stackoverflow/img/apple-touch-icon.png?v=c78bd457575a
https://stackoverflow.com/
https://cdn.sstatic.net/Sites/stackoverflow/img/apple-touch-icon@2.png?v=73d79a89bded
https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js
https://cdn.sstatic.net/Js/stub.en.js?v=ba7d79e472e6
https://cdn.sstatic.net/Shared/stacks.css?v=441822af62d6
https://cdn.sstatic.net/Sites/stackoverflow/primary.css?v=83332ebbdea0
https://stackauth.com
https://meta.stackoverflow.com
https://stackoverflow.com
https://stackexchange.com/users/?tab=inbox
https://stackexchange.com/users/?tab=reputation
https://stackexchange.com
https://stackoverflow.com/users/login?ssrc=head&returnurl=https%3a%2f%2fstackoverflow.com%2f
https://stackoverflow.com/users/signup?ssrc=head&returnurl=%2fusers%2fstory%2fcurrent
https://stackoverflow.com
https://stackoverflow.com
https://stackoverflow.com/help
https://chat.stackoverflow.com
https://meta.stackoverflow.com
https://stackoverflow.com/users/signup?ssrc=site_switcher&amp;returnurl=%2fusers%2fstory%2fcurrent
https://stackoverflow.com/users/login?ssrc=site_switcher&amp;returnurl=https%3a%2f%2fstackoverflow.com%2f
https://stackexchange.com/sites
https://stackoverflow.blog
https://meta.stackoverflow.com
https://stackoverflow.com/company/about
https://www.stackoverflowbusiness.com/?ref=topbar_help
https://accounts.google.com/o/oauth2/auth
https://www.facebook.com/v2.0/dialog/oauth
https://stackexchange.com/legal/privacy-policy
https://stackexchange.com/legal/terms-of-service
https://www.stackoverflowbusiness.com
https://cdn.sstatic.net/clc/clc.min.js?v=f0e0aec51aac
https://cdn.sstatic.net/clc/styles/clc.min.css?v=8a0a093a431f
https://clc.stackoverflow.com/markup.js
https://www.googletagservices.com/tag/js/gpt.js
https://stackexchange.com/questions?tab=hot
https://writing.stackexchange.com/questions/35729/referencing-modern-pop-culture-in-science-fiction
https://codereview.stackexchange.com/questions/193268/searching-for-a-word-in-a-list-of-tuple-extracted-from-a-db-via-sql
https://worldbuilding.stackexchange.com/questions/110908/a-moon-that-is-hard-to-orbit
https://photo.stackexchange.com/questions/98403/quiet-mode-on-my-dslr-is-not-quiet-enough-how-can-i-make-it-quieter
https://latin.stackexchange.com/questions/6373/latin-transliteration-of-%ce%99%ce%b7%cf%83%ce%bf%cf%8d%cf%82
https://rpg.stackexchange.com/questions/121636/is-the-effect-of-bend-luck-visible
https://softwareengineering.stackexchange.com/questions/370180/why-can-fat16-not-store-more-than-2-gb
https://english.stackexchange.com/questions/444163/watching-the-television-or-watching-television
https://blender.stackexchange.com/questions/107476/fast-question-about-circle-problem
https://rpg.stackexchange.com/questions/121625/how-can-a-black-dragons-darkness-lair-action-be-overcome
https://unix.stackexchange.com/questions/440844/whats-the-correct-way-to-ask-for-a-feature-in-gnu-linux
https://money.stackexchange.com/questions/94954/i-have-sprint-shares-what-does-this-merger-with-t-mobile-mean-for-my-shares
https://mathematica.stackexchange.com/questions/172266/how-to-reduce-polylog-function
https://electronics.stackexchange.com/questions/371535/connector-type-for-a-plug-in-short-circuit
https://dba.stackexchange.com/questions/205352/is-there-any-way-to-have-unique-constraint-and-not-have-unique-index
https://iot.stackexchange.com/questions/2884/are-there-any-surveillance-cameras-devices-that-are-eu-general-data-protection-r
https://french.stackexchange.com/questions/29960/apr%c3%a8s-de-doesn-t-seem-right
https://mathoverflow.net/questions/299086/left-kan-extension-along-yoneda-of-pullback-preserving-functor-preserving-pullba
https://electronics.stackexchange.com/questions/371514/in-one-way-asynchronous-serial-communication-how-does-the-receiver-sync-up-its
https://interpersonal.stackexchange.com/questions/13822/how-do-i-tell-my-mom-i-m-not-inviting-my-brother-to-someone-else-s-bachelor-part
https://workplace.stackexchange.com/questions/111438/how-to-deal-with-rumours-of-boss-stealing-money
https://movies.stackexchange.com/questions/88463/why-does-thanos-need-all-the-infinity-stones
https://academia.stackexchange.com/questions/108912/how-should-i-compare-my-algorithm-to-others-when-their-code-is-not-available
https://workplace.stackexchange.com/questions/111250/how-to-talk-to-management-about-genius-code
https://stackoverflow.com
https://stackoverflow.com
https://stackoverflow.com/jobs
https://stackoverflow.com/jobs/directory/developer-jobs
https://stackoverflow.com/jobs/salary
https://www.stackoverflowbusiness.com
https://stackoverflow.com/teams
https://www.stackoverflowbusiness.com/talent
https://www.stackoverflowbusiness.com/advertise
https://www.stackoverflowbusiness.com/enterprise
https://stackoverflow.com/company/about
https://stackoverflow.com/company/about
https://stackoverflow.com/company/press
https://stackoverflow.com/company/work-here
https://stackexchange.com/legal
https://stackexchange.com/legal/privacy-policy
https://stackoverflow.com/company/contact
https://stackexchange.com
https://stackoverflow.com
https://serverfault.com
https://superuser.com
https://webapps.stackexchange.com
https://askubuntu.com
https://webmasters.stackexchange.com
https://gamedev.stackexchange.com
https://tex.stackexchange.com
https://softwareengineering.stackexchange.com
https://unix.stackexchange.com
https://apple.stackexchange.com
https://wordpress.stackexchange.com
https://gis.stackexchange.com
https://electronics.stackexchange.com
https://android.stackexchange.com
https://security.stackexchange.com
https://dba.stackexchange.com
https://drupal.stackexchange.com
https://sharepoint.stackexchange.com
https://ux.stackexchange.com
https://mathematica.stackexchange.com
https://salesforce.stackexchange.com
https://expressionengine.stackexchange.com
https://pt.stackoverflow.com
https://blender.stackexchange.com
https://networkengineering.stackexchange.com
https://crypto.stackexchange.com
https://codereview.stackexchange.com
https://magento.stackexchange.com
https://softwarerecs.stackexchange.com
https://dsp.stackexchange.com
https://emacs.stackexchange.com
https://raspberrypi.stackexchange.com
https://ru.stackoverflow.com
https://codegolf.stackexchange.com
https://es.stackoverflow.com
https://ethereum.stackexchange.com
https://datascience.stackexchange.com
https://arduino.stackexchange.com
https://bitcoin.stackexchange.com
https://stackexchange.com/sites#technology
https://photo.stackexchange.com
https://scifi.stackexchange.com
https://graphicdesign.stackexchange.com
https://movies.stackexchange.com
https://music.stackexchange.com
https://worldbuilding.stackexchange.com
https://cooking.stackexchange.com
https://diy.stackexchange.com
https://money.stackexchange.com
https://academia.stackexchange.com
https://law.stackexchange.com
https://stackexchange.com/sites#lifearts
https://english.stackexchange.com
https://skeptics.stackexchange.com
https://judaism.stackexchange.com
https://travel.stackexchange.com
https://christianity.stackexchange.com
https://ell.stackexchange.com
https://japanese.stackexchange.com
https://gaming.stackexchange.com
https://bicycles.stackexchange.com
https://rpg.stackexchange.com
https://anime.stackexchange.com
https://puzzling.stackexchange.com
https://mechanics.stackexchange.com
https://stackexchange.com/sites#culturerecreation
https://mathoverflow.net
https://math.stackexchange.com
https://stats.stackexchange.com
https://cstheory.stackexchange.com
https://physics.stackexchange.com
https://chemistry.stackexchange.com
https://biology.stackexchange.com
https://cs.stackexchange.com
https://philosophy.stackexchange.com
https://stackexchange.com/sites#science
https://meta.stackexchange.com
https://stackapps.com
https://api.stackexchange.com
https://data.stackexchange.com
https://area51.stackexchange.com
https://stackoverflow.blog?blb=1
https://www.facebook.com/officialstackoverflow/
https://twitter.com/stackoverflow
https://linkedin.com/company/stack-overflow
https://creativecommons.org/licenses/by-sa/3.0/
https://stackoverflow.blog/2009/06/25/attribution-required/
https://pixel.quantserve.com/pixel/p-c1rF4kxgLUzNc.gif
https://www.google-analytics.com/analytics.js
*/