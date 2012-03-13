(function () {
    function getFileType(a) {
        a = a.split('.');
        if (a.length == 1) return false;
        if (~a[a.length - 1].indexOf('/')) return false;
        return a[a.length - 1]
    }
    for (var fileList = [], els = document.getElementsByTagName('a'), i = 0; els[i]; i++) getFileType(els[i].href) && fileList.push('\'' + els[i].href + '\'');
    var ta = document.createElement('textarea');
    ta.setAttribute('onclick', 'this.select()');
    ta.setAttribute('style', 'width:100%');
    ta.setAttribute('rows', fileList.length);
    ta.innerHTML = fileList.join(' ');
    document.body.appendChild(ta);
})()
