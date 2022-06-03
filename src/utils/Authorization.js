import {environment} from '../environment';


const Authorization = {
  headers: {
    "Authorization": environment.authorization,
  },
};
export default Authorization;
