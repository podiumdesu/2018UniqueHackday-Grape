const request = require("request-promise")
// {
//     "uploadScript": {
//       "content": "21680",
//       "id": "bangumiUpdate"
//     },
//     "info": {
//       "name": "ggg"
//     }
//   }


// {
//     "upSubmit": {
//       "content": "4377887",
//       "id": "upSubmit"
//     },
//     "info": {
//       "name": "ggg"
//     }
//   }
const BuploadAPI = {
  "version": "https://jsonfeed.org/version/1",
  "title": "DIYgod 的 bilibili 空间",
  "home_page_url": "https://space.bilibili.com/2267573",
  "description": "DIYgod 的 bilibili 空间 - 使用 RSSHub(https://github.com/DIYgod/RSSHub) 构建",
  "author": {
      "name": "RSSHub"
  },
  "items": [{
      "id": "https://www.bilibili.com/video/av18682336",
      "url": "https://www.bilibili.com/video/av18682336",
      "author": {
          "name": "",
      },
      "external_url": "",
      "title": "【黑屏弹幕】Bad Apple!! - Powered by BAS",
      "content_html": "",
      "content_text": "",
      "summary": "纯弹幕作品 - Powered by BASBAS 高级弹幕演示视频&#60;br&#62;&#60;img referrerpolicy=&#34;no-referrer&#34; src=&#34;//i1.hdslb.com/bfs/archive/6666e4db2fa10d99cf0613ca569450298aad7c3d.jpg&#34;&#62;",
      "image": "",
      "banner_image": "",
      "date_published": "Wed, 24 Jan 2018 11:31:54 GMT",
      "date_modified": "",
      "tags": [],
      "attachments": []
  }, {
      "id": "https://www.bilibili.com/video/av16378993",
      "url": "https://www.bilibili.com/video/av16378993",
      "author": {
          "name": "",
      },
      "external_url": "",
      "title": "【一小时纯音乐】Re：从零开始的异世界生活 OST OP ED -  The Soul of Wind",
      "content_html": "",
      "content_text": "",
      "summary": "https://www.youtube.com/watch?v=hABpBeyoBHIRe:Zero OST, OP and ED mix&#60;br&#62;&#60;img referrerpolicy=&#34;no-referrer&#34; src=&#34;//i1.hdslb.com/bfs/archive/6e2b9a00aecaa37de446b4256c48f74c11d3f17b.jpg&#34;&#62;",
      "image": "",
      "banner_image": "",
      "date_published": "Thu, 16 Nov 2017 09:38:37 GMT",
      "date_modified": "",
      "tags": [],
      "attachments": []
  }]
}

const biliUpUid = '2267573'
request(`https://rsshub.app/bilibili/user/video/${biliUpUid}.json`)
    .then(function(body) {
        console.log(typeof(body))
        var json = eval("(" + body + ")");
        console.log(json.items)
    })
// request(`https://rsshub.app/bilibili/user/video/${biliUpUid}.json`)
//     .then(function())

// const biliUpUid = '2267573'
// function getBiliUpUpload(biliUpUid, callback) {
//   return new Promise((resolve, reject) => {
//     request(`https://rsshub.app/bilibili/user/video/${biliUpUid}.json`)
//         .then()
// })
// }

// console.log(getBiliUpUpload(biliUpUid).then())
// r = requests.get(bilibiliUploadRssApi, headers=headers)
// console.log(r.json())

// console.log(bilibiliUploadRssApi)
// const fs=require('fs');
// const file= bilibiliUploadRssApi
// const result=JSON.parse(fs.readFileSync(file));
// console.log(result)
