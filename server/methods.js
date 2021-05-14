Meteor.methods({

  async 'testClick'(url) {
    return await fetch(url,{
    }).then(res => {
      // console.log('res', res);
      // 200, OK, header
      console.log(res.status, res.statusText, res.headers);
      return res.headers;
    }).catch(err => {
      console.log('err', err);
    });
  },
})
