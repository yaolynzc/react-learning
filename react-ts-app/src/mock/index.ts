import Mock from "mockjs";
import "./employee";

// Mock扩展生成手机号码方法
Mock.Random.extend({
  phone() {
    // 自己随便写前缀
    const phonePrefixs = ["135", "189", "186"];
    // 使用pick 随机返回前缀
    return this.pick(phonePrefixs) + Mock.mock(/\d{8}/);
  },
});

Mock.Random.extend({
  getQuery(url, name) {
    console.log(url); //  /api/get/news?pageindex=1&pagesize=10
    const index = url.indexOf("?");
    console.log(index); //13
    if (index !== -1) {
      const queryStrArr = url.substr(index + 1).split("&");
      console.log(queryStrArr);

      for (var i = 0; i < queryStrArr.length; i++) {
        const itemArr = queryStrArr[i].split("=");
        console.log(itemArr);
        if (itemArr[0] === name) {
          return itemArr[1];
        }
      }
    }
    return null;
  },
});

// export default Mock;
