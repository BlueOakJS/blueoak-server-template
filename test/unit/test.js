var testUtil = require('blueoak-server').testUtility();

describe('Empty test', function () {
	process.stdout.write('BlueOak Server test utility functions:\n- ' + Object.keys(testUtil).join('\n- '));
});
