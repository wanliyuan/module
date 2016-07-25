
var getByteLength = function (str) {
    var byteLen = 0, len = str.length;
    if (!str) return 0;
    for (var i = 0; i < len; i++)
        byteLen += str.charCodeAt(i) > 255 ? 2 : 1;
    return byteLen;
};

var Tabfun = function (oNav, aCon, sEvent) {
    var aElem = oNav.children();
    aCon.hide().eq(0).show();

    aElem.each(function (index) {
        $(this).on(sEvent, function () {
            aElem.removeClass('active');
            $(this).addClass('active');
            aCon.hide().eq(index).show();
        });

    });
}