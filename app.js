var http = require('http');

var qs = require('querystring');

var interfaces = require('os').networkInterfaces();

function getIPAdress() {
    for (var devName in interfaces) {
        var iface = interfaces[devName];
        for (var i = 0; i < iface.length; i++) {
            var alias = iface[i];
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                return alias.address;
            }
        }
    }
}

var post_data = {
    clientIp: getIPAdress(), // IP地址，务必传客户端真实ip
    mCount: 1, // 素材个数
    mStyle: '018', // 素材样式:大图:001，单图:002，三图:003，开屏:004，激励视频:018
    apid: '6qicmykru5iy', // 广告位id
    packageName: 'com.boolbird.dailynews', // 应用包名
    appVer: '1.2.0', // 应用版本
    imei: '866174010024327', // Android 传IMEI 号,IOS 传IDFA,不可为空，数据使用MD5加密，格式32位小写
    deviceId: 'bf70e32d06a54fb3', // 设备系统ID,IOS传idfv或openudid,ndroid传AndroidID
    mac: '5c%3A0e%3A8b%3Aeb%3A27%3Ab0', // 网卡MAC地址
    os: 'Android', // 设备系统:Android、iOS
    osVersion: '8.1.0', // 设备系统版本
    network: '4', // 网络连接类型: Unknown:0，WIFI:1 ，2G:2，3G:3，4G:4，5G:5
    vendor: 'vivo', // 设备厂商名称
    model: 'vivoV3', // 设备型号
    operater: '46002', // 运营商信息：46000 中国移动、46001 中国联通、46002 中国移动、46003 中国电信
    userAgent: 'Mozilla%2F5.0+(Linux%3B+Android+8.1.0%3B+vivo+V3+Build%2FLMY47V)+AppleWebKit%2F537.36+(KHTML%2C+like+Gecko)+Version%2F4.0+Chrome%2F39.0.0.0+Mobile+Safari%2F537.36', // 设备User_agent
    screenWidth: '1800', // 设备屏幕宽
    screenHeight: '1920', // 设备屏幕高
    position: '陕西省', // 地域(单位:省)
    platform: 1, // 平台: app ：1、p c ：3、wap ：4
    mWidth: '360', // 广告宽
    mHeight: '360', // 广告高
    isHttps: 0 // 是否支持https 支持 ：1、不支持：0
};//这是需要提交的数据  


var content = qs.stringify(post_data);

var options = {
    hostname: '62.234.201.244',
    port: 80,
    path: '/export/TPXjOu.api',
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
};

var req = http.request(options, function (res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        console.dir(chunk);
    });
});

req.on('error', function (e) {
    console.log('problem with request: ' + e.message);
});

// write data to request body  
req.write(content);

req.end();

