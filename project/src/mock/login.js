import Mock from 'mockjs'


export default Mock.mock('/api/login','post',{
    code:0,
    data:{
        username:"11111",
    }
})