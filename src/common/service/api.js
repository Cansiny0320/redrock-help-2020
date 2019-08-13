import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import JwtService from "@/common/service/jwt";
import { API_URL } from "@/common/config";

const ApiService = {
  init () {
    Vue.use(VueAxios, axios)
    Vue.axios.defaults.baseURL = API_URL
    this.setHeader()
  },

  setHeader () {
    Vue.axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${JwtService.getToken()}`;
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
    return ApiService.get(`search/questions?content=${q}`)
  }
}

export const QuestionService = {
  hot (page = 1) {
    return ApiService.get(`questions?pageNo=${page}`)
  },
  new (page = 1) {
    return ApiService.get(`questions?pageNo=${page}&sortby=new`)
  },
  tag (tagId, page = 1) {
    return ApiService.get(`questions/tag?tagId=${tagId}&pageNo=${page}`)
  },
  get (questionId) {
    return ApiService.get(`questions/id?id=${questionId}`)
  },
  solve (questionId, params) {
    return ApiService.patch(`questions/${questionId}`, params)
  },
  delete (questionId) {
    return ApiService.delete(`questions?id=${questionId}`)
  },
  post(params) {
    return ApiService.post(`questions`, params)
  }
}

export const AnswerService = {
  approval (answerId) {
    return ApiService.get(`attitude/agree?ansId=${answerId}`)
  },
  oppose (answerId) {
    return ApiService.get(`attitude/disagree?ansId=${answerId}`)
  },
  delete (answerId) {
    return ApiService.post(`answer/questions/deleteanswer?ansId=${answerId}`)
  },
  post (questionId, params) {
    return ApiService.post(`answer/questions/answer?queId=${questionId}`, params)
  }
}

export const ProfileService = {
  identify () {
    return ApiService.get(`user/info`)
  },
  getAllAnswer () {
    return ApiService.get(`user/answers`)
  },
  getApprovalAnswer () {
    return ApiService.get(`user/answers?status=approval`)
  },
  getOpposeAnswer () {
    return ApiService.get(`user/answers?status=oppose`)
  },
  getQustion () {
    return ApiService.get(`/user/questions`)
  },
}


export const TagService = {
  hot () {
    return ApiService.get(`tags/hot`)
  }
}