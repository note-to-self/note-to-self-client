export const getToken = state => { 
  console.log(state.session.token);
  state.session.token; };
export const getName = state => state.session.name;
export const getEmail = state => state.session.email;
export const getPassword = state => state.session.password;
export const getPhone = state => state.session.phone;
