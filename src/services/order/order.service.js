import { axiosClassic } from "../../api/interceptors";
import { API_URL, getOrderUrl } from "../../config/api.config";
export const orderService = {
  async create(data) {
    const response = await axiosClassic.post(
      `${API_URL}${getOrderUrl("/create")}`,
      data
    );
    return response;
  },
  async getAll(){
    return axiosClassic.get(getOrderUrl(''))
  },

  async getById(_id) {
    return axiosClassic.get(getOrderUrl(`/${_id}`));
  },
};
