import axios from "axios";

let baseUrl = "http://localhost:3200/"

export default class FetchData{
    static async getData(location){
        return await axios.get(baseUrl+location)
    }
    static async addData(location,data){
         data = {"backet":data}  //! db.json'da backet obyekti daxilində backet obyekti açılır hər dəfə eyni yerə əlavə etsin deyə (key = "backet")

        return await axios.patch(baseUrl+location,data)
    }
    

}