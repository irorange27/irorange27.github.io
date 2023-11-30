/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023-01-22-16-MNIST-数字识别/index.html","d377844dd9b640521cd8609985ac0b4f"],["/2023-01-22-16-MNIST-数字识别/output_12_0.png","fd325807d4924d4b892a95bb8a16591e"],["/2023-01-22-16-MNIST-数字识别/output_14_1.png","8cfd987a749fb3d78358cbf66ff706ad"],["/2023-01-22-16-MNIST-数字识别/output_3_0.png","2468d596e3d33b0870488087552f6c4c"],["/2023-01-22-16-MNIST-数字识别/output_3_1.png","4d6bcd79308974e8ecd1454b5b3ccaac"],["/2023-01-22-16-MNIST-数字识别/output_5_0.png","1ff492022f3ad9d7f0d6c69351af6d02"],["/2023-01-22-16-MNIST-数字识别/output_6_1.png","a6e0ec32fc867806fd8df6fe3ad1f63b"],["/2023-01-31-45-【个人总结】关于课外扩展和兴趣自学的方法步骤及注意事项/index.html","20eae5fb5f4f9cdcd7ce6ce6260dce57"],["/2023-02-24-11-Git的学习与使用/20230308220609.png","8dc83fcf79327bf67265c49ee167e56d"],["/2023-02-24-11-Git的学习与使用/20230311201125.png","84fe63e6657ec741b867b9ecaef9825b"],["/2023-02-24-11-Git的学习与使用/20230311201417.png","5e6b791b72d85e2a92ebdd350f92a6c0"],["/2023-02-24-11-Git的学习与使用/20230311201530.png","7a8ba74391dc86f62a1fe4add0f4441a"],["/2023-02-24-11-Git的学习与使用/20230311202107.png","eafc898bb3c38742bd2a7bc858214938"],["/2023-02-24-11-Git的学习与使用/20230311203241.png","9dbf60fc2cabee07017fb07cdda7df3d"],["/2023-02-24-11-Git的学习与使用/20230311203511.png","4972c792d296644321990dc5570228af"],["/2023-02-24-11-Git的学习与使用/20230311203733.png","ce9df59ad38748f5787b2700e64a2bbd"],["/2023-02-24-11-Git的学习与使用/display.png","8585e71a267adc6ee90e790b07c20553"],["/2023-02-24-11-Git的学习与使用/index.html","2ed15fff29eb6abdbf1038c0d6ada922"],["/2023-02-27-01-Python实现处理PDF文件/index.html","2d89a4636b85fd3680f4d1482cd765d1"],["/2023-03-06-12-【转载】精力有限说/index.html","34cbe30a5c081e3ce463d97d3934a63b"],["/2023-03-06-13-【转载】About Computer Science/index.html","88b419aba964908eb11dd5baa20c73bb"],["/2023-04-02-33-80x86汇编语言/index.html","ea189de0489d7967130f65d7ab87bbcf"],["/2023-04-10-06-Freshman-Survive-SHU-Manual/index.html","7f2ebe10321af071c8a9ae4d766128ed"],["/2023-04-15-52-Windows命令行与批处理基础/index.html","d395169702696b9fe36f1d1c98c7ba4d"],["/2023-07-16-48-【cs61a-projs】Cats/index.html","11e828c1358d415ba5c463a9c2fd5a53"],["/2023-07-28-04-【winget】如何使用包管理器管理windows系统——高效日常操作/index.html","e1e302bee4eab11bb4cbaf78c594cd40"],["/2023-07-28-21-Docker入门/index.html","915fa04471f6165349da7826a7335816"],["/2023-08-11-01-HPC-Design/figure9.png","577ab647358cf90e221c1819ac713c60"],["/2023-08-11-01-HPC-Design/index.html","1ed96980ec0d115d6f0e0614432df12b"],["/2023-08-11-40-ASC超算竞赛/index.html","ed5c8f3c6df79d85804ea65d3b866e9b"],["/2023-08-11-45-计算机组成与设计【软硬件接口】/index.html","18556c27ac50f6b5ef248cdfa73ffbcf"],["/2023-08-12-23-NJU-PA2022/20230813145605.png","335aef509bb469b8731b26fd227037f9"],["/2023-08-12-23-NJU-PA2022/20230813162607.png","686a244e702f20f7e8c9f4f91270d735"],["/2023-08-12-23-NJU-PA2022/20230813162756.png","1fe79160e410d4ca8b99a1b6e19e5a54"],["/2023-08-12-23-NJU-PA2022/20230813172406.png","eefadc4c9a42e0d1d09b07d4fe9cb734"],["/2023-08-12-23-NJU-PA2022/20230813172559.png","3b263e2f50584ce1532204567bf276b7"],["/2023-08-12-23-NJU-PA2022/index.html","14a6266d27cb9eea363a9b6e2cd6d7e4"],["/2023-09-05-00-Python爬虫初步/index.html","44ddd06791be8e53a39431257a5cdc1a"],["/2023-09-05-52-从零配置windows11开发环境/index.html","f5b79dcada1c21ba9cb9db1bf697fd8c"],["/2023-09-06-46-cmake学习使用/index.html","19f8cd0f8505317c42611e9fa54d5eb1"],["/2023-09-07-32-磁盘管理，改变你电脑磁盘的大小吧！/index.html","cd00ad64e0c37b7ae7b06862572eabd0"],["/2023-09-10-50-Orangepi-zero3个人服务器开发/index.html","9cc8d7c51a452e679a53b52cf51b1bc8"],["/2023-10-12-31-Python虚拟环境原理——FISH解释/index.html","ed14c6c0dc76cb8a4e782634633a105b"],["/2023-10-17-26-深度学习服务器环境配置/index.html","29911609a2036d2f453f74ebca17b79b"],["/2023-10-17-48-conda包管理/20230401000756.png","945b5982bd7c2ed99215d22dbcad49e6"],["/2023-10-17-48-conda包管理/index.html","58df4de6133ff05cd053dc7265cf3a98"],["/2023-10-17-48-【论文分享】DiffSinger：通过浅层扩散机制进行歌声合成/Figure1.png","6fe6adacc19a338b6ad3f7c0bbd934db"],["/2023-10-17-48-【论文分享】DiffSinger：通过浅层扩散机制进行歌声合成/Figure2.png","732b472f1ebb89ef7c84dbfb002b0cec"],["/2023-10-17-48-【论文分享】DiffSinger：通过浅层扩散机制进行歌声合成/index.html","31441202bc954cb95d0e48869343a9d9"],["/2023-11-25-09-SHU机组体实验——WSL-Docker实现/index.html","18fb6b6cd9868fecfea77770ee364dd4"],["/2023-11-30-12-SHU个人服务器网络避坑/index.html","ed2d665378e405cf491c6c12e687eacb"],["/about/039.png","9f1cdf29f66867befd65a8a069e81989"],["/about/index.html","bca724e970eb96a562d23f9d9081bab7"],["/archives/2023/01/index.html","56aaec909f28cd1947ceb2864e4db085"],["/archives/2023/02/index.html","c15f0ac78e60c1d906781c77297aef3c"],["/archives/2023/03/index.html","fc81809492882b5cf3c5a91514a875d8"],["/archives/2023/04/index.html","1ca7d0cf68df2d77689ec39c6c033ddc"],["/archives/2023/07/index.html","fd144ec41c73948f51289637558a2514"],["/archives/2023/08/index.html","dc28b881fff9a0b485204d7403b292c2"],["/archives/2023/09/index.html","fc061563c80643dadc5b017c90efdda1"],["/archives/2023/10/index.html","b951873b155dcef66eaf883f17c45de4"],["/archives/2023/11/index.html","ac4b4fa1445e0c91a9644041452f258b"],["/archives/2023/index.html","865c8edc073ac3eb69053472ac88e497"],["/archives/2023/page/2/index.html","690810a08d82c84ad3def704f5acfaf6"],["/archives/2023/page/3/index.html","88db145cc9af9cbb2aae735e5da5c2ff"],["/archives/index.html","469fae0e5f2621422917a9eb283c69d6"],["/archives/page/2/index.html","c4eb3fc97243474510fd12c6db3340c8"],["/archives/page/3/index.html","f39cddc00373661814479ecc7abdc861"],["/categories/Learning/index.html","9139228e3c3efbf41c7c5f938ce690f0"],["/categories/Learning/page/2/index.html","b7f9a218dc342fe65f47688251346e2e"],["/categories/index.html","579c0dbd2db5457f531a48f857eb866b"],["/categories/竞赛/index.html","c002f42a48591bad4a67dd98375c4d9e"],["/categories/转载/index.html","1401c0bcb172396044bb7f8b952d23e5"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","e2029ea5b8fc59dbdb894a7b47bc1a42"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/image/01.png","06ddc23c9705a51f9e557acd59fd6b4f"],["/image/02.jpg","a602ba9e31de467516f6eb3b93c01f67"],["/image/021.jpg","fb09a2ff88ec6a04b24e599fd0e91835"],["/image/022.jpg","267af214c5f5e8e682fa9ac3a62d52a9"],["/image/023.png","1818f3f7394584ac36eca4f55511c832"],["/image/024.jpg","55fa1c60ca54f9e47c2faded9c31b3bb"],["/image/025.png","b26d67f72f3234bb92a30651adfd0796"],["/image/026.jpg","addf1c36a8cc14ed6412859782f4e16d"],["/image/027.jpg","4f44975d8285d142f2e2b216c9c67762"],["/image/028.png","7e9b83d159d1dc101e21d5e26e388e92"],["/image/029.jpg","6ccfd6d02727e2ea1b95ec1408647450"],["/image/03.png","5f1de089a3c1d71d334833985e628034"],["/image/030.png","5730ac3a79cd2db97a98880fede7750d"],["/image/031.png","6817f089affe1b87d895cdfaa8900642"],["/image/032.png","45572a816981aa96d65b050408d7c4f3"],["/image/033.png","a85695cc8faf4b829097c81dbf553293"],["/image/034.png","3865d671bf467975a5e7d420002e20af"],["/image/035.png","1cd3176ee8f5e98cbaf15194d6ee7dd9"],["/image/036.png","d988725a2f973686ba2e5f8d24b73119"],["/image/037.png","61f4278853a74f92896af0957bc91386"],["/image/038.png","7bce3e420cfc5fd083c4054a27a6c437"],["/image/039.png","9f1cdf29f66867befd65a8a069e81989"],["/image/04.jpg","112f96f697249b8d809ba7967ecbc12e"],["/image/040.png","41399b7536924f566d5b2872cd5e92b1"],["/image/041.png","9fede0226497815ea61c80ac7467f760"],["/image/042.png","1e8a89553814ae1e39360e8e8f2496cf"],["/image/043.png","464caadcfc453ce9ac83c985e1b2b33a"],["/image/044.png","380b491ee92414376c777c23afeef560"],["/image/045.png","70f996d3aa510d42f0fee77c32b9a829"],["/image/046.png","e7d2b86c5149197e7f72a34903475b69"],["/image/048.png","fbee74acdff04e1417a282230110cf4a"],["/image/05.jpg","7b0c83f7ec9fe67f8bfa2486cf1c197e"],["/image/06.jpg","a5056fe2e9595565a64160ede11b8e0c"],["/image/07.jpg","a8371ef3dd912579d42f80e07093f99a"],["/image/08.jpg","1a6f474875b208438cf78e41861a8987"],["/image/09.jpg","d0dc8434beb25caf9ab65914171abb48"],["/image/10.jpg","b57544c2de388fe6f5d16caf6ffe8abe"],["/image/11.jpg","e328b38481eaa6e5df71a08538ea9825"],["/image/12.jpg","7c3234eed76b9bb2f80644af40a92838"],["/image/13.jpg","00de5c5a7c5e7ca0552cf56868a40ae0"],["/image/14.jpg","bcc034ade4dda937bc6f1d79b2a0b8ab"],["/image/15.jpg","76374fc28a597c70c0bc9d759f88648e"],["/image/16.jpg","3f68a09b0c7986870dd74298a12a6eb3"],["/image/17.jpg","7252e4270bace731aa71242d01219b0e"],["/image/18.jpg","e13a8909371b79dbdf7ee4f96a6d414d"],["/image/19.jpg","4cad0a37f8c66b9adccd3b875243c4f4"],["/image/20.png","8090f9af1719886aff63744b63d73c56"],["/image/35.png","04b478980a45e12d36ec9c63067940b9"],["/image/Lofter.png","0dba93e549d61b53d246ae626a998690"],["/image/blog_about.png","e1562e09d6b77abe24b1414bd908d1be"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","5ddcb0c9db6dbadea32cbe2be2ce2096"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/links/index.html","d5947985160b3a66082b69b860607f82"],["/page/2/index.html","bd60272532fa0c5341f491899b8a7687"],["/page/3/index.html","382e0f49bedb14fe95d43131bd328fb4"],["/sw-register.js","49041483559f5ed476ee5cac0dd6ce1e"],["/tags/ASC/index.html","5a686b59ef472d6c360b7add4387fe9d"],["/tags/index.html","8cf769f5a7e01e0fa1c2448c08596806"],["/tags/windows/index.html","8ee70b9500259e2b9cb81ed17eb07048"],["/tags/应用/index.html","89871fd6f22f31241d4c7d154fb4ed0c"],["/tags/数据分析/index.html","eef90922f9d190b280818e697ab7d15d"],["/tags/服务器/index.html","3829cd0fbbea6411a604d7161ea63ef0"],["/tags/机器学习/index.html","bacd59d9711599a880755f3240896147"],["/tags/深度学习/index.html","c5e3264c50ce4fbf44220144556da0e5"],["/tags/经验/index.html","1907acb704ba2ff1be85fd0a9d842ece"],["/tags/自学/index.html","6f0bea52fcd64069621f55a6d60154f2"],["/tags/装机/index.html","8c06306f5f9435e0dcd148f6c999a4eb"],["/tags/计算机/index.html","1cae4ee01852c2d96c5f2db354db60bf"],["/tags/设计/index.html","35b4576b90172b91d4c8bbd245750bc3"],["/tags/跨平台/index.html","dc254ff44781b18254858851ed7c1838"],["/tags/项目开发/index.html","ea7f244cdeed582e0b571409aea17781"]];
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
