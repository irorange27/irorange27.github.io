/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/039.png","9f1cdf29f66867befd65a8a069e81989"],["/about/index.html","b2f047dc4d7087a422b7eb815d311cf2"],["/archives/2023/01/index.html","e12e368279a5b88d62fb62ceefab2762"],["/archives/2023/02/index.html","209636ae983ed5eedaf3f93598c53b2a"],["/archives/2023/03/index.html","e1f90b9233dd37a22ff67cba15e77f24"],["/archives/2023/04/index.html","da4cb515d5c63524295fd2fb8eb604e5"],["/archives/2023/07/index.html","431185f936adab175bf294583031e5de"],["/archives/2023/08/index.html","46285719fdac0237bcd15ddab004698e"],["/archives/2023/09/index.html","149478cdb7108d4978a2312ea35b60e6"],["/archives/2023/10/index.html","31f888519359dba319c6561bc4426413"],["/archives/2023/11/index.html","e4aa5f1b9eb90d1c8409991089e7aa91"],["/archives/2023/12/index.html","5c782f22dcafabace2b7b6e49bee16bc"],["/archives/2023/index.html","63a15a96c0cdefa51a6a94dd3d912c20"],["/archives/2024/01/index.html","4737710465cede868487b70f6281d0bc"],["/archives/2024/03/index.html","5d6242ec47f42b36cf61661af94aea23"],["/archives/2024/index.html","ff2a66e251ba924f050e521d652ead12"],["/archives/index.html","75b11bc9b3a7f99a0ef344787bc7c7b2"],["/categories/Learning/index.html","1ee6d26efb4678fad0b4970afdf6610d"],["/categories/index.html","7c43721abfe39e6acec9ebea29243205"],["/categories/竞赛/index.html","d0eda4c339dc41259aaf57d6ba6b687b"],["/categories/转载/index.html","186f49b46a6b156de6c493ad22a26b00"],["/content/80x86汇编语言/index.html","e514738945d7836d412f9e78873ef9a6"],["/content/ASC超算竞赛/index.html","7748e3362eafd60bf51beaa3697a3ac5"],["/content/C-现代特性/index.html","4ab809c9e570d2cebd4c4aca2b865046"],["/content/Docker入门/index.html","46ab2f3039f46cb18ae13c0d8704bd4d"],["/content/Freshman-Survive-SHU-Manual/index.html","01cfa56fe34230cf72f7810cd16ca5a8"],["/content/Git的学习与使用/20230308220609.png","8dc83fcf79327bf67265c49ee167e56d"],["/content/Git的学习与使用/20230311201125.png","84fe63e6657ec741b867b9ecaef9825b"],["/content/Git的学习与使用/20230311201417.png","5e6b791b72d85e2a92ebdd350f92a6c0"],["/content/Git的学习与使用/20230311201530.png","7a8ba74391dc86f62a1fe4add0f4441a"],["/content/Git的学习与使用/20230311202107.png","eafc898bb3c38742bd2a7bc858214938"],["/content/Git的学习与使用/20230311203241.png","9dbf60fc2cabee07017fb07cdda7df3d"],["/content/Git的学习与使用/20230311203511.png","4972c792d296644321990dc5570228af"],["/content/Git的学习与使用/20230311203733.png","ce9df59ad38748f5787b2700e64a2bbd"],["/content/Git的学习与使用/display.png","8585e71a267adc6ee90e790b07c20553"],["/content/Git的学习与使用/index.html","caefd89b4c78ebe1f4537c23a5a601cd"],["/content/HPC-Design/figure9.png","577ab647358cf90e221c1819ac713c60"],["/content/HPC-Design/index.html","1fd17c775f9e8ea260c000a2fb2c51ad"],["/content/HPL/index.html","0804b011345ccdbb7ca72faa565fdb92"],["/content/LXMs-System-系统理解LMs/index.html","f61b28b31e35a3a9501588b2357d65ad"],["/content/MNIST-数字识别/index.html","9d46a69dfb3a5bdbd7b02e06c367d217"],["/content/MNIST-数字识别/output_12_0.png","fd325807d4924d4b892a95bb8a16591e"],["/content/MNIST-数字识别/output_14_1.png","8cfd987a749fb3d78358cbf66ff706ad"],["/content/MNIST-数字识别/output_3_0.png","2468d596e3d33b0870488087552f6c4c"],["/content/MNIST-数字识别/output_3_1.png","4d6bcd79308974e8ecd1454b5b3ccaac"],["/content/MNIST-数字识别/output_5_0.png","1ff492022f3ad9d7f0d6c69351af6d02"],["/content/MNIST-数字识别/output_6_1.png","a6e0ec32fc867806fd8df6fe3ad1f63b"],["/content/NJU-PA2022/20230813145605.png","335aef509bb469b8731b26fd227037f9"],["/content/NJU-PA2022/20230813162607.png","686a244e702f20f7e8c9f4f91270d735"],["/content/NJU-PA2022/20230813162756.png","1fe79160e410d4ca8b99a1b6e19e5a54"],["/content/NJU-PA2022/20230813172406.png","eefadc4c9a42e0d1d09b07d4fe9cb734"],["/content/NJU-PA2022/20230813172559.png","3b263e2f50584ce1532204567bf276b7"],["/content/NJU-PA2022/index.html","7788f0daa091da4f59c2a01187a9ba16"],["/content/Orangepi-zero3个人服务器开发/index.html","e90a4df929823bdd4ed2d3aba0e5ed03"],["/content/Python实现处理PDF文件/index.html","825f807b5f52c38f91d89a3bcbc697f1"],["/content/Python爬虫初步/index.html","ca113a3c5f02d769171adb2af080de02"],["/content/Python虚拟环境原理——FISH解释/index.html","a5d5762c46e841b3e25dcc2de11cdc76"],["/content/SHU个人服务器网络避坑/index.html","2c2df3faa89d814d5b264c96a7634495"],["/content/SHU机组体实验——WSL-Docker实现/index.html","86ebfec82ab4850260cbf1ff087f6d15"],["/content/Windows-Windows-by-ssh-使用ssh免密登录Windows-server/index.html","2384e81e844c8092459c43615c2b874c"],["/content/Windows命令行与批处理基础/index.html","acdd33254da3e02942e44e1c4ce6ca3d"],["/content/cmake学习使用/index.html","613bb9bd3c41473f48a128ff10d83709"],["/content/conda包管理/20230401000756.png","945b5982bd7c2ed99215d22dbcad49e6"],["/content/conda包管理/index.html","432109eb3fe8002d08670db74ad6201f"],["/content/overleaf服务器校园网部署/index.html","5c135d68cc070ac700fa13edfcaa4de3"],["/content/【cs61a-projs】Cats/index.html","e2eaa1c7cb7e9137f338cfb390d1360a"],["/content/【winget】如何使用包管理器管理windows系统——高效日常操作/index.html","bd487a80e01e9e15482dd806c967296b"],["/content/【个人总结】关于课外扩展和兴趣自学的方法步骤及注意事项/index.html","62caae2e696f36623b6d9c75630c4d24"],["/content/【论文分享】DiffSinger：通过浅层扩散机制进行歌声合成/Figure1.png","6fe6adacc19a338b6ad3f7c0bbd934db"],["/content/【论文分享】DiffSinger：通过浅层扩散机制进行歌声合成/Figure2.png","732b472f1ebb89ef7c84dbfb002b0cec"],["/content/【论文分享】DiffSinger：通过浅层扩散机制进行歌声合成/index.html","438e6f45ce23aac534088a5af909dd98"],["/content/【转载】About Computer Science/index.html","0c2a40c47d5157564ee57adb26fcd617"],["/content/【转载】精力有限说/index.html","a6ad25bf6a85f5b64fca39f8a311fd94"],["/content/一文入门FTXUI框架/index.html","d3a3c978aa60b25b91646371eb8b9319"],["/content/从零配置windows11开发环境/index.html","0228845106c893fdb004fa64f2494788"],["/content/深度学习服务器环境配置/index.html","3a692f6fb2d79a7a29913ad8b91c5a5b"],["/content/磁盘管理，改变你电脑磁盘的大小吧！/index.html","040d768d79287dea2d4d0ee0f2926797"],["/content/计算机组成与设计【软硬件接口】/index.html","61a09d3756ec82294caa1f6bcc0b1816"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","e2029ea5b8fc59dbdb894a7b47bc1a42"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/image/039.png","9f1cdf29f66867befd65a8a069e81989"],["/image/040.png","41399b7536924f566d5b2872cd5e92b1"],["/image/045.png","70f996d3aa510d42f0fee77c32b9a829"],["/image/046.png","e7d2b86c5149197e7f72a34903475b69"],["/image/35.png","04b478980a45e12d36ec9c63067940b9"],["/image/Lofter.png","0dba93e549d61b53d246ae626a998690"],["/image/blog_about.png","e1562e09d6b77abe24b1414bd908d1be"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","08893bcd6d901f382261374b786c062b"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/links/index.html","1cf92521fc5d72e398cedc5fe6b6a595"],["/page/2/index.html","147aa959b2284a66ad4c5988c4878c2d"],["/page/3/index.html","1754f5fd5000586f237b4d58cee87bba"],["/page/4/index.html","864a823a3b55360d4195d480a7bfdb2b"],["/sw-register.js","89f51a9d5a387763732b14f143cbe7ca"],["/tags/ASC/index.html","3c34ebeebb214bb9ea1bf30acbe72801"],["/tags/index.html","0515807481c39d7c5eb6c744d5796fb3"],["/tags/windows/index.html","ac714f382b5dc1070ad554d0243cda9c"],["/tags/应用/index.html","9c1f1be58059fa7748cae6d0db51f0ef"],["/tags/数据分析/index.html","88fba31c6fb307c6192f78097db6a3d8"],["/tags/服务器/index.html","a6783bdb7596864e008a1fa01597cd2a"],["/tags/机器学习/index.html","db7cc1ea28f9fa5f759c68f30ce1a9a8"],["/tags/深度学习/index.html","854069e58f25ec71d0ed0a6d87a723ea"],["/tags/经验/index.html","ffd85af9dae0929e2e1d1b2e8ceb47d0"],["/tags/自学/index.html","0077f8f2c68dd17849ae14087e316aba"],["/tags/装机/index.html","0c9eab89f327def5d29ce93bbda8af45"],["/tags/计算机/index.html","3e346156a6862bdcdfff503a5ea3060d"],["/tags/设计/index.html","a04e476a4568b413eb53a513aa913626"],["/tags/跨平台/index.html","e1b7e700c807495dfb4a53f5616921cb"],["/tags/项目开发/index.html","87b19eaedf6047c6319ccaa758c5312d"]];
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
