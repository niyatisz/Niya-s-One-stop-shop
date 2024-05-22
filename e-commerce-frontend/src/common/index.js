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
    },
    logout: {
        url : `${backendDomain}/api/logout`,
        method : 'GET'
    },
    allUser : {
        url : `${backendDomain}/api/all-users`,
        method : 'GET'
    },
    updateUser : {
        url : `${backendDomain}/api/update-user`,
        method : 'POST'
    },
    deleteUser : {
        url : `${backendDomain}/api/delete-user`,
        method : 'DELETE'
    },
    uploadProduct : {
        url : `${backendDomain}/api/upload-product`,
        method : 'POST'
    },
    getAllProducts : {
        url : `${backendDomain}/api/get-all-products`,
        method : 'GET'
    },
    updateProduct : {
        url : `${backendDomain}/api/update-product`,
        method : 'POST'
    },
    deleteProduct : {
        url : `${backendDomain}/api/delete-product`,
        method : 'DELETE'
    }
}
export default summaryApi

