var testUtil = require('blueoak-server').testUtility();

describe('BOS Test Info', function () {
	process.stdout.write('BlueOak Server test utility functions:\n- ' + Object.keys(testUtil).join('\n- '));
});
