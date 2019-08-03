import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import JwtService from "@/common/service/jwt";
import { API_URL } from "@/common/config";

const ApiService = {
  init () {
    Vue.use(VueAxios, axios)
    Vue.axios.defaults.baseURL = API_URL
  },

  setHeader () {
    Vue.axios.defaults.headers.common[
      "Authorization"
    ] = `Token ${JwtService.getToken()}`;
  },
  
  get (resource) {
    return Vue.axios.get(resource).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },

  post (resource, params) {
    return Vue.axios.post(`${resource}`, params);
  },

  patch (resource, params) {
    return Vue.axios.patch(resource, params);
  },

  put (resource, params) {
    return Vue.axios.put(resource, params);
  },

  delete (resource) {
    return Vue.axios.delete(resource).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  }
};

export default ApiService;

export const SearchService = {
  hot () {
    return ApiService.get(`search/hot`)
  },
  search (q) {
    return ApiService.get(`search/questions?q=${q}`)
  }
}

export const QuestionService = {
  hot () {
    return ApiService.get(`questions`)
  },
  new () {
    return ApiService.get(`questions?sortby=new`)
  },
  tag (tagId) {
    return ApiService.get(`questions/tag/${tagId}`)
  },
  get (questionId) {
    return ApiService.get(`questions/${questionId}/answer`)
  },
  solve (questionId, params) {
    return ApiService.patch(`questions/${questionId}`, params)
  },
  approval (answerId) {
    return ApiService.get(`questions`)
  },
  oppose (answerId) {
    return ApiService.get(`questions`)
  }
}

export const ProfileService = {
  identify () {
    return ApiService.get(`user`)
  }
}


export const TagService = {
  hot () {
    return ApiService.get(`tags/hot`)
  }
}