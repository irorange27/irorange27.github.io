/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023-01-22-16-MNIST-数字识别/index.html","c2be82982ed74f4fdef9ecbcde3d12a8"],["/2023-01-22-16-MNIST-数字识别/output_12_0.png","fd325807d4924d4b892a95bb8a16591e"],["/2023-01-22-16-MNIST-数字识别/output_14_1.png","8cfd987a749fb3d78358cbf66ff706ad"],["/2023-01-22-16-MNIST-数字识别/output_3_0.png","2468d596e3d33b0870488087552f6c4c"],["/2023-01-22-16-MNIST-数字识别/output_3_1.png","4d6bcd79308974e8ecd1454b5b3ccaac"],["/2023-01-22-16-MNIST-数字识别/output_5_0.png","1ff492022f3ad9d7f0d6c69351af6d02"],["/2023-01-22-16-MNIST-数字识别/output_6_1.png","a6e0ec32fc867806fd8df6fe3ad1f63b"],["/2023-01-31-45-【个人总结】关于课外扩展和兴趣自学的方法步骤及注意事项/index.html","5abd5b7a00ab337978178166697baefe"],["/2023-02-24-11-Git的学习与使用/20230308220609.png","8dc83fcf79327bf67265c49ee167e56d"],["/2023-02-24-11-Git的学习与使用/20230311201125.png","84fe63e6657ec741b867b9ecaef9825b"],["/2023-02-24-11-Git的学习与使用/20230311201417.png","5e6b791b72d85e2a92ebdd350f92a6c0"],["/2023-02-24-11-Git的学习与使用/20230311201530.png","7a8ba74391dc86f62a1fe4add0f4441a"],["/2023-02-24-11-Git的学习与使用/20230311202107.png","eafc898bb3c38742bd2a7bc858214938"],["/2023-02-24-11-Git的学习与使用/20230311203241.png","9dbf60fc2cabee07017fb07cdda7df3d"],["/2023-02-24-11-Git的学习与使用/20230311203511.png","4972c792d296644321990dc5570228af"],["/2023-02-24-11-Git的学习与使用/20230311203733.png","ce9df59ad38748f5787b2700e64a2bbd"],["/2023-02-24-11-Git的学习与使用/display.png","8585e71a267adc6ee90e790b07c20553"],["/2023-02-24-11-Git的学习与使用/index.html","44a32d74af9893578b43533152625fb5"],["/2023-02-27-01-Python实现处理PDF文件/index.html","40e40c45ed16d34427636410e399c798"],["/2023-03-06-12-【转载】精力有限说/index.html","39215dc551f6936d717a9f8a0b67b130"],["/2023-03-06-13-【转载】About Computer Science/index.html","6fadceed83fffb70f162554ba2a4576d"],["/2023-04-02-33-80x86汇编语言/index.html","49eb6ec2ffe6e33113b96c0c1643818d"],["/2023-04-10-06-Freshman-Survive-SHU-Manual/index.html","9ad1a0d361f4a90d3667d0443581733d"],["/2023-04-15-52-Windows命令行与批处理基础/index.html","3200719e407004f38ffb8ad0718514f3"],["/2023-07-16-48-【cs61a-projs】Cats/index.html","8d589a5d81305f0d98e00354ea2bbd4c"],["/2023-07-28-04-【winget】如何使用包管理器管理windows系统——高效日常操作/index.html","3952e2e3eeab8827b08117277f8f9146"],["/2023-07-28-21-Docker入门/index.html","70c8cdeab75ce939aeb6ca3aaca3d869"],["/2023-08-11-01-HPC-Design/figure9.png","577ab647358cf90e221c1819ac713c60"],["/2023-08-11-01-HPC-Design/index.html","7914b7eb3abefd2ae82044c195602c29"],["/2023-08-11-40-ASC超算竞赛/index.html","2070869868b6135dab75e3e55aeb3598"],["/2023-08-11-45-计算机组成与设计【软硬件接口】/index.html","ac22d3eb678e2b12a1a38e853c152b2a"],["/2023-08-12-23-NJU-PA2022/20230813145605.png","335aef509bb469b8731b26fd227037f9"],["/2023-08-12-23-NJU-PA2022/20230813162607.png","686a244e702f20f7e8c9f4f91270d735"],["/2023-08-12-23-NJU-PA2022/20230813162756.png","1fe79160e410d4ca8b99a1b6e19e5a54"],["/2023-08-12-23-NJU-PA2022/20230813172406.png","eefadc4c9a42e0d1d09b07d4fe9cb734"],["/2023-08-12-23-NJU-PA2022/20230813172559.png","3b263e2f50584ce1532204567bf276b7"],["/2023-08-12-23-NJU-PA2022/index.html","561f8c0e723e177117c13213777817bf"],["/2023-09-05-00-Python爬虫初步/index.html","5bb19753b70364fb636a7952d4bada95"],["/2023-09-05-52-从零配置windows11开发环境/index.html","26dea195cb6b38ce7e8b1384e164b25e"],["/2023-09-06-46-cmake学习使用/index.html","57f651a62aaeaf797cf6b44e4177edc4"],["/2023-09-07-32-磁盘管理，改变你电脑磁盘的大小吧！/index.html","36ee80bf06b10468baa20dbd672729a3"],["/2023-09-10-50-Orangepi-zero3个人服务器开发/index.html","0eb7ce918aae33ad6151362b0ab0a573"],["/2023-10-12-31-Python虚拟环境原理——FISH解释/index.html","d79e40b0de16811bfcd51821ec82885a"],["/2023-10-17-26-深度学习服务器环境配置/index.html","5e7f8cf5f89cbb01faf8bd14b4d13ecf"],["/2023-10-17-48-conda包管理/20230401000756.png","945b5982bd7c2ed99215d22dbcad49e6"],["/2023-10-17-48-conda包管理/index.html","ff5ce90096a7b3ead20803e0c08797a3"],["/2023-10-17-48-【论文分享】DiffSinger：通过浅层扩散机制进行歌声合成/Figure1.png","6fe6adacc19a338b6ad3f7c0bbd934db"],["/2023-10-17-48-【论文分享】DiffSinger：通过浅层扩散机制进行歌声合成/Figure2.png","732b472f1ebb89ef7c84dbfb002b0cec"],["/2023-10-17-48-【论文分享】DiffSinger：通过浅层扩散机制进行歌声合成/index.html","a036f5ac0232d1cf7e7187a41e79d68a"],["/2023-11-25-09-SHU机组体实验——WSL-Docker实现/index.html","161af4b476debbc66029b90099a72130"],["/about/039.png","9f1cdf29f66867befd65a8a069e81989"],["/about/index.html","9a7b5a7ace885c23965316ba6cddd78c"],["/archives/2023/01/index.html","7dc748ddfded6b87e31a0c692da3574b"],["/archives/2023/02/index.html","178112860c4a44bb633279058fdcb127"],["/archives/2023/03/index.html","31ef09406f36d90c9dffc80d0d0cba36"],["/archives/2023/04/index.html","9dc5560f1dbc9a3b81cd38ceb165f0cf"],["/archives/2023/07/index.html","99dfb74527e09ecc260ef6be385f24cb"],["/archives/2023/08/index.html","76168bcf59a98064b3b51d11ed51282f"],["/archives/2023/09/index.html","05acd0934c2873f6f756ec6a51a23e8f"],["/archives/2023/10/index.html","87f02ba6a29d0dd7c09e3879cc0b91a6"],["/archives/2023/11/index.html","537a7a1864723c9c1bc6a1a039847670"],["/archives/2023/index.html","325f21fb391e3b1be1fb9bb29d1fef0f"],["/archives/2023/page/2/index.html","b9d544db3aac49d52ca044312c12e2b2"],["/archives/2023/page/3/index.html","2b5b61f4c06a533a92886145a38e2694"],["/archives/index.html","9dd833c0d0cfcdbf95b1144014020af0"],["/archives/page/2/index.html","fa89baaf83418d3573a027794b489605"],["/archives/page/3/index.html","674f8d79d0791a03f6c0d1ac68f84c14"],["/categories/Learning/index.html","249dfcebd60ec930fa4cc3d5cf92308f"],["/categories/Learning/page/2/index.html","c560b849322ef31ddb907471acd0e1d2"],["/categories/index.html","c0b5b6607a3c448762a7661d10b96850"],["/categories/竞赛/index.html","fc2d44126eb275e7066c5472dc56ea7f"],["/categories/转载/index.html","9462c9c24bb2822908d528aa08c4a961"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","e2029ea5b8fc59dbdb894a7b47bc1a42"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/image/01.png","06ddc23c9705a51f9e557acd59fd6b4f"],["/image/02.jpg","a602ba9e31de467516f6eb3b93c01f67"],["/image/021.jpg","fb09a2ff88ec6a04b24e599fd0e91835"],["/image/022.jpg","267af214c5f5e8e682fa9ac3a62d52a9"],["/image/023.png","1818f3f7394584ac36eca4f55511c832"],["/image/024.jpg","55fa1c60ca54f9e47c2faded9c31b3bb"],["/image/025.png","b26d67f72f3234bb92a30651adfd0796"],["/image/026.jpg","addf1c36a8cc14ed6412859782f4e16d"],["/image/027.jpg","4f44975d8285d142f2e2b216c9c67762"],["/image/028.png","7e9b83d159d1dc101e21d5e26e388e92"],["/image/029.jpg","6ccfd6d02727e2ea1b95ec1408647450"],["/image/03.png","5f1de089a3c1d71d334833985e628034"],["/image/030.png","5730ac3a79cd2db97a98880fede7750d"],["/image/031.png","6817f089affe1b87d895cdfaa8900642"],["/image/032.png","45572a816981aa96d65b050408d7c4f3"],["/image/033.png","a85695cc8faf4b829097c81dbf553293"],["/image/034.png","3865d671bf467975a5e7d420002e20af"],["/image/035.png","1cd3176ee8f5e98cbaf15194d6ee7dd9"],["/image/036.png","d988725a2f973686ba2e5f8d24b73119"],["/image/037.png","61f4278853a74f92896af0957bc91386"],["/image/038.png","7bce3e420cfc5fd083c4054a27a6c437"],["/image/039.png","9f1cdf29f66867befd65a8a069e81989"],["/image/04.jpg","112f96f697249b8d809ba7967ecbc12e"],["/image/040.png","41399b7536924f566d5b2872cd5e92b1"],["/image/041.png","9fede0226497815ea61c80ac7467f760"],["/image/042.png","1e8a89553814ae1e39360e8e8f2496cf"],["/image/043.png","464caadcfc453ce9ac83c985e1b2b33a"],["/image/044.png","380b491ee92414376c777c23afeef560"],["/image/045.png","70f996d3aa510d42f0fee77c32b9a829"],["/image/046.png","e7d2b86c5149197e7f72a34903475b69"],["/image/048.png","fbee74acdff04e1417a282230110cf4a"],["/image/05.jpg","7b0c83f7ec9fe67f8bfa2486cf1c197e"],["/image/06.jpg","a5056fe2e9595565a64160ede11b8e0c"],["/image/07.jpg","a8371ef3dd912579d42f80e07093f99a"],["/image/08.jpg","1a6f474875b208438cf78e41861a8987"],["/image/09.jpg","d0dc8434beb25caf9ab65914171abb48"],["/image/10.jpg","b57544c2de388fe6f5d16caf6ffe8abe"],["/image/11.jpg","e328b38481eaa6e5df71a08538ea9825"],["/image/12.jpg","7c3234eed76b9bb2f80644af40a92838"],["/image/13.jpg","00de5c5a7c5e7ca0552cf56868a40ae0"],["/image/14.jpg","bcc034ade4dda937bc6f1d79b2a0b8ab"],["/image/15.jpg","76374fc28a597c70c0bc9d759f88648e"],["/image/16.jpg","3f68a09b0c7986870dd74298a12a6eb3"],["/image/17.jpg","7252e4270bace731aa71242d01219b0e"],["/image/18.jpg","e13a8909371b79dbdf7ee4f96a6d414d"],["/image/19.jpg","4cad0a37f8c66b9adccd3b875243c4f4"],["/image/20.png","8090f9af1719886aff63744b63d73c56"],["/image/35.png","04b478980a45e12d36ec9c63067940b9"],["/image/Lofter.png","0dba93e549d61b53d246ae626a998690"],["/image/blog_about.png","e1562e09d6b77abe24b1414bd908d1be"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","22fb50522a286760aa3a64bea87f1bfa"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/links/index.html","08d9acfa33a45bc9e292b892abdc3faf"],["/page/2/index.html","b071ae68b32f2126fbe8f0b7d1cc71d2"],["/page/3/index.html","b46bc6edc7e194ee7beff63e478a4285"],["/sw-register.js","34f20bd3cffee00982da8ac9612d89f9"],["/tags/ASC/index.html","4c84f6fc9f7935a402f39d8ebf44f2a4"],["/tags/index.html","87a7bd3555d2b6c98df76eb68a19e91e"],["/tags/windows/index.html","46aa525b1824fbfe073f4ec6e3b0733f"],["/tags/应用/index.html","bdaadcf561f2cdcb74141efe77580d56"],["/tags/数据分析/index.html","e8bbf480f28af61b5f679e0b54418642"],["/tags/服务器/index.html","80c94e38e59c0b18cb3383c8121a90d5"],["/tags/机器学习/index.html","817aafcfa87b3ade37da2f716415c26d"],["/tags/深度学习/index.html","fb6fa3564bd273ebbd608a4f0b75a39d"],["/tags/经验/index.html","e2324503ce1370f51b30a83ac93db82d"],["/tags/自学/index.html","e462eba58b0dab42624bb37c8a0b158f"],["/tags/装机/index.html","0717997f6967eb805adb14b7e984b101"],["/tags/计算机/index.html","6648ada9a5cb09091140c8f3eeead65c"],["/tags/设计/index.html","2d150f105946f8f5a286aa8c5805c5aa"],["/tags/跨平台/index.html","b9083d87c2f1859281f7407252c615d9"],["/tags/项目开发/index.html","8e5a8840e10343394b48fb604bd78340"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
