/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023-01-22-16-MNIST-数字识别/index.html","6cc30ab60c14715c0fbe8fed3a02b290"],["/2023-01-22-16-MNIST-数字识别/output_12_0.png","fd325807d4924d4b892a95bb8a16591e"],["/2023-01-22-16-MNIST-数字识别/output_14_1.png","8cfd987a749fb3d78358cbf66ff706ad"],["/2023-01-22-16-MNIST-数字识别/output_3_0.png","2468d596e3d33b0870488087552f6c4c"],["/2023-01-22-16-MNIST-数字识别/output_3_1.png","4d6bcd79308974e8ecd1454b5b3ccaac"],["/2023-01-22-16-MNIST-数字识别/output_5_0.png","1ff492022f3ad9d7f0d6c69351af6d02"],["/2023-01-22-16-MNIST-数字识别/output_6_1.png","a6e0ec32fc867806fd8df6fe3ad1f63b"],["/2023-01-31-45-【个人总结】关于课外扩展和兴趣自学的方法步骤及注意事项/index.html","a43b54a849b53f626e1786cd80c40952"],["/2023-02-24-11-Git的学习与使用/20230308220609.png","8dc83fcf79327bf67265c49ee167e56d"],["/2023-02-24-11-Git的学习与使用/20230311201125.png","84fe63e6657ec741b867b9ecaef9825b"],["/2023-02-24-11-Git的学习与使用/20230311201417.png","5e6b791b72d85e2a92ebdd350f92a6c0"],["/2023-02-24-11-Git的学习与使用/20230311201530.png","7a8ba74391dc86f62a1fe4add0f4441a"],["/2023-02-24-11-Git的学习与使用/20230311202107.png","eafc898bb3c38742bd2a7bc858214938"],["/2023-02-24-11-Git的学习与使用/20230311203241.png","9dbf60fc2cabee07017fb07cdda7df3d"],["/2023-02-24-11-Git的学习与使用/20230311203511.png","4972c792d296644321990dc5570228af"],["/2023-02-24-11-Git的学习与使用/20230311203733.png","ce9df59ad38748f5787b2700e64a2bbd"],["/2023-02-24-11-Git的学习与使用/display.png","8585e71a267adc6ee90e790b07c20553"],["/2023-02-24-11-Git的学习与使用/index.html","e4a0cf447af670de7e4c5f45fda1b5f4"],["/2023-02-27-01-Python实现处理PDF文件/index.html","02ddf659a4804cc908b2d6b98f81da00"],["/2023-03-06-12-【转载】精力有限说/index.html","a62f5fc61e0d1d40ef5623074de199d5"],["/2023-03-06-13-【转载】About Computer Science/index.html","49cc87d9307d5487470b3c94567a865a"],["/2023-04-02-33-80x86汇编语言/index.html","b27ccea2fa4b64aab52154a5bfb70bf6"],["/2023-04-10-06-Freshman-Survive-SHU-Manual/index.html","f5a4fbd16ec30050ef05b3e79b63c2c8"],["/2023-04-15-52-Windows命令行与批处理基础/index.html","ca06a6d23478bf106132f81ab79d4063"],["/2023-07-16-48-【cs61a-projs】Cats/index.html","adafafe7ecf4b2b629f43b663a630c97"],["/2023-07-28-04-【winget】如何使用包管理器管理windows系统——高效日常操作/index.html","e3d728963f8e09c5f79bb2845c4aa8e8"],["/2023-07-28-21-Docker入门/index.html","6a21383bdbc30bbbf8fcceaa60a6df26"],["/2023-08-11-01-HPC-Design/figure9.png","577ab647358cf90e221c1819ac713c60"],["/2023-08-11-01-HPC-Design/index.html","ca8fb1a0ea6e58ad773c82fb4cb86403"],["/2023-08-11-40-ASC超算竞赛/index.html","eb4ed0f54cabdf52dd824aecdfc2c7ba"],["/2023-08-11-45-计算机组成与设计【软硬件接口】/index.html","0e368b2189dde9b7907a4c7d6e3b03ab"],["/2023-08-12-23-NJU-PA2022/20230813145605.png","335aef509bb469b8731b26fd227037f9"],["/2023-08-12-23-NJU-PA2022/20230813162607.png","686a244e702f20f7e8c9f4f91270d735"],["/2023-08-12-23-NJU-PA2022/20230813162756.png","1fe79160e410d4ca8b99a1b6e19e5a54"],["/2023-08-12-23-NJU-PA2022/20230813172406.png","eefadc4c9a42e0d1d09b07d4fe9cb734"],["/2023-08-12-23-NJU-PA2022/20230813172559.png","3b263e2f50584ce1532204567bf276b7"],["/2023-08-12-23-NJU-PA2022/index.html","37190e948fb4b333c51ecb1d73b71423"],["/2023-09-05-00-Python爬虫初步/index.html","e756d742b59942aa6b5e4f630476b465"],["/2023-09-05-52-从零配置windows11开发环境/index.html","456f64620c8c330f87e1e994634c24e6"],["/2023-09-06-46-cmake学习使用/index.html","f9a2ee7085b4f3ada4dae7e1cc792167"],["/2023-09-07-32-磁盘管理，改变你电脑磁盘的大小吧！/index.html","e72c17602b9bc7b0d1c912d241365cbe"],["/2023-09-10-50-Orangepi-zero3个人服务器开发/index.html","2e1e455fa653330c800d8fb6373975cb"],["/2023-10-12-31-Python虚拟环境原理——FISH解释/index.html","6ff625b347c6290a2d4d6878ac658846"],["/2023-10-17-26-深度学习服务器环境配置/index.html","75854506357012109f142838424316d0"],["/2023-10-17-48-conda包管理/20230401000756.png","945b5982bd7c2ed99215d22dbcad49e6"],["/2023-10-17-48-conda包管理/index.html","510fa6566e176150e4bc9e62bddd9719"],["/2023-10-17-48-【论文分享】DiffSinger：通过浅层扩散机制进行歌声合成/Figure1.png","6fe6adacc19a338b6ad3f7c0bbd934db"],["/2023-10-17-48-【论文分享】DiffSinger：通过浅层扩散机制进行歌声合成/Figure2.png","732b472f1ebb89ef7c84dbfb002b0cec"],["/2023-10-17-48-【论文分享】DiffSinger：通过浅层扩散机制进行歌声合成/index.html","e8f97a07a8cf2e9543bd6d63fa7eb649"],["/2023-11-25-09-SHU机组体实验——WSL-Docker实现/index.html","a13f50827d621cc605d1804261ba2635"],["/about/039.png","9f1cdf29f66867befd65a8a069e81989"],["/about/index.html","e0ecf0f5347e53a8013636da0daa197c"],["/archives/2023/01/index.html","b6bf9a0e84a316f962a7d48707775a51"],["/archives/2023/02/index.html","9695a7c212b9ad777afed329826d16b0"],["/archives/2023/03/index.html","8ea739deab10a7906e52d5694d7a91db"],["/archives/2023/04/index.html","77b6c7961aa26441c99fb74bd0f53433"],["/archives/2023/07/index.html","02ff348cae03d3229a5d8fe13f21eae0"],["/archives/2023/08/index.html","9d1af9f7a42868c2391a4e7719de49de"],["/archives/2023/09/index.html","fb685a4b0bceaa6337503c20ad1f8bf8"],["/archives/2023/10/index.html","6a69917c14575e69697b98c663d094fb"],["/archives/2023/11/index.html","1c9fb33d1a57783094b6bb47faf25734"],["/archives/2023/index.html","6e131aa7e95037f56680e3a57e6a05f3"],["/archives/2023/page/2/index.html","a38eaffcd187752f5e1ad54cdfdb3d23"],["/archives/2023/page/3/index.html","f3c7d05884e6f4a87590051773e72a2d"],["/archives/index.html","ce350ed023570b2181055f115b539d63"],["/archives/page/2/index.html","f90ab0c182e7f119bd06309119de2245"],["/archives/page/3/index.html","80a6779889d5fe0a257271caf1312aff"],["/categories/Learning/index.html","0def93d9f20d7a89066b7d23f2487479"],["/categories/Learning/page/2/index.html","6e047ab0c01ac162fb7650fc9dcf6bca"],["/categories/index.html","4747508df6e7553a5a773630eaa6b2fe"],["/categories/竞赛/index.html","beff0bc65bc0d0e6b7ab02076273099c"],["/categories/转载/index.html","f4e262a61708c50def2fb2e4c6a63493"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","5fa37ae4c8bb26a58b3eeefe4a3bbe1e"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/image/01.png","06ddc23c9705a51f9e557acd59fd6b4f"],["/image/02.jpg","a602ba9e31de467516f6eb3b93c01f67"],["/image/021.jpg","fb09a2ff88ec6a04b24e599fd0e91835"],["/image/022.jpg","267af214c5f5e8e682fa9ac3a62d52a9"],["/image/023.png","1818f3f7394584ac36eca4f55511c832"],["/image/024.jpg","55fa1c60ca54f9e47c2faded9c31b3bb"],["/image/025.png","b26d67f72f3234bb92a30651adfd0796"],["/image/026.jpg","addf1c36a8cc14ed6412859782f4e16d"],["/image/027.jpg","4f44975d8285d142f2e2b216c9c67762"],["/image/028.png","7e9b83d159d1dc101e21d5e26e388e92"],["/image/029.jpg","6ccfd6d02727e2ea1b95ec1408647450"],["/image/03.png","5f1de089a3c1d71d334833985e628034"],["/image/030.png","5730ac3a79cd2db97a98880fede7750d"],["/image/031.png","6817f089affe1b87d895cdfaa8900642"],["/image/032.png","45572a816981aa96d65b050408d7c4f3"],["/image/033.png","a85695cc8faf4b829097c81dbf553293"],["/image/034.png","3865d671bf467975a5e7d420002e20af"],["/image/035.png","1cd3176ee8f5e98cbaf15194d6ee7dd9"],["/image/036.png","d988725a2f973686ba2e5f8d24b73119"],["/image/037.png","61f4278853a74f92896af0957bc91386"],["/image/038.png","7bce3e420cfc5fd083c4054a27a6c437"],["/image/039.png","9f1cdf29f66867befd65a8a069e81989"],["/image/04.jpg","112f96f697249b8d809ba7967ecbc12e"],["/image/040.png","41399b7536924f566d5b2872cd5e92b1"],["/image/041.png","9fede0226497815ea61c80ac7467f760"],["/image/042.png","1e8a89553814ae1e39360e8e8f2496cf"],["/image/043.png","464caadcfc453ce9ac83c985e1b2b33a"],["/image/044.png","380b491ee92414376c777c23afeef560"],["/image/045.png","70f996d3aa510d42f0fee77c32b9a829"],["/image/046.png","e7d2b86c5149197e7f72a34903475b69"],["/image/048.png","fbee74acdff04e1417a282230110cf4a"],["/image/05.jpg","7b0c83f7ec9fe67f8bfa2486cf1c197e"],["/image/06.jpg","a5056fe2e9595565a64160ede11b8e0c"],["/image/07.jpg","a8371ef3dd912579d42f80e07093f99a"],["/image/08.jpg","1a6f474875b208438cf78e41861a8987"],["/image/09.jpg","d0dc8434beb25caf9ab65914171abb48"],["/image/10.jpg","b57544c2de388fe6f5d16caf6ffe8abe"],["/image/11.jpg","e328b38481eaa6e5df71a08538ea9825"],["/image/12.jpg","7c3234eed76b9bb2f80644af40a92838"],["/image/13.jpg","00de5c5a7c5e7ca0552cf56868a40ae0"],["/image/14.jpg","bcc034ade4dda937bc6f1d79b2a0b8ab"],["/image/15.jpg","76374fc28a597c70c0bc9d759f88648e"],["/image/16.jpg","3f68a09b0c7986870dd74298a12a6eb3"],["/image/17.jpg","7252e4270bace731aa71242d01219b0e"],["/image/18.jpg","e13a8909371b79dbdf7ee4f96a6d414d"],["/image/19.jpg","4cad0a37f8c66b9adccd3b875243c4f4"],["/image/20.png","8090f9af1719886aff63744b63d73c56"],["/image/35.png","04b478980a45e12d36ec9c63067940b9"],["/image/Lofter.png","0dba93e549d61b53d246ae626a998690"],["/image/blog_about.png","e1562e09d6b77abe24b1414bd908d1be"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","e259927f8ea40e842c79346843f19994"],["/js/main.js","88aced9e00713346dbf5f92453a349b2"],["/js/search/algolia.js","786b8da5325888c55c04e6b6687bf9f5"],["/js/search/local-search.js","aea55acb22a3b51ad16057b0ea52c0a9"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","e95ad73d5170f72ae1596b3d9abb7ed3"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/links/index.html","6c605edb390883869ede82eadd87ff36"],["/page/2/index.html","4c92db71ea15abd2ae4db34351944cf2"],["/page/3/index.html","632a7823504304e6e6c976b8cf33d130"],["/sw-register.js","9f580e1f7f32768f7ce8bc7b0011a3a5"],["/tags/ASC/index.html","d96567ca6385496292912690083a22d3"],["/tags/C-C/index.html","2b5669073202eeb4f6c12438de1ef819"],["/tags/index.html","a2b206ec62a4be3a8d1b030046bac11b"],["/tags/windows/index.html","bf41d09c2035c047e08d6c3c6949ad6d"],["/tags/应用/index.html","33e7df8ef9eefd8e81a66171caea3c36"],["/tags/数据分析/index.html","acff23f6290b2e18e144652066c3cf81"],["/tags/服务器/index.html","fa082e1eafad7ece514be056b639451a"],["/tags/机器学习/index.html","926ec0a46e653d3ef46b48e9e5aefc11"],["/tags/深度学习/index.html","87da6303828d596a220f25713c20840d"],["/tags/经验/index.html","93eb18603a5703a1f6d13b22678f40d6"],["/tags/自学/index.html","3c93d7df43e83d68365185fe13e8dc08"],["/tags/装机/index.html","0ac8a13163eafb2ffa428c03d24cf430"],["/tags/计算机/index.html","2db88af1ea43344c4b268180a6624831"],["/tags/设计/index.html","79af39e4b030732619aba173f429b2ae"],["/tags/跨平台/index.html","1fd794be855f308c33b22971a2ca653d"],["/tags/项目开发/index.html","99d4bb53b4fa32288a5aa844d609395a"]];
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
