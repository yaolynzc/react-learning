import Mock, { Random } from 'mockjs';

// 数据列表
const DataList: any[] = [];
const InitCount = 100;

// 生成数据
const genDataObject = () => {
    return {
        id: Random.guid(), // 唯一编号
        name: Random.cname(), // 姓名
        department: Random.csentence(4), // 部门
        hiredate: Random.now('day'), // 入职日期
        level: Random.integer(1, 10), // 职级
    };
};

// 初始化数据
const initDataList = () => {
    if (DataList.length === 0) {
        for (let index = 0; index < InitCount; index++) {
            DataList.push(genDataObject());
        }
    }
};

// 数据列表
const mockList = (realName, pageIndex, pageSize = 20) => {
    // 生成数据
    initDataList();
    let dataList: any = [];

    // 查询全部
    if (!realName) {
        dataList = DataList.concat();
    } else {
        // 模糊匹配查询
        dataList = DataList.filter((item) => item.realName.includes(realName));
    }
    // 记录总数
    const dataTotal = dataList.length;
    // 对查询结果做最后分页处理
    if (dataList.length && (pageIndex - 1) * pageSize < dataList.length) {
        dataList = dataList.slice((pageIndex - 1) * pageSize, pageIndex * pageSize).concat();
    }

    return {
        total: dataTotal,
        data: dataList,
    };
};

// 查询
// const mockSelect = (id) => {
//     return DataList.find((item) => item.id === id);
// };

// 编辑
// const mockAdd = (id, title, coursewareItems, questionItems) => {
//     const findData = mockSelect(id);
//     if (findData) {
//         findData.title = title;
//         findData.coursewareItems = coursewareItems;
//         findData.questionItems = questionItems;
//         return findData;
//     } else {
//         const newUser = {
//             ...genDataObject,
//             title,
//             coursewareItems,
//             questionItems,
//         };
//         DataList.push(newUser);
//         return newUser;
//     }
// };

// 删除
// const mockDelete = (id) => {
//     const findDataIndex = DataList.findIndex((item) => item.id === id);
//     if (findDataIndex > -1) {
//         DataList.splice(findDataIndex, 1);
//     }
//     return {
//         id,
//     };
// };

// 列表
Mock.mock(/\/api\/employee\/getEmployee.action/, 'get', (req, res) => {
    console.log('get-res', Random.getQuery(req.url))
    // const { userName, pageSize, currentPage } = JSON.parse(req.body);
    return mockList('', 1);
});

// 删除-url正则匹配
// Mock.mock(/\/api\/salesman\/delete/, 'post', (req, res) => {
//     let { id } = JSON.parse(req.body);
//     // 从url中delete后面提取id（restfull风格查询）
//     const urlArrs = req.url.split('/delete/');
//     if (urlArrs.length === 2 && urlArrs[1]) {
//         id = urlArrs[1];
//     }
//     return mockDelete(id);
// });
