const createTestCafe = require('testcafe');
const chromium = require('chromium');
let testcafe = null;

createTestCafe('localhost', 1337, 1338)
    .then(runTests)
    .catch(console.log)
    ./*always*/ then(endTests);

    
function runTests(tc) {
    testcafe = tc;
    return testcafe
        .createRunner()
        .src('./scripts/dataidChecklist.js')
        .reporter("spec")
        .browsers({ path: chromium.path })
        .run();
}

function endTests() {
    testcafe.close();
    process.exit();
}