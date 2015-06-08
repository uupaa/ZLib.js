var ModuleTestZLib = (function(global) {

global["BENCHMARK"] = false;

var test = new Test("ZLib", {
        disable:    false, // disable all tests.
        browser:    true,  // enable browser test.
        worker:     true,  // enable worker test.
        node:       true,  // enable node test.
        nw:         true,  // enable nw.js test.
        button:     true,  // show button.
        both:       true,  // test the primary and secondary modules.
        ignoreError:false, // ignore error.
        callback:   function() {
        },
        errorback:  function(error) {
        }
    }).add([
        testMessagePack_ZLib_inflate,
    ]);

if (IN_BROWSER || IN_NW) {
    test.add([
        // browser and node-webkit test
    ]);
} else if (IN_WORKER) {
    test.add([
        // worker test
    ]);
} else if (IN_NODE) {
    test.add([
        // node.js and io.js test
    ]);
}

// --- test cases ------------------------------------------
function testMessagePack_ZLib_inflate(test, pass, miss) {

    var source = [
        WebModule.ZLib.inflate(new Uint8Array(0), { verify: false })
    ];
    test.done(pass());
}

return test.run();

})(GLOBAL);

