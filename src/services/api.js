import axios from 'axios';

export const Api = axios.create({
    baseURL: 'https://vhztfrwuvk3imsk5ulvcvcl5i40zuyxk.lambda-url.sa-east-1.on.aws'
});