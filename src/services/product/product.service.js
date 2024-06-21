import { axiosClassic } from "../../api/interceptors";
import { API_URL, getProductUrl } from "../../config/api.config";
export const ProductService = {
  async create(data) {
    const response = await axiosClassic.post(
      `${API_URL}${getProductUrl("/create")}`,
      data
    );
    return response;
  },
  async getAll(){
    return axiosClassic.get(getProductUrl(''))
  },

  async getById(_id) {
    return axiosClassic.get(getProductUrl(`/${_id}`));
  },
};
