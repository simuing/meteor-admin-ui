import cheerio from 'cheerio';
import got from 'got';

Meteor.methods({

  async 'testClick'(url) {
    
    // 'https://story.pxd.co.kr/1516';
    // 'https://www.naver.com'
    
    const uri = 'https://story.pxd.co.kr/1516';

    const ogTagImage = await got(uri).then(res => {
      const $ = cheerio.load(res.body);
      const result = $("meta[property='og:image']").get()[0]?.attribs?.content;
      return {
        isValid: result ? true : false,
        imageUrl: result
      }

    }).catch(err => {
      console.log(`can't get url: ${err}`);
      // error type 정의 따로 만들기
      const result = {
        code: 500,
        message: 'URL 불러오기 실패'
      }
      throw new Meteor.Error(result.code, result.message);
    });

    return ogTagImage;
  },
})
