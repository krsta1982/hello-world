const request = require('request-promise');
const TestData = require('../../util/test_data')

class Page {
  constructor (world) {
    this.browser = world.browser
    this.logger = world.logger
    this.page = world.page
  }

  async open (relativeUrl) {
    // TODO: find out why it wont start maximized
    // await this.browser.windowHandleMaximize()
    await this.browser.url(`${TestData.getBaseUrl()}/${relativeUrl}`)
  }

  async connect_external_user_api_call (account) {
    // return res.body  
    return await this.api_call('api/user/connectExternal', [["email"],[account]])
  }

  async api_call (api_uri, items, list_name = "") {

    let api_url = TestData.data.api_url
    let api_user = TestData.data.api_user            
    let api_pass = TestData.data.api_pass
    let res;
    let a_str;
    let count;

    // test if a call has a list
    if ("" != list_name) {
        // A call with a list        
        a_str = '{"' + list_name + '": [{'
        // a_str = '{"" : [{'
        count = items[0].length
        for(let i=0; i < count-1; i++) {
            a_str += ' "'+items[0][i]+'": "'+items[1][i]+'",'
        }
        a_str += ' "'+items[0][count-1]+'": "'+items[1][count-1]+'" }]}'
    }
    else {
        // A call without a list
        a_str = '{'
        count = items[0].length
        for(let i=0; i < count-1; i++) {
            a_str += ' "'+items[0][i]+'": "'+items[1][i]+'",'
        }
        a_str += ' "'+items[0][count-1]+'": "'+items[1][count-1]+'" }'
    }

    console.log(a_str);
    let api_body = JSON.parse(a_str);

    try {
        res = await request({
            url: api_url + 'api/oauth/token',
            method: 'POST',
            auth: {
                user: api_user,
                pass: api_pass
            },
            form: {
                'grant_type': 'client_credentials'
            }
        });
    } catch(err) {
        console.log("*** Access Token call ERR ***", err.response.data);
    }  
    
    // console.log(res); 
    var json = JSON.parse(res);
    console.log("API Access Token: ", json.access_token);

    try {
        res = await request({
            url: api_url + api_uri,
            resolveWithFullResponse: true,
            method: 'POST',
            auth: {
                'bearer': json.access_token
            },
            body: api_body,
            json: true
        });
    } catch(err) {
        console.log("*** API call ERR: " + api_uri + " ***", err.response.data);
    }  
    
    console.log(res.statusCode); 
    if (res.body) {
        console.log(res.body);
        return res.body;
    }
  }

}

module.exports = Page
