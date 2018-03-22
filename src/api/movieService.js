import config from '../js/config.js'

export default {
    // 获取电影列表数据
    getMovieListData(message){
        // console.log(message)
        const url = `${config.HTTP}${config.SERVER_PATH}:${config.PORT}/getMovieListData?message=${message}`
        return new Promise(function(resolve,reject){
            // 模拟假数据
            setTimeout(function () {
                const data = {
                    "count": 10,
                    "start": 6,
                    "total": 72,
                    "subjects": [
                        {
                            "rating": {
                                "max": 10,
                                "average": 0,
                                "stars": "00",
                                "min": 0
                            },
                            "genres": [
                                "喜剧",
                                "爱情"
                            ],
                            "title": "合约男女",
                            "casts": [
                                {
                                    "alt": "https://movie.douban.com/celebrity/1023284/",
                                    "avatars": {
                                        "small": "https://img1.doubanio.com/img/celebrity/small/4738.jpg",
                                        "large": "https://img1.doubanio.com/img/celebrity/large/4738.jpg",
                                        "medium": "https://img1.doubanio.com/img/celebrity/medium/4738.jpg"
                                    },
                                    "name": "郑秀文",
                                    "id": "1023284"
                                },
                                {
                                    "alt": "https://movie.douban.com/celebrity/1014743/",
                                    "avatars": {
                                        "small": "https://img1.doubanio.com/img/celebrity/small/19418.jpg",
                                        "large": "https://img1.doubanio.com/img/celebrity/large/19418.jpg",
                                        "medium": "https://img1.doubanio.com/img/celebrity/medium/19418.jpg"
                                    },
                                    "name": "张孝全",
                                    "id": "1014743"
                                },
                                {
                                    "alt": "https://movie.douban.com/celebrity/1274279/",
                                    "avatars": {
                                        "small": "https://img3.doubanio.com/img/celebrity/small/45672.jpg",
                                        "large": "https://img3.doubanio.com/img/celebrity/large/45672.jpg",
                                        "medium": "https://img3.doubanio.com/img/celebrity/medium/45672.jpg"
                                    },
                                    "name": "林雪",
                                    "id": "1274279"
                                }
                            ],
                            "collect_count": 17,
                            "original_title": "合约男女",
                            "subtype": "movie",
                            "directors": [
                                {
                                    "alt": "https://movie.douban.com/celebrity/1365631/",
                                    "avatars": {
                                        "small": "https://img3.doubanio.com/img/celebrity/small/1486091275.14.jpg",
                                        "large": "https://img3.doubanio.com/img/celebrity/large/1486091275.14.jpg",
                                        "medium": "https://img3.doubanio.com/img/celebrity/medium/1486091275.14.jpg"
                                    },
                                    "name": "刘国楠",
                                    "id": "1365631"
                                }
                            ],
                            "year": "2017",
                            "images": {
                                "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2403705954.jpg",
                                "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2403705954.jpg",
                                "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2403705954.jpg"
                            },
                            "alt": "https://movie.douban.com/subject/26425081/",
                            "id": "26425081"
                        },
                        {
                            "rating": {
                                "max": 10,
                                "average": 0,
                                "stars": "00",
                                "min": 0
                            },
                            "genres": [
                                "喜剧"
                            ],
                            "title": "仙球大战",
                            "casts": [
                                {
                                    "alt": "https://movie.douban.com/celebrity/1313023/",
                                    "avatars": {
                                        "small": "https://img3.doubanio.com/img/celebrity/small/14652.jpg",
                                        "large": "https://img3.doubanio.com/img/celebrity/large/14652.jpg",
                                        "medium": "https://img3.doubanio.com/img/celebrity/medium/14652.jpg"
                                    },
                                    "name": "何炅",
                                    "id": "1313023"
                                },
                                {
                                    "alt": "https://movie.douban.com/celebrity/1005138/",
                                    "avatars": {
                                        "small": "https://img3.doubanio.com/img/celebrity/small/22435.jpg",
                                        "large": "https://img3.doubanio.com/img/celebrity/large/22435.jpg",
                                        "medium": "https://img3.doubanio.com/img/celebrity/medium/22435.jpg"
                                    },
                                    "name": "钟欣潼",
                                    "id": "1005138"
                                },
                                {
                                    "alt": "https://movie.douban.com/celebrity/1041425/",
                                    "avatars": {
                                        "small": "https://img3.doubanio.com/img/celebrity/small/35594.jpg",
                                        "large": "https://img3.doubanio.com/img/celebrity/large/35594.jpg",
                                        "medium": "https://img3.doubanio.com/img/celebrity/medium/35594.jpg"
                                    },
                                    "name": "蔡卓妍",
                                    "id": "1041425"
                                }
                            ],
                            "collect_count": 76,
                            "original_title": "仙球大战",
                            "subtype": "movie",
                            "directors": [
                                {
                                    "alt": "https://movie.douban.com/celebrity/1274431/",
                                    "avatars": {
                                        "small": "https://img3.doubanio.com/img/celebrity/small/45374.jpg",
                                        "large": "https://img3.doubanio.com/img/celebrity/large/45374.jpg",
                                        "medium": "https://img3.doubanio.com/img/celebrity/medium/45374.jpg"
                                    },
                                    "name": "刘镇伟",
                                    "id": "1274431"
                                }
                            ],
                            "year": "2017",
                            "images": {
                                "small": "https://img1.doubanio.com/view/movie_poster_cover/ipst/public/p2405255328.jpg",
                                "large": "https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2405255328.jpg",
                                "medium": "https://img1.doubanio.com/view/movie_poster_cover/spst/public/p2405255328.jpg"
                            },
                            "alt": "https://movie.douban.com/subject/25863024/",
                            "id": "25863024"
                        },
                        {
                            "rating": {
                                "max": 10,
                                "average": 0,
                                "stars": "00",
                                "min": 0
                            },
                            "genres": [
                                "喜剧",
                                "爱情"
                            ],
                            "title": "疯岳撬佳人",
                            "casts": [
                                {
                                    "alt": "https://movie.douban.com/celebrity/1317663/",
                                    "avatars": {
                                        "small": "https://img5.doubanio.com/img/celebrity/small/40756.jpg",
                                        "large": "https://img5.doubanio.com/img/celebrity/large/40756.jpg",
                                        "medium": "https://img5.doubanio.com/img/celebrity/medium/40756.jpg"
                                    },
                                    "name": "岳云鹏",
                                    "id": "1317663"
                                },
                                {
                                    "alt": "https://movie.douban.com/celebrity/1316067/",
                                    "avatars": {
                                        "small": "https://img5.doubanio.com/img/celebrity/small/1372668848.86.jpg",
                                        "large": "https://img5.doubanio.com/img/celebrity/large/1372668848.86.jpg",
                                        "medium": "https://img5.doubanio.com/img/celebrity/medium/1372668848.86.jpg"
                                    },
                                    "name": "袁姗姗",
                                    "id": "1316067"
                                },
                                {
                                    "alt": "https://movie.douban.com/celebrity/1313285/",
                                    "avatars": {
                                        "small": "https://img1.doubanio.com/img/celebrity/small/1441793528.59.jpg",
                                        "large": "https://img1.doubanio.com/img/celebrity/large/1441793528.59.jpg",
                                        "medium": "https://img1.doubanio.com/img/celebrity/medium/1441793528.59.jpg"
                                    },
                                    "name": "孙坚",
                                    "id": "1313285"
                                }
                            ],
                            "collect_count": 45,
                            "original_title": "疯岳撬佳人",
                            "subtype": "movie",
                            "directors": [
                                {
                                    "alt": null,
                                    "avatars": null,
                                    "name": "钟少雄",
                                    "id": null
                                }
                            ],
                            "year": "2017",
                            "images": {
                                "small": "https://img1.doubanio.com/view/movie_poster_cover/ipst/public/p2423131257.jpg",
                                "large": "https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2423131257.jpg",
                                "medium": "https://img1.doubanio.com/view/movie_poster_cover/spst/public/p2423131257.jpg"
                            },
                            "alt": "https://movie.douban.com/subject/26815856/",
                            "id": "26815856"
                        },
                        {
                            "rating": {
                                "max": 10,
                                "average": 0,
                                "stars": "00",
                                "min": 0
                            },
                            "genres": [
                                "剧情",
                                "爱情"
                            ],
                            "title": "欧爸的情人",
                            "casts": [
                                {
                                    "alt": "https://movie.douban.com/celebrity/1252439/",
                                    "avatars": {
                                        "small": "https://img3.doubanio.com/img/celebrity/small/18452.jpg",
                                        "large": "https://img3.doubanio.com/img/celebrity/large/18452.jpg",
                                        "medium": "https://img3.doubanio.com/img/celebrity/medium/18452.jpg"
                                    },
                                    "name": "李永勋",
                                    "id": "1252439"
                                },
                                {
                                    "alt": "https://movie.douban.com/celebrity/1367132/",
                                    "avatars": {
                                        "small": "https://img1.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
                                        "large": "https://img3.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
                                        "medium": "https://img1.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
                                    },
                                    "name": "潘思羽",
                                    "id": "1367132"
                                },
                                {
                                    "alt": "https://movie.douban.com/celebrity/1367134/",
                                    "avatars": {
                                        "small": "https://img3.doubanio.com/img/celebrity/small/1484540028.31.jpg",
                                        "large": "https://img3.doubanio.com/img/celebrity/large/1484540028.31.jpg",
                                        "medium": "https://img3.doubanio.com/img/celebrity/medium/1484540028.31.jpg"
                                    },
                                    "name": "雷鹏宇",
                                    "id": "1367134"
                                }
                            ],
                            "collect_count": 11,
                            "original_title": "欧爸的情人",
                            "subtype": "movie",
                            "directors": [
                                {
                                    "alt": "https://movie.douban.com/celebrity/1354395/",
                                    "avatars": {
                                        "small": "https://img1.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
                                        "large": "https://img3.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
                                        "medium": "https://img1.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
                                    },
                                    "name": "贺丰",
                                    "id": "1354395"
                                }
                            ],
                            "year": "2017",
                            "images": {
                                "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2413588484.jpg",
                                "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2413588484.jpg",
                                "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2413588484.jpg"
                            },
                            "alt": "https://movie.douban.com/subject/26955897/",
                            "id": "26955897"
                        },
                        {
                            "rating": {
                                "max": 10,
                                "average": 7,
                                "stars": "35",
                                "min": 0
                            },
                            "genres": [
                                "动作",
                                "科幻",
                                "惊悚"
                            ],
                            "title": "生化危机6：终章",
                            "casts": [
                                {
                                    "alt": "https://movie.douban.com/celebrity/1025154/",
                                    "avatars": {
                                        "small": "https://img3.doubanio.com/img/celebrity/small/2431.jpg",
                                        "large": "https://img3.doubanio.com/img/celebrity/large/2431.jpg",
                                        "medium": "https://img3.doubanio.com/img/celebrity/medium/2431.jpg"
                                    },
                                    "name": "米拉·乔沃维奇",
                                    "id": "1025154"
                                },
                                {
                                    "alt": "https://movie.douban.com/celebrity/1009367/",
                                    "avatars": {
                                        "small": "https://img3.doubanio.com/img/celebrity/small/1416757467.73.jpg",
                                        "large": "https://img3.doubanio.com/img/celebrity/large/1416757467.73.jpg",
                                        "medium": "https://img3.doubanio.com/img/celebrity/medium/1416757467.73.jpg"
                                    },
                                    "name": "伊恩·格雷",
                                    "id": "1009367"
                                },
                                {
                                    "alt": "https://movie.douban.com/celebrity/1018978/",
                                    "avatars": {
                                        "small": "https://img1.doubanio.com/img/celebrity/small/187.jpg",
                                        "large": "https://img1.doubanio.com/img/celebrity/large/187.jpg",
                                        "medium": "https://img1.doubanio.com/img/celebrity/medium/187.jpg"
                                    },
                                    "name": "艾丽·拉特",
                                    "id": "1018978"
                                }
                            ],
                            "collect_count": 2350,
                            "original_title": "Resident Evil: The Final Chapter",
                            "subtype": "movie",
                            "directors": [
                                {
                                    "alt": "https://movie.douban.com/celebrity/1031921/",
                                    "avatars": {
                                        "small": "https://img1.doubanio.com/img/celebrity/small/11288.jpg",
                                        "large": "https://img1.doubanio.com/img/celebrity/large/11288.jpg",
                                        "medium": "https://img1.doubanio.com/img/celebrity/medium/11288.jpg"
                                    },
                                    "name": "保罗·安德森",
                                    "id": "1031921"
                                }
                            ],
                            "year": "2016",
                            "images": {
                                "small": "https://img1.doubanio.com/view/movie_poster_cover/ipst/public/p2410287487.jpg",
                                "large": "https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2410287487.jpg",
                                "medium": "https://img1.doubanio.com/view/movie_poster_cover/spst/public/p2410287487.jpg"
                            },
                            "alt": "https://movie.douban.com/subject/20471852/",
                            "id": "20471852"
                        },
                        {
                            "rating": {
                                "max": 10,
                                "average": 7.9,
                                "stars": "40",
                                "min": 0
                            },
                            "genres": [
                                "喜剧",
                                "动画",
                                "歌舞"
                            ],
                            "title": "欢乐好声音",
                            "casts": [
                                {
                                    "alt": "https://movie.douban.com/celebrity/1040511/",
                                    "avatars": {
                                        "small": "https://img3.doubanio.com/img/celebrity/small/1392653727.04.jpg",
                                        "large": "https://img3.doubanio.com/img/celebrity/large/1392653727.04.jpg",
                                        "medium": "https://img3.doubanio.com/img/celebrity/medium/1392653727.04.jpg"
                                    },
                                    "name": "马修·麦康纳",
                                    "id": "1040511"
                                },
                                {
                                    "alt": "https://movie.douban.com/celebrity/1031217/",
                                    "avatars": {
                                        "small": "https://img1.doubanio.com/img/celebrity/small/49827.jpg",
                                        "large": "https://img1.doubanio.com/img/celebrity/large/49827.jpg",
                                        "medium": "https://img1.doubanio.com/img/celebrity/medium/49827.jpg"
                                    },
                                    "name": "瑞茜·威瑟斯彭",
                                    "id": "1031217"
                                },
                                {
                                    "alt": "https://movie.douban.com/celebrity/1041123/",
                                    "avatars": {
                                        "small": "https://img3.doubanio.com/img/celebrity/small/1354381657.24.jpg",
                                        "large": "https://img3.doubanio.com/img/celebrity/large/1354381657.24.jpg",
                                        "medium": "https://img3.doubanio.com/img/celebrity/medium/1354381657.24.jpg"
                                    },
                                    "name": "塞思·麦克法兰",
                                    "id": "1041123"
                                }
                            ],
                            "collect_count": 2469,
                            "original_title": "Sing",
                            "subtype": "movie",
                            "directors": [
                                {
                                    "alt": "https://movie.douban.com/celebrity/1303814/",
                                    "avatars": {
                                        "small": "https://img1.doubanio.com/img/celebrity/small/21808.jpg",
                                        "large": "https://img1.doubanio.com/img/celebrity/large/21808.jpg",
                                        "medium": "https://img1.doubanio.com/img/celebrity/medium/21808.jpg"
                                    },
                                    "name": "加斯·詹宁斯",
                                    "id": "1303814"
                                },
                                {
                                    "alt": "https://movie.douban.com/celebrity/1366253/",
                                    "avatars": {
                                        "small": "https://img1.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
                                        "large": "https://img3.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
                                        "medium": "https://img1.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
                                    },
                                    "name": "克里斯托夫·卢尔德莱",
                                    "id": "1366253"
                                }
                            ],
                            "year": "2016",
                            "images": {
                                "small": "https://img5.doubanio.com/view/movie_poster_cover/ipst/public/p2411622136.jpg",
                                "large": "https://img5.doubanio.com/view/movie_poster_cover/lpst/public/p2411622136.jpg",
                                "medium": "https://img5.doubanio.com/view/movie_poster_cover/spst/public/p2411622136.jpg"
                            },
                            "alt": "https://movie.douban.com/subject/26354572/",
                            "id": "26354572"
                        },
                        {
                            "rating": {
                                "max": 10,
                                "average": 7.6,
                                "stars": "40",
                                "min": 0
                            },
                            "genres": [
                                "剧情",
                                "科幻",
                                "动画"
                            ],
                            "title": "最终幻想15：王者之剑",
                            "casts": [
                                {
                                    "alt": "https://movie.douban.com/celebrity/1049498/",
                                    "avatars": {
                                        "small": "https://img1.doubanio.com/img/celebrity/small/1307.jpg",
                                        "large": "https://img1.doubanio.com/img/celebrity/large/1307.jpg",
                                        "medium": "https://img1.doubanio.com/img/celebrity/medium/1307.jpg"
                                    },
                                    "name": "亚伦·保尔",
                                    "id": "1049498"
                                },
                                {
                                    "alt": "https://movie.douban.com/celebrity/1002683/",
                                    "avatars": {
                                        "small": "https://img3.doubanio.com/img/celebrity/small/53.jpg",
                                        "large": "https://img3.doubanio.com/img/celebrity/large/53.jpg",
                                        "medium": "https://img3.doubanio.com/img/celebrity/medium/53.jpg"
                                    },
                                    "name": "肖恩·宾",
                                    "id": "1002683"
                                },
                                {
                                    "alt": "https://movie.douban.com/celebrity/1053571/",
                                    "avatars": {
                                        "small": "https://img1.doubanio.com/img/celebrity/small/32547.jpg",
                                        "large": "https://img1.doubanio.com/img/celebrity/large/32547.jpg",
                                        "medium": "https://img1.doubanio.com/img/celebrity/medium/32547.jpg"
                                    },
                                    "name": "琳娜·海蒂",
                                    "id": "1053571"
                                }
                            ],
                            "collect_count": 14634,
                            "original_title": "Kingsglaive Final Fantasy XV",
                            "subtype": "movie",
                            "directors": [
                                {
                                    "alt": "https://movie.douban.com/celebrity/1361966/",
                                    "avatars": {
                                        "small": "https://img1.doubanio.com/img/celebrity/small/1473126947.39.jpg",
                                        "large": "https://img1.doubanio.com/img/celebrity/large/1473126947.39.jpg",
                                        "medium": "https://img1.doubanio.com/img/celebrity/medium/1473126947.39.jpg"
                                    },
                                    "name": "野末武志",
                                    "id": "1361966"
                                }
                            ],
                            "year": "2016",
                            "images": {
                                "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2360651894.jpg",
                                "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2360651894.jpg",
                                "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2360651894.jpg"
                            },
                            "alt": "https://movie.douban.com/subject/26762709/",
                            "id": "26762709"
                        },
                        {
                            "rating": {
                                "max": 10,
                                "average": 0,
                                "stars": "00",
                                "min": 0
                            },
                            "genres": [
                                "喜剧",
                                "爱情",
                                "奇幻"
                            ],
                            "title": "完美有多美",
                            "casts": [
                                {
                                    "alt": "https://movie.douban.com/celebrity/1274290/",
                                    "avatars": {
                                        "small": "https://img3.doubanio.com/img/celebrity/small/27203.jpg",
                                        "large": "https://img3.doubanio.com/img/celebrity/large/27203.jpg",
                                        "medium": "https://img3.doubanio.com/img/celebrity/medium/27203.jpg"
                                    },
                                    "name": "姜武",
                                    "id": "1274290"
                                },
                                {
                                    "alt": "https://movie.douban.com/celebrity/1052229/",
                                    "avatars": {
                                        "small": "https://img3.doubanio.com/img/celebrity/small/2591.jpg",
                                        "large": "https://img3.doubanio.com/img/celebrity/large/2591.jpg",
                                        "medium": "https://img3.doubanio.com/img/celebrity/medium/2591.jpg"
                                    },
                                    "name": "蒋勤勤",
                                    "id": "1052229"
                                },
                                {
                                    "alt": "https://movie.douban.com/celebrity/1274530/",
                                    "avatars": {
                                        "small": "https://img1.doubanio.com/img/celebrity/small/1405392244.19.jpg",
                                        "large": "https://img1.doubanio.com/img/celebrity/large/1405392244.19.jpg",
                                        "medium": "https://img1.doubanio.com/img/celebrity/medium/1405392244.19.jpg"
                                    },
                                    "name": "李乃文",
                                    "id": "1274530"
                                }
                            ],
                            "collect_count": 63,
                            "original_title": "完美有多美",
                            "subtype": "movie",
                            "directors": [
                                {
                                    "alt": "https://movie.douban.com/celebrity/1359216/",
                                    "avatars": {
                                        "small": "https://img1.doubanio.com/img/celebrity/small/1479788543.39.jpg",
                                        "large": "https://img1.doubanio.com/img/celebrity/large/1479788543.39.jpg",
                                        "medium": "https://img1.doubanio.com/img/celebrity/medium/1479788543.39.jpg"
                                    },
                                    "name": "梁栋",
                                    "id": "1359216"
                                }
                            ],
                            "year": "2017",
                            "images": {
                                "small": "https://img1.doubanio.com/view/movie_poster_cover/ipst/public/p2397954489.jpg",
                                "large": "https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2397954489.jpg",
                                "medium": "https://img1.doubanio.com/view/movie_poster_cover/spst/public/p2397954489.jpg"
                            },
                            "alt": "https://movie.douban.com/subject/26668750/",
                            "id": "26668750"
                        },
                        {
                            "rating": {
                                "max": 10,
                                "average": 0,
                                "stars": "00",
                                "min": 0
                            },
                            "genres": [
                                "剧情",
                                "喜剧"
                            ],
                            "title": "纯洁心灵·逐梦演艺圈",
                            "casts": [
                                {
                                    "alt": "https://movie.douban.com/celebrity/1367131/",
                                    "avatars": {
                                        "small": "https://img3.doubanio.com/img/celebrity/small/1484539759.35.jpg",
                                        "large": "https://img3.doubanio.com/img/celebrity/large/1484539759.35.jpg",
                                        "medium": "https://img3.doubanio.com/img/celebrity/medium/1484539759.35.jpg"
                                    },
                                    "name": "朱哲健",
                                    "id": "1367131"
                                },
                                {
                                    "alt": "https://movie.douban.com/celebrity/1367133/",
                                    "avatars": {
                                        "small": "https://img1.doubanio.com/img/celebrity/small/1484539865.37.jpg",
                                        "large": "https://img1.doubanio.com/img/celebrity/large/1484539865.37.jpg",
                                        "medium": "https://img1.doubanio.com/img/celebrity/medium/1484539865.37.jpg"
                                    },
                                    "name": "李彦漫",
                                    "id": "1367133"
                                },
                                {
                                    "alt": "https://movie.douban.com/celebrity/1367135/",
                                    "avatars": {
                                        "small": "https://img1.doubanio.com/img/celebrity/small/1484540049.68.jpg",
                                        "large": "https://img1.doubanio.com/img/celebrity/large/1484540049.68.jpg",
                                        "medium": "https://img1.doubanio.com/img/celebrity/medium/1484540049.68.jpg"
                                    },
                                    "name": "陈思瀚",
                                    "id": "1367135"
                                }
                            ],
                            "collect_count": 186,
                            "original_title": "纯洁心灵·逐梦演艺圈",
                            "subtype": "movie",
                            "directors": [
                                {
                                    "alt": "https://movie.douban.com/celebrity/1367130/",
                                    "avatars": {
                                        "small": "https://img1.doubanio.com/img/celebrity/small/1484539639.17.jpg",
                                        "large": "https://img1.doubanio.com/img/celebrity/large/1484539639.17.jpg",
                                        "medium": "https://img1.doubanio.com/img/celebrity/medium/1484539639.17.jpg"
                                    },
                                    "name": "毕志飞",
                                    "id": "1367130"
                                }
                            ],
                            "year": "2017",
                            "images": {
                                "small": "https://img1.doubanio.com/view/movie_poster_cover/ipst/public/p2411086547.jpg",
                                "large": "https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2411086547.jpg",
                                "medium": "https://img1.doubanio.com/view/movie_poster_cover/spst/public/p2411086547.jpg"
                            },
                            "alt": "https://movie.douban.com/subject/26322774/",
                            "id": "26322774"
                        },
                        {
                            "rating": {
                                "max": 10,
                                "average": 0,
                                "stars": "00",
                                "min": 0
                            },
                            "genres": [
                                "喜剧",
                                "爱情",
                                "奇幻"
                            ],
                            "title": "来自月亮的我",
                            "casts": [
                                {
                                    "alt": "https://movie.douban.com/celebrity/1315130/",
                                    "avatars": {
                                        "small": "https://img1.doubanio.com/img/celebrity/small/1470567126.48.jpg",
                                        "large": "https://img1.doubanio.com/img/celebrity/large/1470567126.48.jpg",
                                        "medium": "https://img1.doubanio.com/img/celebrity/medium/1470567126.48.jpg"
                                    },
                                    "name": "夏嘉伟",
                                    "id": "1315130"
                                },
                                {
                                    "alt": "https://movie.douban.com/celebrity/1274654/",
                                    "avatars": {
                                        "small": "https://img3.doubanio.com/img/celebrity/small/5972.jpg",
                                        "large": "https://img3.doubanio.com/img/celebrity/large/5972.jpg",
                                        "medium": "https://img3.doubanio.com/img/celebrity/medium/5972.jpg"
                                    },
                                    "name": "洪剑涛",
                                    "id": "1274654"
                                },
                                {
                                    "alt": null,
                                    "avatars": null,
                                    "name": "徐静轩",
                                    "id": null
                                }
                            ],
                            "collect_count": 8,
                            "original_title": "来自月亮的我",
                            "subtype": "movie",
                            "directors": [
                                {
                                    "alt": "https://movie.douban.com/celebrity/1315130/",
                                    "avatars": {
                                        "small": "https://img1.doubanio.com/img/celebrity/small/1470567126.48.jpg",
                                        "large": "https://img1.doubanio.com/img/celebrity/large/1470567126.48.jpg",
                                        "medium": "https://img1.doubanio.com/img/celebrity/medium/1470567126.48.jpg"
                                    },
                                    "name": "夏嘉伟",
                                    "id": "1315130"
                                }
                            ],
                            "year": "2017",
                            "images": {
                                "small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2413583621.jpg",
                                "large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2413583621.jpg",
                                "medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2413583621.jpg"
                            },
                            "alt": "https://movie.douban.com/subject/26952566/",
                            "id": "26952566"
                        }
                    ],
                    "title": "即将上映的电影"
                }
                resolve(data)
            },2000)
            // 真实数据请求
            /*fetch(url).then((res)=>{
                if(res.ok){
                    return res.json()
                }else{
                    console.error('服务器繁忙，请稍后再试；\r\nCode:' + response.status)
                }
            }).catchthen((data) => {
                resolve(data)
            })
            .catch((err)=> {
                reject(err)
            }) */   
        })
    }
}