var ret = {
    "code": 1001,
    "currentTime": 1571154316106,
    "data": [
        {
            "clickReport": [
                "http://test-nativemateriallog.tt.cn/datalog/exportclick?n=___pageNum___&i=___pageIndex___&r=7819597a7c194f369c548882506ba3ea&v=s4Q2ZK88XEo2Oy9dqzByqhrcABZ3iyevtM-PTNRP01LCQq1Lr4fiDuqXVceXWrNs9FNyPY2OxS9kOLjHcBT8OPOiOCDA3BQMV8WKDrswjq1vDnQzabydMSDSRYqVcLQaX6YWyoNH4ly-yaZHM8-USyadDxLLl606oyxuKbflW1IMPTHxoQOUQvd5McBJjCenXcuqme4oF0EeY4EqDSkymkZo2CRsLrOcHLLcIPduZxg9UA8VWG6PB5OshfcbNYsueThD0CT5ccYFYv.7vmpVL318Sq13yrR6qGLDIBCg0vos5WHsnMoGuKyAuCTSfkeDxR9Fm-BUrv6LlttXv2778Tu9KOwxitXkR5eANkTr7Y3U8KplkGmgRO684v1.eh99BKlWF-.WjOCzBjXhOhU69AW9vbPaN3vJJB-Fu0wQi5tAAHS.N1nSuohgwKG.Kin7WnyPZ90TiE6egJCpbBngJJ-XNLPH2ip2ukH5yg-4uUTnO77f2Xxp6miOCpDifAeCtREwM-9OPN2xh3yjeNT7EK3.FlMNJDQyGujWXKm33Vhy6SjMH0Ot5mSAwij3JTExIRBq3rWO4-fWqNmdphy-QEq3GBdH18cc1F2XAouNQEfOs737Uk6X5PBSq2dq-EEL81reMlOT5NQa3Ua1ux8sQUZBa0Skjjq3KFf9NbGK9jJpRMTgbdDZLmxR-92CGt9-SBSFyCYUFXNAwZdSzWZZsIT3nrBemGF8I6EWT.PnCWXOu0i5F6YBJR3SSbn7jJNzlyZR-GK-2MSS-k5PK47CN0PWaE.346djrqoEB4VFOUNdNiqFBUmG-AIL89CQqpB7xCdbYvhuhfaE-B3JNqTu6COaxnoX.oFOMAyYhTxes6I_"
            ],
            "comments": 5,
            "deepLink": "",
            "downLink": "",
            "endDownReport": [],
            "finishReport": [
                "http://test-nativemateriallog.tt.cn/datalog/exportfinish?n=___pageNum___&i=___pageIndex___&r=7819597a7c194f369c548882506ba3ea&v=.xa2gnTA7Gb12J5x6a5TvhMdS2EYfVSNBaFLek2XK784x4qTYjZKtXjpsV19bOv-1lPAS7GXHnZbbGZn58R5syd.r4qVHesASKqOFYEtrVtdy5JIDYOg.uXMc3MTQnbQa5KsPtH7AJz5rEPU-74vPDEp0o6EbZu.0b4l31hAeLo7xfRuqf1d0a6zQ1Pfqkb53SZGF5m80PLmuAIJBfM1JTmE-tfPHdvLDKEUlENsuyXFio6dGzq0HYji1NfYfxjXSbRtR6wQRE6Haru7y5d3Eg0me09rx31NIEJWtT8mAzSh6KNSXYaT.51TlKLTgYb3UV5aGqOVHJ.rccdiejD8MusQUa.oqgK5FLqTY0QVtZlt3.SZD9pOVxZEOGkLu0H-6jdcyYv2AlAhlETCYYKLyzjG.JJbek3HHn9EBjD9qXkEBq4FLdKb3OIhL15buO0y8ooMEz1Ck0cmpaSQfoX6uKUumSnXEwzriWsfgCZOp2A0r0JQvimK.SuR7kUYx5cRJgRQsV9iV-GtALJG2D1evoZ8-9UdyLTi1TL5Hq8UJz6uIA3JKuKTgtyU5Gk0umyLPQqqFNpftCbSYimpwi957h3RPg9KAFWtyzC98uL8oPIccTrgDy-a0-pxW-hGiRVUJJILJb53OIbvsW9cRazQ51t1o.0ayj2Iv7mE26MwJpxUYTsruoU3qmawSzAVKoy-BWG20Qv3Au2rr2XDC1G1pnZjfDUaFhGVIgGmcBe7EpP18MJJ1xte6e59GIszgZy1moCPxMfs06wlNoaHttZ85eC0L8tg3-P3DOjUo.Lf1qnjAR6ioAE5jfSqFvSdfn-6xe3fFNpwnzX3cTR.sWudHUEL-.bloxZBgdckKxNei1o_"
            ],
            "iconUrl": "https://xmtransfer.dpqct.com/121019/image/6de25908-822d-4e9a-b5e7625265.png",
            "imageMaterial": [
                {
                    "height": 250,
                    "src": "https://xmtransfer.dpqct.com/121019/image/2dc183f4-4b7f-40ae-aea8311421.jpg",
                    "width": 500
                }
            ],
            "inViewReport": [
                "http://test-nativemateriallog.tt.cn/datalog/exportinview?n=___pageNum___&i=___pageIndex___&r=7819597a7c194f369c548882506ba3ea&v=MuRU4H9M-LgWhmGZUJ5G5Z.MGgSBwQL9pS4AQ8rQrY4BpcJ04HcXzjuQ0EJR7TDtarR7ht39.lw0BSTbocVlBr4YqNwyvrimzxRQnwak6SzJvSA93rYqdHuQEXTGJW63Cl1OcY8071qG2zJFihLnErnpBApToYEgwnL3rSxV3Mc3NTizW3bX3r43kmAPPL6ndHe87zWnv9SknBwvMNGWq3w5TdlHtpoVOZFit7QCLTRO5yL0dSWc4ZT5vqK3UajT1fwcBavEGSpJ4xO6KpylTXag2kyRTSu-OxdFBE.aZIy7FTgB5U.s3kJTP66nfNr37JeJBULzpc9BtnnJpjm6kA5MXfP9XM1PicnvwftnVdlpHYGbv6ymLKGe9DqPIIkC1vFGTL5CAJcpKhaYOKFcYSr8FTfs-bJT.w7Xouzb.aaHIC-p55Q1d2N3d6cAB7fTU3UBOahT35TB9MW0S6KgJugMT3gprClWIzioIp.x8QCv.TUg9s1rl4X2ZRN2SInZHnsFQaEIwyrNFAnvVLKq5zcsLFdiXOCqrPB8k14wpp6qXCkgckRwtrYgZk33X1.wAbatmq5iLX8YRmDxcQrR3jck1D4N6CIC7yASrZWlD5IkdugJFpCOb7cE1b3sFWrroJctyoEB6G9duHoi34H7KTt-orpyI-MMl7DI.zxs2PfWBX3D4JjCGWhHJYGeCVKqnL0FiUJSRPPiW1XvkPFmvj1pbxGVntL5emQ4FoptX83U5AX98wgvTem33QXld6QiSE8vikmcKICR5DkPvutLlvCtwvD6lZXAv0hIUyt536Z9byMn.fU1A6ePZqiLEaUILMVjtb4CQvSYpBE.jPaeC42kv.NNtRIxB8u7PbJ6FmM_"
            ],
            "landingLink": "http://",
            "mStyle": "018",
            "mType": 0,
            "rating": 5.0,
            "showReport": [
                "http://test-nativemateriallog.tt.cn/datalog/exportshow?n=___pageNum___&i=___pageIndex___&r=7819597a7c194f369c548882506ba3ea&v=LRjkcavZJMZQFhnPENmhc9fOH5XTylqzTXmkoIf7kYdYFVBFKnIvqIYYaXEwcL5MGy0qtC5OdopnQdbBDiTs-taJHQp7ENFjVfZyZA6xnKOaBQQApCPBBdHd2nQpyuNGKFC9Oeu2mi1UqWBCac5mbJ69PoWxAJJnj3wmfnwmqgGPXXLhis2adhiPXO7ltsKUznMBDqiS6lIV-5w1ZVVO57u4DR8ulkOTmW8fxLsykbxQNSt-3JK3.DVBL9.TS8awllsOh3zSXg9MEEdfkVc-PFrPQ45mwDnxJ5q0xAkU5Jxg1jvBx2BqS9h1-yk6zYDbrqAmfbhEz.G-gJTWnw48KqWfQEtu6DZsegrBurdUex1mB8M21193eJxVsszYDKbrAe5HWBbb8FlqfmEMRKJVCDuW2Z.s3nTIE0PmgM-xXSx0A-JPNlAC7bXDMOFv1H4W0QKDw7IGz-e7Fq-PvRIzzMlJhKvkFt748dQZMJdEzb87SzkSN45xKWt.YJlsq0wngi5Pd.Ajoe3z4SFyuPoWQZxc.-RweihzsNH5icC4-zkrTpi1hkLkwUKNvxDCOj3WTdNFFzZEPLbZx.Ne5Xx6HrRfeMe32xw00HW4te1XwE91tgOeXLGFNv8lYAsL-JB5gN0PzdRafJ1IF-qBhGMV8k6bsgqU8JlZBpMQu1U6Tyx9aKe.qZMZxbhuEA59pUOwRwRqpb2Tb4ybu1tSqdatoMb4YlKuIxB96T1OIrnO9dB96FMAvwBO5s5mJO0HTleW-Emky2WJ-rXw2euAPwdb1lWJN-fl.VmEr8kvSJmvRfbP3lH9cMceuuMC1yck4A3u4F.oxZWlTUtfV413gRXwMBdOhKffWRfYVfo3zcC6ubQ_"
            ],
            "source": "xm",
            "startDownReport": [],
            "subTitle": "aaaa",
            "title": "aaaa",
            "videoMaterial": [
                {
                    "videoLink": "https://xmtransfer.ewuqa.com/121019/video/281d5bb0-f317-4c1b-b2d6979248.mp4",
                    "videoTime": 15163
                }
            ]
        }
    ],
    "passBack": "7819597a7c194f369c548882506ba3ea"
}
