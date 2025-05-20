const PDFMerger = require('pdf-merger-js');

var merger = new PDFMerger();

const mergePdfs = async (pdfs) => {
    
    for(let x = 0; x < pdfs.length; x++)
        await merger.add(pdfs[x]);  //merge all pages. Parameter is the path to file and filename.

    fname = `${new Date().getTime()}`

    await merger.save(`public/merged/${fname}.pdf`); //save under given name and reset the internal document
    
    return fname
}

module.exports = {mergePdfs}