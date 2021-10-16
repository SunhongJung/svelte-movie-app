exports.handler = async function(event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify({
            name : 'sunhong',
            age : 45,
            email : 'sunhong.jung@gmail.com'
        })
    }
}