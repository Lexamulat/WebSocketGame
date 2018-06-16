import io from 'socket.io-client'

var ioConn = io.connect("http://95.213.199.182:9999/")


export default ioConn