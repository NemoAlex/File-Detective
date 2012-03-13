#File Detective

File Detective is a simple bookmarklet that can help you get all files' url in page.

##How to use

===

Drag this link [Detective]("javascript:(function(){function getFileType(a) { a = a.split('.'); if (a.length == 1) return false; if (~a[a.length - 1].indexOf('/')) return false; return a[a.length - 1] } for (var fileList = [], els = document.getElementsByTagName('a'), i = 0; els[i]; i++) getFileType(els[i].href) && fileList.push('\'' + els[i].href + '\''); var ta = document.createElement('textarea'); ta.setAttribute('onclick', 'this.select()'); ta.setAttribute('style', 'width:100%'); ta.setAttribute('rows', fileList.length); ta.innerHTML = fileList.join(' '); document.body.appendChild(ta);})()") onto your browser's the bookmark bar.

If this does not work in your browser, you may copy the link to a new bookmark. The bookmarklet can then be run by loading the bookmark normally.