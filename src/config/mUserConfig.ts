/**
 * 用户信息操作列表
 */
export type MUserList = {
    /** 下标 */
    id:number,
    /** 标题 */
    title:string,
    /** 跳转地址 */
    url:string,
    /** 是否显示 */
    isShow:boolean
}
export type MUserConfig = Array<MUserList>
const mUserConfig : MUserConfig = [
    {
        id:1,
        title:'历史记录',
        url:'',
        isShow:true
    },{
        id:2,
        title:'收藏',
        url:'',
        isShow:true
    },{
        id:3,
        title:'订单中心',
        url:'',
        isShow:true
    },{
        id:4,
        title:'地址管理',
        url:'',
        isShow:false
    },{
        id:5,
        title:'我的订阅',
        url:'',
        isShow:true
    },
    {
        id:6,
        title:'常见问题',
        url:'',
        isShow:false
    },{
        id:7,
        title:'设置',
        url:'',
        isShow:false
    },
    {
        id:8,
        title:'客服',
        url:'',
        isShow:true
    }
]
export default mUserConfig;