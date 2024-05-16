const backendDomain =  "http://localhost:8080"

const summaryApi = {
    register : {
        url : `${backendDomain}/api/register`,
        method : 'POST'
    },
    login : {
        url : `${backendDomain}/api/login`,
        method : 'POST'
    },
    userDetails : {
        url : `${backendDomain}/api/user-details`,
        method : 'GET'
    }
}
export default summaryApi

