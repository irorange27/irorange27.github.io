/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/039.png","9f1cdf29f66867befd65a8a069e81989"],["/about/index.html","508378c6df9367ed7e8ae9069e18562b"],["/archives/2023/01/index.html","c0b4b89fe77c0d9523311d6dc68dfadb"],["/archives/2023/02/index.html","ffb8e38104f9f5e2f6e916ca66e3838d"],["/archives/2023/03/index.html","2d9341eb39c17077326289dd1b1c15f9"],["/archives/2023/04/index.html","4e27bc41dc608e0f532a76ba16bc53d6"],["/archives/2023/07/index.html","2b23401f82b856c7b07d20217c4838d1"],["/archives/2023/08/index.html","d810c236127807220eb39f0f56575334"],["/archives/2023/09/index.html","184e5250486ef3d11b398fb7560497b6"],["/archives/2023/10/index.html","6b28da63e7c8154d4690d05a9c4fc03a"],["/archives/2023/11/index.html","73d4b085a325da9592a78bcf8ecf679d"],["/archives/2023/12/index.html","124c5b484655d21b6d0b47a2b9534846"],["/archives/2023/index.html","792c6527bedb6dbc1f69a1c7d9552f4c"],["/archives/2024/01/index.html","8501b7d9dae1cfc283f6de6b8d3f4581"],["/archives/2024/03/index.html","30344b8750f99ef43146291c42fbcdfe"],["/archives/2024/index.html","546e099f84e3a41628ebc3634511634f"],["/archives/index.html","f3326c752bf3ae4781cefcdac588d3aa"],["/categories/Learning/index.html","fa831af0c37929ef26fe845a15c083e0"],["/categories/index.html","3e2abe7b4c4b86139a1c7291cfbed876"],["/categories/竞赛/index.html","a8221fd730dddd36691696bec56c8b02"],["/categories/转载/index.html","00faa7545b77afea2c8dcb6577559bad"],["/content/80x86汇编语言/index.html","bfa2a0ace8f0195e7ab1d40794e44808"],["/content/ASC超算竞赛/index.html","e783946d52d70aa22da92c9550034243"],["/content/C-现代特性/index.html","63f41b4e0e9e4de52ec5b954d2a868ff"],["/content/Docker入门/index.html","c08a16fd9bbe53444cb94ec485a7bbc1"],["/content/Freshman-Survive-SHU-Manual/index.html","2f760f98a8d2c6b00f392b239cd36515"],["/content/Git的学习与使用/20230308220609.png","8dc83fcf79327bf67265c49ee167e56d"],["/content/Git的学习与使用/20230311201125.png","84fe63e6657ec741b867b9ecaef9825b"],["/content/Git的学习与使用/20230311201417.png","5e6b791b72d85e2a92ebdd350f92a6c0"],["/content/Git的学习与使用/20230311201530.png","7a8ba74391dc86f62a1fe4add0f4441a"],["/content/Git的学习与使用/20230311202107.png","eafc898bb3c38742bd2a7bc858214938"],["/content/Git的学习与使用/20230311203241.png","9dbf60fc2cabee07017fb07cdda7df3d"],["/content/Git的学习与使用/20230311203511.png","4972c792d296644321990dc5570228af"],["/content/Git的学习与使用/20230311203733.png","ce9df59ad38748f5787b2700e64a2bbd"],["/content/Git的学习与使用/display.png","8585e71a267adc6ee90e790b07c20553"],["/content/Git的学习与使用/index.html","1d2747692266fae69baa975fd3b8575a"],["/content/HPC-Design/figure9.png","577ab647358cf90e221c1819ac713c60"],["/content/HPC-Design/index.html","989082b3facd1589a19e6d64a44cc813"],["/content/HPL/index.html","0dc5b87f3045162fb9b745f13d73e4f7"],["/content/LXMs-System-系统理解LMs/index.html","367527e68e1e1b926fa8976d133905b2"],["/content/MNIST-数字识别/index.html","72ee189544a719880f784d636fe6238b"],["/content/MNIST-数字识别/output_12_0.png","fd325807d4924d4b892a95bb8a16591e"],["/content/MNIST-数字识别/output_14_1.png","8cfd987a749fb3d78358cbf66ff706ad"],["/content/MNIST-数字识别/output_3_0.png","2468d596e3d33b0870488087552f6c4c"],["/content/MNIST-数字识别/output_3_1.png","4d6bcd79308974e8ecd1454b5b3ccaac"],["/content/MNIST-数字识别/output_5_0.png","1ff492022f3ad9d7f0d6c69351af6d02"],["/content/MNIST-数字识别/output_6_1.png","a6e0ec32fc867806fd8df6fe3ad1f63b"],["/content/NJU-PA2022/20230813145605.png","335aef509bb469b8731b26fd227037f9"],["/content/NJU-PA2022/20230813162607.png","686a244e702f20f7e8c9f4f91270d735"],["/content/NJU-PA2022/20230813162756.png","1fe79160e410d4ca8b99a1b6e19e5a54"],["/content/NJU-PA2022/20230813172406.png","eefadc4c9a42e0d1d09b07d4fe9cb734"],["/content/NJU-PA2022/20230813172559.png","3b263e2f50584ce1532204567bf276b7"],["/content/NJU-PA2022/index.html","e6e60317d056762457f1f1d46cf9d413"],["/content/Orangepi-zero3个人服务器开发/index.html","c628bf22c5d6dc27ff771751f9239071"],["/content/Python实现处理PDF文件/index.html","0f2720ee24660e37a9271a5fb9e6bd9b"],["/content/Python爬虫初步/index.html","747b996ec96c4858f4c08a167156a48a"],["/content/Python虚拟环境原理——FISH解释/index.html","61e4649117f5039c11cb9a6b6a08096d"],["/content/SHU个人服务器网络避坑/index.html","9539f11ba7693a7060823dc98d72b2dd"],["/content/SHU机组体实验——WSL-Docker实现/index.html","043dd62975babc191b2d856e6b10878b"],["/content/Windows-Windows-by-ssh-使用ssh免密登录Windows-server/index.html","1f9e944f7bba7e8359303f9ad34b37fd"],["/content/Windows命令行与批处理基础/index.html","ad39a9047b5466eb79937325419d4a1c"],["/content/cmake学习使用/index.html","295cb21fe91537dd195192defb7f9453"],["/content/conda包管理/20230401000756.png","945b5982bd7c2ed99215d22dbcad49e6"],["/content/conda包管理/index.html","f77ddc1fb014b706337ead1519968bec"],["/content/overleaf服务器校园网部署/index.html","c148e56836d44976959e7e20754c0c7d"],["/content/【cs61a-projs】Cats/index.html","c636eca0f0d8a6d6b8823727546c519e"],["/content/【winget】如何使用包管理器管理windows系统——高效日常操作/index.html","82657a69d4161b0a859f2b25c8ba4ae6"],["/content/【个人总结】关于课外扩展和兴趣自学的方法步骤及注意事项/index.html","2aeb924954bf52ff8dfc3b1c6708d7cb"],["/content/【论文分享】DiffSinger：通过浅层扩散机制进行歌声合成/Figure1.png","6fe6adacc19a338b6ad3f7c0bbd934db"],["/content/【论文分享】DiffSinger：通过浅层扩散机制进行歌声合成/Figure2.png","732b472f1ebb89ef7c84dbfb002b0cec"],["/content/【论文分享】DiffSinger：通过浅层扩散机制进行歌声合成/index.html","d833862fe7a38704ed5fc728fb5c348f"],["/content/【转载】About Computer Science/index.html","a39c1d52a81fc49d749a8de48da5fbc7"],["/content/【转载】精力有限说/index.html","d38f2dffe73ccda3e265ae4e17360b5b"],["/content/一文入门FTXUI框架/index.html","296daac943ee98c69137b31f67ffdc76"],["/content/从零配置windows11开发环境/index.html","6b4e4a9bd5fc0f95c533428805281099"],["/content/深度学习服务器环境配置/index.html","b2f0bb630ed434c89186f7f6e9ab4721"],["/content/磁盘管理，改变你电脑磁盘的大小吧！/index.html","886115297577725315f3c1767e06f849"],["/content/计算机组成与设计【软硬件接口】/index.html","e0b738b05201eb79b8a31c845d599b73"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","e2029ea5b8fc59dbdb894a7b47bc1a42"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/image/039.png","9f1cdf29f66867befd65a8a069e81989"],["/image/040.png","41399b7536924f566d5b2872cd5e92b1"],["/image/045.png","70f996d3aa510d42f0fee77c32b9a829"],["/image/046.png","e7d2b86c5149197e7f72a34903475b69"],["/image/35.png","04b478980a45e12d36ec9c63067940b9"],["/image/Lofter.png","0dba93e549d61b53d246ae626a998690"],["/image/blog_about.png","e1562e09d6b77abe24b1414bd908d1be"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","fc601ba983df4e97761a727bf963c98b"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/links/index.html","726e816a19bf62f9169fb9f4431f1da8"],["/page/2/index.html","43924cf7c85502ef4d318d0fc87b1a3c"],["/page/3/index.html","60cacda7e3558ca1af701035752f51ee"],["/page/4/index.html","d8a14008a002ced9518e1f4696481509"],["/sw-register.js","76c0c7a033851a093d656ada39027847"],["/tags/ASC/index.html","2f15c33e1bb9761651d86caef913cc2d"],["/tags/index.html","1b0477b6f51b2ec372fde345575e2aa7"],["/tags/windows/index.html","3d4637ce1616a150c0312df42d166b4b"],["/tags/应用/index.html","97f4db17125cb9447eea2f522ef2eea6"],["/tags/数据分析/index.html","e3c74d66dab7c8b99a23566af19dad39"],["/tags/服务器/index.html","116326a95c43ea716668e7d2e355242b"],["/tags/机器学习/index.html","c64def979d20b040da9af3a53ab77ec6"],["/tags/深度学习/index.html","70a95ecbcfe25764b94e716554cbf236"],["/tags/经验/index.html","c4e79dfe70e309084b58cba139fe6e90"],["/tags/自学/index.html","c2ef2c6587a6303fc9ced379480d4230"],["/tags/装机/index.html","1d8fdc3234799abfa74269f52989c5b2"],["/tags/计算机/index.html","da6b0c1d94d044c9127319ecc9e89f44"],["/tags/设计/index.html","f1e3b18ac0e51d7feb2a232b53fd1a1e"],["/tags/跨平台/index.html","9bb005490972e9b0085a8d08cd543534"],["/tags/项目开发/index.html","31ddec3f5769b1c17e25f8c2a09499c1"]];
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
