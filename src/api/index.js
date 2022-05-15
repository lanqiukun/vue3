import request from '../service/request'

export const getHomepage = params => {
    return request({
        method: 'get',
        url: '/homepage',
        params,
    })
}