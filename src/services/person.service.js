import {Api} from "./api";

class PersonService {
    async getById(id) {
        try {
            let {data} = await Api.get(`/person/${id}`);
            return data.data;
        } catch {
            return null;
        }
    }

    async getAll() {
        try {
            let {data} = await Api.get(`/person`);
            return data.data;
        } catch {
            return null;
        }
    }

    async create(person) {
        try {
            let response = await Api.post(`/person`, person);
            return response.data;
        } catch {
            return null;
        }
    }

    async update(person) {
        try {
            let response = await Api.put(`/person`, person);
            return response.data;
        } catch {
            return null;
        }
    }

    async delete(person) {
        try {
            await Api.delete(`/person`);
        } catch {
            return null;
        }
    }
}


export default PersonService;
