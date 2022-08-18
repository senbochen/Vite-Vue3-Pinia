import { request } from '@/serve/index'

const prefix = '/web-oms'

// 获取公告状态
export const announceSendStatus = () => request({
  url: prefix + '/openapi/enum/announceSendStatus',
  method: 'GET'
})



// 获取所选组织岗位
export const getOrgPost = (params: Record<string, any>) => request({
  url: prefix + '/security/sysAnnounce/queryPositionByOrgIds',
  method: 'GET',
  params
})
