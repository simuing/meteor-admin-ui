import cheerio from 'cheerio';
import got from 'got';

Meteor.methods({

  async 'testClick'(url) {

    // 'https://story.pxd.co.kr/1516';
    // 'https://www.naver.com'

    // const uri = 'http://api2.redprinting.co.kr'
    const uri = 'https://story.pxd.co.kr/1516';
    // const uri = url

    /////////////////////////////////////
    
    let returnObj = {
      code: '',
      type: 'others',
      imageUrl: ''
    };

    const { statusCode, headers, body } = await got(uri).then(res => {
      return res
    }).catch(err => {
      const result = {
        code: 500,
        message: 'URL 불러오기 실패!'
      }
      throw new Meteor.Error(result.code, result.message);
    });

    
    if (statusCode === 200) {
      const contentType = headers['content-type'];
      if (contentType.includes('image')) {
        returnObj.type = 'image';
        returnObj.imageUrl = uri
      } else {
        const tag = cheerio.load(body)("meta[property='og:image']").get()[0]?.attribs?.content;
        if (tag) {
          returnObj.type = 'image';
          returnObj.imageUrl = tag;
        }
      }
    }

    console.log('status', statusCode);
    console.log('he', headers['content-type']);
    

    return returnObj;
  },
})
