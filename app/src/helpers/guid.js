define([], () => {
    return () => {
        var p0 = '00000000' + Math.round(Math.random() * 100000000); p0 = p0.substr(p0.length - 8);
        var p1 = '0000' + Math.round(Math.random() * 10000); p1 = p1.substr(p1.length - 4);
        var p2 = '0000' + Math.round(Math.random() * 10000); p2 = p2.substr(p2.length - 4);
        var p3 = '0000' + Math.round(Math.random() * 10000); p3 = p3.substr(p3.length - 4);
        var p4 = '000000000000' + Math.round(Math.random() * 1000000000000); p4 = p4.substr(p4.length - 12);
        return p0 + '-' + p1 + '-' + p2 + '-' + p3 + '-' + p4;
    };
});