#To use 

// 初始化空间
UPYUN.config("buckname", "username", "password");

//获取空间占用大小
// UPYUN.getBucketUsage(testCallback);

// UPYUN.getFolderUsage('/', testCallback);

// UPYUN.writeFile('/test.txt', '12323231', false, testCallback);

// UPYUN.writeFile('/test/test.txt', '12323231', true, testCallback);

// UPYUN.getFileInfo('/test.txt', testCallback);

// var fs =  require('fs');
// var fileContent = fs.readFileSync('test.jpg');
// var md5Str = md5(fileContent);
// UPYUN.setContentMD5(md5Str);
// UPYUN.setFileSecret('bac');
// UPYUN.writeFile('/test.jpg', fileContent, false, function(err, data){
//     if (!err) {
//         console.log(data);
//         console.log(UPYUN.getWritedFileInfo('x-upyun-width'));
//         console.log(UPYUN.getWritedFileInfo('x-upyun-height'));
//         console.log(UPYUN.getWritedFileInfo('x-upyun-frames'));
//         console.log(UPYUN.getWritedFileInfo('x-upyun-file-type'));
//     }
// });

// UPYUN.readFile('/test.txt', 'test.txt', testCallback);

// UPYUN.deleteFile('/test.txt', testCallback);

// UPYUN.mkDir('/test1', true, testCallback);

// UPYUN.rmDir('/test1', testCallback);

// UPYUN.readDir('/', testCallback);

function testCallback(err, data) {
    if (!err) {
        console.log('Data: ');
        console.log(data);
    }
    else {
        console.log('Error: ');
        console.log(err);
    }
}

function md5(string) {
    var crypto = require('crypto');
    var md5sum = crypto.createHash('md5');
    md5sum.update(string, 'utf8');
    return md5sum.digest('hex');
}
