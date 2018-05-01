const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

// !!!! IMPLEMENT ME

// Read file
fs.readFile(filename, 'utf8', (err, data) => {
    if (err) throw err;
    
    printMatch(findMatch(data));
})

// Set up regex
const urlRegex = /(http|https)?:\/\/[\w.\/-]+[\.][\w.\/-]+/gi;

// Find matches
const findMatch = (data) => {
    return data.match(urlRegex);
}

// Print all matches
const printMatch = (match) => {
    const matched = (res, link) => {
        if (res.includes(link)) return res;
        
        return res.concat(link);
    }
    const links = (link, i) => {
        console.log(`${i + 1}: ${link}`);
    }
    match.reduce(matched, []).forEach(links);
}

/* output

    Terries-MacBook-Pro:extractlinks TERR1E$ node extractlinks.js stackoverflow.html
    1: https://cdn.sstatic.net/Sites/stackoverflow/img/favicon.ico
    2: https://cdn.sstatic.net/Sites/stackoverflow/img/apple-touch-icon.png
    3: https://stackoverflow.com/
    4: https://cdn.sstatic.net/Sites/stackoverflow/img/apple-touch-icon
    5: https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js
    6: https://cdn.sstatic.net/Js/stub.en.js
    7: https://cdn.sstatic.net/Shared/stacks.css
    8: https://cdn.sstatic.net/Sites/stackoverflow/primary.css
    9: https://stackauth.com
    10: https://meta.stackoverflow.com
    11: https://stackoverflow.com
    12: https://stackexchange.com/users/
    13: https://stackexchange.com
    14: https://stackoverflow.com/users/login
    15: https://stackoverflow.com/users/signup
    16: https://stackoverflow.com/help
    17: https://chat.stackoverflow.com
    18: https://stackexchange.com/sites
    19: https://stackoverflow.blog
    20: https://stackoverflow.com/company/about
    21: https://www.stackoverflowbusiness.com/
    22: https://accounts.google.com/o/oauth2/auth
    23: https://www.facebook.com/v2.0/dialog/oauth
    24: https://stackexchange.com/legal/privacy-policy
    25: https://stackexchange.com/legal/terms-of-service
    26: https://www.stackoverflowbusiness.com
    27: https://cdn.sstatic.net/clc/clc.min.js
    28: https://cdn.sstatic.net/clc/styles/clc.min.css
    29: https://clc.stackoverflow.com/markup.js
    30: https://www.googletagservices.com/tag/js/gpt.js
    31: https://stackexchange.com/questions
    32: https://music.stackexchange.com/questions/70537/double-stops-in-abrsm-grade-7-violin
    33: https://interpersonal.stackexchange.com/questions/13822/how-do-i-tell-my-mom-i-m-not-inviting-my-brother-to-someone-else-s-bachelor-part
    34: https://math.stackexchange.com/questions/2760285/find-all-elements-in-a-cyclic-group-of-a-specific-order
    35: https://money.stackexchange.com/questions/94955/should-i-begin-investing-in-a-403b
    36: https://electronics.stackexchange.com/questions/371545/change-in-resonant-frequency-of-quartz-crystal-with-atmospheric-pressure
    37: https://unix.stackexchange.com/questions/440844/whats-the-correct-way-to-ask-for-a-feature-in-gnu-linux
    38: https://politics.stackexchange.com/questions/30719/how-would-a-trial-occur-if-two-political-bodies-investigate-the-same-crime
    39: https://electronics.stackexchange.com/questions/371514/in-one-way-asynchronous-serial-communication-how-does-the-receiver-sync-up-its
    40: https://blender.stackexchange.com/questions/107476/fast-question-about-circle-problem
    41: https://movies.stackexchange.com/questions/88478/was-thanos-really-committed-or-just-a-hypocrite
    42: https://stackoverflow.com/questions/50097243/java-lambda-method-and-new-object
    43: https://english.stackexchange.com/questions/444163/watching-the-television-or-watching-television
    44: https://academia.stackexchange.com/questions/108912/how-should-i-compare-my-algorithm-to-others-when-their-code-is-not-available
    45: https://worldbuilding.stackexchange.com/questions/110902/how-to-convince-primitive-tribe-that-cities-weren-t-built-by-gods
    46: https://salesforce.stackexchange.com/questions/216491/copying-field-from-contact-to-account
    47: https://mathematica.stackexchange.com/questions/172272/solution-of-implicit-function-with-reduce
    48: https://japanese.stackexchange.com/questions/58251/can-
    49: https://english.stackexchange.com/questions/444070/is-it-ok-to-say-this-number-feigns-in-comparison-to
    50: https://movies.stackexchange.com/questions/88463/why-does-thanos-need-all-the-infinity-stones
    51: https://cs.stackexchange.com/questions/91330/what-exactly-is-the-semantic-difference-between-set-and-type
    52: https://dba.stackexchange.com/questions/205318/how-to-pivot-in-tsql
    53: https://softwareengineering.stackexchange.com/questions/370180/why-can-fat16-not-store-more-than-2-gb
    54: https://rpg.stackexchange.com/questions/121612/is-commands-one-word-command-the-only-verbal-component-or-is-there-more
    55: https://softwareengineering.stackexchange.com/questions/370135/why-are-multiple-programming-languages-used-in-the-development-of-one-product-or
    56: https://stackoverflow.com/jobs
    57: https://stackoverflow.com/jobs/directory/developer-jobs
    58: https://stackoverflow.com/jobs/salary
    59: https://stackoverflow.com/teams
    60: https://www.stackoverflowbusiness.com/talent
    61: https://www.stackoverflowbusiness.com/advertise
    62: https://www.stackoverflowbusiness.com/enterprise
    63: https://stackoverflow.com/company/press
    64: https://stackoverflow.com/company/work-here
    65: https://stackexchange.com/legal
    66: https://stackoverflow.com/company/contact
    67: https://serverfault.com
    68: https://superuser.com
    69: https://webapps.stackexchange.com
    70: https://askubuntu.com
    71: https://webmasters.stackexchange.com
    72: https://gamedev.stackexchange.com
    73: https://tex.stackexchange.com
    74: https://softwareengineering.stackexchange.com
    75: https://unix.stackexchange.com
    76: https://apple.stackexchange.com
    77: https://wordpress.stackexchange.com
    78: https://gis.stackexchange.com
    79: https://electronics.stackexchange.com
    80: https://android.stackexchange.com
    81: https://security.stackexchange.com
    82: https://dba.stackexchange.com
    83: https://drupal.stackexchange.com
    84: https://sharepoint.stackexchange.com
    85: https://ux.stackexchange.com
    86: https://mathematica.stackexchange.com
    87: https://salesforce.stackexchange.com
    88: https://expressionengine.stackexchange.com
    89: https://pt.stackoverflow.com
    90: https://blender.stackexchange.com
    91: https://networkengineering.stackexchange.com
    92: https://crypto.stackexchange.com
    93: https://codereview.stackexchange.com
    94: https://magento.stackexchange.com
    95: https://softwarerecs.stackexchange.com
    96: https://dsp.stackexchange.com
    97: https://emacs.stackexchange.com
    98: https://raspberrypi.stackexchange.com
    99: https://ru.stackoverflow.com
    100: https://codegolf.stackexchange.com
    101: https://es.stackoverflow.com
    102: https://ethereum.stackexchange.com
    103: https://datascience.stackexchange.com
    104: https://arduino.stackexchange.com
    105: https://bitcoin.stackexchange.com
    106: https://photo.stackexchange.com
    107: https://scifi.stackexchange.com
    108: https://graphicdesign.stackexchange.com
    109: https://movies.stackexchange.com
    110: https://music.stackexchange.com
    111: https://worldbuilding.stackexchange.com
    112: https://cooking.stackexchange.com
    113: https://diy.stackexchange.com
    114: https://money.stackexchange.com
    115: https://academia.stackexchange.com
    116: https://law.stackexchange.com
    117: https://english.stackexchange.com
    118: https://skeptics.stackexchange.com
    119: https://judaism.stackexchange.com
    120: https://travel.stackexchange.com
    121: https://christianity.stackexchange.com
    122: https://ell.stackexchange.com
    123: https://japanese.stackexchange.com
    124: https://gaming.stackexchange.com
    125: https://bicycles.stackexchange.com
    126: https://rpg.stackexchange.com
    127: https://anime.stackexchange.com
    128: https://puzzling.stackexchange.com
    129: https://mechanics.stackexchange.com
    130: https://mathoverflow.net
    131: https://math.stackexchange.com
    132: https://stats.stackexchange.com
    133: https://cstheory.stackexchange.com
    134: https://physics.stackexchange.com
    135: https://chemistry.stackexchange.com
    136: https://biology.stackexchange.com
    137: https://cs.stackexchange.com
    138: https://philosophy.stackexchange.com
    139: https://meta.stackexchange.com
    140: https://stackapps.com
    141: https://api.stackexchange.com
    142: https://data.stackexchange.com
    143: https://area51.stackexchange.com
    144: https://www.facebook.com/officialstackoverflow/
    145: https://twitter.com/stackoverflow
    146: https://linkedin.com/company/stack-overflow
    147: https://creativecommons.org/licenses/by-sa/3.0/
    148: https://stackoverflow.blog/2009/06/25/attribution-required/
    149: https://pixel.quantserve.com/pixel/p-c1rF4kxgLUzNc.gif
    150: https://www.google-analytics.com/analytics.js

*/