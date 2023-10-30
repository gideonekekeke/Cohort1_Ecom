import cloud, {v2} from "cloudinary"
const cloudinary:typeof v2 = cloud.v2

cloudinary.config({
    cloud_name:"ddx3du70j",
    api_key:"586231672886349",
    api_secret:"cHVpP223D9ODuu3739nna4hSxRQ"
})

export default cloudinary