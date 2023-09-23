export const BASE_URL = "http://localhost:8080/api/auth/";
export const BASE_MINERAR = 'http://localhost:8080/api/mineracao/generate/leads/by-id?id=1';

export const TOKEN_POST = ( body ) => {
  return {
    url: BASE_URL + 'signin',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify( body )
    }
  }
}

export const TOKEN_VALIDATE_POST = ( token ) => {
  return {
    url: BASE_URL + 'signin',
    options: {
      method: "POST",
      Authorization: 'Bearer ' + token,
    }
  }
}

export const USER_GET = ( body ) => {
  return {
    url: BASE_URL + 'signin',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify( body )
    }
  }
}

export const USER_POST = ( body ) => {
  return {
    url: BASE_URL + 'signup',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify( body )
    }
  }
}