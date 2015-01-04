load("init.js");

testOnAllDevices("Menu Highlight", "/dist/app/", function (driver, device) {
    checkLayout(driver, "test/specs/index.spec");
});


